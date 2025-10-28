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

EP: GET /clients/recent
DESC: Get recently created or updated clients.
IN: headers:{Authorization:str!}
OUT: 200:arr[obj{id:str, firstName:str, lastName:str, email:str, phone:str, status:str, createdAt:str, updatedAt:str, progress:int, riskProfile:str?, accountValue:float?, firmId:str}]
ERR: {"401":"Unauthorized", "500":"Internal server error"}
EX_REQ: curl -X GET /clients/recent -H "Authorization: Bearer eyJhbGc.."
EX_RES_200: [{"id":"1","firstName":"Sarah","lastName":"Johnson","email":"sarah.johnson@email.com","phone":"+1-555-0123","status":"in_progress","createdAt":"2024-10-28T14:30:00Z","updatedAt":"2024-10-28T14:30:00Z","progress":65,"riskProfile":"moderate","firmId":"firm-1"}]

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