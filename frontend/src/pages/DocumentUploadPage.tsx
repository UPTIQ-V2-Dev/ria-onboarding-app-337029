import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { FormLayout } from '@/components/layouts/FormLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Upload, File, CheckCircle, Clock, AlertCircle, X, FileText } from 'lucide-react';
import { getDocumentTypes, uploadDocument, getClientDocuments, updateOnboardingStep } from '@/services/onboarding';
import type { DocumentType } from '@/types/onboarding';

interface FileWithProgress extends File {
    progress?: number;
    documentTypeId?: string;
    error?: string;
}

const statusIcons = {
    pending: Clock,
    approved: CheckCircle,
    rejected: AlertCircle
};

const statusColors = {
    pending: 'bg-yellow-500',
    approved: 'bg-green-500',
    rejected: 'bg-red-500'
};

export const DocumentUploadPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const clientId = searchParams.get('clientId');
    const [selectedFiles, setSelectedFiles] = useState<FileWithProgress[]>([]);
    const queryClient = useQueryClient();

    const { data: documentTypes = [], isLoading: isLoadingTypes } = useQuery({
        queryKey: ['documentTypes'],
        queryFn: getDocumentTypes
    });

    const { data: clientDocuments = [], isLoading: isLoadingDocuments } = useQuery({
        queryKey: ['clientDocuments', clientId],
        queryFn: () => getClientDocuments(clientId!),
        enabled: !!clientId
    });

    const uploadMutation = useMutation({
        mutationFn: async ({ file, documentTypeId }: { file: File; documentTypeId: string }) => {
            return await uploadDocument(clientId!, documentTypeId, file);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['clientDocuments'] });
            setSelectedFiles([]);
        }
    });

    const updateStepMutation = useMutation({
        mutationFn: updateOnboardingStep
    });

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>, documentType: DocumentType) => {
        const files = Array.from(event.target.files || []);
        const filesWithType = files.map(file => ({
            ...file,
            documentTypeId: documentType.id,
            progress: 0
        })) as FileWithProgress[];

        setSelectedFiles(prev => [...prev, ...filesWithType]);
    };

    const handleUpload = async (file: FileWithProgress) => {
        if (!file.documentTypeId) return;

        try {
            await uploadMutation.mutateAsync({
                file,
                documentTypeId: file.documentTypeId
            });
        } catch (error) {
            console.error('Upload failed:', error);
        }
    };

    const removeFile = (index: number) => {
        setSelectedFiles(prev => prev.filter((_, i) => i !== index));
    };

    const getDocumentTypeById = (id: string) => {
        return documentTypes.find(dt => dt.id === id);
    };

    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const handleContinue = async () => {
        if (!clientId) {
            alert('Client ID is required. Please start from the beginning.');
            navigate('/onboarding/client-info');
            return;
        }

        try {
            await updateStepMutation.mutateAsync({
                clientId,
                step: 5,
                data: {
                    uploadedDocuments: clientDocuments
                }
            });

            navigate(`/onboarding/compliance?clientId=${clientId}`);
        } catch (error) {
            console.error('Error updating onboarding step:', error);
        }
    };

    if (isLoadingTypes || isLoadingDocuments) {
        return (
            <FormLayout
                currentStep={5}
                title='Document Upload'
                description='Loading document requirements...'
            >
                <div className='flex items-center justify-center h-64'>
                    <div className='text-center'>
                        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4'></div>
                        <p className='text-muted-foreground'>Loading document types...</p>
                    </div>
                </div>
            </FormLayout>
        );
    }

    if (!clientId) {
        return (
            <FormLayout
                currentStep={5}
                title='Document Upload'
                description='Client ID is required to proceed.'
            >
                <Alert variant='destructive'>
                    <AlertCircle className='h-4 w-4' />
                    <AlertDescription>
                        Client ID is missing. Please start the onboarding process from the beginning.
                    </AlertDescription>
                </Alert>
                <div className='flex justify-center mt-6'>
                    <Button onClick={() => navigate('/onboarding/client-info')}>Start Over</Button>
                </div>
            </FormLayout>
        );
    }

    return (
        <FormLayout
            currentStep={5}
            title='Document Upload'
            description='Upload required documents to verify your identity and funding sources.'
        >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {/* Document Upload Section */}
                <div className='space-y-4'>
                    <h2 className='text-xl font-semibold'>Upload New Documents</h2>

                    {documentTypes.map(documentType => {
                        const existingDoc = clientDocuments.find(doc => doc.documentTypeId === documentType.id);
                        const isUploaded = existingDoc && existingDoc.status !== 'rejected';

                        return (
                            <Card
                                key={documentType.id}
                                className={isUploaded ? 'opacity-50' : ''}
                            >
                                <CardHeader className='pb-3'>
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <CardTitle className='text-sm font-medium'>
                                                {documentType.name}
                                                {documentType.required && <span className='text-red-500 ml-1'>*</span>}
                                            </CardTitle>
                                            <p className='text-xs text-muted-foreground mt-1'>
                                                {documentType.description}
                                            </p>
                                        </div>
                                        {isUploaded && (
                                            <Badge
                                                variant='outline'
                                                className='text-green-600'
                                            >
                                                Uploaded
                                            </Badge>
                                        )}
                                    </div>
                                </CardHeader>
                                <CardContent className='pt-0'>
                                    <div className='space-y-2'>
                                        <div className='text-xs text-muted-foreground'>
                                            Accepted formats: {documentType.acceptedFormats.join(', ')}
                                        </div>
                                        <div className='text-xs text-muted-foreground'>
                                            Max size: {formatFileSize(documentType.maxFileSize)}
                                        </div>
                                        {!isUploaded && (
                                            <div className='flex items-center gap-2'>
                                                <input
                                                    type='file'
                                                    id={`file-${documentType.id}`}
                                                    className='hidden'
                                                    accept={documentType.acceptedFormats.join(',')}
                                                    onChange={e => handleFileSelect(e, documentType)}
                                                />
                                                <Button
                                                    variant='outline'
                                                    size='sm'
                                                    onClick={() =>
                                                        document.getElementById(`file-${documentType.id}`)?.click()
                                                    }
                                                    className='flex items-center gap-2'
                                                >
                                                    <Upload className='h-4 w-4' />
                                                    Select File
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Selected Files and Upload Queue */}
                <div className='space-y-4'>
                    <h2 className='text-xl font-semibold'>Upload Queue</h2>

                    {selectedFiles.length === 0 ? (
                        <Card>
                            <CardContent className='flex flex-col items-center justify-center h-40 text-center'>
                                <FileText className='h-12 w-12 text-muted-foreground mb-2' />
                                <p className='text-muted-foreground'>No files selected</p>
                            </CardContent>
                        </Card>
                    ) : (
                        <Card>
                            <CardContent className='p-4'>
                                <ScrollArea className='h-80'>
                                    <div className='space-y-3'>
                                        {selectedFiles.map((file, index) => {
                                            const documentType = getDocumentTypeById(file.documentTypeId || '');

                                            return (
                                                <div
                                                    key={index}
                                                    className='flex items-center gap-3 p-3 border rounded-lg'
                                                >
                                                    <File className='h-5 w-5 text-blue-500' />
                                                    <div className='flex-1 min-w-0'>
                                                        <div className='flex items-center justify-between mb-1'>
                                                            <p className='text-sm font-medium truncate'>{file.name}</p>
                                                            <Button
                                                                variant='ghost'
                                                                size='sm'
                                                                onClick={() => removeFile(index)}
                                                                className='h-6 w-6 p-0 hover:bg-red-100'
                                                            >
                                                                <X className='h-3 w-3' />
                                                            </Button>
                                                        </div>
                                                        <p className='text-xs text-muted-foreground'>
                                                            {documentType?.name} • {formatFileSize(file.size)}
                                                        </p>
                                                        {file.progress !== undefined &&
                                                            file.progress > 0 &&
                                                            file.progress < 100 && (
                                                                <Progress
                                                                    value={file.progress}
                                                                    className='mt-2'
                                                                />
                                                            )}
                                                    </div>
                                                    <Button
                                                        size='sm'
                                                        onClick={() => handleUpload(file)}
                                                        disabled={uploadMutation.isPending}
                                                    >
                                                        Upload
                                                    </Button>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </ScrollArea>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>

            {/* Existing Documents Section */}
            {clientDocuments.length > 0 && (
                <>
                    <Separator />
                    <div>
                        <h2 className='text-xl font-semibold mb-4'>Uploaded Documents</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {clientDocuments.map(document => {
                                const StatusIcon = statusIcons[document.status];
                                const statusColor = statusColors[document.status];

                                return (
                                    <Card key={document.id}>
                                        <CardContent className='p-4'>
                                            <div className='flex items-start gap-3'>
                                                <div
                                                    className={`w-8 h-8 rounded-full ${statusColor} flex items-center justify-center flex-shrink-0`}
                                                >
                                                    <StatusIcon className='h-4 w-4 text-white' />
                                                </div>
                                                <div className='flex-1 min-w-0'>
                                                    <p className='text-sm font-medium truncate'>{document.fileName}</p>
                                                    <p className='text-xs text-muted-foreground'>
                                                        {
                                                            documentTypes.find(dt => dt.id === document.documentTypeId)
                                                                ?.name
                                                        }
                                                    </p>
                                                    <p className='text-xs text-muted-foreground'>
                                                        {formatFileSize(document.fileSize)}
                                                    </p>
                                                    <Badge
                                                        variant='outline'
                                                        className='mt-2 text-xs'
                                                    >
                                                        {document.status}
                                                    </Badge>
                                                    {document.rejectionReason && (
                                                        <p className='text-xs text-red-600 mt-1'>
                                                            {document.rejectionReason}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </>
            )}

            {/* Navigation buttons */}
            <div className='flex justify-between'>
                <Button
                    type='button'
                    variant='outline'
                    onClick={() => navigate(`/onboarding/account-setup?clientId=${clientId}`)}
                >
                    Back
                </Button>
                <Button
                    onClick={handleContinue}
                    className='px-8'
                    disabled={updateStepMutation.isPending}
                >
                    {updateStepMutation.isPending ? 'Saving...' : 'Continue to Compliance'}
                </Button>
            </div>
        </FormLayout>
    );
};
