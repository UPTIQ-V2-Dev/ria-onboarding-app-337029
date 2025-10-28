# Backend API Specification

## Database Models

```prisma
model User {
  id              Int      @id @default(autoincrement())
  email           String   @unique
  name            String?
  password        String
  role            String   @default("USER")
  isEmailVerified Boolean  @default(false)
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  tokens          Token[]
  clients         Client[]
}

model Token {
  id          Int       @id @default(autoincrement())
  token       String
  type        String
  expires     DateTime
  blacklisted Boolean
  createdAt   DateTime  @default(now())
  user        User      @relation(fields: [userId], references: [id])
  userId      Int
}

model Client {
  id           String   @id @default(cuid())
  firstName    String
  lastName     String
  email        String   @unique
  phone        String
  status       String   @default("pending")
  progress     Int      @default(0)
  riskProfile  String?
  accountValue Float?
  firmId       String
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
  user         User     @relation(fields: [userId], references: [id])
  userId       Int
}

model Activity {
  id          String   @id @default(cuid())
  type        String
  clientName  String
  description String
  timestamp   DateTime @default(now())
  clientId    String?
}

model Document {
  id              String      @id @default(cuid())
  fileName        String
  fileSize        Int
  fileType        String
  documentTypeId  String
  clientId        String
  status          String      @default("pending")
  signedUrl       String?
  uploadedAt      DateTime    @default(now())
  verifiedAt      DateTime?
  rejectionReason String?
  documentType    DocumentType @relation(fields: [documentTypeId], references: [id])
}

model DocumentType {
  id              String     @id @default(cuid())
  name            String     @unique
  description     String
  required        Boolean    @default(true)
  category        String
  acceptedFormats String[]
  maxFileSize     Int
  documents       Document[]
}

model OnboardingData {
  id                 String                 @id @default(cuid())
  clientId           String                 @unique
  personalInfo       Json
  contactInfo        Json?
  employmentInfo     Json?
  riskProfile        Json?
  investmentObjectives Json?
  financialGoals     Json[]
  selectedAccountTypes String[]
  fundingMethods     Json[]
  uploadedDocuments  Json[]
  disclosures        Json[]
  complianceRecords  Json[]
  status             String                 @default("draft")
  currentStep        Int                    @default(1)
  totalSteps         Int                    @default(7)
  submittedAt        DateTime?
  reviewedAt         DateTime?
  createdAt          DateTime               @default(now())
  updatedAt          DateTime               @updatedAt
}

model RiskAssessment {
  id                   String   @id @default(cuid())
  clientId             String   @unique
  investmentExperience String
  riskTolerance        String
  investmentTimeHorizon String
  liquidityNeeds       String
  ageRange             String
  investmentKnowledge  String
  createdAt            DateTime @default(now())
  updatedAt            DateTime @updatedAt
}

model InvestmentObjectives {
  id                  String    @id @default(cuid())
  clientId            String    @unique
  primaryGoal         String
  specificGoals       String[]
  targetAmount        Float?
  timeHorizon         Int
  monthlyContribution Float?
  riskComfort         Int
  createdAt           DateTime  @default(now())
  updatedAt           DateTime  @updatedAt
}

model AccountType {
  id             String  @id @default(cuid())
  name           String  @unique
  description    String
  taxAdvantaged  Boolean @default(false)
  minimumBalance Float   @default(0)
  annualFee      Float   @default(0)
  transactionFee Float   @default(0)
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt
}

model Disclosure {
  id        String   @id @default(cuid())
  title     String
  content   String
  required  Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model ComplianceAgreement {
  id           String    @id @default(cuid())
  clientId     String
  disclosureId String
  acknowledged Boolean   @default(false)
  acknowledgedAt DateTime?
  createdAt    DateTime  @default(now())
  updatedAt    DateTime  @updatedAt
}
```

## Authentication Endpoints

EP: POST /auth/register
DESC: Register a new user account.
IN: body:{email:str!, password:str!}
OUT: 201:{user:obj{id:int, email:str, name:str?, role:str, isEmailVerified:bool, createdAt:str, updatedAt:str}, tokens:obj{access:obj{token:str, expires:str}, refresh:obj{token:str, expires:str}}}
ERR: {"400":"Invalid input or email already exists", "422":"Password validation failed", "500":"Internal server error"}
EX_REQ: curl -X POST /auth/register -H "Content-Type: application/json" -d '{"email":"user@example.com","password":"password123"}'
EX_RES_201: {"user":{"id":1,"email":"user@example.com","name":null,"role":"USER","isEmailVerified":false,"createdAt":"2024-10-28T10:00:00Z","updatedAt":"2024-10-28T10:00:00Z"},"tokens":{"access":{"token":"eyJhbGc..","expires":"2024-10-28T10:15:00Z"},"refresh":{"token":"eyJhbGc..","expires":"2024-11-04T10:00:00Z"}}}

---

EP: POST /auth/login
DESC: Authenticate user and return access tokens.
IN: body:{email:str!, password:str!}
OUT: 200:{user:obj{id:int, email:str, name:str?, role:str, isEmailVerified:bool, createdAt:str, updatedAt:str}, tokens:obj{access:obj{token:str, expires:str}, refresh:obj{token:str, expires:str}}}
ERR: {"401":"Invalid email or password", "400":"Invalid input", "500":"Internal server error"}
EX_REQ: curl -X POST /auth/login -H "Content-Type: application/json" -d '{"email":"user@example.com","password":"password123"}'
EX_RES_200: {"user":{"id":1,"email":"user@example.com","name":"John Doe","role":"USER","isEmailVerified":true,"createdAt":"2024-10-28T10:00:00Z","updatedAt":"2024-10-28T10:00:00Z"},"tokens":{"access":{"token":"eyJhbGc..","expires":"2024-10-28T10:15:00Z"},"refresh":{"token":"eyJhbGc..","expires":"2024-11-04T10:00:00Z"}}}

---

EP: POST /auth/logout
DESC: Invalidate user refresh token and logout.
IN: body:{refreshToken:str!}
OUT: 204:{}
ERR: {"404":"Refresh token not found", "400":"Invalid refresh token", "500":"Internal server error"}
EX_REQ: curl -X POST /auth/logout -H "Content-Type: application/json" -d '{"refreshToken":"eyJhbGc.."}'
EX_RES_204: {}

---

EP: POST /auth/refresh-tokens
DESC: Generate new access and refresh tokens.
IN: body:{refreshToken:str!}
OUT: 200:{access:obj{token:str, expires:str}, refresh:obj{token:str, expires:str}}
ERR: {"401":"Invalid refresh token", "400":"Invalid input", "500":"Internal server error"}
EX_REQ: curl -X POST /auth/refresh-tokens -H "Content-Type: application/json" -d '{"refreshToken":"eyJhbGc.."}'
EX_RES_200: {"access":{"token":"eyJhbGc..","expires":"2024-10-28T10:15:00Z"},"refresh":{"token":"eyJhbGc..","expires":"2024-11-04T10:00:00Z"}}

---

EP: POST /auth/forgot-password
DESC: Send password reset email to user.
IN: body:{email:str!}
OUT: 204:{}
ERR: {"404":"Email not found", "400":"Invalid email format", "500":"Internal server error"}
EX_REQ: curl -X POST /auth/forgot-password -H "Content-Type: application/json" -d '{"email":"user@example.com"}'
EX_RES_204: {}

---

EP: POST /auth/reset-password
DESC: Reset user password using reset token.
IN: query:{token:str!}, body:{password:str!}
OUT: 204:{}
ERR: {"401":"Invalid or expired token", "400":"Invalid password format", "500":"Internal server error"}
EX_REQ: curl -X POST '/auth/reset-password?token=resetToken123' -H "Content-Type: application/json" -d '{"password":"newPassword123"}'
EX_RES_204: {}

---

EP: POST /auth/verify-email
DESC: Verify user email address using verification token.
IN: query:{token:str!}
OUT: 204:{}
ERR: {"401":"Invalid or expired token", "400":"Invalid token format", "500":"Internal server error"}
EX_REQ: curl -X POST '/auth/verify-email?token=verifyToken123'
EX_RES_204: {}

---

EP: POST /auth/send-verification-email
DESC: Send email verification link to authenticated user.
IN: headers:{Authorization:str!}
OUT: 204:{}
ERR: {"401":"Unauthorized", "500":"Internal server error"}
EX_REQ: curl -X POST /auth/send-verification-email -H "Authorization: Bearer eyJhbGc.."
EX_RES_204: {}

## User Management Endpoints

EP: POST /users
DESC: Create a new user (admin only).
IN: headers:{Authorization:str!}, body:{email:str!, password:str!, name:str!, role:str!}
OUT: 201:{id:int, email:str, name:str, role:str, isEmailVerified:bool, createdAt:str, updatedAt:str}
ERR: {"400":"Invalid input or email already exists", "401":"Unauthorized", "403":"Forbidden - admin required", "422":"Password validation failed", "500":"Internal server error"}
EX_REQ: curl -X POST /users -H "Authorization: Bearer eyJhbGc.." -H "Content-Type: application/json" -d '{"email":"newuser@example.com","password":"password123","name":"New User","role":"USER"}'
EX_RES_201: {"id":2,"email":"newuser@example.com","name":"New User","role":"USER","isEmailVerified":false,"createdAt":"2024-10-28T10:00:00Z","updatedAt":"2024-10-28T10:00:00Z"}

---

EP: GET /users
DESC: Get all users with pagination and filtering (admin only).
IN: headers:{Authorization:str!}, query:{name:str?, role:str?, sortBy:str?, limit:int?, page:int?}
OUT: 200:{results:arr[obj{id:int, email:str, name:str?, role:str, isEmailVerified:bool, createdAt:str, updatedAt:str}], page:int, limit:int, totalPages:int, totalResults:int}
ERR: {"401":"Unauthorized", "403":"Forbidden - admin required", "500":"Internal server error"}
EX_REQ: curl -X GET '/users?page=1&limit=10&role=USER' -H "Authorization: Bearer eyJhbGc.."
EX_RES_200: {"results":[{"id":1,"email":"user@example.com","name":"John Doe","role":"USER","isEmailVerified":true,"createdAt":"2024-10-28T10:00:00Z","updatedAt":"2024-10-28T10:00:00Z"}],"page":1,"limit":10,"totalPages":1,"totalResults":1}

---

EP: GET /users/{userId}
DESC: Get specific user by ID.
IN: headers:{Authorization:str!}, params:{userId:int!}
OUT: 200:{id:int, email:str, name:str?, role:str, isEmailVerified:bool, createdAt:str, updatedAt:str}
ERR: {"401":"Unauthorized", "403":"Forbidden - can only access own data", "404":"User not found", "500":"Internal server error"}
EX_REQ: curl -X GET /users/1 -H "Authorization: Bearer eyJhbGc.."
EX_RES_200: {"id":1,"email":"user@example.com","name":"John Doe","role":"USER","isEmailVerified":true,"createdAt":"2024-10-28T10:00:00Z","updatedAt":"2024-10-28T10:00:00Z"}

---

EP: PATCH /users/{userId}
DESC: Update user information.
IN: headers:{Authorization:str!}, params:{userId:int!}, body:{email:str?, password:str?, name:str?}
OUT: 200:{id:int, email:str, name:str?, role:str, isEmailVerified:bool, createdAt:str, updatedAt:str}
ERR: {"400":"Invalid input or email already exists", "401":"Unauthorized", "403":"Forbidden - can only update own data", "404":"User not found", "422":"Password validation failed", "500":"Internal server error"}
EX_REQ: curl -X PATCH /users/1 -H "Authorization: Bearer eyJhbGc.." -H "Content-Type: application/json" -d '{"name":"Updated Name"}'
EX_RES_200: {"id":1,"email":"user@example.com","name":"Updated Name","role":"USER","isEmailVerified":true,"createdAt":"2024-10-28T10:00:00Z","updatedAt":"2024-10-28T10:00:00Z"}

---

EP: DELETE /users/{userId}
DESC: Delete user account.
IN: headers:{Authorization:str!}, params:{userId:int!}
OUT: 204:{}
ERR: {"401":"Unauthorized", "403":"Forbidden - can only delete own account", "404":"User not found", "500":"Internal server error"}
EX_REQ: curl -X DELETE /users/1 -H "Authorization: Bearer eyJhbGc.."
EX_RES_204: {}

## Dashboard Endpoints

EP: GET /dashboard/stats
DESC: Get dashboard statistics and metrics.
IN: headers:{Authorization:str!}
OUT: 200:{totalClients:int, pendingOnboardings:int, completedThisMonth:int, averageCompletionTime:float, recentActivity:arr[obj{id:str, type:str, clientName:str, timestamp:str, description:str}]}
ERR: {"401":"Unauthorized", "500":"Internal server error"}
EX_REQ: curl -X GET /dashboard/stats -H "Authorization: Bearer eyJhbGc.."
EX_RES_200: {"totalClients":156,"pendingOnboardings":23,"completedThisMonth":12,"averageCompletionTime":5.2,"recentActivity":[{"id":"1","type":"client_registered","clientName":"Sarah Johnson","timestamp":"2024-10-28T14:30:00Z","description":"New client registration completed"}]}

---

EP: GET /dashboard/client-status-counts
DESC: Get client status distribution counts.
IN: headers:{Authorization:str!}
OUT: 200:arr[obj{status:str, count:int, percentage:float}]
ERR: {"401":"Unauthorized", "500":"Internal server error"}
EX_REQ: curl -X GET /dashboard/client-status-counts -H "Authorization: Bearer eyJhbGc.."
EX_RES_200: [{"status":"pending","count":23,"percentage":14.7},{"status":"in_progress","count":45,"percentage":28.8},{"status":"completed","count":78,"percentage":50.0},{"status":"rejected","count":10,"percentage":6.4}]

## Client Management Endpoints

EP: POST /clients
DESC: Create a new client record.
IN: headers:{Authorization:str!}, body:{firstName:str!, lastName:str!, email:str!, phone:str!, firmId:str!, status:str?, progress:int?, riskProfile:str?, accountValue:float?}
OUT: 201:{id:str, firstName:str, lastName:str, email:str, phone:str, status:str, createdAt:str, updatedAt:str, progress:int, riskProfile:str?, accountValue:float?, firmId:str}
ERR: {"400":"Invalid input or email already exists", "401":"Unauthorized", "422":"Validation failed", "500":"Internal server error"}
EX_REQ: curl -X POST /clients -H "Authorization: Bearer eyJhbGc.." -H "Content-Type: application/json" -d '{"firstName":"John","lastName":"Smith","email":"john.smith@email.com","phone":"+1-555-0456","firmId":"firm-1"}'
EX_RES_201: {"id":"client-789","firstName":"John","lastName":"Smith","email":"john.smith@email.com","phone":"+1-555-0456","status":"pending","createdAt":"2024-10-28T15:00:00Z","updatedAt":"2024-10-28T15:00:00Z","progress":0,"firmId":"firm-1"}

---

EP: GET /clients
DESC: Get all clients with pagination and filtering.
IN: headers:{Authorization:str!}, query:{firstName:str?, lastName:str?, email:str?, status:str?, riskProfile:str?, firmId:str?, sortBy:str?, sortType:str?, limit:int?, page:int?}
OUT: 200:{results:arr[obj{id:str, firstName:str, lastName:str, email:str, phone:str, status:str, createdAt:str, updatedAt:str, progress:int, riskProfile:str?, accountValue:float?, firmId:str}], page:int, limit:int, totalPages:int, totalResults:int}
ERR: {"401":"Unauthorized", "500":"Internal server error"}
EX_REQ: curl -X GET '/clients?page=1&limit=10&status=pending' -H "Authorization: Bearer eyJhbGc.."
EX_RES_200: {"results":[{"id":"client-789","firstName":"John","lastName":"Smith","email":"john.smith@email.com","phone":"+1-555-0456","status":"pending","createdAt":"2024-10-28T15:00:00Z","updatedAt":"2024-10-28T15:00:00Z","progress":0,"firmId":"firm-1"}],"page":1,"limit":10,"totalPages":1,"totalResults":1}

---

EP: GET /clients/recent
DESC: Get recently created or updated clients.
IN: headers:{Authorization:str!}
OUT: 200:arr[obj{id:str, firstName:str, lastName:str, email:str, phone:str, status:str, createdAt:str, updatedAt:str, progress:int, riskProfile:str?, accountValue:float?, firmId:str}]
ERR: {"401":"Unauthorized", "500":"Internal server error"}
EX_REQ: curl -X GET /clients/recent -H "Authorization: Bearer eyJhbGc.."
EX_RES_200: [{"id":"1","firstName":"Sarah","lastName":"Johnson","email":"sarah.johnson@email.com","phone":"+1-555-0123","status":"in_progress","createdAt":"2024-10-28T14:30:00Z","updatedAt":"2024-10-28T14:30:00Z","progress":65,"riskProfile":"moderate","firmId":"firm-1"}]

---

EP: GET /clients/{clientId}
DESC: Get specific client by ID.
IN: headers:{Authorization:str!}, params:{clientId:str!}
OUT: 200:{id:str, firstName:str, lastName:str, email:str, phone:str, status:str, createdAt:str, updatedAt:str, progress:int, riskProfile:str?, accountValue:float?, firmId:str}
ERR: {"401":"Unauthorized", "404":"Client not found", "403":"Forbidden - cannot access client", "500":"Internal server error"}
EX_REQ: curl -X GET /clients/client-789 -H "Authorization: Bearer eyJhbGc.."
EX_RES_200: {"id":"client-789","firstName":"John","lastName":"Smith","email":"john.smith@email.com","phone":"+1-555-0456","status":"pending","createdAt":"2024-10-28T15:00:00Z","updatedAt":"2024-10-28T15:00:00Z","progress":0,"firmId":"firm-1"}

---

EP: PATCH /clients/{clientId}
DESC: Update client information.
IN: headers:{Authorization:str!}, params:{clientId:str!}, body:{firstName:str?, lastName:str?, email:str?, phone:str?, status:str?, progress:int?, riskProfile:str?, accountValue:float?, firmId:str?}
OUT: 200:{id:str, firstName:str, lastName:str, email:str, phone:str, status:str, createdAt:str, updatedAt:str, progress:int, riskProfile:str?, accountValue:float?, firmId:str}
ERR: {"400":"Invalid input or email already exists", "401":"Unauthorized", "404":"Client not found", "403":"Forbidden - cannot update client", "422":"Validation failed", "500":"Internal server error"}
EX_REQ: curl -X PATCH /clients/client-789 -H "Authorization: Bearer eyJhbGc.." -H "Content-Type: application/json" -d '{"status":"in_progress","progress":25}'
EX_RES_200: {"id":"client-789","firstName":"John","lastName":"Smith","email":"john.smith@email.com","phone":"+1-555-0456","status":"in_progress","createdAt":"2024-10-28T15:00:00Z","updatedAt":"2024-10-28T15:30:00Z","progress":25,"firmId":"firm-1"}

---

EP: DELETE /clients/{clientId}
DESC: Delete a client.
IN: headers:{Authorization:str!}, params:{clientId:str!}
OUT: 204:{}
ERR: {"401":"Unauthorized", "404":"Client not found", "403":"Forbidden - cannot delete client", "500":"Internal server error"}
EX_REQ: curl -X DELETE /clients/client-789 -H "Authorization: Bearer eyJhbGc.."
EX_RES_204: {}

## Activity Management Endpoints

EP: POST /activities
DESC: Create a new activity record.
IN: headers:{Authorization:str!}, body:{type:str!, clientName:str!, description:str!, clientId:str?}
OUT: 201:{id:str, type:str, clientName:str, description:str, timestamp:str, clientId:str?}
ERR: {"400":"Invalid input", "401":"Unauthorized", "422":"Validation failed", "500":"Internal server error"}
EX_REQ: curl -X POST /activities -H "Authorization: Bearer eyJhbGc.." -H "Content-Type: application/json" -d '{"type":"client_registered","clientName":"John Smith","description":"New client registration completed","clientId":"client-789"}'
EX_RES_201: {"id":"activity-123","type":"client_registered","clientName":"John Smith","description":"New client registration completed","timestamp":"2024-10-28T15:00:00Z","clientId":"client-789"}

---

EP: GET /activities
DESC: Get all activities with filtering and pagination.
IN: headers:{Authorization:str!}, query:{type:str?, clientName:str?, clientId:str?, sortBy:str?, limit:int?, page:int?}
OUT: 200:{results:arr[obj{id:str, type:str, clientName:str, description:str, timestamp:str, clientId:str?}], page:int, limit:int, totalPages:int, totalResults:int}
ERR: {"401":"Unauthorized", "500":"Internal server error"}
EX_REQ: curl -X GET '/activities?page=1&limit=10&type=client_registered' -H "Authorization: Bearer eyJhbGc.."
EX_RES_200: {"results":[{"id":"activity-123","type":"client_registered","clientName":"John Smith","description":"New client registration completed","timestamp":"2024-10-28T15:00:00Z","clientId":"client-789"}],"page":1,"limit":10,"totalPages":1,"totalResults":1}

---

EP: GET /activities/{activityId}
DESC: Get specific activity by ID.
IN: headers:{Authorization:str!}, params:{activityId:str!}
OUT: 200:{id:str, type:str, clientName:str, description:str, timestamp:str, clientId:str?}
ERR: {"401":"Unauthorized", "404":"Activity not found", "500":"Internal server error"}
EX_REQ: curl -X GET /activities/activity-123 -H "Authorization: Bearer eyJhbGc.."
EX_RES_200: {"id":"activity-123","type":"client_registered","clientName":"John Smith","description":"New client registration completed","timestamp":"2024-10-28T15:00:00Z","clientId":"client-789"}

---

EP: PATCH /activities/{activityId}
DESC: Update activity information.
IN: headers:{Authorization:str!}, params:{activityId:str!}, body:{type:str?, clientName:str?, description:str?, clientId:str?}
OUT: 200:{id:str, type:str, clientName:str, description:str, timestamp:str, clientId:str?}
ERR: {"400":"Invalid input", "401":"Unauthorized", "404":"Activity not found", "422":"Validation failed", "500":"Internal server error"}
EX_REQ: curl -X PATCH /activities/activity-123 -H "Authorization: Bearer eyJhbGc.." -H "Content-Type: application/json" -d '{"description":"Client registration completed with verification"}'
EX_RES_200: {"id":"activity-123","type":"client_registered","clientName":"John Smith","description":"Client registration completed with verification","timestamp":"2024-10-28T15:00:00Z","clientId":"client-789"}

---

EP: DELETE /activities/{activityId}
DESC: Delete an activity.
IN: headers:{Authorization:str!}, params:{activityId:str!}
OUT: 204:{}
ERR: {"401":"Unauthorized", "404":"Activity not found", "500":"Internal server error"}
EX_REQ: curl -X DELETE /activities/activity-123 -H "Authorization: Bearer eyJhbGc.."
EX_RES_204: {}

## MCP Endpoints

EP: POST /mcp
DESC: Handle MCP protocol POST requests.
IN: headers:{Authorization:str!}, body:obj
OUT: 200:obj
ERR: {"401":"Unauthorized", "400":"Invalid MCP request", "500":"Internal server error"}
EX_REQ: curl -X POST /mcp -H "Authorization: Bearer eyJhbGc.." -H "Content-Type: application/json" -d '{}'
EX_RES_200: {}

---

EP: GET /mcp
DESC: Handle MCP protocol GET requests.
IN: headers:{Authorization:str!}
OUT: 200:obj
ERR: {"401":"Unauthorized", "500":"Internal server error"}
EX_REQ: curl -X GET /mcp -H "Authorization: Bearer eyJhbGc.."
EX_RES_200: {}

---

EP: DELETE /mcp
DESC: Handle MCP protocol DELETE requests.
IN: headers:{Authorization:str!}
OUT: 200:obj
ERR: {"401":"Unauthorized", "500":"Internal server error"}
EX_REQ: curl -X DELETE /mcp -H "Authorization: Bearer eyJhbGc.."
EX_RES_200: {}

## Document Management Endpoints

EP: GET /document-types
DESC: Get all available document types for client onboarding.
IN: headers:{Authorization:str!}
OUT: 200:arr[obj{id:str, name:str, description:str, required:bool, category:str, acceptedFormats:arr[str], maxFileSize:int}]
ERR: {"401":"Unauthorized", "500":"Internal server error"}
EX_REQ: curl -X GET /document-types -H "Authorization: Bearer eyJhbGc.."
EX_RES_200: [{"id":"id-verification","name":"ID Verification","description":"Government-issued photo ID","required":true,"category":"identity","acceptedFormats":["image/jpeg","image/png","application/pdf"],"maxFileSize":5242880}]

---

EP: GET /clients/{clientId}/documents
DESC: Get all documents for a specific client.
IN: headers:{Authorization:str!}, params:{clientId:str!}
OUT: 200:arr[obj{id:str, fileName:str, fileSize:int, fileType:str, documentType:obj{id:str, name:str, description:str, required:bool, category:str, acceptedFormats:arr[str], maxFileSize:int}, clientId:str, status:str, signedUrl:str?, uploadedAt:str, verifiedAt:str?, rejectionReason:str?}]
ERR: {"401":"Unauthorized", "404":"Client not found", "500":"Internal server error"}
EX_REQ: curl -X GET /clients/client123/documents -H "Authorization: Bearer eyJhbGc.."
EX_RES_200: [{"id":"doc-1","fileName":"drivers_license.pdf","fileSize":2048000,"fileType":"application/pdf","documentType":{"id":"id-verification","name":"ID Verification","description":"Government-issued photo ID","required":true,"category":"identity","acceptedFormats":["image/jpeg","image/png","application/pdf"],"maxFileSize":5242880},"clientId":"client123","status":"verified","signedUrl":"https://example.com/signed-url/doc-1","uploadedAt":"2024-10-28T10:00:00Z","verifiedAt":"2024-10-28T11:00:00Z"}]

---

EP: POST /documents
DESC: Create a new document and get signed URL for file upload.
IN: headers:{Authorization:str!}, body:{fileName:str!, fileSize:int!, fileType:str!, documentTypeId:str!, clientId:str!}
OUT: 201:{document:obj{id:str, fileName:str, fileSize:int, fileType:str, documentType:obj{id:str, name:str, description:str, required:bool, category:str, acceptedFormats:arr[str], maxFileSize:int}, clientId:str, status:str, signedUrl:str?, uploadedAt:str, verifiedAt:str?, rejectionReason:str?}, signedUrl:str}
ERR: {"400":"Invalid input or unsupported file type", "401":"Unauthorized", "404":"Document type or client not found", "413":"File too large", "500":"Internal server error"}
EX_REQ: curl -X POST /documents -H "Authorization: Bearer eyJhbGc.." -H "Content-Type: application/json" -d '{"fileName":"bank_statement.pdf","fileSize":1048576,"fileType":"application/pdf","documentTypeId":"bank-statement","clientId":"client123"}'
EX_RES_201: {"document":{"id":"doc-456","fileName":"bank_statement.pdf","fileSize":1048576,"fileType":"application/pdf","documentType":{"id":"bank-statement","name":"Bank Statement","description":"Recent bank statements","required":true,"category":"financial","acceptedFormats":["application/pdf","image/jpeg","image/png"],"maxFileSize":10485760},"clientId":"client123","status":"pending","uploadedAt":"2024-10-28T10:00:00Z"},"signedUrl":"https://storage.example.com/upload-url"}

---

EP: GET /documents/{documentId}
DESC: Get specific document by ID.
IN: headers:{Authorization:str!}, params:{documentId:str!}
OUT: 200:{id:str, fileName:str, fileSize:int, fileType:str, documentType:obj{id:str, name:str, description:str, required:bool, category:str, acceptedFormats:arr[str], maxFileSize:int}, clientId:str, status:str, signedUrl:str?, uploadedAt:str, verifiedAt:str?, rejectionReason:str?}
ERR: {"401":"Unauthorized", "404":"Document not found", "403":"Forbidden - cannot access document", "500":"Internal server error"}
EX_REQ: curl -X GET /documents/doc-456 -H "Authorization: Bearer eyJhbGc.."
EX_RES_200: {"id":"doc-456","fileName":"bank_statement.pdf","fileSize":1048576,"fileType":"application/pdf","documentType":{"id":"bank-statement","name":"Bank Statement","description":"Recent bank statements","required":true,"category":"financial","acceptedFormats":["application/pdf","image/jpeg","image/png"],"maxFileSize":10485760},"clientId":"client123","status":"uploaded","signedUrl":"https://storage.example.com/view-url","uploadedAt":"2024-10-28T10:00:00Z"}

---

EP: PUT /documents/{documentId}/status
DESC: Update document status and verification details.
IN: headers:{Authorization:str!}, params:{documentId:str!}, body:{status:str!, rejectionReason:str?}
OUT: 200:{id:str, fileName:str, fileSize:int, fileType:str, documentType:obj{id:str, name:str, description:str, required:bool, category:str, acceptedFormats:arr[str], maxFileSize:int}, clientId:str, status:str, signedUrl:str?, uploadedAt:str, verifiedAt:str?, rejectionReason:str?}
ERR: {"400":"Invalid status or missing rejection reason", "401":"Unauthorized", "404":"Document not found", "403":"Forbidden - insufficient permissions", "500":"Internal server error"}
EX_REQ: curl -X PUT /documents/doc-456/status -H "Authorization: Bearer eyJhbGc.." -H "Content-Type: application/json" -d '{"status":"verified"}'
EX_RES_200: {"id":"doc-456","fileName":"bank_statement.pdf","fileSize":1048576,"fileType":"application/pdf","documentType":{"id":"bank-statement","name":"Bank Statement","description":"Recent bank statements","required":true,"category":"financial","acceptedFormats":["application/pdf","image/jpeg","image/png"],"maxFileSize":10485760},"clientId":"client123","status":"verified","signedUrl":"https://storage.example.com/view-url","uploadedAt":"2024-10-28T10:00:00Z","verifiedAt":"2024-10-28T11:00:00Z"}

---

EP: POST /documents/{documentId}/analyze
DESC: Analyze bank statement document and get treasury recommendations.
IN: headers:{Authorization:str!}, params:{documentId:str!}
OUT: 200:{recommendations:arr[obj{product:str, description:str, reasoning:str, priority:str}]}
ERR: {"400":"Document not suitable for analysis", "401":"Unauthorized", "404":"Document not found", "403":"Forbidden - cannot analyze document", "422":"Document not verified or analysis failed", "500":"Internal server error"}
EX_REQ: curl -X POST /documents/doc-456/analyze -H "Authorization: Bearer eyJhbGc.."
EX_RES_200: {"recommendations":[{"product":"High-Yield Savings Account","description":"Maximize returns on excess cash with competitive interest rates","reasoning":"Based on your current cash position and liquidity needs, a high-yield savings account would provide better returns while maintaining accessibility","priority":"high"},{"product":"Short-Term Treasury Bills","description":"Low-risk investment for surplus funds","reasoning":"Your conservative risk profile and short-term liquidity requirements make Treasury Bills an ideal choice","priority":"medium"}]}

## Onboarding Management Endpoints

EP: POST /onboarding
DESC: Create initial onboarding data for a client.
IN: headers:{Authorization:str!}, body:{clientId:str!, personalInfo:obj{firstName:str!, lastName:str!, email:str!, phone:str!, dateOfBirth:str!, socialSecurityNumber:str!, address:obj{street:str!, city:str!, state:str!, zipCode:str!, country:str!}}, contactInfo:obj{preferredContactMethod:str!, emergencyContact:obj{name:str!, relationship:str!, phone:str!, email:str!}}, employmentInfo:obj{employmentStatus:str!, employer:str?, jobTitle:str?, industry:str?, annualIncome:int!, netWorth:int!, liquidNetWorth:int!}}
OUT: 201:{clientId:str, status:str, currentStep:int, totalSteps:int, createdAt:str}
ERR: {"400":"Invalid input or client already exists", "401":"Unauthorized", "422":"Validation failed", "500":"Internal server error"}
EX_REQ: curl -X POST /onboarding -H "Authorization: Bearer eyJhbGc.." -H "Content-Type: application/json" -d '{"clientId":"client-123","personalInfo":{"firstName":"John","lastName":"Doe","email":"john.doe@example.com","phone":"+1-555-123-4567","dateOfBirth":"1990-05-15","socialSecurityNumber":"123-45-6789","address":{"street":"123 Main St","city":"New York","state":"NY","zipCode":"10001","country":"USA"}}}'
EX_RES_201: {"clientId":"client-123","status":"draft","currentStep":1,"totalSteps":7,"createdAt":"2024-10-28T10:00:00Z"}

---

EP: GET /onboarding/{clientId}
DESC: Get onboarding data for a specific client.
IN: headers:{Authorization:str!}, params:{clientId:str!}
OUT: 200:{clientId:str, personalInfo:obj, contactInfo:obj?, employmentInfo:obj?, riskProfile:obj?, investmentObjectives:obj?, financialGoals:arr[obj], selectedAccountTypes:arr[str], fundingMethods:arr[obj], uploadedDocuments:arr[obj], disclosures:arr[obj], complianceRecords:arr[obj], status:str, currentStep:int, totalSteps:int, submittedAt:str?, reviewedAt:str?}
ERR: {"401":"Unauthorized", "404":"Onboarding data not found", "403":"Forbidden - cannot access onboarding data", "500":"Internal server error"}
EX_REQ: curl -X GET /onboarding/client-123 -H "Authorization: Bearer eyJhbGc.."
EX_RES_200: {"clientId":"client-123","personalInfo":{"firstName":"John","lastName":"Doe","email":"john.doe@example.com","phone":"+1-555-123-4567","dateOfBirth":"1990-05-15","socialSecurityNumber":"***-**-6789","address":{"street":"123 Main St","city":"New York","state":"NY","zipCode":"10001","country":"USA"}},"status":"draft","currentStep":1,"totalSteps":7}

---

EP: PUT /onboarding/{clientId}/step/{stepNumber}
DESC: Update onboarding data for a specific step.
IN: headers:{Authorization:str!}, params:{clientId:str!, stepNumber:int!}, body:obj
OUT: 200:{clientId:str, personalInfo:obj, contactInfo:obj?, employmentInfo:obj?, riskProfile:obj?, investmentObjectives:obj?, financialGoals:arr[obj], selectedAccountTypes:arr[str], fundingMethods:arr[obj], uploadedDocuments:arr[obj], disclosures:arr[obj], complianceRecords:arr[obj], status:str, currentStep:int, totalSteps:int, submittedAt:str?, reviewedAt:str?}
ERR: {"400":"Invalid step or data", "401":"Unauthorized", "404":"Onboarding data not found", "403":"Forbidden - cannot update onboarding data", "422":"Validation failed", "500":"Internal server error"}
EX_REQ: curl -X PUT /onboarding/client-123/step/2 -H "Authorization: Bearer eyJhbGc.." -H "Content-Type: application/json" -d '{"riskProfile":{"investmentExperience":"good","riskTolerance":"moderate","investmentTimeHorizon":"long","liquidityNeeds":"low","ageRange":"31-45","investmentKnowledge":"intermediate"}}'
EX_RES_200: {"clientId":"client-123","personalInfo":{"firstName":"John","lastName":"Doe"},"riskProfile":{"investmentExperience":"good","riskTolerance":"moderate","investmentTimeHorizon":"long","liquidityNeeds":"low","ageRange":"31-45","investmentKnowledge":"intermediate"},"status":"draft","currentStep":2,"totalSteps":7}

---

EP: GET /onboarding/{clientId}/summary
DESC: Get onboarding summary for review.
IN: headers:{Authorization:str!}, params:{clientId:str!}
OUT: 200:{clientId:str, personalInfo:obj, riskProfile:obj, investmentObjectives:obj, selectedAccounts:arr[obj], totalFunding:float, documentsStatus:obj{total:int, uploaded:int, pending:int, approved:int}, complianceStatus:obj{total:int, completed:int}, estimatedCompletionDate:str}
ERR: {"401":"Unauthorized", "404":"Onboarding data not found", "403":"Forbidden - cannot access onboarding summary", "500":"Internal server error"}
EX_REQ: curl -X GET /onboarding/client-123/summary -H "Authorization: Bearer eyJhbGc.."
EX_RES_200: {"clientId":"client-123","personalInfo":{"firstName":"John","lastName":"Doe","email":"john.doe@example.com"},"riskProfile":{"riskTolerance":"moderate"},"totalFunding":100000,"documentsStatus":{"total":3,"uploaded":2,"pending":1,"approved":1},"complianceStatus":{"total":3,"completed":3},"estimatedCompletionDate":"2024-11-04T10:00:00Z"}

---

EP: POST /onboarding/submit
DESC: Submit completed onboarding for review.
IN: headers:{Authorization:str!}, body:{clientId:str!, finalReview:bool!, electronicallySign:bool!, signatureDate:str!}
OUT: 200:{submissionId:str, status:str, submittedAt:str}
ERR: {"400":"Incomplete onboarding or invalid data", "401":"Unauthorized", "404":"Onboarding data not found", "403":"Forbidden - cannot submit onboarding", "422":"Validation failed", "500":"Internal server error"}
EX_REQ: curl -X POST /onboarding/submit -H "Authorization: Bearer eyJhbGc.." -H "Content-Type: application/json" -d '{"clientId":"client-123","finalReview":true,"electronicallySign":true,"signatureDate":"2024-10-28T15:00:00Z"}'
EX_RES_200: {"submissionId":"sub-456","status":"submitted","submittedAt":"2024-10-28T15:00:00Z"}

## Risk Assessment Endpoints

EP: POST /risk-assessment
DESC: Submit risk assessment questionnaire.
IN: headers:{Authorization:str!}, body:{clientId:str!, investmentExperience:str!, riskTolerance:str!, investmentTimeHorizon:str!, liquidityNeeds:str!, ageRange:str!, investmentKnowledge:str!}
OUT: 201:{id:str, clientId:str, investmentExperience:str, riskTolerance:str, investmentTimeHorizon:str, liquidityNeeds:str, ageRange:str, investmentKnowledge:str, createdAt:str}
ERR: {"400":"Invalid input", "401":"Unauthorized", "422":"Validation failed", "500":"Internal server error"}
EX_REQ: curl -X POST /risk-assessment -H "Authorization: Bearer eyJhbGc.." -H "Content-Type: application/json" -d '{"clientId":"client-123","investmentExperience":"good","riskTolerance":"moderate","investmentTimeHorizon":"long","liquidityNeeds":"low","ageRange":"31-45","investmentKnowledge":"intermediate"}'
EX_RES_201: {"id":"risk-789","clientId":"client-123","investmentExperience":"good","riskTolerance":"moderate","investmentTimeHorizon":"long","liquidityNeeds":"low","ageRange":"31-45","investmentKnowledge":"intermediate","createdAt":"2024-10-28T10:00:00Z"}

---

EP: GET /risk-profiles
DESC: Get available risk profile templates.
IN: headers:{Authorization:str!}
OUT: 200:arr[obj{investmentExperience:str, riskTolerance:str, investmentTimeHorizon:str, liquidityNeeds:str, ageRange:str, investmentKnowledge:str}]
ERR: {"401":"Unauthorized", "500":"Internal server error"}
EX_REQ: curl -X GET /risk-profiles -H "Authorization: Bearer eyJhbGc.."
EX_RES_200: [{"investmentExperience":"limited","riskTolerance":"conservative","investmentTimeHorizon":"long","liquidityNeeds":"medium","ageRange":"31-45","investmentKnowledge":"beginner"},{"investmentExperience":"good","riskTolerance":"moderate","investmentTimeHorizon":"long","liquidityNeeds":"low","ageRange":"31-45","investmentKnowledge":"intermediate"}]

## Investment Objectives Endpoints

EP: POST /investment-objectives
DESC: Submit investment objectives.
IN: headers:{Authorization:str!}, body:{clientId:str!, primaryGoal:str!, specificGoals:arr[str]!, targetAmount:float?, timeHorizon:int!, monthlyContribution:float?, riskComfort:int!}
OUT: 201:{id:str, clientId:str, primaryGoal:str, specificGoals:arr[str], targetAmount:float?, timeHorizon:int, monthlyContribution:float?, riskComfort:int, createdAt:str}
ERR: {"400":"Invalid input", "401":"Unauthorized", "422":"Validation failed", "500":"Internal server error"}
EX_REQ: curl -X POST /investment-objectives -H "Authorization: Bearer eyJhbGc.." -H "Content-Type: application/json" -d '{"clientId":"client-123","primaryGoal":"growth","specificGoals":["Retirement","Long-term wealth building"],"targetAmount":1000000,"timeHorizon":25,"monthlyContribution":2000,"riskComfort":7}'
EX_RES_201: {"id":"obj-456","clientId":"client-123","primaryGoal":"growth","specificGoals":["Retirement","Long-term wealth building"],"targetAmount":1000000,"timeHorizon":25,"monthlyContribution":2000,"riskComfort":7,"createdAt":"2024-10-28T10:00:00Z"}

## Account Management Endpoints

EP: GET /account-types
DESC: Get available account types for client selection.
IN: headers:{Authorization:str!}
OUT: 200:arr[obj{id:str, name:str, description:str, taxAdvantaged:bool, minimumBalance:float, fees:obj{annual:float, transaction:float}}]
ERR: {"401":"Unauthorized", "500":"Internal server error"}
EX_REQ: curl -X GET /account-types -H "Authorization: Bearer eyJhbGc.."
EX_RES_200: [{"id":"traditional_ira","name":"Traditional IRA","description":"Tax-deferred retirement account","taxAdvantaged":true,"minimumBalance":1000,"fees":{"annual":25,"transaction":0}},{"id":"roth_ira","name":"Roth IRA","description":"Tax-free retirement account","taxAdvantaged":true,"minimumBalance":1000,"fees":{"annual":25,"transaction":0}}]

---

EP: POST /accounts
DESC: Create accounts for a client based on selected account types.
IN: headers:{Authorization:str!}, body:{clientId:str!, accountTypeIds:arr[str]!}
OUT: 201:{accountIds:arr[str]}
ERR: {"400":"Invalid account types or client", "401":"Unauthorized", "404":"Client or account type not found", "422":"Validation failed", "500":"Internal server error"}
EX_REQ: curl -X POST /accounts -H "Authorization: Bearer eyJhbGc.." -H "Content-Type: application/json" -d '{"clientId":"client-123","accountTypeIds":["traditional_ira","roth_ira"]}'
EX_RES_201: {"accountIds":["acc_traditional_ira_123","acc_roth_ira_456"]}

## Compliance Management Endpoints

EP: GET /disclosures
DESC: Get all compliance disclosures and agreements.
IN: headers:{Authorization:str!}
OUT: 200:arr[obj{id:str, title:str, content:str, required:bool}]
ERR: {"401":"Unauthorized", "500":"Internal server error"}
EX_REQ: curl -X GET /disclosures -H "Authorization: Bearer eyJhbGc.."
EX_RES_200: [{"id":"investment_risks","title":"Investment Risk Disclosure","content":"Investment involves risk, including potential loss of principal...","required":true},{"id":"privacy_policy","title":"Privacy Policy","content":"This privacy policy describes how we collect and use your personal information...","required":true}]

---

EP: POST /compliance/agreements
DESC: Record client acknowledgment of disclosures.
IN: headers:{Authorization:str!}, body:{clientId:str!, disclosureIds:arr[str]!}
OUT: 201:{agreements:arr[obj{id:str, clientId:str, disclosureId:str, acknowledged:bool, acknowledgedAt:str}]}
ERR: {"400":"Invalid disclosure IDs", "401":"Unauthorized", "404":"Client or disclosure not found", "422":"Validation failed", "500":"Internal server error"}
EX_REQ: curl -X POST /compliance/agreements -H "Authorization: Bearer eyJhbGc.." -H "Content-Type: application/json" -d '{"clientId":"client-123","disclosureIds":["investment_risks","privacy_policy","terms_of_service"]}'
EX_RES_201: {"agreements":[{"id":"agr-789","clientId":"client-123","disclosureId":"investment_risks","acknowledged":true,"acknowledgedAt":"2024-10-28T10:00:00Z"}]}

## Additional Client Management Endpoints

EP: PUT /clients/bulk-status
DESC: Update status for multiple clients simultaneously.
IN: headers:{Authorization:str!}, body:{clientIds:arr[str]!, status:str!}
OUT: 200:{updatedCount:int, clients:arr[obj{id:str, firstName:str, lastName:str, email:str, phone:str, status:str, createdAt:str, updatedAt:str, progress:int, riskProfile:str?, accountValue:float?, firmId:str}]}
ERR: {"400":"Invalid client IDs or status", "401":"Unauthorized", "404":"One or more clients not found", "422":"Validation failed", "500":"Internal server error"}
EX_REQ: curl -X PUT /clients/bulk-status -H "Authorization: Bearer eyJhbGc.." -H "Content-Type: application/json" -d '{"clientIds":["client-123","client-456"],"status":"in_progress"}'
EX_RES_200: {"updatedCount":2,"clients":[{"id":"client-123","firstName":"John","lastName":"Smith","email":"john.smith@email.com","phone":"+1-555-0456","status":"in_progress","createdAt":"2024-10-28T15:00:00Z","updatedAt":"2024-10-28T15:30:00Z","progress":25,"firmId":"firm-1"}]}

---

EP: GET /clients/export
DESC: Export client data as CSV or Excel file.
IN: headers:{Authorization:str!}, query:{status:str?, search:str?, riskProfile:str?, format:str?}
OUT: 200:file
ERR: {"401":"Unauthorized", "400":"Invalid export format", "500":"Internal server error"}
EX_REQ: curl -X GET '/clients/export?status=completed&format=csv' -H "Authorization: Bearer eyJhbGc.." --output clients_export.csv
EX_RES_200: Binary file content (CSV/Excel)

---

EP: POST /documents/upload
DESC: Upload document with multipart form data.
IN: headers:{Authorization:str!}, body:multipart{file:file!, clientId:str!, documentTypeId:str!}
OUT: 201:{id:str, documentTypeId:str, fileName:str, fileSize:int, mimeType:str, uploadedAt:str, status:str, signedUrl:str?}
ERR: {"400":"Invalid file or missing data", "401":"Unauthorized", "413":"File too large", "415":"Unsupported file type", "500":"Internal server error"}
EX_REQ: curl -X POST /documents/upload -H "Authorization: Bearer eyJhbGc.." -F "file=@document.pdf" -F "clientId=client-123" -F "documentTypeId=bank_statement"
EX_RES_201: {"id":"doc-789","documentTypeId":"bank_statement","fileName":"document.pdf","fileSize":1048576,"mimeType":"application/pdf","uploadedAt":"2024-10-28T10:00:00Z","status":"pending","signedUrl":"https://storage.example.com/signed-url"}

---

EP: GET /documents/client/{clientId}
DESC: Get all documents uploaded by a specific client during onboarding.
IN: headers:{Authorization:str!}, params:{clientId:str!}
OUT: 200:arr[obj{id:str, documentTypeId:str, fileName:str, fileSize:int, mimeType:str, uploadedAt:str, status:str, rejectionReason:str?, signedUrl:str?}]
ERR: {"401":"Unauthorized", "404":"Client not found", "403":"Forbidden - cannot access client documents", "500":"Internal server error"}
EX_REQ: curl -X GET /documents/client/client-123 -H "Authorization: Bearer eyJhbGc.."
EX_RES_200: [{"id":"doc-789","documentTypeId":"bank_statement","fileName":"statement.pdf","fileSize":1048576,"mimeType":"application/pdf","uploadedAt":"2024-10-28T10:00:00Z","status":"pending","signedUrl":"https://storage.example.com/view-url"}]