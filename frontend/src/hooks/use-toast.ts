import { useState, useCallback } from 'react';

export interface Toast {
    id: string;
    title?: string;
    description?: string;
    variant?: 'default' | 'destructive';
    duration?: number;
}

const toasts: Toast[] = [];
const listeners: Array<() => void> = [];

let toastIdCounter = 0;

const genId = () => {
    toastIdCounter = (toastIdCounter + 1) % Number.MAX_SAFE_INTEGER;
    return toastIdCounter.toString();
};

const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = genId();
    const newToast = { id, ...toast };
    toasts.push(newToast);
    listeners.forEach(listener => listener());

    // Auto remove after duration
    const duration = toast.duration || 5000;
    setTimeout(() => {
        removeToast(id);
    }, duration);

    return id;
};

const removeToast = (id: string) => {
    const index = toasts.findIndex(toast => toast.id === id);
    if (index > -1) {
        toasts.splice(index, 1);
        listeners.forEach(listener => listener());
    }
};

export const useToast = () => {
    const [, forceUpdate] = useState({});

    const addListener = useCallback(() => {
        const listener = () => forceUpdate({});
        listeners.push(listener);

        return () => {
            const index = listeners.indexOf(listener);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, []);

    const toast = useCallback((toast: Omit<Toast, 'id'>) => {
        return addToast(toast);
    }, []);

    const dismiss = useCallback((id: string) => {
        removeToast(id);
    }, []);

    return {
        toast,
        dismiss,
        toasts: [...toasts],
        addListener
    };
};
