
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model DocumentType
 * 
 */
export type DocumentType = $Result.DefaultSelection<Prisma.$DocumentTypePayload>
/**
 * Model OnboardingData
 * 
 */
export type OnboardingData = $Result.DefaultSelection<Prisma.$OnboardingDataPayload>
/**
 * Model RiskAssessment
 * 
 */
export type RiskAssessment = $Result.DefaultSelection<Prisma.$RiskAssessmentPayload>
/**
 * Model InvestmentObjectives
 * 
 */
export type InvestmentObjectives = $Result.DefaultSelection<Prisma.$InvestmentObjectivesPayload>
/**
 * Model AccountType
 * 
 */
export type AccountType = $Result.DefaultSelection<Prisma.$AccountTypePayload>
/**
 * Model Disclosure
 * 
 */
export type Disclosure = $Result.DefaultSelection<Prisma.$DisclosurePayload>
/**
 * Model ComplianceAgreement
 * 
 */
export type ComplianceAgreement = $Result.DefaultSelection<Prisma.$ComplianceAgreementPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentType`: Exposes CRUD operations for the **DocumentType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentTypes
    * const documentTypes = await prisma.documentType.findMany()
    * ```
    */
  get documentType(): Prisma.DocumentTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.onboardingData`: Exposes CRUD operations for the **OnboardingData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OnboardingData
    * const onboardingData = await prisma.onboardingData.findMany()
    * ```
    */
  get onboardingData(): Prisma.OnboardingDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.riskAssessment`: Exposes CRUD operations for the **RiskAssessment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RiskAssessments
    * const riskAssessments = await prisma.riskAssessment.findMany()
    * ```
    */
  get riskAssessment(): Prisma.RiskAssessmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.investmentObjectives`: Exposes CRUD operations for the **InvestmentObjectives** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvestmentObjectives
    * const investmentObjectives = await prisma.investmentObjectives.findMany()
    * ```
    */
  get investmentObjectives(): Prisma.InvestmentObjectivesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accountType`: Exposes CRUD operations for the **AccountType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountTypes
    * const accountTypes = await prisma.accountType.findMany()
    * ```
    */
  get accountType(): Prisma.AccountTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disclosure`: Exposes CRUD operations for the **Disclosure** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disclosures
    * const disclosures = await prisma.disclosure.findMany()
    * ```
    */
  get disclosure(): Prisma.DisclosureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.complianceAgreement`: Exposes CRUD operations for the **ComplianceAgreement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ComplianceAgreements
    * const complianceAgreements = await prisma.complianceAgreement.findMany()
    * ```
    */
  get complianceAgreement(): Prisma.ComplianceAgreementDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Token: 'Token',
    Client: 'Client',
    Activity: 'Activity',
    Document: 'Document',
    DocumentType: 'DocumentType',
    OnboardingData: 'OnboardingData',
    RiskAssessment: 'RiskAssessment',
    InvestmentObjectives: 'InvestmentObjectives',
    AccountType: 'AccountType',
    Disclosure: 'Disclosure',
    ComplianceAgreement: 'ComplianceAgreement'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "token" | "client" | "activity" | "document" | "documentType" | "onboardingData" | "riskAssessment" | "investmentObjectives" | "accountType" | "disclosure" | "complianceAgreement"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      DocumentType: {
        payload: Prisma.$DocumentTypePayload<ExtArgs>
        fields: Prisma.DocumentTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>
          }
          findFirst: {
            args: Prisma.DocumentTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>
          }
          findMany: {
            args: Prisma.DocumentTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>[]
          }
          create: {
            args: Prisma.DocumentTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>
          }
          createMany: {
            args: Prisma.DocumentTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>[]
          }
          delete: {
            args: Prisma.DocumentTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>
          }
          update: {
            args: Prisma.DocumentTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>
          }
          deleteMany: {
            args: Prisma.DocumentTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>[]
          }
          upsert: {
            args: Prisma.DocumentTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>
          }
          aggregate: {
            args: Prisma.DocumentTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentType>
          }
          groupBy: {
            args: Prisma.DocumentTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentTypeCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentTypeCountAggregateOutputType> | number
          }
        }
      }
      OnboardingData: {
        payload: Prisma.$OnboardingDataPayload<ExtArgs>
        fields: Prisma.OnboardingDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OnboardingDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OnboardingDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingDataPayload>
          }
          findFirst: {
            args: Prisma.OnboardingDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OnboardingDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingDataPayload>
          }
          findMany: {
            args: Prisma.OnboardingDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingDataPayload>[]
          }
          create: {
            args: Prisma.OnboardingDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingDataPayload>
          }
          createMany: {
            args: Prisma.OnboardingDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OnboardingDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingDataPayload>[]
          }
          delete: {
            args: Prisma.OnboardingDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingDataPayload>
          }
          update: {
            args: Prisma.OnboardingDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingDataPayload>
          }
          deleteMany: {
            args: Prisma.OnboardingDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OnboardingDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OnboardingDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingDataPayload>[]
          }
          upsert: {
            args: Prisma.OnboardingDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingDataPayload>
          }
          aggregate: {
            args: Prisma.OnboardingDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOnboardingData>
          }
          groupBy: {
            args: Prisma.OnboardingDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<OnboardingDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.OnboardingDataCountArgs<ExtArgs>
            result: $Utils.Optional<OnboardingDataCountAggregateOutputType> | number
          }
        }
      }
      RiskAssessment: {
        payload: Prisma.$RiskAssessmentPayload<ExtArgs>
        fields: Prisma.RiskAssessmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RiskAssessmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAssessmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RiskAssessmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAssessmentPayload>
          }
          findFirst: {
            args: Prisma.RiskAssessmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAssessmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RiskAssessmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAssessmentPayload>
          }
          findMany: {
            args: Prisma.RiskAssessmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAssessmentPayload>[]
          }
          create: {
            args: Prisma.RiskAssessmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAssessmentPayload>
          }
          createMany: {
            args: Prisma.RiskAssessmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RiskAssessmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAssessmentPayload>[]
          }
          delete: {
            args: Prisma.RiskAssessmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAssessmentPayload>
          }
          update: {
            args: Prisma.RiskAssessmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAssessmentPayload>
          }
          deleteMany: {
            args: Prisma.RiskAssessmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RiskAssessmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RiskAssessmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAssessmentPayload>[]
          }
          upsert: {
            args: Prisma.RiskAssessmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAssessmentPayload>
          }
          aggregate: {
            args: Prisma.RiskAssessmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRiskAssessment>
          }
          groupBy: {
            args: Prisma.RiskAssessmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<RiskAssessmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.RiskAssessmentCountArgs<ExtArgs>
            result: $Utils.Optional<RiskAssessmentCountAggregateOutputType> | number
          }
        }
      }
      InvestmentObjectives: {
        payload: Prisma.$InvestmentObjectivesPayload<ExtArgs>
        fields: Prisma.InvestmentObjectivesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvestmentObjectivesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentObjectivesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvestmentObjectivesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentObjectivesPayload>
          }
          findFirst: {
            args: Prisma.InvestmentObjectivesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentObjectivesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvestmentObjectivesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentObjectivesPayload>
          }
          findMany: {
            args: Prisma.InvestmentObjectivesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentObjectivesPayload>[]
          }
          create: {
            args: Prisma.InvestmentObjectivesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentObjectivesPayload>
          }
          createMany: {
            args: Prisma.InvestmentObjectivesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvestmentObjectivesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentObjectivesPayload>[]
          }
          delete: {
            args: Prisma.InvestmentObjectivesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentObjectivesPayload>
          }
          update: {
            args: Prisma.InvestmentObjectivesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentObjectivesPayload>
          }
          deleteMany: {
            args: Prisma.InvestmentObjectivesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvestmentObjectivesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvestmentObjectivesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentObjectivesPayload>[]
          }
          upsert: {
            args: Prisma.InvestmentObjectivesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentObjectivesPayload>
          }
          aggregate: {
            args: Prisma.InvestmentObjectivesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvestmentObjectives>
          }
          groupBy: {
            args: Prisma.InvestmentObjectivesGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvestmentObjectivesGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvestmentObjectivesCountArgs<ExtArgs>
            result: $Utils.Optional<InvestmentObjectivesCountAggregateOutputType> | number
          }
        }
      }
      AccountType: {
        payload: Prisma.$AccountTypePayload<ExtArgs>
        fields: Prisma.AccountTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTypePayload>
          }
          findFirst: {
            args: Prisma.AccountTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTypePayload>
          }
          findMany: {
            args: Prisma.AccountTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTypePayload>[]
          }
          create: {
            args: Prisma.AccountTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTypePayload>
          }
          createMany: {
            args: Prisma.AccountTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTypePayload>[]
          }
          delete: {
            args: Prisma.AccountTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTypePayload>
          }
          update: {
            args: Prisma.AccountTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTypePayload>
          }
          deleteMany: {
            args: Prisma.AccountTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTypePayload>[]
          }
          upsert: {
            args: Prisma.AccountTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTypePayload>
          }
          aggregate: {
            args: Prisma.AccountTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccountType>
          }
          groupBy: {
            args: Prisma.AccountTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountTypeCountArgs<ExtArgs>
            result: $Utils.Optional<AccountTypeCountAggregateOutputType> | number
          }
        }
      }
      Disclosure: {
        payload: Prisma.$DisclosurePayload<ExtArgs>
        fields: Prisma.DisclosureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisclosureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisclosurePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisclosureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisclosurePayload>
          }
          findFirst: {
            args: Prisma.DisclosureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisclosurePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisclosureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisclosurePayload>
          }
          findMany: {
            args: Prisma.DisclosureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisclosurePayload>[]
          }
          create: {
            args: Prisma.DisclosureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisclosurePayload>
          }
          createMany: {
            args: Prisma.DisclosureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisclosureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisclosurePayload>[]
          }
          delete: {
            args: Prisma.DisclosureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisclosurePayload>
          }
          update: {
            args: Prisma.DisclosureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisclosurePayload>
          }
          deleteMany: {
            args: Prisma.DisclosureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisclosureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DisclosureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisclosurePayload>[]
          }
          upsert: {
            args: Prisma.DisclosureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisclosurePayload>
          }
          aggregate: {
            args: Prisma.DisclosureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisclosure>
          }
          groupBy: {
            args: Prisma.DisclosureGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisclosureGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisclosureCountArgs<ExtArgs>
            result: $Utils.Optional<DisclosureCountAggregateOutputType> | number
          }
        }
      }
      ComplianceAgreement: {
        payload: Prisma.$ComplianceAgreementPayload<ExtArgs>
        fields: Prisma.ComplianceAgreementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComplianceAgreementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplianceAgreementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComplianceAgreementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplianceAgreementPayload>
          }
          findFirst: {
            args: Prisma.ComplianceAgreementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplianceAgreementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComplianceAgreementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplianceAgreementPayload>
          }
          findMany: {
            args: Prisma.ComplianceAgreementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplianceAgreementPayload>[]
          }
          create: {
            args: Prisma.ComplianceAgreementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplianceAgreementPayload>
          }
          createMany: {
            args: Prisma.ComplianceAgreementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComplianceAgreementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplianceAgreementPayload>[]
          }
          delete: {
            args: Prisma.ComplianceAgreementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplianceAgreementPayload>
          }
          update: {
            args: Prisma.ComplianceAgreementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplianceAgreementPayload>
          }
          deleteMany: {
            args: Prisma.ComplianceAgreementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComplianceAgreementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComplianceAgreementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplianceAgreementPayload>[]
          }
          upsert: {
            args: Prisma.ComplianceAgreementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplianceAgreementPayload>
          }
          aggregate: {
            args: Prisma.ComplianceAgreementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComplianceAgreement>
          }
          groupBy: {
            args: Prisma.ComplianceAgreementGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComplianceAgreementGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComplianceAgreementCountArgs<ExtArgs>
            result: $Utils.Optional<ComplianceAgreementCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    token?: TokenOmit
    client?: ClientOmit
    activity?: ActivityOmit
    document?: DocumentOmit
    documentType?: DocumentTypeOmit
    onboardingData?: OnboardingDataOmit
    riskAssessment?: RiskAssessmentOmit
    investmentObjectives?: InvestmentObjectivesOmit
    accountType?: AccountTypeOmit
    disclosure?: DisclosureOmit
    complianceAgreement?: ComplianceAgreementOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tokens: number
    clients: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | UserCountOutputTypeCountTokensArgs
    clients?: boolean | UserCountOutputTypeCountClientsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    documents: number
    activities: number
    complianceAgreements: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | ClientCountOutputTypeCountDocumentsArgs
    activities?: boolean | ClientCountOutputTypeCountActivitiesArgs
    complianceAgreements?: boolean | ClientCountOutputTypeCountComplianceAgreementsArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountComplianceAgreementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComplianceAgreementWhereInput
  }


  /**
   * Count Type DocumentTypeCountOutputType
   */

  export type DocumentTypeCountOutputType = {
    documents: number
  }

  export type DocumentTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | DocumentTypeCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * DocumentTypeCountOutputType without action
   */
  export type DocumentTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTypeCountOutputType
     */
    select?: DocumentTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentTypeCountOutputType without action
   */
  export type DocumentTypeCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }


  /**
   * Count Type DisclosureCountOutputType
   */

  export type DisclosureCountOutputType = {
    complianceAgreements: number
  }

  export type DisclosureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    complianceAgreements?: boolean | DisclosureCountOutputTypeCountComplianceAgreementsArgs
  }

  // Custom InputTypes
  /**
   * DisclosureCountOutputType without action
   */
  export type DisclosureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisclosureCountOutputType
     */
    select?: DisclosureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DisclosureCountOutputType without action
   */
  export type DisclosureCountOutputTypeCountComplianceAgreementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComplianceAgreementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    role: string | null
    isEmailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    role: string | null
    isEmailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    role: number
    isEmailVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    isEmailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    isEmailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    isEmailVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string | null
    password: string
    role: string
    isEmailVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tokens?: boolean | User$tokensArgs<ExtArgs>
    clients?: boolean | User$clientsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "role" | "isEmailVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | User$tokensArgs<ExtArgs>
    clients?: boolean | User$clientsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tokens: Prisma.$TokenPayload<ExtArgs>[]
      clients: Prisma.$ClientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
      password: string
      role: string
      isEmailVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tokens<T extends User$tokensArgs<ExtArgs> = {}>(args?: Subset<T, User$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clients<T extends User$clientsArgs<ExtArgs> = {}>(args?: Subset<T, User$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.tokens
   */
  export type User$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * User.clients
   */
  export type User$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    cursor?: ClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TokenSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TokenMinAggregateOutputType = {
    id: number | null
    token: string | null
    type: string | null
    expires: Date | null
    blacklisted: boolean | null
    createdAt: Date | null
    userId: number | null
  }

  export type TokenMaxAggregateOutputType = {
    id: number | null
    token: string | null
    type: string | null
    expires: Date | null
    blacklisted: boolean | null
    createdAt: Date | null
    userId: number | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    token: number
    type: number
    expires: number
    blacklisted: number
    createdAt: number
    userId: number
    _all: number
  }


  export type TokenAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TokenSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TokenMinAggregateInputType = {
    id?: true
    token?: true
    type?: true
    expires?: true
    blacklisted?: true
    createdAt?: true
    userId?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    token?: true
    type?: true
    expires?: true
    blacklisted?: true
    createdAt?: true
    userId?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    token?: true
    type?: true
    expires?: true
    blacklisted?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _avg?: TokenAvgAggregateInputType
    _sum?: TokenSumAggregateInputType
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: number
    token: string
    type: string
    expires: Date
    blacklisted: boolean
    createdAt: Date
    userId: number
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    type?: boolean
    expires?: boolean
    blacklisted?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    type?: boolean
    expires?: boolean
    blacklisted?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    type?: boolean
    expires?: boolean
    blacklisted?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    token?: boolean
    type?: boolean
    expires?: boolean
    blacklisted?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "type" | "expires" | "blacklisted" | "createdAt" | "userId", ExtArgs["result"]["token"]>
  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
      type: string
      expires: Date
      blacklisted: boolean
      createdAt: Date
      userId: number
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'Int'>
    readonly token: FieldRef<"Token", 'String'>
    readonly type: FieldRef<"Token", 'String'>
    readonly expires: FieldRef<"Token", 'DateTime'>
    readonly blacklisted: FieldRef<"Token", 'Boolean'>
    readonly createdAt: FieldRef<"Token", 'DateTime'>
    readonly userId: FieldRef<"Token", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    progress: number | null
    accountValue: number | null
    userId: number | null
  }

  export type ClientSumAggregateOutputType = {
    progress: number | null
    accountValue: number | null
    userId: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    status: string | null
    progress: number | null
    riskProfile: string | null
    accountValue: number | null
    firmId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    status: string | null
    progress: number | null
    riskProfile: string | null
    accountValue: number | null
    firmId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    status: number
    progress: number
    riskProfile: number
    accountValue: number
    firmId: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    progress?: true
    accountValue?: true
    userId?: true
  }

  export type ClientSumAggregateInputType = {
    progress?: true
    accountValue?: true
    userId?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    status?: true
    progress?: true
    riskProfile?: true
    accountValue?: true
    firmId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    status?: true
    progress?: true
    riskProfile?: true
    accountValue?: true
    firmId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    status?: true
    progress?: true
    riskProfile?: true
    accountValue?: true
    firmId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    phone: string
    status: string
    progress: number
    riskProfile: string | null
    accountValue: number | null
    firmId: string
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    progress?: boolean
    riskProfile?: boolean
    accountValue?: boolean
    firmId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    documents?: boolean | Client$documentsArgs<ExtArgs>
    activities?: boolean | Client$activitiesArgs<ExtArgs>
    onboardingData?: boolean | Client$onboardingDataArgs<ExtArgs>
    riskAssessment?: boolean | Client$riskAssessmentArgs<ExtArgs>
    investmentObjectives?: boolean | Client$investmentObjectivesArgs<ExtArgs>
    complianceAgreements?: boolean | Client$complianceAgreementsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    progress?: boolean
    riskProfile?: boolean
    accountValue?: boolean
    firmId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    progress?: boolean
    riskProfile?: boolean
    accountValue?: boolean
    firmId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    progress?: boolean
    riskProfile?: boolean
    accountValue?: boolean
    firmId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phone" | "status" | "progress" | "riskProfile" | "accountValue" | "firmId" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    documents?: boolean | Client$documentsArgs<ExtArgs>
    activities?: boolean | Client$activitiesArgs<ExtArgs>
    onboardingData?: boolean | Client$onboardingDataArgs<ExtArgs>
    riskAssessment?: boolean | Client$riskAssessmentArgs<ExtArgs>
    investmentObjectives?: boolean | Client$investmentObjectivesArgs<ExtArgs>
    complianceAgreements?: boolean | Client$complianceAgreementsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      activities: Prisma.$ActivityPayload<ExtArgs>[]
      onboardingData: Prisma.$OnboardingDataPayload<ExtArgs> | null
      riskAssessment: Prisma.$RiskAssessmentPayload<ExtArgs> | null
      investmentObjectives: Prisma.$InvestmentObjectivesPayload<ExtArgs> | null
      complianceAgreements: Prisma.$ComplianceAgreementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      phone: string
      status: string
      progress: number
      riskProfile: string | null
      accountValue: number | null
      firmId: string
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    documents<T extends Client$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Client$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activities<T extends Client$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Client$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    onboardingData<T extends Client$onboardingDataArgs<ExtArgs> = {}>(args?: Subset<T, Client$onboardingDataArgs<ExtArgs>>): Prisma__OnboardingDataClient<$Result.GetResult<Prisma.$OnboardingDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    riskAssessment<T extends Client$riskAssessmentArgs<ExtArgs> = {}>(args?: Subset<T, Client$riskAssessmentArgs<ExtArgs>>): Prisma__RiskAssessmentClient<$Result.GetResult<Prisma.$RiskAssessmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    investmentObjectives<T extends Client$investmentObjectivesArgs<ExtArgs> = {}>(args?: Subset<T, Client$investmentObjectivesArgs<ExtArgs>>): Prisma__InvestmentObjectivesClient<$Result.GetResult<Prisma.$InvestmentObjectivesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    complianceAgreements<T extends Client$complianceAgreementsArgs<ExtArgs> = {}>(args?: Subset<T, Client$complianceAgreementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplianceAgreementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly firstName: FieldRef<"Client", 'String'>
    readonly lastName: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly phone: FieldRef<"Client", 'String'>
    readonly status: FieldRef<"Client", 'String'>
    readonly progress: FieldRef<"Client", 'Int'>
    readonly riskProfile: FieldRef<"Client", 'String'>
    readonly accountValue: FieldRef<"Client", 'Float'>
    readonly firmId: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
    readonly userId: FieldRef<"Client", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.documents
   */
  export type Client$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Client.activities
   */
  export type Client$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Client.onboardingData
   */
  export type Client$onboardingDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnboardingData
     */
    select?: OnboardingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnboardingData
     */
    omit?: OnboardingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingDataInclude<ExtArgs> | null
    where?: OnboardingDataWhereInput
  }

  /**
   * Client.riskAssessment
   */
  export type Client$riskAssessmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAssessment
     */
    select?: RiskAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAssessment
     */
    omit?: RiskAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAssessmentInclude<ExtArgs> | null
    where?: RiskAssessmentWhereInput
  }

  /**
   * Client.investmentObjectives
   */
  export type Client$investmentObjectivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentObjectives
     */
    select?: InvestmentObjectivesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentObjectives
     */
    omit?: InvestmentObjectivesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentObjectivesInclude<ExtArgs> | null
    where?: InvestmentObjectivesWhereInput
  }

  /**
   * Client.complianceAgreements
   */
  export type Client$complianceAgreementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplianceAgreement
     */
    select?: ComplianceAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplianceAgreement
     */
    omit?: ComplianceAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceAgreementInclude<ExtArgs> | null
    where?: ComplianceAgreementWhereInput
    orderBy?: ComplianceAgreementOrderByWithRelationInput | ComplianceAgreementOrderByWithRelationInput[]
    cursor?: ComplianceAgreementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComplianceAgreementScalarFieldEnum | ComplianceAgreementScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityMinAggregateOutputType = {
    id: string | null
    type: string | null
    clientName: string | null
    description: string | null
    timestamp: Date | null
    clientId: string | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: string | null
    type: string | null
    clientName: string | null
    description: string | null
    timestamp: Date | null
    clientId: string | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    type: number
    clientName: number
    description: number
    timestamp: number
    clientId: number
    _all: number
  }


  export type ActivityMinAggregateInputType = {
    id?: true
    type?: true
    clientName?: true
    description?: true
    timestamp?: true
    clientId?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    type?: true
    clientName?: true
    description?: true
    timestamp?: true
    clientId?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    type?: true
    clientName?: true
    description?: true
    timestamp?: true
    clientId?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: string
    type: string
    clientName: string
    description: string
    timestamp: Date
    clientId: string | null
    _count: ActivityCountAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    clientName?: boolean
    description?: boolean
    timestamp?: boolean
    clientId?: boolean
    client?: boolean | Activity$clientArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    clientName?: boolean
    description?: boolean
    timestamp?: boolean
    clientId?: boolean
    client?: boolean | Activity$clientArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    clientName?: boolean
    description?: boolean
    timestamp?: boolean
    clientId?: boolean
    client?: boolean | Activity$clientArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectScalar = {
    id?: boolean
    type?: boolean
    clientName?: boolean
    description?: boolean
    timestamp?: boolean
    clientId?: boolean
  }

  export type ActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "clientName" | "description" | "timestamp" | "clientId", ExtArgs["result"]["activity"]>
  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Activity$clientArgs<ExtArgs>
  }
  export type ActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Activity$clientArgs<ExtArgs>
  }
  export type ActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Activity$clientArgs<ExtArgs>
  }

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      clientName: string
      description: string
      timestamp: Date
      clientId: string | null
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activities and returns the data saved in the database.
     * @param {ActivityCreateManyAndReturnArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities and returns the data updated in the database.
     * @param {ActivityUpdateManyAndReturnArgs} args - Arguments to update many Activities.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends Activity$clientArgs<ExtArgs> = {}>(args?: Subset<T, Activity$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Activity model
   */
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'String'>
    readonly type: FieldRef<"Activity", 'String'>
    readonly clientName: FieldRef<"Activity", 'String'>
    readonly description: FieldRef<"Activity", 'String'>
    readonly timestamp: FieldRef<"Activity", 'DateTime'>
    readonly clientId: FieldRef<"Activity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
  }

  /**
   * Activity createManyAndReturn
   */
  export type ActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
  }

  /**
   * Activity updateManyAndReturn
   */
  export type ActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to delete.
     */
    limit?: number
  }

  /**
   * Activity.client
   */
  export type Activity$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    fileSize: number | null
  }

  export type DocumentSumAggregateOutputType = {
    fileSize: number | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    fileName: string | null
    fileSize: number | null
    fileType: string | null
    documentTypeId: string | null
    clientId: string | null
    status: string | null
    signedUrl: string | null
    uploadedAt: Date | null
    verifiedAt: Date | null
    rejectionReason: string | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    fileName: string | null
    fileSize: number | null
    fileType: string | null
    documentTypeId: string | null
    clientId: string | null
    status: string | null
    signedUrl: string | null
    uploadedAt: Date | null
    verifiedAt: Date | null
    rejectionReason: string | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    fileName: number
    fileSize: number
    fileType: number
    documentTypeId: number
    clientId: number
    status: number
    signedUrl: number
    uploadedAt: number
    verifiedAt: number
    rejectionReason: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    fileSize?: true
  }

  export type DocumentSumAggregateInputType = {
    fileSize?: true
  }

  export type DocumentMinAggregateInputType = {
    id?: true
    fileName?: true
    fileSize?: true
    fileType?: true
    documentTypeId?: true
    clientId?: true
    status?: true
    signedUrl?: true
    uploadedAt?: true
    verifiedAt?: true
    rejectionReason?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    fileName?: true
    fileSize?: true
    fileType?: true
    documentTypeId?: true
    clientId?: true
    status?: true
    signedUrl?: true
    uploadedAt?: true
    verifiedAt?: true
    rejectionReason?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    fileName?: true
    fileSize?: true
    fileType?: true
    documentTypeId?: true
    clientId?: true
    status?: true
    signedUrl?: true
    uploadedAt?: true
    verifiedAt?: true
    rejectionReason?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    fileName: string
    fileSize: number
    fileType: string
    documentTypeId: string
    clientId: string
    status: string
    signedUrl: string | null
    uploadedAt: Date
    verifiedAt: Date | null
    rejectionReason: string | null
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileSize?: boolean
    fileType?: boolean
    documentTypeId?: boolean
    clientId?: boolean
    status?: boolean
    signedUrl?: boolean
    uploadedAt?: boolean
    verifiedAt?: boolean
    rejectionReason?: boolean
    documentType?: boolean | DocumentTypeDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileSize?: boolean
    fileType?: boolean
    documentTypeId?: boolean
    clientId?: boolean
    status?: boolean
    signedUrl?: boolean
    uploadedAt?: boolean
    verifiedAt?: boolean
    rejectionReason?: boolean
    documentType?: boolean | DocumentTypeDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileSize?: boolean
    fileType?: boolean
    documentTypeId?: boolean
    clientId?: boolean
    status?: boolean
    signedUrl?: boolean
    uploadedAt?: boolean
    verifiedAt?: boolean
    rejectionReason?: boolean
    documentType?: boolean | DocumentTypeDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    fileName?: boolean
    fileSize?: boolean
    fileType?: boolean
    documentTypeId?: boolean
    clientId?: boolean
    status?: boolean
    signedUrl?: boolean
    uploadedAt?: boolean
    verifiedAt?: boolean
    rejectionReason?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileName" | "fileSize" | "fileType" | "documentTypeId" | "clientId" | "status" | "signedUrl" | "uploadedAt" | "verifiedAt" | "rejectionReason", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentType?: boolean | DocumentTypeDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentType?: boolean | DocumentTypeDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentType?: boolean | DocumentTypeDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      documentType: Prisma.$DocumentTypePayload<ExtArgs>
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fileName: string
      fileSize: number
      fileType: string
      documentTypeId: string
      clientId: string
      status: string
      signedUrl: string | null
      uploadedAt: Date
      verifiedAt: Date | null
      rejectionReason: string | null
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documentType<T extends DocumentTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentTypeDefaultArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly fileName: FieldRef<"Document", 'String'>
    readonly fileSize: FieldRef<"Document", 'Int'>
    readonly fileType: FieldRef<"Document", 'String'>
    readonly documentTypeId: FieldRef<"Document", 'String'>
    readonly clientId: FieldRef<"Document", 'String'>
    readonly status: FieldRef<"Document", 'String'>
    readonly signedUrl: FieldRef<"Document", 'String'>
    readonly uploadedAt: FieldRef<"Document", 'DateTime'>
    readonly verifiedAt: FieldRef<"Document", 'DateTime'>
    readonly rejectionReason: FieldRef<"Document", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model DocumentType
   */

  export type AggregateDocumentType = {
    _count: DocumentTypeCountAggregateOutputType | null
    _avg: DocumentTypeAvgAggregateOutputType | null
    _sum: DocumentTypeSumAggregateOutputType | null
    _min: DocumentTypeMinAggregateOutputType | null
    _max: DocumentTypeMaxAggregateOutputType | null
  }

  export type DocumentTypeAvgAggregateOutputType = {
    maxFileSize: number | null
  }

  export type DocumentTypeSumAggregateOutputType = {
    maxFileSize: number | null
  }

  export type DocumentTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    required: boolean | null
    category: string | null
    acceptedFormats: string | null
    maxFileSize: number | null
  }

  export type DocumentTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    required: boolean | null
    category: string | null
    acceptedFormats: string | null
    maxFileSize: number | null
  }

  export type DocumentTypeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    required: number
    category: number
    acceptedFormats: number
    maxFileSize: number
    _all: number
  }


  export type DocumentTypeAvgAggregateInputType = {
    maxFileSize?: true
  }

  export type DocumentTypeSumAggregateInputType = {
    maxFileSize?: true
  }

  export type DocumentTypeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    required?: true
    category?: true
    acceptedFormats?: true
    maxFileSize?: true
  }

  export type DocumentTypeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    required?: true
    category?: true
    acceptedFormats?: true
    maxFileSize?: true
  }

  export type DocumentTypeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    required?: true
    category?: true
    acceptedFormats?: true
    maxFileSize?: true
    _all?: true
  }

  export type DocumentTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentType to aggregate.
     */
    where?: DocumentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTypes to fetch.
     */
    orderBy?: DocumentTypeOrderByWithRelationInput | DocumentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentTypes
    **/
    _count?: true | DocumentTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentTypeMaxAggregateInputType
  }

  export type GetDocumentTypeAggregateType<T extends DocumentTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentType[P]>
      : GetScalarType<T[P], AggregateDocumentType[P]>
  }




  export type DocumentTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentTypeWhereInput
    orderBy?: DocumentTypeOrderByWithAggregationInput | DocumentTypeOrderByWithAggregationInput[]
    by: DocumentTypeScalarFieldEnum[] | DocumentTypeScalarFieldEnum
    having?: DocumentTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentTypeCountAggregateInputType | true
    _avg?: DocumentTypeAvgAggregateInputType
    _sum?: DocumentTypeSumAggregateInputType
    _min?: DocumentTypeMinAggregateInputType
    _max?: DocumentTypeMaxAggregateInputType
  }

  export type DocumentTypeGroupByOutputType = {
    id: string
    name: string
    description: string
    required: boolean
    category: string
    acceptedFormats: string
    maxFileSize: number
    _count: DocumentTypeCountAggregateOutputType | null
    _avg: DocumentTypeAvgAggregateOutputType | null
    _sum: DocumentTypeSumAggregateOutputType | null
    _min: DocumentTypeMinAggregateOutputType | null
    _max: DocumentTypeMaxAggregateOutputType | null
  }

  type GetDocumentTypeGroupByPayload<T extends DocumentTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentTypeGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentTypeGroupByOutputType[P]>
        }
      >
    >


  export type DocumentTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    required?: boolean
    category?: boolean
    acceptedFormats?: boolean
    maxFileSize?: boolean
    documents?: boolean | DocumentType$documentsArgs<ExtArgs>
    _count?: boolean | DocumentTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentType"]>

  export type DocumentTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    required?: boolean
    category?: boolean
    acceptedFormats?: boolean
    maxFileSize?: boolean
  }, ExtArgs["result"]["documentType"]>

  export type DocumentTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    required?: boolean
    category?: boolean
    acceptedFormats?: boolean
    maxFileSize?: boolean
  }, ExtArgs["result"]["documentType"]>

  export type DocumentTypeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    required?: boolean
    category?: boolean
    acceptedFormats?: boolean
    maxFileSize?: boolean
  }

  export type DocumentTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "required" | "category" | "acceptedFormats" | "maxFileSize", ExtArgs["result"]["documentType"]>
  export type DocumentTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | DocumentType$documentsArgs<ExtArgs>
    _count?: boolean | DocumentTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocumentTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DocumentTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DocumentTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentType"
    objects: {
      documents: Prisma.$DocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      required: boolean
      category: string
      acceptedFormats: string
      maxFileSize: number
    }, ExtArgs["result"]["documentType"]>
    composites: {}
  }

  type DocumentTypeGetPayload<S extends boolean | null | undefined | DocumentTypeDefaultArgs> = $Result.GetResult<Prisma.$DocumentTypePayload, S>

  type DocumentTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentTypeCountAggregateInputType | true
    }

  export interface DocumentTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentType'], meta: { name: 'DocumentType' } }
    /**
     * Find zero or one DocumentType that matches the filter.
     * @param {DocumentTypeFindUniqueArgs} args - Arguments to find a DocumentType
     * @example
     * // Get one DocumentType
     * const documentType = await prisma.documentType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentTypeFindUniqueArgs>(args: SelectSubset<T, DocumentTypeFindUniqueArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentTypeFindUniqueOrThrowArgs} args - Arguments to find a DocumentType
     * @example
     * // Get one DocumentType
     * const documentType = await prisma.documentType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeFindFirstArgs} args - Arguments to find a DocumentType
     * @example
     * // Get one DocumentType
     * const documentType = await prisma.documentType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentTypeFindFirstArgs>(args?: SelectSubset<T, DocumentTypeFindFirstArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeFindFirstOrThrowArgs} args - Arguments to find a DocumentType
     * @example
     * // Get one DocumentType
     * const documentType = await prisma.documentType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentTypes
     * const documentTypes = await prisma.documentType.findMany()
     * 
     * // Get first 10 DocumentTypes
     * const documentTypes = await prisma.documentType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentTypeWithIdOnly = await prisma.documentType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentTypeFindManyArgs>(args?: SelectSubset<T, DocumentTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentType.
     * @param {DocumentTypeCreateArgs} args - Arguments to create a DocumentType.
     * @example
     * // Create one DocumentType
     * const DocumentType = await prisma.documentType.create({
     *   data: {
     *     // ... data to create a DocumentType
     *   }
     * })
     * 
     */
    create<T extends DocumentTypeCreateArgs>(args: SelectSubset<T, DocumentTypeCreateArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentTypes.
     * @param {DocumentTypeCreateManyArgs} args - Arguments to create many DocumentTypes.
     * @example
     * // Create many DocumentTypes
     * const documentType = await prisma.documentType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentTypeCreateManyArgs>(args?: SelectSubset<T, DocumentTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentTypes and returns the data saved in the database.
     * @param {DocumentTypeCreateManyAndReturnArgs} args - Arguments to create many DocumentTypes.
     * @example
     * // Create many DocumentTypes
     * const documentType = await prisma.documentType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentTypes and only return the `id`
     * const documentTypeWithIdOnly = await prisma.documentType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentType.
     * @param {DocumentTypeDeleteArgs} args - Arguments to delete one DocumentType.
     * @example
     * // Delete one DocumentType
     * const DocumentType = await prisma.documentType.delete({
     *   where: {
     *     // ... filter to delete one DocumentType
     *   }
     * })
     * 
     */
    delete<T extends DocumentTypeDeleteArgs>(args: SelectSubset<T, DocumentTypeDeleteArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentType.
     * @param {DocumentTypeUpdateArgs} args - Arguments to update one DocumentType.
     * @example
     * // Update one DocumentType
     * const documentType = await prisma.documentType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentTypeUpdateArgs>(args: SelectSubset<T, DocumentTypeUpdateArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentTypes.
     * @param {DocumentTypeDeleteManyArgs} args - Arguments to filter DocumentTypes to delete.
     * @example
     * // Delete a few DocumentTypes
     * const { count } = await prisma.documentType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentTypeDeleteManyArgs>(args?: SelectSubset<T, DocumentTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentTypes
     * const documentType = await prisma.documentType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentTypeUpdateManyArgs>(args: SelectSubset<T, DocumentTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentTypes and returns the data updated in the database.
     * @param {DocumentTypeUpdateManyAndReturnArgs} args - Arguments to update many DocumentTypes.
     * @example
     * // Update many DocumentTypes
     * const documentType = await prisma.documentType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentTypes and only return the `id`
     * const documentTypeWithIdOnly = await prisma.documentType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentType.
     * @param {DocumentTypeUpsertArgs} args - Arguments to update or create a DocumentType.
     * @example
     * // Update or create a DocumentType
     * const documentType = await prisma.documentType.upsert({
     *   create: {
     *     // ... data to create a DocumentType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentType we want to update
     *   }
     * })
     */
    upsert<T extends DocumentTypeUpsertArgs>(args: SelectSubset<T, DocumentTypeUpsertArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeCountArgs} args - Arguments to filter DocumentTypes to count.
     * @example
     * // Count the number of DocumentTypes
     * const count = await prisma.documentType.count({
     *   where: {
     *     // ... the filter for the DocumentTypes we want to count
     *   }
     * })
    **/
    count<T extends DocumentTypeCountArgs>(
      args?: Subset<T, DocumentTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentTypeAggregateArgs>(args: Subset<T, DocumentTypeAggregateArgs>): Prisma.PrismaPromise<GetDocumentTypeAggregateType<T>>

    /**
     * Group by DocumentType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentTypeGroupByArgs['orderBy'] }
        : { orderBy?: DocumentTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentType model
   */
  readonly fields: DocumentTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documents<T extends DocumentType$documentsArgs<ExtArgs> = {}>(args?: Subset<T, DocumentType$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DocumentType model
   */
  interface DocumentTypeFieldRefs {
    readonly id: FieldRef<"DocumentType", 'String'>
    readonly name: FieldRef<"DocumentType", 'String'>
    readonly description: FieldRef<"DocumentType", 'String'>
    readonly required: FieldRef<"DocumentType", 'Boolean'>
    readonly category: FieldRef<"DocumentType", 'String'>
    readonly acceptedFormats: FieldRef<"DocumentType", 'String'>
    readonly maxFileSize: FieldRef<"DocumentType", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DocumentType findUnique
   */
  export type DocumentTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * Filter, which DocumentType to fetch.
     */
    where: DocumentTypeWhereUniqueInput
  }

  /**
   * DocumentType findUniqueOrThrow
   */
  export type DocumentTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * Filter, which DocumentType to fetch.
     */
    where: DocumentTypeWhereUniqueInput
  }

  /**
   * DocumentType findFirst
   */
  export type DocumentTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * Filter, which DocumentType to fetch.
     */
    where?: DocumentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTypes to fetch.
     */
    orderBy?: DocumentTypeOrderByWithRelationInput | DocumentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentTypes.
     */
    cursor?: DocumentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentTypes.
     */
    distinct?: DocumentTypeScalarFieldEnum | DocumentTypeScalarFieldEnum[]
  }

  /**
   * DocumentType findFirstOrThrow
   */
  export type DocumentTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * Filter, which DocumentType to fetch.
     */
    where?: DocumentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTypes to fetch.
     */
    orderBy?: DocumentTypeOrderByWithRelationInput | DocumentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentTypes.
     */
    cursor?: DocumentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentTypes.
     */
    distinct?: DocumentTypeScalarFieldEnum | DocumentTypeScalarFieldEnum[]
  }

  /**
   * DocumentType findMany
   */
  export type DocumentTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * Filter, which DocumentTypes to fetch.
     */
    where?: DocumentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTypes to fetch.
     */
    orderBy?: DocumentTypeOrderByWithRelationInput | DocumentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentTypes.
     */
    cursor?: DocumentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTypes.
     */
    skip?: number
    distinct?: DocumentTypeScalarFieldEnum | DocumentTypeScalarFieldEnum[]
  }

  /**
   * DocumentType create
   */
  export type DocumentTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentType.
     */
    data: XOR<DocumentTypeCreateInput, DocumentTypeUncheckedCreateInput>
  }

  /**
   * DocumentType createMany
   */
  export type DocumentTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentTypes.
     */
    data: DocumentTypeCreateManyInput | DocumentTypeCreateManyInput[]
  }

  /**
   * DocumentType createManyAndReturn
   */
  export type DocumentTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentTypes.
     */
    data: DocumentTypeCreateManyInput | DocumentTypeCreateManyInput[]
  }

  /**
   * DocumentType update
   */
  export type DocumentTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentType.
     */
    data: XOR<DocumentTypeUpdateInput, DocumentTypeUncheckedUpdateInput>
    /**
     * Choose, which DocumentType to update.
     */
    where: DocumentTypeWhereUniqueInput
  }

  /**
   * DocumentType updateMany
   */
  export type DocumentTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentTypes.
     */
    data: XOR<DocumentTypeUpdateManyMutationInput, DocumentTypeUncheckedUpdateManyInput>
    /**
     * Filter which DocumentTypes to update
     */
    where?: DocumentTypeWhereInput
    /**
     * Limit how many DocumentTypes to update.
     */
    limit?: number
  }

  /**
   * DocumentType updateManyAndReturn
   */
  export type DocumentTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * The data used to update DocumentTypes.
     */
    data: XOR<DocumentTypeUpdateManyMutationInput, DocumentTypeUncheckedUpdateManyInput>
    /**
     * Filter which DocumentTypes to update
     */
    where?: DocumentTypeWhereInput
    /**
     * Limit how many DocumentTypes to update.
     */
    limit?: number
  }

  /**
   * DocumentType upsert
   */
  export type DocumentTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentType to update in case it exists.
     */
    where: DocumentTypeWhereUniqueInput
    /**
     * In case the DocumentType found by the `where` argument doesn't exist, create a new DocumentType with this data.
     */
    create: XOR<DocumentTypeCreateInput, DocumentTypeUncheckedCreateInput>
    /**
     * In case the DocumentType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentTypeUpdateInput, DocumentTypeUncheckedUpdateInput>
  }

  /**
   * DocumentType delete
   */
  export type DocumentTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * Filter which DocumentType to delete.
     */
    where: DocumentTypeWhereUniqueInput
  }

  /**
   * DocumentType deleteMany
   */
  export type DocumentTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentTypes to delete
     */
    where?: DocumentTypeWhereInput
    /**
     * Limit how many DocumentTypes to delete.
     */
    limit?: number
  }

  /**
   * DocumentType.documents
   */
  export type DocumentType$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * DocumentType without action
   */
  export type DocumentTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
  }


  /**
   * Model OnboardingData
   */

  export type AggregateOnboardingData = {
    _count: OnboardingDataCountAggregateOutputType | null
    _avg: OnboardingDataAvgAggregateOutputType | null
    _sum: OnboardingDataSumAggregateOutputType | null
    _min: OnboardingDataMinAggregateOutputType | null
    _max: OnboardingDataMaxAggregateOutputType | null
  }

  export type OnboardingDataAvgAggregateOutputType = {
    currentStep: number | null
    totalSteps: number | null
  }

  export type OnboardingDataSumAggregateOutputType = {
    currentStep: number | null
    totalSteps: number | null
  }

  export type OnboardingDataMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    status: string | null
    currentStep: number | null
    totalSteps: number | null
    submittedAt: Date | null
    reviewedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OnboardingDataMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    status: string | null
    currentStep: number | null
    totalSteps: number | null
    submittedAt: Date | null
    reviewedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OnboardingDataCountAggregateOutputType = {
    id: number
    clientId: number
    personalInfo: number
    contactInfo: number
    employmentInfo: number
    riskProfile: number
    investmentObjectives: number
    financialGoals: number
    selectedAccountTypes: number
    fundingMethods: number
    uploadedDocuments: number
    disclosures: number
    complianceRecords: number
    status: number
    currentStep: number
    totalSteps: number
    submittedAt: number
    reviewedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OnboardingDataAvgAggregateInputType = {
    currentStep?: true
    totalSteps?: true
  }

  export type OnboardingDataSumAggregateInputType = {
    currentStep?: true
    totalSteps?: true
  }

  export type OnboardingDataMinAggregateInputType = {
    id?: true
    clientId?: true
    status?: true
    currentStep?: true
    totalSteps?: true
    submittedAt?: true
    reviewedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OnboardingDataMaxAggregateInputType = {
    id?: true
    clientId?: true
    status?: true
    currentStep?: true
    totalSteps?: true
    submittedAt?: true
    reviewedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OnboardingDataCountAggregateInputType = {
    id?: true
    clientId?: true
    personalInfo?: true
    contactInfo?: true
    employmentInfo?: true
    riskProfile?: true
    investmentObjectives?: true
    financialGoals?: true
    selectedAccountTypes?: true
    fundingMethods?: true
    uploadedDocuments?: true
    disclosures?: true
    complianceRecords?: true
    status?: true
    currentStep?: true
    totalSteps?: true
    submittedAt?: true
    reviewedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OnboardingDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OnboardingData to aggregate.
     */
    where?: OnboardingDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OnboardingData to fetch.
     */
    orderBy?: OnboardingDataOrderByWithRelationInput | OnboardingDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OnboardingDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OnboardingData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OnboardingData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OnboardingData
    **/
    _count?: true | OnboardingDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OnboardingDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OnboardingDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OnboardingDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OnboardingDataMaxAggregateInputType
  }

  export type GetOnboardingDataAggregateType<T extends OnboardingDataAggregateArgs> = {
        [P in keyof T & keyof AggregateOnboardingData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOnboardingData[P]>
      : GetScalarType<T[P], AggregateOnboardingData[P]>
  }




  export type OnboardingDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OnboardingDataWhereInput
    orderBy?: OnboardingDataOrderByWithAggregationInput | OnboardingDataOrderByWithAggregationInput[]
    by: OnboardingDataScalarFieldEnum[] | OnboardingDataScalarFieldEnum
    having?: OnboardingDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OnboardingDataCountAggregateInputType | true
    _avg?: OnboardingDataAvgAggregateInputType
    _sum?: OnboardingDataSumAggregateInputType
    _min?: OnboardingDataMinAggregateInputType
    _max?: OnboardingDataMaxAggregateInputType
  }

  export type OnboardingDataGroupByOutputType = {
    id: string
    clientId: string
    personalInfo: JsonValue
    contactInfo: JsonValue | null
    employmentInfo: JsonValue | null
    riskProfile: JsonValue | null
    investmentObjectives: JsonValue | null
    financialGoals: JsonValue
    selectedAccountTypes: JsonValue
    fundingMethods: JsonValue
    uploadedDocuments: JsonValue
    disclosures: JsonValue
    complianceRecords: JsonValue
    status: string
    currentStep: number
    totalSteps: number
    submittedAt: Date | null
    reviewedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: OnboardingDataCountAggregateOutputType | null
    _avg: OnboardingDataAvgAggregateOutputType | null
    _sum: OnboardingDataSumAggregateOutputType | null
    _min: OnboardingDataMinAggregateOutputType | null
    _max: OnboardingDataMaxAggregateOutputType | null
  }

  type GetOnboardingDataGroupByPayload<T extends OnboardingDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OnboardingDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OnboardingDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OnboardingDataGroupByOutputType[P]>
            : GetScalarType<T[P], OnboardingDataGroupByOutputType[P]>
        }
      >
    >


  export type OnboardingDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    personalInfo?: boolean
    contactInfo?: boolean
    employmentInfo?: boolean
    riskProfile?: boolean
    investmentObjectives?: boolean
    financialGoals?: boolean
    selectedAccountTypes?: boolean
    fundingMethods?: boolean
    uploadedDocuments?: boolean
    disclosures?: boolean
    complianceRecords?: boolean
    status?: boolean
    currentStep?: boolean
    totalSteps?: boolean
    submittedAt?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["onboardingData"]>

  export type OnboardingDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    personalInfo?: boolean
    contactInfo?: boolean
    employmentInfo?: boolean
    riskProfile?: boolean
    investmentObjectives?: boolean
    financialGoals?: boolean
    selectedAccountTypes?: boolean
    fundingMethods?: boolean
    uploadedDocuments?: boolean
    disclosures?: boolean
    complianceRecords?: boolean
    status?: boolean
    currentStep?: boolean
    totalSteps?: boolean
    submittedAt?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["onboardingData"]>

  export type OnboardingDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    personalInfo?: boolean
    contactInfo?: boolean
    employmentInfo?: boolean
    riskProfile?: boolean
    investmentObjectives?: boolean
    financialGoals?: boolean
    selectedAccountTypes?: boolean
    fundingMethods?: boolean
    uploadedDocuments?: boolean
    disclosures?: boolean
    complianceRecords?: boolean
    status?: boolean
    currentStep?: boolean
    totalSteps?: boolean
    submittedAt?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["onboardingData"]>

  export type OnboardingDataSelectScalar = {
    id?: boolean
    clientId?: boolean
    personalInfo?: boolean
    contactInfo?: boolean
    employmentInfo?: boolean
    riskProfile?: boolean
    investmentObjectives?: boolean
    financialGoals?: boolean
    selectedAccountTypes?: boolean
    fundingMethods?: boolean
    uploadedDocuments?: boolean
    disclosures?: boolean
    complianceRecords?: boolean
    status?: boolean
    currentStep?: boolean
    totalSteps?: boolean
    submittedAt?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OnboardingDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "personalInfo" | "contactInfo" | "employmentInfo" | "riskProfile" | "investmentObjectives" | "financialGoals" | "selectedAccountTypes" | "fundingMethods" | "uploadedDocuments" | "disclosures" | "complianceRecords" | "status" | "currentStep" | "totalSteps" | "submittedAt" | "reviewedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["onboardingData"]>
  export type OnboardingDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type OnboardingDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type OnboardingDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $OnboardingDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OnboardingData"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      personalInfo: Prisma.JsonValue
      contactInfo: Prisma.JsonValue | null
      employmentInfo: Prisma.JsonValue | null
      riskProfile: Prisma.JsonValue | null
      investmentObjectives: Prisma.JsonValue | null
      financialGoals: Prisma.JsonValue
      selectedAccountTypes: Prisma.JsonValue
      fundingMethods: Prisma.JsonValue
      uploadedDocuments: Prisma.JsonValue
      disclosures: Prisma.JsonValue
      complianceRecords: Prisma.JsonValue
      status: string
      currentStep: number
      totalSteps: number
      submittedAt: Date | null
      reviewedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["onboardingData"]>
    composites: {}
  }

  type OnboardingDataGetPayload<S extends boolean | null | undefined | OnboardingDataDefaultArgs> = $Result.GetResult<Prisma.$OnboardingDataPayload, S>

  type OnboardingDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OnboardingDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OnboardingDataCountAggregateInputType | true
    }

  export interface OnboardingDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OnboardingData'], meta: { name: 'OnboardingData' } }
    /**
     * Find zero or one OnboardingData that matches the filter.
     * @param {OnboardingDataFindUniqueArgs} args - Arguments to find a OnboardingData
     * @example
     * // Get one OnboardingData
     * const onboardingData = await prisma.onboardingData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OnboardingDataFindUniqueArgs>(args: SelectSubset<T, OnboardingDataFindUniqueArgs<ExtArgs>>): Prisma__OnboardingDataClient<$Result.GetResult<Prisma.$OnboardingDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OnboardingData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OnboardingDataFindUniqueOrThrowArgs} args - Arguments to find a OnboardingData
     * @example
     * // Get one OnboardingData
     * const onboardingData = await prisma.onboardingData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OnboardingDataFindUniqueOrThrowArgs>(args: SelectSubset<T, OnboardingDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OnboardingDataClient<$Result.GetResult<Prisma.$OnboardingDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OnboardingData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardingDataFindFirstArgs} args - Arguments to find a OnboardingData
     * @example
     * // Get one OnboardingData
     * const onboardingData = await prisma.onboardingData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OnboardingDataFindFirstArgs>(args?: SelectSubset<T, OnboardingDataFindFirstArgs<ExtArgs>>): Prisma__OnboardingDataClient<$Result.GetResult<Prisma.$OnboardingDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OnboardingData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardingDataFindFirstOrThrowArgs} args - Arguments to find a OnboardingData
     * @example
     * // Get one OnboardingData
     * const onboardingData = await prisma.onboardingData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OnboardingDataFindFirstOrThrowArgs>(args?: SelectSubset<T, OnboardingDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__OnboardingDataClient<$Result.GetResult<Prisma.$OnboardingDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OnboardingData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardingDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OnboardingData
     * const onboardingData = await prisma.onboardingData.findMany()
     * 
     * // Get first 10 OnboardingData
     * const onboardingData = await prisma.onboardingData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const onboardingDataWithIdOnly = await prisma.onboardingData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OnboardingDataFindManyArgs>(args?: SelectSubset<T, OnboardingDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OnboardingDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OnboardingData.
     * @param {OnboardingDataCreateArgs} args - Arguments to create a OnboardingData.
     * @example
     * // Create one OnboardingData
     * const OnboardingData = await prisma.onboardingData.create({
     *   data: {
     *     // ... data to create a OnboardingData
     *   }
     * })
     * 
     */
    create<T extends OnboardingDataCreateArgs>(args: SelectSubset<T, OnboardingDataCreateArgs<ExtArgs>>): Prisma__OnboardingDataClient<$Result.GetResult<Prisma.$OnboardingDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OnboardingData.
     * @param {OnboardingDataCreateManyArgs} args - Arguments to create many OnboardingData.
     * @example
     * // Create many OnboardingData
     * const onboardingData = await prisma.onboardingData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OnboardingDataCreateManyArgs>(args?: SelectSubset<T, OnboardingDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OnboardingData and returns the data saved in the database.
     * @param {OnboardingDataCreateManyAndReturnArgs} args - Arguments to create many OnboardingData.
     * @example
     * // Create many OnboardingData
     * const onboardingData = await prisma.onboardingData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OnboardingData and only return the `id`
     * const onboardingDataWithIdOnly = await prisma.onboardingData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OnboardingDataCreateManyAndReturnArgs>(args?: SelectSubset<T, OnboardingDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OnboardingDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OnboardingData.
     * @param {OnboardingDataDeleteArgs} args - Arguments to delete one OnboardingData.
     * @example
     * // Delete one OnboardingData
     * const OnboardingData = await prisma.onboardingData.delete({
     *   where: {
     *     // ... filter to delete one OnboardingData
     *   }
     * })
     * 
     */
    delete<T extends OnboardingDataDeleteArgs>(args: SelectSubset<T, OnboardingDataDeleteArgs<ExtArgs>>): Prisma__OnboardingDataClient<$Result.GetResult<Prisma.$OnboardingDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OnboardingData.
     * @param {OnboardingDataUpdateArgs} args - Arguments to update one OnboardingData.
     * @example
     * // Update one OnboardingData
     * const onboardingData = await prisma.onboardingData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OnboardingDataUpdateArgs>(args: SelectSubset<T, OnboardingDataUpdateArgs<ExtArgs>>): Prisma__OnboardingDataClient<$Result.GetResult<Prisma.$OnboardingDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OnboardingData.
     * @param {OnboardingDataDeleteManyArgs} args - Arguments to filter OnboardingData to delete.
     * @example
     * // Delete a few OnboardingData
     * const { count } = await prisma.onboardingData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OnboardingDataDeleteManyArgs>(args?: SelectSubset<T, OnboardingDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OnboardingData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardingDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OnboardingData
     * const onboardingData = await prisma.onboardingData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OnboardingDataUpdateManyArgs>(args: SelectSubset<T, OnboardingDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OnboardingData and returns the data updated in the database.
     * @param {OnboardingDataUpdateManyAndReturnArgs} args - Arguments to update many OnboardingData.
     * @example
     * // Update many OnboardingData
     * const onboardingData = await prisma.onboardingData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OnboardingData and only return the `id`
     * const onboardingDataWithIdOnly = await prisma.onboardingData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OnboardingDataUpdateManyAndReturnArgs>(args: SelectSubset<T, OnboardingDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OnboardingDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OnboardingData.
     * @param {OnboardingDataUpsertArgs} args - Arguments to update or create a OnboardingData.
     * @example
     * // Update or create a OnboardingData
     * const onboardingData = await prisma.onboardingData.upsert({
     *   create: {
     *     // ... data to create a OnboardingData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OnboardingData we want to update
     *   }
     * })
     */
    upsert<T extends OnboardingDataUpsertArgs>(args: SelectSubset<T, OnboardingDataUpsertArgs<ExtArgs>>): Prisma__OnboardingDataClient<$Result.GetResult<Prisma.$OnboardingDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OnboardingData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardingDataCountArgs} args - Arguments to filter OnboardingData to count.
     * @example
     * // Count the number of OnboardingData
     * const count = await prisma.onboardingData.count({
     *   where: {
     *     // ... the filter for the OnboardingData we want to count
     *   }
     * })
    **/
    count<T extends OnboardingDataCountArgs>(
      args?: Subset<T, OnboardingDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OnboardingDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OnboardingData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardingDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OnboardingDataAggregateArgs>(args: Subset<T, OnboardingDataAggregateArgs>): Prisma.PrismaPromise<GetOnboardingDataAggregateType<T>>

    /**
     * Group by OnboardingData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardingDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OnboardingDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OnboardingDataGroupByArgs['orderBy'] }
        : { orderBy?: OnboardingDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OnboardingDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOnboardingDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OnboardingData model
   */
  readonly fields: OnboardingDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OnboardingData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OnboardingDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OnboardingData model
   */
  interface OnboardingDataFieldRefs {
    readonly id: FieldRef<"OnboardingData", 'String'>
    readonly clientId: FieldRef<"OnboardingData", 'String'>
    readonly personalInfo: FieldRef<"OnboardingData", 'Json'>
    readonly contactInfo: FieldRef<"OnboardingData", 'Json'>
    readonly employmentInfo: FieldRef<"OnboardingData", 'Json'>
    readonly riskProfile: FieldRef<"OnboardingData", 'Json'>
    readonly investmentObjectives: FieldRef<"OnboardingData", 'Json'>
    readonly financialGoals: FieldRef<"OnboardingData", 'Json'>
    readonly selectedAccountTypes: FieldRef<"OnboardingData", 'Json'>
    readonly fundingMethods: FieldRef<"OnboardingData", 'Json'>
    readonly uploadedDocuments: FieldRef<"OnboardingData", 'Json'>
    readonly disclosures: FieldRef<"OnboardingData", 'Json'>
    readonly complianceRecords: FieldRef<"OnboardingData", 'Json'>
    readonly status: FieldRef<"OnboardingData", 'String'>
    readonly currentStep: FieldRef<"OnboardingData", 'Int'>
    readonly totalSteps: FieldRef<"OnboardingData", 'Int'>
    readonly submittedAt: FieldRef<"OnboardingData", 'DateTime'>
    readonly reviewedAt: FieldRef<"OnboardingData", 'DateTime'>
    readonly createdAt: FieldRef<"OnboardingData", 'DateTime'>
    readonly updatedAt: FieldRef<"OnboardingData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OnboardingData findUnique
   */
  export type OnboardingDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnboardingData
     */
    select?: OnboardingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnboardingData
     */
    omit?: OnboardingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingDataInclude<ExtArgs> | null
    /**
     * Filter, which OnboardingData to fetch.
     */
    where: OnboardingDataWhereUniqueInput
  }

  /**
   * OnboardingData findUniqueOrThrow
   */
  export type OnboardingDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnboardingData
     */
    select?: OnboardingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnboardingData
     */
    omit?: OnboardingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingDataInclude<ExtArgs> | null
    /**
     * Filter, which OnboardingData to fetch.
     */
    where: OnboardingDataWhereUniqueInput
  }

  /**
   * OnboardingData findFirst
   */
  export type OnboardingDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnboardingData
     */
    select?: OnboardingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnboardingData
     */
    omit?: OnboardingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingDataInclude<ExtArgs> | null
    /**
     * Filter, which OnboardingData to fetch.
     */
    where?: OnboardingDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OnboardingData to fetch.
     */
    orderBy?: OnboardingDataOrderByWithRelationInput | OnboardingDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OnboardingData.
     */
    cursor?: OnboardingDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OnboardingData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OnboardingData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OnboardingData.
     */
    distinct?: OnboardingDataScalarFieldEnum | OnboardingDataScalarFieldEnum[]
  }

  /**
   * OnboardingData findFirstOrThrow
   */
  export type OnboardingDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnboardingData
     */
    select?: OnboardingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnboardingData
     */
    omit?: OnboardingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingDataInclude<ExtArgs> | null
    /**
     * Filter, which OnboardingData to fetch.
     */
    where?: OnboardingDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OnboardingData to fetch.
     */
    orderBy?: OnboardingDataOrderByWithRelationInput | OnboardingDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OnboardingData.
     */
    cursor?: OnboardingDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OnboardingData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OnboardingData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OnboardingData.
     */
    distinct?: OnboardingDataScalarFieldEnum | OnboardingDataScalarFieldEnum[]
  }

  /**
   * OnboardingData findMany
   */
  export type OnboardingDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnboardingData
     */
    select?: OnboardingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnboardingData
     */
    omit?: OnboardingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingDataInclude<ExtArgs> | null
    /**
     * Filter, which OnboardingData to fetch.
     */
    where?: OnboardingDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OnboardingData to fetch.
     */
    orderBy?: OnboardingDataOrderByWithRelationInput | OnboardingDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OnboardingData.
     */
    cursor?: OnboardingDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OnboardingData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OnboardingData.
     */
    skip?: number
    distinct?: OnboardingDataScalarFieldEnum | OnboardingDataScalarFieldEnum[]
  }

  /**
   * OnboardingData create
   */
  export type OnboardingDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnboardingData
     */
    select?: OnboardingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnboardingData
     */
    omit?: OnboardingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingDataInclude<ExtArgs> | null
    /**
     * The data needed to create a OnboardingData.
     */
    data: XOR<OnboardingDataCreateInput, OnboardingDataUncheckedCreateInput>
  }

  /**
   * OnboardingData createMany
   */
  export type OnboardingDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OnboardingData.
     */
    data: OnboardingDataCreateManyInput | OnboardingDataCreateManyInput[]
  }

  /**
   * OnboardingData createManyAndReturn
   */
  export type OnboardingDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnboardingData
     */
    select?: OnboardingDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OnboardingData
     */
    omit?: OnboardingDataOmit<ExtArgs> | null
    /**
     * The data used to create many OnboardingData.
     */
    data: OnboardingDataCreateManyInput | OnboardingDataCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OnboardingData update
   */
  export type OnboardingDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnboardingData
     */
    select?: OnboardingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnboardingData
     */
    omit?: OnboardingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingDataInclude<ExtArgs> | null
    /**
     * The data needed to update a OnboardingData.
     */
    data: XOR<OnboardingDataUpdateInput, OnboardingDataUncheckedUpdateInput>
    /**
     * Choose, which OnboardingData to update.
     */
    where: OnboardingDataWhereUniqueInput
  }

  /**
   * OnboardingData updateMany
   */
  export type OnboardingDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OnboardingData.
     */
    data: XOR<OnboardingDataUpdateManyMutationInput, OnboardingDataUncheckedUpdateManyInput>
    /**
     * Filter which OnboardingData to update
     */
    where?: OnboardingDataWhereInput
    /**
     * Limit how many OnboardingData to update.
     */
    limit?: number
  }

  /**
   * OnboardingData updateManyAndReturn
   */
  export type OnboardingDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnboardingData
     */
    select?: OnboardingDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OnboardingData
     */
    omit?: OnboardingDataOmit<ExtArgs> | null
    /**
     * The data used to update OnboardingData.
     */
    data: XOR<OnboardingDataUpdateManyMutationInput, OnboardingDataUncheckedUpdateManyInput>
    /**
     * Filter which OnboardingData to update
     */
    where?: OnboardingDataWhereInput
    /**
     * Limit how many OnboardingData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OnboardingData upsert
   */
  export type OnboardingDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnboardingData
     */
    select?: OnboardingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnboardingData
     */
    omit?: OnboardingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingDataInclude<ExtArgs> | null
    /**
     * The filter to search for the OnboardingData to update in case it exists.
     */
    where: OnboardingDataWhereUniqueInput
    /**
     * In case the OnboardingData found by the `where` argument doesn't exist, create a new OnboardingData with this data.
     */
    create: XOR<OnboardingDataCreateInput, OnboardingDataUncheckedCreateInput>
    /**
     * In case the OnboardingData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OnboardingDataUpdateInput, OnboardingDataUncheckedUpdateInput>
  }

  /**
   * OnboardingData delete
   */
  export type OnboardingDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnboardingData
     */
    select?: OnboardingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnboardingData
     */
    omit?: OnboardingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingDataInclude<ExtArgs> | null
    /**
     * Filter which OnboardingData to delete.
     */
    where: OnboardingDataWhereUniqueInput
  }

  /**
   * OnboardingData deleteMany
   */
  export type OnboardingDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OnboardingData to delete
     */
    where?: OnboardingDataWhereInput
    /**
     * Limit how many OnboardingData to delete.
     */
    limit?: number
  }

  /**
   * OnboardingData without action
   */
  export type OnboardingDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnboardingData
     */
    select?: OnboardingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnboardingData
     */
    omit?: OnboardingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingDataInclude<ExtArgs> | null
  }


  /**
   * Model RiskAssessment
   */

  export type AggregateRiskAssessment = {
    _count: RiskAssessmentCountAggregateOutputType | null
    _min: RiskAssessmentMinAggregateOutputType | null
    _max: RiskAssessmentMaxAggregateOutputType | null
  }

  export type RiskAssessmentMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    investmentExperience: string | null
    riskTolerance: string | null
    investmentTimeHorizon: string | null
    liquidityNeeds: string | null
    ageRange: string | null
    investmentKnowledge: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RiskAssessmentMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    investmentExperience: string | null
    riskTolerance: string | null
    investmentTimeHorizon: string | null
    liquidityNeeds: string | null
    ageRange: string | null
    investmentKnowledge: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RiskAssessmentCountAggregateOutputType = {
    id: number
    clientId: number
    investmentExperience: number
    riskTolerance: number
    investmentTimeHorizon: number
    liquidityNeeds: number
    ageRange: number
    investmentKnowledge: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RiskAssessmentMinAggregateInputType = {
    id?: true
    clientId?: true
    investmentExperience?: true
    riskTolerance?: true
    investmentTimeHorizon?: true
    liquidityNeeds?: true
    ageRange?: true
    investmentKnowledge?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RiskAssessmentMaxAggregateInputType = {
    id?: true
    clientId?: true
    investmentExperience?: true
    riskTolerance?: true
    investmentTimeHorizon?: true
    liquidityNeeds?: true
    ageRange?: true
    investmentKnowledge?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RiskAssessmentCountAggregateInputType = {
    id?: true
    clientId?: true
    investmentExperience?: true
    riskTolerance?: true
    investmentTimeHorizon?: true
    liquidityNeeds?: true
    ageRange?: true
    investmentKnowledge?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RiskAssessmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RiskAssessment to aggregate.
     */
    where?: RiskAssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskAssessments to fetch.
     */
    orderBy?: RiskAssessmentOrderByWithRelationInput | RiskAssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RiskAssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskAssessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskAssessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RiskAssessments
    **/
    _count?: true | RiskAssessmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RiskAssessmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RiskAssessmentMaxAggregateInputType
  }

  export type GetRiskAssessmentAggregateType<T extends RiskAssessmentAggregateArgs> = {
        [P in keyof T & keyof AggregateRiskAssessment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRiskAssessment[P]>
      : GetScalarType<T[P], AggregateRiskAssessment[P]>
  }




  export type RiskAssessmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RiskAssessmentWhereInput
    orderBy?: RiskAssessmentOrderByWithAggregationInput | RiskAssessmentOrderByWithAggregationInput[]
    by: RiskAssessmentScalarFieldEnum[] | RiskAssessmentScalarFieldEnum
    having?: RiskAssessmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RiskAssessmentCountAggregateInputType | true
    _min?: RiskAssessmentMinAggregateInputType
    _max?: RiskAssessmentMaxAggregateInputType
  }

  export type RiskAssessmentGroupByOutputType = {
    id: string
    clientId: string
    investmentExperience: string
    riskTolerance: string
    investmentTimeHorizon: string
    liquidityNeeds: string
    ageRange: string
    investmentKnowledge: string
    createdAt: Date
    updatedAt: Date
    _count: RiskAssessmentCountAggregateOutputType | null
    _min: RiskAssessmentMinAggregateOutputType | null
    _max: RiskAssessmentMaxAggregateOutputType | null
  }

  type GetRiskAssessmentGroupByPayload<T extends RiskAssessmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RiskAssessmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RiskAssessmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RiskAssessmentGroupByOutputType[P]>
            : GetScalarType<T[P], RiskAssessmentGroupByOutputType[P]>
        }
      >
    >


  export type RiskAssessmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    investmentExperience?: boolean
    riskTolerance?: boolean
    investmentTimeHorizon?: boolean
    liquidityNeeds?: boolean
    ageRange?: boolean
    investmentKnowledge?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["riskAssessment"]>

  export type RiskAssessmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    investmentExperience?: boolean
    riskTolerance?: boolean
    investmentTimeHorizon?: boolean
    liquidityNeeds?: boolean
    ageRange?: boolean
    investmentKnowledge?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["riskAssessment"]>

  export type RiskAssessmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    investmentExperience?: boolean
    riskTolerance?: boolean
    investmentTimeHorizon?: boolean
    liquidityNeeds?: boolean
    ageRange?: boolean
    investmentKnowledge?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["riskAssessment"]>

  export type RiskAssessmentSelectScalar = {
    id?: boolean
    clientId?: boolean
    investmentExperience?: boolean
    riskTolerance?: boolean
    investmentTimeHorizon?: boolean
    liquidityNeeds?: boolean
    ageRange?: boolean
    investmentKnowledge?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RiskAssessmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "investmentExperience" | "riskTolerance" | "investmentTimeHorizon" | "liquidityNeeds" | "ageRange" | "investmentKnowledge" | "createdAt" | "updatedAt", ExtArgs["result"]["riskAssessment"]>
  export type RiskAssessmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type RiskAssessmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type RiskAssessmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $RiskAssessmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RiskAssessment"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      investmentExperience: string
      riskTolerance: string
      investmentTimeHorizon: string
      liquidityNeeds: string
      ageRange: string
      investmentKnowledge: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["riskAssessment"]>
    composites: {}
  }

  type RiskAssessmentGetPayload<S extends boolean | null | undefined | RiskAssessmentDefaultArgs> = $Result.GetResult<Prisma.$RiskAssessmentPayload, S>

  type RiskAssessmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RiskAssessmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RiskAssessmentCountAggregateInputType | true
    }

  export interface RiskAssessmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RiskAssessment'], meta: { name: 'RiskAssessment' } }
    /**
     * Find zero or one RiskAssessment that matches the filter.
     * @param {RiskAssessmentFindUniqueArgs} args - Arguments to find a RiskAssessment
     * @example
     * // Get one RiskAssessment
     * const riskAssessment = await prisma.riskAssessment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RiskAssessmentFindUniqueArgs>(args: SelectSubset<T, RiskAssessmentFindUniqueArgs<ExtArgs>>): Prisma__RiskAssessmentClient<$Result.GetResult<Prisma.$RiskAssessmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RiskAssessment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RiskAssessmentFindUniqueOrThrowArgs} args - Arguments to find a RiskAssessment
     * @example
     * // Get one RiskAssessment
     * const riskAssessment = await prisma.riskAssessment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RiskAssessmentFindUniqueOrThrowArgs>(args: SelectSubset<T, RiskAssessmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RiskAssessmentClient<$Result.GetResult<Prisma.$RiskAssessmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RiskAssessment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskAssessmentFindFirstArgs} args - Arguments to find a RiskAssessment
     * @example
     * // Get one RiskAssessment
     * const riskAssessment = await prisma.riskAssessment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RiskAssessmentFindFirstArgs>(args?: SelectSubset<T, RiskAssessmentFindFirstArgs<ExtArgs>>): Prisma__RiskAssessmentClient<$Result.GetResult<Prisma.$RiskAssessmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RiskAssessment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskAssessmentFindFirstOrThrowArgs} args - Arguments to find a RiskAssessment
     * @example
     * // Get one RiskAssessment
     * const riskAssessment = await prisma.riskAssessment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RiskAssessmentFindFirstOrThrowArgs>(args?: SelectSubset<T, RiskAssessmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__RiskAssessmentClient<$Result.GetResult<Prisma.$RiskAssessmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RiskAssessments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskAssessmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RiskAssessments
     * const riskAssessments = await prisma.riskAssessment.findMany()
     * 
     * // Get first 10 RiskAssessments
     * const riskAssessments = await prisma.riskAssessment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const riskAssessmentWithIdOnly = await prisma.riskAssessment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RiskAssessmentFindManyArgs>(args?: SelectSubset<T, RiskAssessmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskAssessmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RiskAssessment.
     * @param {RiskAssessmentCreateArgs} args - Arguments to create a RiskAssessment.
     * @example
     * // Create one RiskAssessment
     * const RiskAssessment = await prisma.riskAssessment.create({
     *   data: {
     *     // ... data to create a RiskAssessment
     *   }
     * })
     * 
     */
    create<T extends RiskAssessmentCreateArgs>(args: SelectSubset<T, RiskAssessmentCreateArgs<ExtArgs>>): Prisma__RiskAssessmentClient<$Result.GetResult<Prisma.$RiskAssessmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RiskAssessments.
     * @param {RiskAssessmentCreateManyArgs} args - Arguments to create many RiskAssessments.
     * @example
     * // Create many RiskAssessments
     * const riskAssessment = await prisma.riskAssessment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RiskAssessmentCreateManyArgs>(args?: SelectSubset<T, RiskAssessmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RiskAssessments and returns the data saved in the database.
     * @param {RiskAssessmentCreateManyAndReturnArgs} args - Arguments to create many RiskAssessments.
     * @example
     * // Create many RiskAssessments
     * const riskAssessment = await prisma.riskAssessment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RiskAssessments and only return the `id`
     * const riskAssessmentWithIdOnly = await prisma.riskAssessment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RiskAssessmentCreateManyAndReturnArgs>(args?: SelectSubset<T, RiskAssessmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskAssessmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RiskAssessment.
     * @param {RiskAssessmentDeleteArgs} args - Arguments to delete one RiskAssessment.
     * @example
     * // Delete one RiskAssessment
     * const RiskAssessment = await prisma.riskAssessment.delete({
     *   where: {
     *     // ... filter to delete one RiskAssessment
     *   }
     * })
     * 
     */
    delete<T extends RiskAssessmentDeleteArgs>(args: SelectSubset<T, RiskAssessmentDeleteArgs<ExtArgs>>): Prisma__RiskAssessmentClient<$Result.GetResult<Prisma.$RiskAssessmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RiskAssessment.
     * @param {RiskAssessmentUpdateArgs} args - Arguments to update one RiskAssessment.
     * @example
     * // Update one RiskAssessment
     * const riskAssessment = await prisma.riskAssessment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RiskAssessmentUpdateArgs>(args: SelectSubset<T, RiskAssessmentUpdateArgs<ExtArgs>>): Prisma__RiskAssessmentClient<$Result.GetResult<Prisma.$RiskAssessmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RiskAssessments.
     * @param {RiskAssessmentDeleteManyArgs} args - Arguments to filter RiskAssessments to delete.
     * @example
     * // Delete a few RiskAssessments
     * const { count } = await prisma.riskAssessment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RiskAssessmentDeleteManyArgs>(args?: SelectSubset<T, RiskAssessmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RiskAssessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskAssessmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RiskAssessments
     * const riskAssessment = await prisma.riskAssessment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RiskAssessmentUpdateManyArgs>(args: SelectSubset<T, RiskAssessmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RiskAssessments and returns the data updated in the database.
     * @param {RiskAssessmentUpdateManyAndReturnArgs} args - Arguments to update many RiskAssessments.
     * @example
     * // Update many RiskAssessments
     * const riskAssessment = await prisma.riskAssessment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RiskAssessments and only return the `id`
     * const riskAssessmentWithIdOnly = await prisma.riskAssessment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RiskAssessmentUpdateManyAndReturnArgs>(args: SelectSubset<T, RiskAssessmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskAssessmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RiskAssessment.
     * @param {RiskAssessmentUpsertArgs} args - Arguments to update or create a RiskAssessment.
     * @example
     * // Update or create a RiskAssessment
     * const riskAssessment = await prisma.riskAssessment.upsert({
     *   create: {
     *     // ... data to create a RiskAssessment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RiskAssessment we want to update
     *   }
     * })
     */
    upsert<T extends RiskAssessmentUpsertArgs>(args: SelectSubset<T, RiskAssessmentUpsertArgs<ExtArgs>>): Prisma__RiskAssessmentClient<$Result.GetResult<Prisma.$RiskAssessmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RiskAssessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskAssessmentCountArgs} args - Arguments to filter RiskAssessments to count.
     * @example
     * // Count the number of RiskAssessments
     * const count = await prisma.riskAssessment.count({
     *   where: {
     *     // ... the filter for the RiskAssessments we want to count
     *   }
     * })
    **/
    count<T extends RiskAssessmentCountArgs>(
      args?: Subset<T, RiskAssessmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RiskAssessmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RiskAssessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskAssessmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RiskAssessmentAggregateArgs>(args: Subset<T, RiskAssessmentAggregateArgs>): Prisma.PrismaPromise<GetRiskAssessmentAggregateType<T>>

    /**
     * Group by RiskAssessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskAssessmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RiskAssessmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RiskAssessmentGroupByArgs['orderBy'] }
        : { orderBy?: RiskAssessmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RiskAssessmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRiskAssessmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RiskAssessment model
   */
  readonly fields: RiskAssessmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RiskAssessment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RiskAssessmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RiskAssessment model
   */
  interface RiskAssessmentFieldRefs {
    readonly id: FieldRef<"RiskAssessment", 'String'>
    readonly clientId: FieldRef<"RiskAssessment", 'String'>
    readonly investmentExperience: FieldRef<"RiskAssessment", 'String'>
    readonly riskTolerance: FieldRef<"RiskAssessment", 'String'>
    readonly investmentTimeHorizon: FieldRef<"RiskAssessment", 'String'>
    readonly liquidityNeeds: FieldRef<"RiskAssessment", 'String'>
    readonly ageRange: FieldRef<"RiskAssessment", 'String'>
    readonly investmentKnowledge: FieldRef<"RiskAssessment", 'String'>
    readonly createdAt: FieldRef<"RiskAssessment", 'DateTime'>
    readonly updatedAt: FieldRef<"RiskAssessment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RiskAssessment findUnique
   */
  export type RiskAssessmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAssessment
     */
    select?: RiskAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAssessment
     */
    omit?: RiskAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAssessmentInclude<ExtArgs> | null
    /**
     * Filter, which RiskAssessment to fetch.
     */
    where: RiskAssessmentWhereUniqueInput
  }

  /**
   * RiskAssessment findUniqueOrThrow
   */
  export type RiskAssessmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAssessment
     */
    select?: RiskAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAssessment
     */
    omit?: RiskAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAssessmentInclude<ExtArgs> | null
    /**
     * Filter, which RiskAssessment to fetch.
     */
    where: RiskAssessmentWhereUniqueInput
  }

  /**
   * RiskAssessment findFirst
   */
  export type RiskAssessmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAssessment
     */
    select?: RiskAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAssessment
     */
    omit?: RiskAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAssessmentInclude<ExtArgs> | null
    /**
     * Filter, which RiskAssessment to fetch.
     */
    where?: RiskAssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskAssessments to fetch.
     */
    orderBy?: RiskAssessmentOrderByWithRelationInput | RiskAssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RiskAssessments.
     */
    cursor?: RiskAssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskAssessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskAssessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskAssessments.
     */
    distinct?: RiskAssessmentScalarFieldEnum | RiskAssessmentScalarFieldEnum[]
  }

  /**
   * RiskAssessment findFirstOrThrow
   */
  export type RiskAssessmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAssessment
     */
    select?: RiskAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAssessment
     */
    omit?: RiskAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAssessmentInclude<ExtArgs> | null
    /**
     * Filter, which RiskAssessment to fetch.
     */
    where?: RiskAssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskAssessments to fetch.
     */
    orderBy?: RiskAssessmentOrderByWithRelationInput | RiskAssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RiskAssessments.
     */
    cursor?: RiskAssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskAssessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskAssessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskAssessments.
     */
    distinct?: RiskAssessmentScalarFieldEnum | RiskAssessmentScalarFieldEnum[]
  }

  /**
   * RiskAssessment findMany
   */
  export type RiskAssessmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAssessment
     */
    select?: RiskAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAssessment
     */
    omit?: RiskAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAssessmentInclude<ExtArgs> | null
    /**
     * Filter, which RiskAssessments to fetch.
     */
    where?: RiskAssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskAssessments to fetch.
     */
    orderBy?: RiskAssessmentOrderByWithRelationInput | RiskAssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RiskAssessments.
     */
    cursor?: RiskAssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskAssessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskAssessments.
     */
    skip?: number
    distinct?: RiskAssessmentScalarFieldEnum | RiskAssessmentScalarFieldEnum[]
  }

  /**
   * RiskAssessment create
   */
  export type RiskAssessmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAssessment
     */
    select?: RiskAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAssessment
     */
    omit?: RiskAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAssessmentInclude<ExtArgs> | null
    /**
     * The data needed to create a RiskAssessment.
     */
    data: XOR<RiskAssessmentCreateInput, RiskAssessmentUncheckedCreateInput>
  }

  /**
   * RiskAssessment createMany
   */
  export type RiskAssessmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RiskAssessments.
     */
    data: RiskAssessmentCreateManyInput | RiskAssessmentCreateManyInput[]
  }

  /**
   * RiskAssessment createManyAndReturn
   */
  export type RiskAssessmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAssessment
     */
    select?: RiskAssessmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAssessment
     */
    omit?: RiskAssessmentOmit<ExtArgs> | null
    /**
     * The data used to create many RiskAssessments.
     */
    data: RiskAssessmentCreateManyInput | RiskAssessmentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAssessmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RiskAssessment update
   */
  export type RiskAssessmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAssessment
     */
    select?: RiskAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAssessment
     */
    omit?: RiskAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAssessmentInclude<ExtArgs> | null
    /**
     * The data needed to update a RiskAssessment.
     */
    data: XOR<RiskAssessmentUpdateInput, RiskAssessmentUncheckedUpdateInput>
    /**
     * Choose, which RiskAssessment to update.
     */
    where: RiskAssessmentWhereUniqueInput
  }

  /**
   * RiskAssessment updateMany
   */
  export type RiskAssessmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RiskAssessments.
     */
    data: XOR<RiskAssessmentUpdateManyMutationInput, RiskAssessmentUncheckedUpdateManyInput>
    /**
     * Filter which RiskAssessments to update
     */
    where?: RiskAssessmentWhereInput
    /**
     * Limit how many RiskAssessments to update.
     */
    limit?: number
  }

  /**
   * RiskAssessment updateManyAndReturn
   */
  export type RiskAssessmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAssessment
     */
    select?: RiskAssessmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAssessment
     */
    omit?: RiskAssessmentOmit<ExtArgs> | null
    /**
     * The data used to update RiskAssessments.
     */
    data: XOR<RiskAssessmentUpdateManyMutationInput, RiskAssessmentUncheckedUpdateManyInput>
    /**
     * Filter which RiskAssessments to update
     */
    where?: RiskAssessmentWhereInput
    /**
     * Limit how many RiskAssessments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAssessmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RiskAssessment upsert
   */
  export type RiskAssessmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAssessment
     */
    select?: RiskAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAssessment
     */
    omit?: RiskAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAssessmentInclude<ExtArgs> | null
    /**
     * The filter to search for the RiskAssessment to update in case it exists.
     */
    where: RiskAssessmentWhereUniqueInput
    /**
     * In case the RiskAssessment found by the `where` argument doesn't exist, create a new RiskAssessment with this data.
     */
    create: XOR<RiskAssessmentCreateInput, RiskAssessmentUncheckedCreateInput>
    /**
     * In case the RiskAssessment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RiskAssessmentUpdateInput, RiskAssessmentUncheckedUpdateInput>
  }

  /**
   * RiskAssessment delete
   */
  export type RiskAssessmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAssessment
     */
    select?: RiskAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAssessment
     */
    omit?: RiskAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAssessmentInclude<ExtArgs> | null
    /**
     * Filter which RiskAssessment to delete.
     */
    where: RiskAssessmentWhereUniqueInput
  }

  /**
   * RiskAssessment deleteMany
   */
  export type RiskAssessmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RiskAssessments to delete
     */
    where?: RiskAssessmentWhereInput
    /**
     * Limit how many RiskAssessments to delete.
     */
    limit?: number
  }

  /**
   * RiskAssessment without action
   */
  export type RiskAssessmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAssessment
     */
    select?: RiskAssessmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAssessment
     */
    omit?: RiskAssessmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAssessmentInclude<ExtArgs> | null
  }


  /**
   * Model InvestmentObjectives
   */

  export type AggregateInvestmentObjectives = {
    _count: InvestmentObjectivesCountAggregateOutputType | null
    _avg: InvestmentObjectivesAvgAggregateOutputType | null
    _sum: InvestmentObjectivesSumAggregateOutputType | null
    _min: InvestmentObjectivesMinAggregateOutputType | null
    _max: InvestmentObjectivesMaxAggregateOutputType | null
  }

  export type InvestmentObjectivesAvgAggregateOutputType = {
    targetAmount: number | null
    timeHorizon: number | null
    monthlyContribution: number | null
    riskComfort: number | null
  }

  export type InvestmentObjectivesSumAggregateOutputType = {
    targetAmount: number | null
    timeHorizon: number | null
    monthlyContribution: number | null
    riskComfort: number | null
  }

  export type InvestmentObjectivesMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    primaryGoal: string | null
    targetAmount: number | null
    timeHorizon: number | null
    monthlyContribution: number | null
    riskComfort: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvestmentObjectivesMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    primaryGoal: string | null
    targetAmount: number | null
    timeHorizon: number | null
    monthlyContribution: number | null
    riskComfort: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvestmentObjectivesCountAggregateOutputType = {
    id: number
    clientId: number
    primaryGoal: number
    specificGoals: number
    targetAmount: number
    timeHorizon: number
    monthlyContribution: number
    riskComfort: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvestmentObjectivesAvgAggregateInputType = {
    targetAmount?: true
    timeHorizon?: true
    monthlyContribution?: true
    riskComfort?: true
  }

  export type InvestmentObjectivesSumAggregateInputType = {
    targetAmount?: true
    timeHorizon?: true
    monthlyContribution?: true
    riskComfort?: true
  }

  export type InvestmentObjectivesMinAggregateInputType = {
    id?: true
    clientId?: true
    primaryGoal?: true
    targetAmount?: true
    timeHorizon?: true
    monthlyContribution?: true
    riskComfort?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvestmentObjectivesMaxAggregateInputType = {
    id?: true
    clientId?: true
    primaryGoal?: true
    targetAmount?: true
    timeHorizon?: true
    monthlyContribution?: true
    riskComfort?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvestmentObjectivesCountAggregateInputType = {
    id?: true
    clientId?: true
    primaryGoal?: true
    specificGoals?: true
    targetAmount?: true
    timeHorizon?: true
    monthlyContribution?: true
    riskComfort?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvestmentObjectivesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvestmentObjectives to aggregate.
     */
    where?: InvestmentObjectivesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestmentObjectives to fetch.
     */
    orderBy?: InvestmentObjectivesOrderByWithRelationInput | InvestmentObjectivesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvestmentObjectivesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestmentObjectives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestmentObjectives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvestmentObjectives
    **/
    _count?: true | InvestmentObjectivesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvestmentObjectivesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvestmentObjectivesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvestmentObjectivesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvestmentObjectivesMaxAggregateInputType
  }

  export type GetInvestmentObjectivesAggregateType<T extends InvestmentObjectivesAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestmentObjectives]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestmentObjectives[P]>
      : GetScalarType<T[P], AggregateInvestmentObjectives[P]>
  }




  export type InvestmentObjectivesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentObjectivesWhereInput
    orderBy?: InvestmentObjectivesOrderByWithAggregationInput | InvestmentObjectivesOrderByWithAggregationInput[]
    by: InvestmentObjectivesScalarFieldEnum[] | InvestmentObjectivesScalarFieldEnum
    having?: InvestmentObjectivesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvestmentObjectivesCountAggregateInputType | true
    _avg?: InvestmentObjectivesAvgAggregateInputType
    _sum?: InvestmentObjectivesSumAggregateInputType
    _min?: InvestmentObjectivesMinAggregateInputType
    _max?: InvestmentObjectivesMaxAggregateInputType
  }

  export type InvestmentObjectivesGroupByOutputType = {
    id: string
    clientId: string
    primaryGoal: string
    specificGoals: JsonValue
    targetAmount: number | null
    timeHorizon: number
    monthlyContribution: number | null
    riskComfort: number
    createdAt: Date
    updatedAt: Date
    _count: InvestmentObjectivesCountAggregateOutputType | null
    _avg: InvestmentObjectivesAvgAggregateOutputType | null
    _sum: InvestmentObjectivesSumAggregateOutputType | null
    _min: InvestmentObjectivesMinAggregateOutputType | null
    _max: InvestmentObjectivesMaxAggregateOutputType | null
  }

  type GetInvestmentObjectivesGroupByPayload<T extends InvestmentObjectivesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvestmentObjectivesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvestmentObjectivesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvestmentObjectivesGroupByOutputType[P]>
            : GetScalarType<T[P], InvestmentObjectivesGroupByOutputType[P]>
        }
      >
    >


  export type InvestmentObjectivesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    primaryGoal?: boolean
    specificGoals?: boolean
    targetAmount?: boolean
    timeHorizon?: boolean
    monthlyContribution?: boolean
    riskComfort?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investmentObjectives"]>

  export type InvestmentObjectivesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    primaryGoal?: boolean
    specificGoals?: boolean
    targetAmount?: boolean
    timeHorizon?: boolean
    monthlyContribution?: boolean
    riskComfort?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investmentObjectives"]>

  export type InvestmentObjectivesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    primaryGoal?: boolean
    specificGoals?: boolean
    targetAmount?: boolean
    timeHorizon?: boolean
    monthlyContribution?: boolean
    riskComfort?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investmentObjectives"]>

  export type InvestmentObjectivesSelectScalar = {
    id?: boolean
    clientId?: boolean
    primaryGoal?: boolean
    specificGoals?: boolean
    targetAmount?: boolean
    timeHorizon?: boolean
    monthlyContribution?: boolean
    riskComfort?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvestmentObjectivesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "primaryGoal" | "specificGoals" | "targetAmount" | "timeHorizon" | "monthlyContribution" | "riskComfort" | "createdAt" | "updatedAt", ExtArgs["result"]["investmentObjectives"]>
  export type InvestmentObjectivesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type InvestmentObjectivesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type InvestmentObjectivesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $InvestmentObjectivesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvestmentObjectives"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      primaryGoal: string
      specificGoals: Prisma.JsonValue
      targetAmount: number | null
      timeHorizon: number
      monthlyContribution: number | null
      riskComfort: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["investmentObjectives"]>
    composites: {}
  }

  type InvestmentObjectivesGetPayload<S extends boolean | null | undefined | InvestmentObjectivesDefaultArgs> = $Result.GetResult<Prisma.$InvestmentObjectivesPayload, S>

  type InvestmentObjectivesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvestmentObjectivesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvestmentObjectivesCountAggregateInputType | true
    }

  export interface InvestmentObjectivesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvestmentObjectives'], meta: { name: 'InvestmentObjectives' } }
    /**
     * Find zero or one InvestmentObjectives that matches the filter.
     * @param {InvestmentObjectivesFindUniqueArgs} args - Arguments to find a InvestmentObjectives
     * @example
     * // Get one InvestmentObjectives
     * const investmentObjectives = await prisma.investmentObjectives.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvestmentObjectivesFindUniqueArgs>(args: SelectSubset<T, InvestmentObjectivesFindUniqueArgs<ExtArgs>>): Prisma__InvestmentObjectivesClient<$Result.GetResult<Prisma.$InvestmentObjectivesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InvestmentObjectives that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvestmentObjectivesFindUniqueOrThrowArgs} args - Arguments to find a InvestmentObjectives
     * @example
     * // Get one InvestmentObjectives
     * const investmentObjectives = await prisma.investmentObjectives.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvestmentObjectivesFindUniqueOrThrowArgs>(args: SelectSubset<T, InvestmentObjectivesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvestmentObjectivesClient<$Result.GetResult<Prisma.$InvestmentObjectivesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvestmentObjectives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentObjectivesFindFirstArgs} args - Arguments to find a InvestmentObjectives
     * @example
     * // Get one InvestmentObjectives
     * const investmentObjectives = await prisma.investmentObjectives.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvestmentObjectivesFindFirstArgs>(args?: SelectSubset<T, InvestmentObjectivesFindFirstArgs<ExtArgs>>): Prisma__InvestmentObjectivesClient<$Result.GetResult<Prisma.$InvestmentObjectivesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvestmentObjectives that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentObjectivesFindFirstOrThrowArgs} args - Arguments to find a InvestmentObjectives
     * @example
     * // Get one InvestmentObjectives
     * const investmentObjectives = await prisma.investmentObjectives.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvestmentObjectivesFindFirstOrThrowArgs>(args?: SelectSubset<T, InvestmentObjectivesFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvestmentObjectivesClient<$Result.GetResult<Prisma.$InvestmentObjectivesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InvestmentObjectives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentObjectivesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvestmentObjectives
     * const investmentObjectives = await prisma.investmentObjectives.findMany()
     * 
     * // Get first 10 InvestmentObjectives
     * const investmentObjectives = await prisma.investmentObjectives.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investmentObjectivesWithIdOnly = await prisma.investmentObjectives.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvestmentObjectivesFindManyArgs>(args?: SelectSubset<T, InvestmentObjectivesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentObjectivesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InvestmentObjectives.
     * @param {InvestmentObjectivesCreateArgs} args - Arguments to create a InvestmentObjectives.
     * @example
     * // Create one InvestmentObjectives
     * const InvestmentObjectives = await prisma.investmentObjectives.create({
     *   data: {
     *     // ... data to create a InvestmentObjectives
     *   }
     * })
     * 
     */
    create<T extends InvestmentObjectivesCreateArgs>(args: SelectSubset<T, InvestmentObjectivesCreateArgs<ExtArgs>>): Prisma__InvestmentObjectivesClient<$Result.GetResult<Prisma.$InvestmentObjectivesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InvestmentObjectives.
     * @param {InvestmentObjectivesCreateManyArgs} args - Arguments to create many InvestmentObjectives.
     * @example
     * // Create many InvestmentObjectives
     * const investmentObjectives = await prisma.investmentObjectives.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvestmentObjectivesCreateManyArgs>(args?: SelectSubset<T, InvestmentObjectivesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InvestmentObjectives and returns the data saved in the database.
     * @param {InvestmentObjectivesCreateManyAndReturnArgs} args - Arguments to create many InvestmentObjectives.
     * @example
     * // Create many InvestmentObjectives
     * const investmentObjectives = await prisma.investmentObjectives.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InvestmentObjectives and only return the `id`
     * const investmentObjectivesWithIdOnly = await prisma.investmentObjectives.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvestmentObjectivesCreateManyAndReturnArgs>(args?: SelectSubset<T, InvestmentObjectivesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentObjectivesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InvestmentObjectives.
     * @param {InvestmentObjectivesDeleteArgs} args - Arguments to delete one InvestmentObjectives.
     * @example
     * // Delete one InvestmentObjectives
     * const InvestmentObjectives = await prisma.investmentObjectives.delete({
     *   where: {
     *     // ... filter to delete one InvestmentObjectives
     *   }
     * })
     * 
     */
    delete<T extends InvestmentObjectivesDeleteArgs>(args: SelectSubset<T, InvestmentObjectivesDeleteArgs<ExtArgs>>): Prisma__InvestmentObjectivesClient<$Result.GetResult<Prisma.$InvestmentObjectivesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InvestmentObjectives.
     * @param {InvestmentObjectivesUpdateArgs} args - Arguments to update one InvestmentObjectives.
     * @example
     * // Update one InvestmentObjectives
     * const investmentObjectives = await prisma.investmentObjectives.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvestmentObjectivesUpdateArgs>(args: SelectSubset<T, InvestmentObjectivesUpdateArgs<ExtArgs>>): Prisma__InvestmentObjectivesClient<$Result.GetResult<Prisma.$InvestmentObjectivesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InvestmentObjectives.
     * @param {InvestmentObjectivesDeleteManyArgs} args - Arguments to filter InvestmentObjectives to delete.
     * @example
     * // Delete a few InvestmentObjectives
     * const { count } = await prisma.investmentObjectives.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvestmentObjectivesDeleteManyArgs>(args?: SelectSubset<T, InvestmentObjectivesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvestmentObjectives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentObjectivesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvestmentObjectives
     * const investmentObjectives = await prisma.investmentObjectives.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvestmentObjectivesUpdateManyArgs>(args: SelectSubset<T, InvestmentObjectivesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvestmentObjectives and returns the data updated in the database.
     * @param {InvestmentObjectivesUpdateManyAndReturnArgs} args - Arguments to update many InvestmentObjectives.
     * @example
     * // Update many InvestmentObjectives
     * const investmentObjectives = await prisma.investmentObjectives.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InvestmentObjectives and only return the `id`
     * const investmentObjectivesWithIdOnly = await prisma.investmentObjectives.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvestmentObjectivesUpdateManyAndReturnArgs>(args: SelectSubset<T, InvestmentObjectivesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentObjectivesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InvestmentObjectives.
     * @param {InvestmentObjectivesUpsertArgs} args - Arguments to update or create a InvestmentObjectives.
     * @example
     * // Update or create a InvestmentObjectives
     * const investmentObjectives = await prisma.investmentObjectives.upsert({
     *   create: {
     *     // ... data to create a InvestmentObjectives
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvestmentObjectives we want to update
     *   }
     * })
     */
    upsert<T extends InvestmentObjectivesUpsertArgs>(args: SelectSubset<T, InvestmentObjectivesUpsertArgs<ExtArgs>>): Prisma__InvestmentObjectivesClient<$Result.GetResult<Prisma.$InvestmentObjectivesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InvestmentObjectives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentObjectivesCountArgs} args - Arguments to filter InvestmentObjectives to count.
     * @example
     * // Count the number of InvestmentObjectives
     * const count = await prisma.investmentObjectives.count({
     *   where: {
     *     // ... the filter for the InvestmentObjectives we want to count
     *   }
     * })
    **/
    count<T extends InvestmentObjectivesCountArgs>(
      args?: Subset<T, InvestmentObjectivesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvestmentObjectivesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvestmentObjectives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentObjectivesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvestmentObjectivesAggregateArgs>(args: Subset<T, InvestmentObjectivesAggregateArgs>): Prisma.PrismaPromise<GetInvestmentObjectivesAggregateType<T>>

    /**
     * Group by InvestmentObjectives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentObjectivesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvestmentObjectivesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvestmentObjectivesGroupByArgs['orderBy'] }
        : { orderBy?: InvestmentObjectivesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvestmentObjectivesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestmentObjectivesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InvestmentObjectives model
   */
  readonly fields: InvestmentObjectivesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvestmentObjectives.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvestmentObjectivesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InvestmentObjectives model
   */
  interface InvestmentObjectivesFieldRefs {
    readonly id: FieldRef<"InvestmentObjectives", 'String'>
    readonly clientId: FieldRef<"InvestmentObjectives", 'String'>
    readonly primaryGoal: FieldRef<"InvestmentObjectives", 'String'>
    readonly specificGoals: FieldRef<"InvestmentObjectives", 'Json'>
    readonly targetAmount: FieldRef<"InvestmentObjectives", 'Float'>
    readonly timeHorizon: FieldRef<"InvestmentObjectives", 'Int'>
    readonly monthlyContribution: FieldRef<"InvestmentObjectives", 'Float'>
    readonly riskComfort: FieldRef<"InvestmentObjectives", 'Int'>
    readonly createdAt: FieldRef<"InvestmentObjectives", 'DateTime'>
    readonly updatedAt: FieldRef<"InvestmentObjectives", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InvestmentObjectives findUnique
   */
  export type InvestmentObjectivesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentObjectives
     */
    select?: InvestmentObjectivesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentObjectives
     */
    omit?: InvestmentObjectivesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentObjectivesInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentObjectives to fetch.
     */
    where: InvestmentObjectivesWhereUniqueInput
  }

  /**
   * InvestmentObjectives findUniqueOrThrow
   */
  export type InvestmentObjectivesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentObjectives
     */
    select?: InvestmentObjectivesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentObjectives
     */
    omit?: InvestmentObjectivesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentObjectivesInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentObjectives to fetch.
     */
    where: InvestmentObjectivesWhereUniqueInput
  }

  /**
   * InvestmentObjectives findFirst
   */
  export type InvestmentObjectivesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentObjectives
     */
    select?: InvestmentObjectivesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentObjectives
     */
    omit?: InvestmentObjectivesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentObjectivesInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentObjectives to fetch.
     */
    where?: InvestmentObjectivesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestmentObjectives to fetch.
     */
    orderBy?: InvestmentObjectivesOrderByWithRelationInput | InvestmentObjectivesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvestmentObjectives.
     */
    cursor?: InvestmentObjectivesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestmentObjectives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestmentObjectives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvestmentObjectives.
     */
    distinct?: InvestmentObjectivesScalarFieldEnum | InvestmentObjectivesScalarFieldEnum[]
  }

  /**
   * InvestmentObjectives findFirstOrThrow
   */
  export type InvestmentObjectivesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentObjectives
     */
    select?: InvestmentObjectivesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentObjectives
     */
    omit?: InvestmentObjectivesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentObjectivesInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentObjectives to fetch.
     */
    where?: InvestmentObjectivesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestmentObjectives to fetch.
     */
    orderBy?: InvestmentObjectivesOrderByWithRelationInput | InvestmentObjectivesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvestmentObjectives.
     */
    cursor?: InvestmentObjectivesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestmentObjectives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestmentObjectives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvestmentObjectives.
     */
    distinct?: InvestmentObjectivesScalarFieldEnum | InvestmentObjectivesScalarFieldEnum[]
  }

  /**
   * InvestmentObjectives findMany
   */
  export type InvestmentObjectivesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentObjectives
     */
    select?: InvestmentObjectivesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentObjectives
     */
    omit?: InvestmentObjectivesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentObjectivesInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentObjectives to fetch.
     */
    where?: InvestmentObjectivesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestmentObjectives to fetch.
     */
    orderBy?: InvestmentObjectivesOrderByWithRelationInput | InvestmentObjectivesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvestmentObjectives.
     */
    cursor?: InvestmentObjectivesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestmentObjectives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestmentObjectives.
     */
    skip?: number
    distinct?: InvestmentObjectivesScalarFieldEnum | InvestmentObjectivesScalarFieldEnum[]
  }

  /**
   * InvestmentObjectives create
   */
  export type InvestmentObjectivesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentObjectives
     */
    select?: InvestmentObjectivesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentObjectives
     */
    omit?: InvestmentObjectivesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentObjectivesInclude<ExtArgs> | null
    /**
     * The data needed to create a InvestmentObjectives.
     */
    data: XOR<InvestmentObjectivesCreateInput, InvestmentObjectivesUncheckedCreateInput>
  }

  /**
   * InvestmentObjectives createMany
   */
  export type InvestmentObjectivesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvestmentObjectives.
     */
    data: InvestmentObjectivesCreateManyInput | InvestmentObjectivesCreateManyInput[]
  }

  /**
   * InvestmentObjectives createManyAndReturn
   */
  export type InvestmentObjectivesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentObjectives
     */
    select?: InvestmentObjectivesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentObjectives
     */
    omit?: InvestmentObjectivesOmit<ExtArgs> | null
    /**
     * The data used to create many InvestmentObjectives.
     */
    data: InvestmentObjectivesCreateManyInput | InvestmentObjectivesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentObjectivesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvestmentObjectives update
   */
  export type InvestmentObjectivesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentObjectives
     */
    select?: InvestmentObjectivesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentObjectives
     */
    omit?: InvestmentObjectivesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentObjectivesInclude<ExtArgs> | null
    /**
     * The data needed to update a InvestmentObjectives.
     */
    data: XOR<InvestmentObjectivesUpdateInput, InvestmentObjectivesUncheckedUpdateInput>
    /**
     * Choose, which InvestmentObjectives to update.
     */
    where: InvestmentObjectivesWhereUniqueInput
  }

  /**
   * InvestmentObjectives updateMany
   */
  export type InvestmentObjectivesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InvestmentObjectives.
     */
    data: XOR<InvestmentObjectivesUpdateManyMutationInput, InvestmentObjectivesUncheckedUpdateManyInput>
    /**
     * Filter which InvestmentObjectives to update
     */
    where?: InvestmentObjectivesWhereInput
    /**
     * Limit how many InvestmentObjectives to update.
     */
    limit?: number
  }

  /**
   * InvestmentObjectives updateManyAndReturn
   */
  export type InvestmentObjectivesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentObjectives
     */
    select?: InvestmentObjectivesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentObjectives
     */
    omit?: InvestmentObjectivesOmit<ExtArgs> | null
    /**
     * The data used to update InvestmentObjectives.
     */
    data: XOR<InvestmentObjectivesUpdateManyMutationInput, InvestmentObjectivesUncheckedUpdateManyInput>
    /**
     * Filter which InvestmentObjectives to update
     */
    where?: InvestmentObjectivesWhereInput
    /**
     * Limit how many InvestmentObjectives to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentObjectivesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvestmentObjectives upsert
   */
  export type InvestmentObjectivesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentObjectives
     */
    select?: InvestmentObjectivesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentObjectives
     */
    omit?: InvestmentObjectivesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentObjectivesInclude<ExtArgs> | null
    /**
     * The filter to search for the InvestmentObjectives to update in case it exists.
     */
    where: InvestmentObjectivesWhereUniqueInput
    /**
     * In case the InvestmentObjectives found by the `where` argument doesn't exist, create a new InvestmentObjectives with this data.
     */
    create: XOR<InvestmentObjectivesCreateInput, InvestmentObjectivesUncheckedCreateInput>
    /**
     * In case the InvestmentObjectives was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvestmentObjectivesUpdateInput, InvestmentObjectivesUncheckedUpdateInput>
  }

  /**
   * InvestmentObjectives delete
   */
  export type InvestmentObjectivesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentObjectives
     */
    select?: InvestmentObjectivesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentObjectives
     */
    omit?: InvestmentObjectivesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentObjectivesInclude<ExtArgs> | null
    /**
     * Filter which InvestmentObjectives to delete.
     */
    where: InvestmentObjectivesWhereUniqueInput
  }

  /**
   * InvestmentObjectives deleteMany
   */
  export type InvestmentObjectivesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvestmentObjectives to delete
     */
    where?: InvestmentObjectivesWhereInput
    /**
     * Limit how many InvestmentObjectives to delete.
     */
    limit?: number
  }

  /**
   * InvestmentObjectives without action
   */
  export type InvestmentObjectivesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentObjectives
     */
    select?: InvestmentObjectivesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentObjectives
     */
    omit?: InvestmentObjectivesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentObjectivesInclude<ExtArgs> | null
  }


  /**
   * Model AccountType
   */

  export type AggregateAccountType = {
    _count: AccountTypeCountAggregateOutputType | null
    _avg: AccountTypeAvgAggregateOutputType | null
    _sum: AccountTypeSumAggregateOutputType | null
    _min: AccountTypeMinAggregateOutputType | null
    _max: AccountTypeMaxAggregateOutputType | null
  }

  export type AccountTypeAvgAggregateOutputType = {
    minimumBalance: number | null
    annualFee: number | null
    transactionFee: number | null
  }

  export type AccountTypeSumAggregateOutputType = {
    minimumBalance: number | null
    annualFee: number | null
    transactionFee: number | null
  }

  export type AccountTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    taxAdvantaged: boolean | null
    minimumBalance: number | null
    annualFee: number | null
    transactionFee: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    taxAdvantaged: boolean | null
    minimumBalance: number | null
    annualFee: number | null
    transactionFee: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountTypeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    taxAdvantaged: number
    minimumBalance: number
    annualFee: number
    transactionFee: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountTypeAvgAggregateInputType = {
    minimumBalance?: true
    annualFee?: true
    transactionFee?: true
  }

  export type AccountTypeSumAggregateInputType = {
    minimumBalance?: true
    annualFee?: true
    transactionFee?: true
  }

  export type AccountTypeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    taxAdvantaged?: true
    minimumBalance?: true
    annualFee?: true
    transactionFee?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountTypeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    taxAdvantaged?: true
    minimumBalance?: true
    annualFee?: true
    transactionFee?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountTypeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    taxAdvantaged?: true
    minimumBalance?: true
    annualFee?: true
    transactionFee?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountType to aggregate.
     */
    where?: AccountTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountTypes to fetch.
     */
    orderBy?: AccountTypeOrderByWithRelationInput | AccountTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountTypes
    **/
    _count?: true | AccountTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountTypeMaxAggregateInputType
  }

  export type GetAccountTypeAggregateType<T extends AccountTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountType[P]>
      : GetScalarType<T[P], AggregateAccountType[P]>
  }




  export type AccountTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountTypeWhereInput
    orderBy?: AccountTypeOrderByWithAggregationInput | AccountTypeOrderByWithAggregationInput[]
    by: AccountTypeScalarFieldEnum[] | AccountTypeScalarFieldEnum
    having?: AccountTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountTypeCountAggregateInputType | true
    _avg?: AccountTypeAvgAggregateInputType
    _sum?: AccountTypeSumAggregateInputType
    _min?: AccountTypeMinAggregateInputType
    _max?: AccountTypeMaxAggregateInputType
  }

  export type AccountTypeGroupByOutputType = {
    id: string
    name: string
    description: string
    taxAdvantaged: boolean
    minimumBalance: number
    annualFee: number
    transactionFee: number
    createdAt: Date
    updatedAt: Date
    _count: AccountTypeCountAggregateOutputType | null
    _avg: AccountTypeAvgAggregateOutputType | null
    _sum: AccountTypeSumAggregateOutputType | null
    _min: AccountTypeMinAggregateOutputType | null
    _max: AccountTypeMaxAggregateOutputType | null
  }

  type GetAccountTypeGroupByPayload<T extends AccountTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountTypeGroupByOutputType[P]>
            : GetScalarType<T[P], AccountTypeGroupByOutputType[P]>
        }
      >
    >


  export type AccountTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    taxAdvantaged?: boolean
    minimumBalance?: boolean
    annualFee?: boolean
    transactionFee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["accountType"]>

  export type AccountTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    taxAdvantaged?: boolean
    minimumBalance?: boolean
    annualFee?: boolean
    transactionFee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["accountType"]>

  export type AccountTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    taxAdvantaged?: boolean
    minimumBalance?: boolean
    annualFee?: boolean
    transactionFee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["accountType"]>

  export type AccountTypeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    taxAdvantaged?: boolean
    minimumBalance?: boolean
    annualFee?: boolean
    transactionFee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "taxAdvantaged" | "minimumBalance" | "annualFee" | "transactionFee" | "createdAt" | "updatedAt", ExtArgs["result"]["accountType"]>

  export type $AccountTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccountType"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      taxAdvantaged: boolean
      minimumBalance: number
      annualFee: number
      transactionFee: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accountType"]>
    composites: {}
  }

  type AccountTypeGetPayload<S extends boolean | null | undefined | AccountTypeDefaultArgs> = $Result.GetResult<Prisma.$AccountTypePayload, S>

  type AccountTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountTypeCountAggregateInputType | true
    }

  export interface AccountTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccountType'], meta: { name: 'AccountType' } }
    /**
     * Find zero or one AccountType that matches the filter.
     * @param {AccountTypeFindUniqueArgs} args - Arguments to find a AccountType
     * @example
     * // Get one AccountType
     * const accountType = await prisma.accountType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountTypeFindUniqueArgs>(args: SelectSubset<T, AccountTypeFindUniqueArgs<ExtArgs>>): Prisma__AccountTypeClient<$Result.GetResult<Prisma.$AccountTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccountType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountTypeFindUniqueOrThrowArgs} args - Arguments to find a AccountType
     * @example
     * // Get one AccountType
     * const accountType = await prisma.accountType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountTypeClient<$Result.GetResult<Prisma.$AccountTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTypeFindFirstArgs} args - Arguments to find a AccountType
     * @example
     * // Get one AccountType
     * const accountType = await prisma.accountType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountTypeFindFirstArgs>(args?: SelectSubset<T, AccountTypeFindFirstArgs<ExtArgs>>): Prisma__AccountTypeClient<$Result.GetResult<Prisma.$AccountTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTypeFindFirstOrThrowArgs} args - Arguments to find a AccountType
     * @example
     * // Get one AccountType
     * const accountType = await prisma.accountType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountTypeClient<$Result.GetResult<Prisma.$AccountTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccountTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountTypes
     * const accountTypes = await prisma.accountType.findMany()
     * 
     * // Get first 10 AccountTypes
     * const accountTypes = await prisma.accountType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountTypeWithIdOnly = await prisma.accountType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountTypeFindManyArgs>(args?: SelectSubset<T, AccountTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccountType.
     * @param {AccountTypeCreateArgs} args - Arguments to create a AccountType.
     * @example
     * // Create one AccountType
     * const AccountType = await prisma.accountType.create({
     *   data: {
     *     // ... data to create a AccountType
     *   }
     * })
     * 
     */
    create<T extends AccountTypeCreateArgs>(args: SelectSubset<T, AccountTypeCreateArgs<ExtArgs>>): Prisma__AccountTypeClient<$Result.GetResult<Prisma.$AccountTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccountTypes.
     * @param {AccountTypeCreateManyArgs} args - Arguments to create many AccountTypes.
     * @example
     * // Create many AccountTypes
     * const accountType = await prisma.accountType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountTypeCreateManyArgs>(args?: SelectSubset<T, AccountTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccountTypes and returns the data saved in the database.
     * @param {AccountTypeCreateManyAndReturnArgs} args - Arguments to create many AccountTypes.
     * @example
     * // Create many AccountTypes
     * const accountType = await prisma.accountType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccountTypes and only return the `id`
     * const accountTypeWithIdOnly = await prisma.accountType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccountType.
     * @param {AccountTypeDeleteArgs} args - Arguments to delete one AccountType.
     * @example
     * // Delete one AccountType
     * const AccountType = await prisma.accountType.delete({
     *   where: {
     *     // ... filter to delete one AccountType
     *   }
     * })
     * 
     */
    delete<T extends AccountTypeDeleteArgs>(args: SelectSubset<T, AccountTypeDeleteArgs<ExtArgs>>): Prisma__AccountTypeClient<$Result.GetResult<Prisma.$AccountTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccountType.
     * @param {AccountTypeUpdateArgs} args - Arguments to update one AccountType.
     * @example
     * // Update one AccountType
     * const accountType = await prisma.accountType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountTypeUpdateArgs>(args: SelectSubset<T, AccountTypeUpdateArgs<ExtArgs>>): Prisma__AccountTypeClient<$Result.GetResult<Prisma.$AccountTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccountTypes.
     * @param {AccountTypeDeleteManyArgs} args - Arguments to filter AccountTypes to delete.
     * @example
     * // Delete a few AccountTypes
     * const { count } = await prisma.accountType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountTypeDeleteManyArgs>(args?: SelectSubset<T, AccountTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountTypes
     * const accountType = await prisma.accountType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountTypeUpdateManyArgs>(args: SelectSubset<T, AccountTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountTypes and returns the data updated in the database.
     * @param {AccountTypeUpdateManyAndReturnArgs} args - Arguments to update many AccountTypes.
     * @example
     * // Update many AccountTypes
     * const accountType = await prisma.accountType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccountTypes and only return the `id`
     * const accountTypeWithIdOnly = await prisma.accountType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccountType.
     * @param {AccountTypeUpsertArgs} args - Arguments to update or create a AccountType.
     * @example
     * // Update or create a AccountType
     * const accountType = await prisma.accountType.upsert({
     *   create: {
     *     // ... data to create a AccountType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountType we want to update
     *   }
     * })
     */
    upsert<T extends AccountTypeUpsertArgs>(args: SelectSubset<T, AccountTypeUpsertArgs<ExtArgs>>): Prisma__AccountTypeClient<$Result.GetResult<Prisma.$AccountTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccountTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTypeCountArgs} args - Arguments to filter AccountTypes to count.
     * @example
     * // Count the number of AccountTypes
     * const count = await prisma.accountType.count({
     *   where: {
     *     // ... the filter for the AccountTypes we want to count
     *   }
     * })
    **/
    count<T extends AccountTypeCountArgs>(
      args?: Subset<T, AccountTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountTypeAggregateArgs>(args: Subset<T, AccountTypeAggregateArgs>): Prisma.PrismaPromise<GetAccountTypeAggregateType<T>>

    /**
     * Group by AccountType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountTypeGroupByArgs['orderBy'] }
        : { orderBy?: AccountTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccountType model
   */
  readonly fields: AccountTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AccountType model
   */
  interface AccountTypeFieldRefs {
    readonly id: FieldRef<"AccountType", 'String'>
    readonly name: FieldRef<"AccountType", 'String'>
    readonly description: FieldRef<"AccountType", 'String'>
    readonly taxAdvantaged: FieldRef<"AccountType", 'Boolean'>
    readonly minimumBalance: FieldRef<"AccountType", 'Float'>
    readonly annualFee: FieldRef<"AccountType", 'Float'>
    readonly transactionFee: FieldRef<"AccountType", 'Float'>
    readonly createdAt: FieldRef<"AccountType", 'DateTime'>
    readonly updatedAt: FieldRef<"AccountType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccountType findUnique
   */
  export type AccountTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountType
     */
    select?: AccountTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountType
     */
    omit?: AccountTypeOmit<ExtArgs> | null
    /**
     * Filter, which AccountType to fetch.
     */
    where: AccountTypeWhereUniqueInput
  }

  /**
   * AccountType findUniqueOrThrow
   */
  export type AccountTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountType
     */
    select?: AccountTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountType
     */
    omit?: AccountTypeOmit<ExtArgs> | null
    /**
     * Filter, which AccountType to fetch.
     */
    where: AccountTypeWhereUniqueInput
  }

  /**
   * AccountType findFirst
   */
  export type AccountTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountType
     */
    select?: AccountTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountType
     */
    omit?: AccountTypeOmit<ExtArgs> | null
    /**
     * Filter, which AccountType to fetch.
     */
    where?: AccountTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountTypes to fetch.
     */
    orderBy?: AccountTypeOrderByWithRelationInput | AccountTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountTypes.
     */
    cursor?: AccountTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountTypes.
     */
    distinct?: AccountTypeScalarFieldEnum | AccountTypeScalarFieldEnum[]
  }

  /**
   * AccountType findFirstOrThrow
   */
  export type AccountTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountType
     */
    select?: AccountTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountType
     */
    omit?: AccountTypeOmit<ExtArgs> | null
    /**
     * Filter, which AccountType to fetch.
     */
    where?: AccountTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountTypes to fetch.
     */
    orderBy?: AccountTypeOrderByWithRelationInput | AccountTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountTypes.
     */
    cursor?: AccountTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountTypes.
     */
    distinct?: AccountTypeScalarFieldEnum | AccountTypeScalarFieldEnum[]
  }

  /**
   * AccountType findMany
   */
  export type AccountTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountType
     */
    select?: AccountTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountType
     */
    omit?: AccountTypeOmit<ExtArgs> | null
    /**
     * Filter, which AccountTypes to fetch.
     */
    where?: AccountTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountTypes to fetch.
     */
    orderBy?: AccountTypeOrderByWithRelationInput | AccountTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountTypes.
     */
    cursor?: AccountTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountTypes.
     */
    skip?: number
    distinct?: AccountTypeScalarFieldEnum | AccountTypeScalarFieldEnum[]
  }

  /**
   * AccountType create
   */
  export type AccountTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountType
     */
    select?: AccountTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountType
     */
    omit?: AccountTypeOmit<ExtArgs> | null
    /**
     * The data needed to create a AccountType.
     */
    data: XOR<AccountTypeCreateInput, AccountTypeUncheckedCreateInput>
  }

  /**
   * AccountType createMany
   */
  export type AccountTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccountTypes.
     */
    data: AccountTypeCreateManyInput | AccountTypeCreateManyInput[]
  }

  /**
   * AccountType createManyAndReturn
   */
  export type AccountTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountType
     */
    select?: AccountTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountType
     */
    omit?: AccountTypeOmit<ExtArgs> | null
    /**
     * The data used to create many AccountTypes.
     */
    data: AccountTypeCreateManyInput | AccountTypeCreateManyInput[]
  }

  /**
   * AccountType update
   */
  export type AccountTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountType
     */
    select?: AccountTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountType
     */
    omit?: AccountTypeOmit<ExtArgs> | null
    /**
     * The data needed to update a AccountType.
     */
    data: XOR<AccountTypeUpdateInput, AccountTypeUncheckedUpdateInput>
    /**
     * Choose, which AccountType to update.
     */
    where: AccountTypeWhereUniqueInput
  }

  /**
   * AccountType updateMany
   */
  export type AccountTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccountTypes.
     */
    data: XOR<AccountTypeUpdateManyMutationInput, AccountTypeUncheckedUpdateManyInput>
    /**
     * Filter which AccountTypes to update
     */
    where?: AccountTypeWhereInput
    /**
     * Limit how many AccountTypes to update.
     */
    limit?: number
  }

  /**
   * AccountType updateManyAndReturn
   */
  export type AccountTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountType
     */
    select?: AccountTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountType
     */
    omit?: AccountTypeOmit<ExtArgs> | null
    /**
     * The data used to update AccountTypes.
     */
    data: XOR<AccountTypeUpdateManyMutationInput, AccountTypeUncheckedUpdateManyInput>
    /**
     * Filter which AccountTypes to update
     */
    where?: AccountTypeWhereInput
    /**
     * Limit how many AccountTypes to update.
     */
    limit?: number
  }

  /**
   * AccountType upsert
   */
  export type AccountTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountType
     */
    select?: AccountTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountType
     */
    omit?: AccountTypeOmit<ExtArgs> | null
    /**
     * The filter to search for the AccountType to update in case it exists.
     */
    where: AccountTypeWhereUniqueInput
    /**
     * In case the AccountType found by the `where` argument doesn't exist, create a new AccountType with this data.
     */
    create: XOR<AccountTypeCreateInput, AccountTypeUncheckedCreateInput>
    /**
     * In case the AccountType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountTypeUpdateInput, AccountTypeUncheckedUpdateInput>
  }

  /**
   * AccountType delete
   */
  export type AccountTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountType
     */
    select?: AccountTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountType
     */
    omit?: AccountTypeOmit<ExtArgs> | null
    /**
     * Filter which AccountType to delete.
     */
    where: AccountTypeWhereUniqueInput
  }

  /**
   * AccountType deleteMany
   */
  export type AccountTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountTypes to delete
     */
    where?: AccountTypeWhereInput
    /**
     * Limit how many AccountTypes to delete.
     */
    limit?: number
  }

  /**
   * AccountType without action
   */
  export type AccountTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountType
     */
    select?: AccountTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountType
     */
    omit?: AccountTypeOmit<ExtArgs> | null
  }


  /**
   * Model Disclosure
   */

  export type AggregateDisclosure = {
    _count: DisclosureCountAggregateOutputType | null
    _min: DisclosureMinAggregateOutputType | null
    _max: DisclosureMaxAggregateOutputType | null
  }

  export type DisclosureMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    required: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DisclosureMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    required: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DisclosureCountAggregateOutputType = {
    id: number
    title: number
    content: number
    required: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DisclosureMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    required?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DisclosureMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    required?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DisclosureCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    required?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DisclosureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disclosure to aggregate.
     */
    where?: DisclosureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disclosures to fetch.
     */
    orderBy?: DisclosureOrderByWithRelationInput | DisclosureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisclosureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disclosures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disclosures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disclosures
    **/
    _count?: true | DisclosureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisclosureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisclosureMaxAggregateInputType
  }

  export type GetDisclosureAggregateType<T extends DisclosureAggregateArgs> = {
        [P in keyof T & keyof AggregateDisclosure]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisclosure[P]>
      : GetScalarType<T[P], AggregateDisclosure[P]>
  }




  export type DisclosureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisclosureWhereInput
    orderBy?: DisclosureOrderByWithAggregationInput | DisclosureOrderByWithAggregationInput[]
    by: DisclosureScalarFieldEnum[] | DisclosureScalarFieldEnum
    having?: DisclosureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisclosureCountAggregateInputType | true
    _min?: DisclosureMinAggregateInputType
    _max?: DisclosureMaxAggregateInputType
  }

  export type DisclosureGroupByOutputType = {
    id: string
    title: string
    content: string
    required: boolean
    createdAt: Date
    updatedAt: Date
    _count: DisclosureCountAggregateOutputType | null
    _min: DisclosureMinAggregateOutputType | null
    _max: DisclosureMaxAggregateOutputType | null
  }

  type GetDisclosureGroupByPayload<T extends DisclosureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisclosureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisclosureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisclosureGroupByOutputType[P]>
            : GetScalarType<T[P], DisclosureGroupByOutputType[P]>
        }
      >
    >


  export type DisclosureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    required?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    complianceAgreements?: boolean | Disclosure$complianceAgreementsArgs<ExtArgs>
    _count?: boolean | DisclosureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disclosure"]>

  export type DisclosureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    required?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["disclosure"]>

  export type DisclosureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    required?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["disclosure"]>

  export type DisclosureSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    required?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DisclosureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "required" | "createdAt" | "updatedAt", ExtArgs["result"]["disclosure"]>
  export type DisclosureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    complianceAgreements?: boolean | Disclosure$complianceAgreementsArgs<ExtArgs>
    _count?: boolean | DisclosureCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DisclosureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DisclosureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DisclosurePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Disclosure"
    objects: {
      complianceAgreements: Prisma.$ComplianceAgreementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      required: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["disclosure"]>
    composites: {}
  }

  type DisclosureGetPayload<S extends boolean | null | undefined | DisclosureDefaultArgs> = $Result.GetResult<Prisma.$DisclosurePayload, S>

  type DisclosureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisclosureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisclosureCountAggregateInputType | true
    }

  export interface DisclosureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Disclosure'], meta: { name: 'Disclosure' } }
    /**
     * Find zero or one Disclosure that matches the filter.
     * @param {DisclosureFindUniqueArgs} args - Arguments to find a Disclosure
     * @example
     * // Get one Disclosure
     * const disclosure = await prisma.disclosure.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisclosureFindUniqueArgs>(args: SelectSubset<T, DisclosureFindUniqueArgs<ExtArgs>>): Prisma__DisclosureClient<$Result.GetResult<Prisma.$DisclosurePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disclosure that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisclosureFindUniqueOrThrowArgs} args - Arguments to find a Disclosure
     * @example
     * // Get one Disclosure
     * const disclosure = await prisma.disclosure.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisclosureFindUniqueOrThrowArgs>(args: SelectSubset<T, DisclosureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisclosureClient<$Result.GetResult<Prisma.$DisclosurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disclosure that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisclosureFindFirstArgs} args - Arguments to find a Disclosure
     * @example
     * // Get one Disclosure
     * const disclosure = await prisma.disclosure.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisclosureFindFirstArgs>(args?: SelectSubset<T, DisclosureFindFirstArgs<ExtArgs>>): Prisma__DisclosureClient<$Result.GetResult<Prisma.$DisclosurePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disclosure that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisclosureFindFirstOrThrowArgs} args - Arguments to find a Disclosure
     * @example
     * // Get one Disclosure
     * const disclosure = await prisma.disclosure.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisclosureFindFirstOrThrowArgs>(args?: SelectSubset<T, DisclosureFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisclosureClient<$Result.GetResult<Prisma.$DisclosurePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disclosures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisclosureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disclosures
     * const disclosures = await prisma.disclosure.findMany()
     * 
     * // Get first 10 Disclosures
     * const disclosures = await prisma.disclosure.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disclosureWithIdOnly = await prisma.disclosure.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DisclosureFindManyArgs>(args?: SelectSubset<T, DisclosureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisclosurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disclosure.
     * @param {DisclosureCreateArgs} args - Arguments to create a Disclosure.
     * @example
     * // Create one Disclosure
     * const Disclosure = await prisma.disclosure.create({
     *   data: {
     *     // ... data to create a Disclosure
     *   }
     * })
     * 
     */
    create<T extends DisclosureCreateArgs>(args: SelectSubset<T, DisclosureCreateArgs<ExtArgs>>): Prisma__DisclosureClient<$Result.GetResult<Prisma.$DisclosurePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disclosures.
     * @param {DisclosureCreateManyArgs} args - Arguments to create many Disclosures.
     * @example
     * // Create many Disclosures
     * const disclosure = await prisma.disclosure.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisclosureCreateManyArgs>(args?: SelectSubset<T, DisclosureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Disclosures and returns the data saved in the database.
     * @param {DisclosureCreateManyAndReturnArgs} args - Arguments to create many Disclosures.
     * @example
     * // Create many Disclosures
     * const disclosure = await prisma.disclosure.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Disclosures and only return the `id`
     * const disclosureWithIdOnly = await prisma.disclosure.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisclosureCreateManyAndReturnArgs>(args?: SelectSubset<T, DisclosureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisclosurePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Disclosure.
     * @param {DisclosureDeleteArgs} args - Arguments to delete one Disclosure.
     * @example
     * // Delete one Disclosure
     * const Disclosure = await prisma.disclosure.delete({
     *   where: {
     *     // ... filter to delete one Disclosure
     *   }
     * })
     * 
     */
    delete<T extends DisclosureDeleteArgs>(args: SelectSubset<T, DisclosureDeleteArgs<ExtArgs>>): Prisma__DisclosureClient<$Result.GetResult<Prisma.$DisclosurePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disclosure.
     * @param {DisclosureUpdateArgs} args - Arguments to update one Disclosure.
     * @example
     * // Update one Disclosure
     * const disclosure = await prisma.disclosure.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisclosureUpdateArgs>(args: SelectSubset<T, DisclosureUpdateArgs<ExtArgs>>): Prisma__DisclosureClient<$Result.GetResult<Prisma.$DisclosurePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disclosures.
     * @param {DisclosureDeleteManyArgs} args - Arguments to filter Disclosures to delete.
     * @example
     * // Delete a few Disclosures
     * const { count } = await prisma.disclosure.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisclosureDeleteManyArgs>(args?: SelectSubset<T, DisclosureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disclosures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisclosureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disclosures
     * const disclosure = await prisma.disclosure.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisclosureUpdateManyArgs>(args: SelectSubset<T, DisclosureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disclosures and returns the data updated in the database.
     * @param {DisclosureUpdateManyAndReturnArgs} args - Arguments to update many Disclosures.
     * @example
     * // Update many Disclosures
     * const disclosure = await prisma.disclosure.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Disclosures and only return the `id`
     * const disclosureWithIdOnly = await prisma.disclosure.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DisclosureUpdateManyAndReturnArgs>(args: SelectSubset<T, DisclosureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisclosurePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Disclosure.
     * @param {DisclosureUpsertArgs} args - Arguments to update or create a Disclosure.
     * @example
     * // Update or create a Disclosure
     * const disclosure = await prisma.disclosure.upsert({
     *   create: {
     *     // ... data to create a Disclosure
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disclosure we want to update
     *   }
     * })
     */
    upsert<T extends DisclosureUpsertArgs>(args: SelectSubset<T, DisclosureUpsertArgs<ExtArgs>>): Prisma__DisclosureClient<$Result.GetResult<Prisma.$DisclosurePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disclosures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisclosureCountArgs} args - Arguments to filter Disclosures to count.
     * @example
     * // Count the number of Disclosures
     * const count = await prisma.disclosure.count({
     *   where: {
     *     // ... the filter for the Disclosures we want to count
     *   }
     * })
    **/
    count<T extends DisclosureCountArgs>(
      args?: Subset<T, DisclosureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisclosureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disclosure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisclosureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DisclosureAggregateArgs>(args: Subset<T, DisclosureAggregateArgs>): Prisma.PrismaPromise<GetDisclosureAggregateType<T>>

    /**
     * Group by Disclosure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisclosureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DisclosureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisclosureGroupByArgs['orderBy'] }
        : { orderBy?: DisclosureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DisclosureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisclosureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Disclosure model
   */
  readonly fields: DisclosureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Disclosure.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisclosureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    complianceAgreements<T extends Disclosure$complianceAgreementsArgs<ExtArgs> = {}>(args?: Subset<T, Disclosure$complianceAgreementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplianceAgreementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Disclosure model
   */
  interface DisclosureFieldRefs {
    readonly id: FieldRef<"Disclosure", 'String'>
    readonly title: FieldRef<"Disclosure", 'String'>
    readonly content: FieldRef<"Disclosure", 'String'>
    readonly required: FieldRef<"Disclosure", 'Boolean'>
    readonly createdAt: FieldRef<"Disclosure", 'DateTime'>
    readonly updatedAt: FieldRef<"Disclosure", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Disclosure findUnique
   */
  export type DisclosureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disclosure
     */
    select?: DisclosureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disclosure
     */
    omit?: DisclosureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisclosureInclude<ExtArgs> | null
    /**
     * Filter, which Disclosure to fetch.
     */
    where: DisclosureWhereUniqueInput
  }

  /**
   * Disclosure findUniqueOrThrow
   */
  export type DisclosureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disclosure
     */
    select?: DisclosureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disclosure
     */
    omit?: DisclosureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisclosureInclude<ExtArgs> | null
    /**
     * Filter, which Disclosure to fetch.
     */
    where: DisclosureWhereUniqueInput
  }

  /**
   * Disclosure findFirst
   */
  export type DisclosureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disclosure
     */
    select?: DisclosureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disclosure
     */
    omit?: DisclosureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisclosureInclude<ExtArgs> | null
    /**
     * Filter, which Disclosure to fetch.
     */
    where?: DisclosureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disclosures to fetch.
     */
    orderBy?: DisclosureOrderByWithRelationInput | DisclosureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disclosures.
     */
    cursor?: DisclosureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disclosures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disclosures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disclosures.
     */
    distinct?: DisclosureScalarFieldEnum | DisclosureScalarFieldEnum[]
  }

  /**
   * Disclosure findFirstOrThrow
   */
  export type DisclosureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disclosure
     */
    select?: DisclosureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disclosure
     */
    omit?: DisclosureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisclosureInclude<ExtArgs> | null
    /**
     * Filter, which Disclosure to fetch.
     */
    where?: DisclosureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disclosures to fetch.
     */
    orderBy?: DisclosureOrderByWithRelationInput | DisclosureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disclosures.
     */
    cursor?: DisclosureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disclosures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disclosures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disclosures.
     */
    distinct?: DisclosureScalarFieldEnum | DisclosureScalarFieldEnum[]
  }

  /**
   * Disclosure findMany
   */
  export type DisclosureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disclosure
     */
    select?: DisclosureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disclosure
     */
    omit?: DisclosureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisclosureInclude<ExtArgs> | null
    /**
     * Filter, which Disclosures to fetch.
     */
    where?: DisclosureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disclosures to fetch.
     */
    orderBy?: DisclosureOrderByWithRelationInput | DisclosureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disclosures.
     */
    cursor?: DisclosureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disclosures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disclosures.
     */
    skip?: number
    distinct?: DisclosureScalarFieldEnum | DisclosureScalarFieldEnum[]
  }

  /**
   * Disclosure create
   */
  export type DisclosureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disclosure
     */
    select?: DisclosureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disclosure
     */
    omit?: DisclosureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisclosureInclude<ExtArgs> | null
    /**
     * The data needed to create a Disclosure.
     */
    data: XOR<DisclosureCreateInput, DisclosureUncheckedCreateInput>
  }

  /**
   * Disclosure createMany
   */
  export type DisclosureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disclosures.
     */
    data: DisclosureCreateManyInput | DisclosureCreateManyInput[]
  }

  /**
   * Disclosure createManyAndReturn
   */
  export type DisclosureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disclosure
     */
    select?: DisclosureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disclosure
     */
    omit?: DisclosureOmit<ExtArgs> | null
    /**
     * The data used to create many Disclosures.
     */
    data: DisclosureCreateManyInput | DisclosureCreateManyInput[]
  }

  /**
   * Disclosure update
   */
  export type DisclosureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disclosure
     */
    select?: DisclosureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disclosure
     */
    omit?: DisclosureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisclosureInclude<ExtArgs> | null
    /**
     * The data needed to update a Disclosure.
     */
    data: XOR<DisclosureUpdateInput, DisclosureUncheckedUpdateInput>
    /**
     * Choose, which Disclosure to update.
     */
    where: DisclosureWhereUniqueInput
  }

  /**
   * Disclosure updateMany
   */
  export type DisclosureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disclosures.
     */
    data: XOR<DisclosureUpdateManyMutationInput, DisclosureUncheckedUpdateManyInput>
    /**
     * Filter which Disclosures to update
     */
    where?: DisclosureWhereInput
    /**
     * Limit how many Disclosures to update.
     */
    limit?: number
  }

  /**
   * Disclosure updateManyAndReturn
   */
  export type DisclosureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disclosure
     */
    select?: DisclosureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disclosure
     */
    omit?: DisclosureOmit<ExtArgs> | null
    /**
     * The data used to update Disclosures.
     */
    data: XOR<DisclosureUpdateManyMutationInput, DisclosureUncheckedUpdateManyInput>
    /**
     * Filter which Disclosures to update
     */
    where?: DisclosureWhereInput
    /**
     * Limit how many Disclosures to update.
     */
    limit?: number
  }

  /**
   * Disclosure upsert
   */
  export type DisclosureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disclosure
     */
    select?: DisclosureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disclosure
     */
    omit?: DisclosureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisclosureInclude<ExtArgs> | null
    /**
     * The filter to search for the Disclosure to update in case it exists.
     */
    where: DisclosureWhereUniqueInput
    /**
     * In case the Disclosure found by the `where` argument doesn't exist, create a new Disclosure with this data.
     */
    create: XOR<DisclosureCreateInput, DisclosureUncheckedCreateInput>
    /**
     * In case the Disclosure was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisclosureUpdateInput, DisclosureUncheckedUpdateInput>
  }

  /**
   * Disclosure delete
   */
  export type DisclosureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disclosure
     */
    select?: DisclosureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disclosure
     */
    omit?: DisclosureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisclosureInclude<ExtArgs> | null
    /**
     * Filter which Disclosure to delete.
     */
    where: DisclosureWhereUniqueInput
  }

  /**
   * Disclosure deleteMany
   */
  export type DisclosureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disclosures to delete
     */
    where?: DisclosureWhereInput
    /**
     * Limit how many Disclosures to delete.
     */
    limit?: number
  }

  /**
   * Disclosure.complianceAgreements
   */
  export type Disclosure$complianceAgreementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplianceAgreement
     */
    select?: ComplianceAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplianceAgreement
     */
    omit?: ComplianceAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceAgreementInclude<ExtArgs> | null
    where?: ComplianceAgreementWhereInput
    orderBy?: ComplianceAgreementOrderByWithRelationInput | ComplianceAgreementOrderByWithRelationInput[]
    cursor?: ComplianceAgreementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComplianceAgreementScalarFieldEnum | ComplianceAgreementScalarFieldEnum[]
  }

  /**
   * Disclosure without action
   */
  export type DisclosureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disclosure
     */
    select?: DisclosureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disclosure
     */
    omit?: DisclosureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisclosureInclude<ExtArgs> | null
  }


  /**
   * Model ComplianceAgreement
   */

  export type AggregateComplianceAgreement = {
    _count: ComplianceAgreementCountAggregateOutputType | null
    _min: ComplianceAgreementMinAggregateOutputType | null
    _max: ComplianceAgreementMaxAggregateOutputType | null
  }

  export type ComplianceAgreementMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    disclosureId: string | null
    acknowledged: boolean | null
    acknowledgedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ComplianceAgreementMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    disclosureId: string | null
    acknowledged: boolean | null
    acknowledgedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ComplianceAgreementCountAggregateOutputType = {
    id: number
    clientId: number
    disclosureId: number
    acknowledged: number
    acknowledgedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ComplianceAgreementMinAggregateInputType = {
    id?: true
    clientId?: true
    disclosureId?: true
    acknowledged?: true
    acknowledgedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ComplianceAgreementMaxAggregateInputType = {
    id?: true
    clientId?: true
    disclosureId?: true
    acknowledged?: true
    acknowledgedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ComplianceAgreementCountAggregateInputType = {
    id?: true
    clientId?: true
    disclosureId?: true
    acknowledged?: true
    acknowledgedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ComplianceAgreementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComplianceAgreement to aggregate.
     */
    where?: ComplianceAgreementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComplianceAgreements to fetch.
     */
    orderBy?: ComplianceAgreementOrderByWithRelationInput | ComplianceAgreementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComplianceAgreementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComplianceAgreements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComplianceAgreements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ComplianceAgreements
    **/
    _count?: true | ComplianceAgreementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComplianceAgreementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComplianceAgreementMaxAggregateInputType
  }

  export type GetComplianceAgreementAggregateType<T extends ComplianceAgreementAggregateArgs> = {
        [P in keyof T & keyof AggregateComplianceAgreement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComplianceAgreement[P]>
      : GetScalarType<T[P], AggregateComplianceAgreement[P]>
  }




  export type ComplianceAgreementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComplianceAgreementWhereInput
    orderBy?: ComplianceAgreementOrderByWithAggregationInput | ComplianceAgreementOrderByWithAggregationInput[]
    by: ComplianceAgreementScalarFieldEnum[] | ComplianceAgreementScalarFieldEnum
    having?: ComplianceAgreementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComplianceAgreementCountAggregateInputType | true
    _min?: ComplianceAgreementMinAggregateInputType
    _max?: ComplianceAgreementMaxAggregateInputType
  }

  export type ComplianceAgreementGroupByOutputType = {
    id: string
    clientId: string
    disclosureId: string
    acknowledged: boolean
    acknowledgedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ComplianceAgreementCountAggregateOutputType | null
    _min: ComplianceAgreementMinAggregateOutputType | null
    _max: ComplianceAgreementMaxAggregateOutputType | null
  }

  type GetComplianceAgreementGroupByPayload<T extends ComplianceAgreementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComplianceAgreementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComplianceAgreementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComplianceAgreementGroupByOutputType[P]>
            : GetScalarType<T[P], ComplianceAgreementGroupByOutputType[P]>
        }
      >
    >


  export type ComplianceAgreementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    disclosureId?: boolean
    acknowledged?: boolean
    acknowledgedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    disclosure?: boolean | DisclosureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["complianceAgreement"]>

  export type ComplianceAgreementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    disclosureId?: boolean
    acknowledged?: boolean
    acknowledgedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    disclosure?: boolean | DisclosureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["complianceAgreement"]>

  export type ComplianceAgreementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    disclosureId?: boolean
    acknowledged?: boolean
    acknowledgedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    disclosure?: boolean | DisclosureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["complianceAgreement"]>

  export type ComplianceAgreementSelectScalar = {
    id?: boolean
    clientId?: boolean
    disclosureId?: boolean
    acknowledged?: boolean
    acknowledgedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ComplianceAgreementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "disclosureId" | "acknowledged" | "acknowledgedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["complianceAgreement"]>
  export type ComplianceAgreementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    disclosure?: boolean | DisclosureDefaultArgs<ExtArgs>
  }
  export type ComplianceAgreementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    disclosure?: boolean | DisclosureDefaultArgs<ExtArgs>
  }
  export type ComplianceAgreementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    disclosure?: boolean | DisclosureDefaultArgs<ExtArgs>
  }

  export type $ComplianceAgreementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ComplianceAgreement"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      disclosure: Prisma.$DisclosurePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      disclosureId: string
      acknowledged: boolean
      acknowledgedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["complianceAgreement"]>
    composites: {}
  }

  type ComplianceAgreementGetPayload<S extends boolean | null | undefined | ComplianceAgreementDefaultArgs> = $Result.GetResult<Prisma.$ComplianceAgreementPayload, S>

  type ComplianceAgreementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComplianceAgreementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComplianceAgreementCountAggregateInputType | true
    }

  export interface ComplianceAgreementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ComplianceAgreement'], meta: { name: 'ComplianceAgreement' } }
    /**
     * Find zero or one ComplianceAgreement that matches the filter.
     * @param {ComplianceAgreementFindUniqueArgs} args - Arguments to find a ComplianceAgreement
     * @example
     * // Get one ComplianceAgreement
     * const complianceAgreement = await prisma.complianceAgreement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComplianceAgreementFindUniqueArgs>(args: SelectSubset<T, ComplianceAgreementFindUniqueArgs<ExtArgs>>): Prisma__ComplianceAgreementClient<$Result.GetResult<Prisma.$ComplianceAgreementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ComplianceAgreement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComplianceAgreementFindUniqueOrThrowArgs} args - Arguments to find a ComplianceAgreement
     * @example
     * // Get one ComplianceAgreement
     * const complianceAgreement = await prisma.complianceAgreement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComplianceAgreementFindUniqueOrThrowArgs>(args: SelectSubset<T, ComplianceAgreementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComplianceAgreementClient<$Result.GetResult<Prisma.$ComplianceAgreementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComplianceAgreement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplianceAgreementFindFirstArgs} args - Arguments to find a ComplianceAgreement
     * @example
     * // Get one ComplianceAgreement
     * const complianceAgreement = await prisma.complianceAgreement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComplianceAgreementFindFirstArgs>(args?: SelectSubset<T, ComplianceAgreementFindFirstArgs<ExtArgs>>): Prisma__ComplianceAgreementClient<$Result.GetResult<Prisma.$ComplianceAgreementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComplianceAgreement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplianceAgreementFindFirstOrThrowArgs} args - Arguments to find a ComplianceAgreement
     * @example
     * // Get one ComplianceAgreement
     * const complianceAgreement = await prisma.complianceAgreement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComplianceAgreementFindFirstOrThrowArgs>(args?: SelectSubset<T, ComplianceAgreementFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComplianceAgreementClient<$Result.GetResult<Prisma.$ComplianceAgreementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ComplianceAgreements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplianceAgreementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ComplianceAgreements
     * const complianceAgreements = await prisma.complianceAgreement.findMany()
     * 
     * // Get first 10 ComplianceAgreements
     * const complianceAgreements = await prisma.complianceAgreement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const complianceAgreementWithIdOnly = await prisma.complianceAgreement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComplianceAgreementFindManyArgs>(args?: SelectSubset<T, ComplianceAgreementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplianceAgreementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ComplianceAgreement.
     * @param {ComplianceAgreementCreateArgs} args - Arguments to create a ComplianceAgreement.
     * @example
     * // Create one ComplianceAgreement
     * const ComplianceAgreement = await prisma.complianceAgreement.create({
     *   data: {
     *     // ... data to create a ComplianceAgreement
     *   }
     * })
     * 
     */
    create<T extends ComplianceAgreementCreateArgs>(args: SelectSubset<T, ComplianceAgreementCreateArgs<ExtArgs>>): Prisma__ComplianceAgreementClient<$Result.GetResult<Prisma.$ComplianceAgreementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ComplianceAgreements.
     * @param {ComplianceAgreementCreateManyArgs} args - Arguments to create many ComplianceAgreements.
     * @example
     * // Create many ComplianceAgreements
     * const complianceAgreement = await prisma.complianceAgreement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComplianceAgreementCreateManyArgs>(args?: SelectSubset<T, ComplianceAgreementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ComplianceAgreements and returns the data saved in the database.
     * @param {ComplianceAgreementCreateManyAndReturnArgs} args - Arguments to create many ComplianceAgreements.
     * @example
     * // Create many ComplianceAgreements
     * const complianceAgreement = await prisma.complianceAgreement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ComplianceAgreements and only return the `id`
     * const complianceAgreementWithIdOnly = await prisma.complianceAgreement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComplianceAgreementCreateManyAndReturnArgs>(args?: SelectSubset<T, ComplianceAgreementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplianceAgreementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ComplianceAgreement.
     * @param {ComplianceAgreementDeleteArgs} args - Arguments to delete one ComplianceAgreement.
     * @example
     * // Delete one ComplianceAgreement
     * const ComplianceAgreement = await prisma.complianceAgreement.delete({
     *   where: {
     *     // ... filter to delete one ComplianceAgreement
     *   }
     * })
     * 
     */
    delete<T extends ComplianceAgreementDeleteArgs>(args: SelectSubset<T, ComplianceAgreementDeleteArgs<ExtArgs>>): Prisma__ComplianceAgreementClient<$Result.GetResult<Prisma.$ComplianceAgreementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ComplianceAgreement.
     * @param {ComplianceAgreementUpdateArgs} args - Arguments to update one ComplianceAgreement.
     * @example
     * // Update one ComplianceAgreement
     * const complianceAgreement = await prisma.complianceAgreement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComplianceAgreementUpdateArgs>(args: SelectSubset<T, ComplianceAgreementUpdateArgs<ExtArgs>>): Prisma__ComplianceAgreementClient<$Result.GetResult<Prisma.$ComplianceAgreementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ComplianceAgreements.
     * @param {ComplianceAgreementDeleteManyArgs} args - Arguments to filter ComplianceAgreements to delete.
     * @example
     * // Delete a few ComplianceAgreements
     * const { count } = await prisma.complianceAgreement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComplianceAgreementDeleteManyArgs>(args?: SelectSubset<T, ComplianceAgreementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComplianceAgreements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplianceAgreementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ComplianceAgreements
     * const complianceAgreement = await prisma.complianceAgreement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComplianceAgreementUpdateManyArgs>(args: SelectSubset<T, ComplianceAgreementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComplianceAgreements and returns the data updated in the database.
     * @param {ComplianceAgreementUpdateManyAndReturnArgs} args - Arguments to update many ComplianceAgreements.
     * @example
     * // Update many ComplianceAgreements
     * const complianceAgreement = await prisma.complianceAgreement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ComplianceAgreements and only return the `id`
     * const complianceAgreementWithIdOnly = await prisma.complianceAgreement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ComplianceAgreementUpdateManyAndReturnArgs>(args: SelectSubset<T, ComplianceAgreementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplianceAgreementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ComplianceAgreement.
     * @param {ComplianceAgreementUpsertArgs} args - Arguments to update or create a ComplianceAgreement.
     * @example
     * // Update or create a ComplianceAgreement
     * const complianceAgreement = await prisma.complianceAgreement.upsert({
     *   create: {
     *     // ... data to create a ComplianceAgreement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ComplianceAgreement we want to update
     *   }
     * })
     */
    upsert<T extends ComplianceAgreementUpsertArgs>(args: SelectSubset<T, ComplianceAgreementUpsertArgs<ExtArgs>>): Prisma__ComplianceAgreementClient<$Result.GetResult<Prisma.$ComplianceAgreementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ComplianceAgreements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplianceAgreementCountArgs} args - Arguments to filter ComplianceAgreements to count.
     * @example
     * // Count the number of ComplianceAgreements
     * const count = await prisma.complianceAgreement.count({
     *   where: {
     *     // ... the filter for the ComplianceAgreements we want to count
     *   }
     * })
    **/
    count<T extends ComplianceAgreementCountArgs>(
      args?: Subset<T, ComplianceAgreementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComplianceAgreementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ComplianceAgreement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplianceAgreementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComplianceAgreementAggregateArgs>(args: Subset<T, ComplianceAgreementAggregateArgs>): Prisma.PrismaPromise<GetComplianceAgreementAggregateType<T>>

    /**
     * Group by ComplianceAgreement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplianceAgreementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComplianceAgreementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComplianceAgreementGroupByArgs['orderBy'] }
        : { orderBy?: ComplianceAgreementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComplianceAgreementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComplianceAgreementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ComplianceAgreement model
   */
  readonly fields: ComplianceAgreementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ComplianceAgreement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComplianceAgreementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    disclosure<T extends DisclosureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DisclosureDefaultArgs<ExtArgs>>): Prisma__DisclosureClient<$Result.GetResult<Prisma.$DisclosurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ComplianceAgreement model
   */
  interface ComplianceAgreementFieldRefs {
    readonly id: FieldRef<"ComplianceAgreement", 'String'>
    readonly clientId: FieldRef<"ComplianceAgreement", 'String'>
    readonly disclosureId: FieldRef<"ComplianceAgreement", 'String'>
    readonly acknowledged: FieldRef<"ComplianceAgreement", 'Boolean'>
    readonly acknowledgedAt: FieldRef<"ComplianceAgreement", 'DateTime'>
    readonly createdAt: FieldRef<"ComplianceAgreement", 'DateTime'>
    readonly updatedAt: FieldRef<"ComplianceAgreement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ComplianceAgreement findUnique
   */
  export type ComplianceAgreementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplianceAgreement
     */
    select?: ComplianceAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplianceAgreement
     */
    omit?: ComplianceAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceAgreementInclude<ExtArgs> | null
    /**
     * Filter, which ComplianceAgreement to fetch.
     */
    where: ComplianceAgreementWhereUniqueInput
  }

  /**
   * ComplianceAgreement findUniqueOrThrow
   */
  export type ComplianceAgreementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplianceAgreement
     */
    select?: ComplianceAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplianceAgreement
     */
    omit?: ComplianceAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceAgreementInclude<ExtArgs> | null
    /**
     * Filter, which ComplianceAgreement to fetch.
     */
    where: ComplianceAgreementWhereUniqueInput
  }

  /**
   * ComplianceAgreement findFirst
   */
  export type ComplianceAgreementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplianceAgreement
     */
    select?: ComplianceAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplianceAgreement
     */
    omit?: ComplianceAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceAgreementInclude<ExtArgs> | null
    /**
     * Filter, which ComplianceAgreement to fetch.
     */
    where?: ComplianceAgreementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComplianceAgreements to fetch.
     */
    orderBy?: ComplianceAgreementOrderByWithRelationInput | ComplianceAgreementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComplianceAgreements.
     */
    cursor?: ComplianceAgreementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComplianceAgreements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComplianceAgreements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComplianceAgreements.
     */
    distinct?: ComplianceAgreementScalarFieldEnum | ComplianceAgreementScalarFieldEnum[]
  }

  /**
   * ComplianceAgreement findFirstOrThrow
   */
  export type ComplianceAgreementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplianceAgreement
     */
    select?: ComplianceAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplianceAgreement
     */
    omit?: ComplianceAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceAgreementInclude<ExtArgs> | null
    /**
     * Filter, which ComplianceAgreement to fetch.
     */
    where?: ComplianceAgreementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComplianceAgreements to fetch.
     */
    orderBy?: ComplianceAgreementOrderByWithRelationInput | ComplianceAgreementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComplianceAgreements.
     */
    cursor?: ComplianceAgreementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComplianceAgreements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComplianceAgreements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComplianceAgreements.
     */
    distinct?: ComplianceAgreementScalarFieldEnum | ComplianceAgreementScalarFieldEnum[]
  }

  /**
   * ComplianceAgreement findMany
   */
  export type ComplianceAgreementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplianceAgreement
     */
    select?: ComplianceAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplianceAgreement
     */
    omit?: ComplianceAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceAgreementInclude<ExtArgs> | null
    /**
     * Filter, which ComplianceAgreements to fetch.
     */
    where?: ComplianceAgreementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComplianceAgreements to fetch.
     */
    orderBy?: ComplianceAgreementOrderByWithRelationInput | ComplianceAgreementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ComplianceAgreements.
     */
    cursor?: ComplianceAgreementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComplianceAgreements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComplianceAgreements.
     */
    skip?: number
    distinct?: ComplianceAgreementScalarFieldEnum | ComplianceAgreementScalarFieldEnum[]
  }

  /**
   * ComplianceAgreement create
   */
  export type ComplianceAgreementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplianceAgreement
     */
    select?: ComplianceAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplianceAgreement
     */
    omit?: ComplianceAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceAgreementInclude<ExtArgs> | null
    /**
     * The data needed to create a ComplianceAgreement.
     */
    data: XOR<ComplianceAgreementCreateInput, ComplianceAgreementUncheckedCreateInput>
  }

  /**
   * ComplianceAgreement createMany
   */
  export type ComplianceAgreementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ComplianceAgreements.
     */
    data: ComplianceAgreementCreateManyInput | ComplianceAgreementCreateManyInput[]
  }

  /**
   * ComplianceAgreement createManyAndReturn
   */
  export type ComplianceAgreementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplianceAgreement
     */
    select?: ComplianceAgreementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ComplianceAgreement
     */
    omit?: ComplianceAgreementOmit<ExtArgs> | null
    /**
     * The data used to create many ComplianceAgreements.
     */
    data: ComplianceAgreementCreateManyInput | ComplianceAgreementCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceAgreementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ComplianceAgreement update
   */
  export type ComplianceAgreementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplianceAgreement
     */
    select?: ComplianceAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplianceAgreement
     */
    omit?: ComplianceAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceAgreementInclude<ExtArgs> | null
    /**
     * The data needed to update a ComplianceAgreement.
     */
    data: XOR<ComplianceAgreementUpdateInput, ComplianceAgreementUncheckedUpdateInput>
    /**
     * Choose, which ComplianceAgreement to update.
     */
    where: ComplianceAgreementWhereUniqueInput
  }

  /**
   * ComplianceAgreement updateMany
   */
  export type ComplianceAgreementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ComplianceAgreements.
     */
    data: XOR<ComplianceAgreementUpdateManyMutationInput, ComplianceAgreementUncheckedUpdateManyInput>
    /**
     * Filter which ComplianceAgreements to update
     */
    where?: ComplianceAgreementWhereInput
    /**
     * Limit how many ComplianceAgreements to update.
     */
    limit?: number
  }

  /**
   * ComplianceAgreement updateManyAndReturn
   */
  export type ComplianceAgreementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplianceAgreement
     */
    select?: ComplianceAgreementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ComplianceAgreement
     */
    omit?: ComplianceAgreementOmit<ExtArgs> | null
    /**
     * The data used to update ComplianceAgreements.
     */
    data: XOR<ComplianceAgreementUpdateManyMutationInput, ComplianceAgreementUncheckedUpdateManyInput>
    /**
     * Filter which ComplianceAgreements to update
     */
    where?: ComplianceAgreementWhereInput
    /**
     * Limit how many ComplianceAgreements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceAgreementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ComplianceAgreement upsert
   */
  export type ComplianceAgreementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplianceAgreement
     */
    select?: ComplianceAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplianceAgreement
     */
    omit?: ComplianceAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceAgreementInclude<ExtArgs> | null
    /**
     * The filter to search for the ComplianceAgreement to update in case it exists.
     */
    where: ComplianceAgreementWhereUniqueInput
    /**
     * In case the ComplianceAgreement found by the `where` argument doesn't exist, create a new ComplianceAgreement with this data.
     */
    create: XOR<ComplianceAgreementCreateInput, ComplianceAgreementUncheckedCreateInput>
    /**
     * In case the ComplianceAgreement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComplianceAgreementUpdateInput, ComplianceAgreementUncheckedUpdateInput>
  }

  /**
   * ComplianceAgreement delete
   */
  export type ComplianceAgreementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplianceAgreement
     */
    select?: ComplianceAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplianceAgreement
     */
    omit?: ComplianceAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceAgreementInclude<ExtArgs> | null
    /**
     * Filter which ComplianceAgreement to delete.
     */
    where: ComplianceAgreementWhereUniqueInput
  }

  /**
   * ComplianceAgreement deleteMany
   */
  export type ComplianceAgreementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComplianceAgreements to delete
     */
    where?: ComplianceAgreementWhereInput
    /**
     * Limit how many ComplianceAgreements to delete.
     */
    limit?: number
  }

  /**
   * ComplianceAgreement without action
   */
  export type ComplianceAgreementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplianceAgreement
     */
    select?: ComplianceAgreementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplianceAgreement
     */
    omit?: ComplianceAgreementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceAgreementInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    role: 'role',
    isEmailVerified: 'isEmailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    type: 'type',
    expires: 'expires',
    blacklisted: 'blacklisted',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    status: 'status',
    progress: 'progress',
    riskProfile: 'riskProfile',
    accountValue: 'accountValue',
    firmId: 'firmId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    type: 'type',
    clientName: 'clientName',
    description: 'description',
    timestamp: 'timestamp',
    clientId: 'clientId'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    fileName: 'fileName',
    fileSize: 'fileSize',
    fileType: 'fileType',
    documentTypeId: 'documentTypeId',
    clientId: 'clientId',
    status: 'status',
    signedUrl: 'signedUrl',
    uploadedAt: 'uploadedAt',
    verifiedAt: 'verifiedAt',
    rejectionReason: 'rejectionReason'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const DocumentTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    required: 'required',
    category: 'category',
    acceptedFormats: 'acceptedFormats',
    maxFileSize: 'maxFileSize'
  };

  export type DocumentTypeScalarFieldEnum = (typeof DocumentTypeScalarFieldEnum)[keyof typeof DocumentTypeScalarFieldEnum]


  export const OnboardingDataScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    personalInfo: 'personalInfo',
    contactInfo: 'contactInfo',
    employmentInfo: 'employmentInfo',
    riskProfile: 'riskProfile',
    investmentObjectives: 'investmentObjectives',
    financialGoals: 'financialGoals',
    selectedAccountTypes: 'selectedAccountTypes',
    fundingMethods: 'fundingMethods',
    uploadedDocuments: 'uploadedDocuments',
    disclosures: 'disclosures',
    complianceRecords: 'complianceRecords',
    status: 'status',
    currentStep: 'currentStep',
    totalSteps: 'totalSteps',
    submittedAt: 'submittedAt',
    reviewedAt: 'reviewedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OnboardingDataScalarFieldEnum = (typeof OnboardingDataScalarFieldEnum)[keyof typeof OnboardingDataScalarFieldEnum]


  export const RiskAssessmentScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    investmentExperience: 'investmentExperience',
    riskTolerance: 'riskTolerance',
    investmentTimeHorizon: 'investmentTimeHorizon',
    liquidityNeeds: 'liquidityNeeds',
    ageRange: 'ageRange',
    investmentKnowledge: 'investmentKnowledge',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RiskAssessmentScalarFieldEnum = (typeof RiskAssessmentScalarFieldEnum)[keyof typeof RiskAssessmentScalarFieldEnum]


  export const InvestmentObjectivesScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    primaryGoal: 'primaryGoal',
    specificGoals: 'specificGoals',
    targetAmount: 'targetAmount',
    timeHorizon: 'timeHorizon',
    monthlyContribution: 'monthlyContribution',
    riskComfort: 'riskComfort',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvestmentObjectivesScalarFieldEnum = (typeof InvestmentObjectivesScalarFieldEnum)[keyof typeof InvestmentObjectivesScalarFieldEnum]


  export const AccountTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    taxAdvantaged: 'taxAdvantaged',
    minimumBalance: 'minimumBalance',
    annualFee: 'annualFee',
    transactionFee: 'transactionFee',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountTypeScalarFieldEnum = (typeof AccountTypeScalarFieldEnum)[keyof typeof AccountTypeScalarFieldEnum]


  export const DisclosureScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    required: 'required',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DisclosureScalarFieldEnum = (typeof DisclosureScalarFieldEnum)[keyof typeof DisclosureScalarFieldEnum]


  export const ComplianceAgreementScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    disclosureId: 'disclosureId',
    acknowledged: 'acknowledged',
    acknowledgedAt: 'acknowledgedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ComplianceAgreementScalarFieldEnum = (typeof ComplianceAgreementScalarFieldEnum)[keyof typeof ComplianceAgreementScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    isEmailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tokens?: TokenListRelationFilter
    clients?: ClientListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tokens?: TokenOrderByRelationAggregateInput
    clients?: ClientOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    isEmailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tokens?: TokenListRelationFilter
    clients?: ClientListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: IntFilter<"Token"> | number
    token?: StringFilter<"Token"> | string
    type?: StringFilter<"Token"> | string
    expires?: DateTimeFilter<"Token"> | Date | string
    blacklisted?: BoolFilter<"Token"> | boolean
    createdAt?: DateTimeFilter<"Token"> | Date | string
    userId?: IntFilter<"Token"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    token?: StringFilter<"Token"> | string
    type?: StringFilter<"Token"> | string
    expires?: DateTimeFilter<"Token"> | Date | string
    blacklisted?: BoolFilter<"Token"> | boolean
    createdAt?: DateTimeFilter<"Token"> | Date | string
    userId?: IntFilter<"Token"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _avg?: TokenAvgOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
    _sum?: TokenSumOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Token"> | number
    token?: StringWithAggregatesFilter<"Token"> | string
    type?: StringWithAggregatesFilter<"Token"> | string
    expires?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    blacklisted?: BoolWithAggregatesFilter<"Token"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    userId?: IntWithAggregatesFilter<"Token"> | number
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    firstName?: StringFilter<"Client"> | string
    lastName?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    phone?: StringFilter<"Client"> | string
    status?: StringFilter<"Client"> | string
    progress?: IntFilter<"Client"> | number
    riskProfile?: StringNullableFilter<"Client"> | string | null
    accountValue?: FloatNullableFilter<"Client"> | number | null
    firmId?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    userId?: IntFilter<"Client"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    documents?: DocumentListRelationFilter
    activities?: ActivityListRelationFilter
    onboardingData?: XOR<OnboardingDataNullableScalarRelationFilter, OnboardingDataWhereInput> | null
    riskAssessment?: XOR<RiskAssessmentNullableScalarRelationFilter, RiskAssessmentWhereInput> | null
    investmentObjectives?: XOR<InvestmentObjectivesNullableScalarRelationFilter, InvestmentObjectivesWhereInput> | null
    complianceAgreements?: ComplianceAgreementListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    riskProfile?: SortOrderInput | SortOrder
    accountValue?: SortOrderInput | SortOrder
    firmId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    documents?: DocumentOrderByRelationAggregateInput
    activities?: ActivityOrderByRelationAggregateInput
    onboardingData?: OnboardingDataOrderByWithRelationInput
    riskAssessment?: RiskAssessmentOrderByWithRelationInput
    investmentObjectives?: InvestmentObjectivesOrderByWithRelationInput
    complianceAgreements?: ComplianceAgreementOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    firstName?: StringFilter<"Client"> | string
    lastName?: StringFilter<"Client"> | string
    phone?: StringFilter<"Client"> | string
    status?: StringFilter<"Client"> | string
    progress?: IntFilter<"Client"> | number
    riskProfile?: StringNullableFilter<"Client"> | string | null
    accountValue?: FloatNullableFilter<"Client"> | number | null
    firmId?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    userId?: IntFilter<"Client"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    documents?: DocumentListRelationFilter
    activities?: ActivityListRelationFilter
    onboardingData?: XOR<OnboardingDataNullableScalarRelationFilter, OnboardingDataWhereInput> | null
    riskAssessment?: XOR<RiskAssessmentNullableScalarRelationFilter, RiskAssessmentWhereInput> | null
    investmentObjectives?: XOR<InvestmentObjectivesNullableScalarRelationFilter, InvestmentObjectivesWhereInput> | null
    complianceAgreements?: ComplianceAgreementListRelationFilter
  }, "id" | "email">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    riskProfile?: SortOrderInput | SortOrder
    accountValue?: SortOrderInput | SortOrder
    firmId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    firstName?: StringWithAggregatesFilter<"Client"> | string
    lastName?: StringWithAggregatesFilter<"Client"> | string
    email?: StringWithAggregatesFilter<"Client"> | string
    phone?: StringWithAggregatesFilter<"Client"> | string
    status?: StringWithAggregatesFilter<"Client"> | string
    progress?: IntWithAggregatesFilter<"Client"> | number
    riskProfile?: StringNullableWithAggregatesFilter<"Client"> | string | null
    accountValue?: FloatNullableWithAggregatesFilter<"Client"> | number | null
    firmId?: StringWithAggregatesFilter<"Client"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    userId?: IntWithAggregatesFilter<"Client"> | number
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    id?: StringFilter<"Activity"> | string
    type?: StringFilter<"Activity"> | string
    clientName?: StringFilter<"Activity"> | string
    description?: StringFilter<"Activity"> | string
    timestamp?: DateTimeFilter<"Activity"> | Date | string
    clientId?: StringNullableFilter<"Activity"> | string | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    clientName?: SortOrder
    description?: SortOrder
    timestamp?: SortOrder
    clientId?: SortOrderInput | SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    type?: StringFilter<"Activity"> | string
    clientName?: StringFilter<"Activity"> | string
    description?: StringFilter<"Activity"> | string
    timestamp?: DateTimeFilter<"Activity"> | Date | string
    clientId?: StringNullableFilter<"Activity"> | string | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
  }, "id">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    clientName?: SortOrder
    description?: SortOrder
    timestamp?: SortOrder
    clientId?: SortOrderInput | SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Activity"> | string
    type?: StringWithAggregatesFilter<"Activity"> | string
    clientName?: StringWithAggregatesFilter<"Activity"> | string
    description?: StringWithAggregatesFilter<"Activity"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    clientId?: StringNullableWithAggregatesFilter<"Activity"> | string | null
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    fileName?: StringFilter<"Document"> | string
    fileSize?: IntFilter<"Document"> | number
    fileType?: StringFilter<"Document"> | string
    documentTypeId?: StringFilter<"Document"> | string
    clientId?: StringFilter<"Document"> | string
    status?: StringFilter<"Document"> | string
    signedUrl?: StringNullableFilter<"Document"> | string | null
    uploadedAt?: DateTimeFilter<"Document"> | Date | string
    verifiedAt?: DateTimeNullableFilter<"Document"> | Date | string | null
    rejectionReason?: StringNullableFilter<"Document"> | string | null
    documentType?: XOR<DocumentTypeScalarRelationFilter, DocumentTypeWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    fileType?: SortOrder
    documentTypeId?: SortOrder
    clientId?: SortOrder
    status?: SortOrder
    signedUrl?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    documentType?: DocumentTypeOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    fileName?: StringFilter<"Document"> | string
    fileSize?: IntFilter<"Document"> | number
    fileType?: StringFilter<"Document"> | string
    documentTypeId?: StringFilter<"Document"> | string
    clientId?: StringFilter<"Document"> | string
    status?: StringFilter<"Document"> | string
    signedUrl?: StringNullableFilter<"Document"> | string | null
    uploadedAt?: DateTimeFilter<"Document"> | Date | string
    verifiedAt?: DateTimeNullableFilter<"Document"> | Date | string | null
    rejectionReason?: StringNullableFilter<"Document"> | string | null
    documentType?: XOR<DocumentTypeScalarRelationFilter, DocumentTypeWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    fileType?: SortOrder
    documentTypeId?: SortOrder
    clientId?: SortOrder
    status?: SortOrder
    signedUrl?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _avg?: DocumentAvgOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
    _sum?: DocumentSumOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    fileName?: StringWithAggregatesFilter<"Document"> | string
    fileSize?: IntWithAggregatesFilter<"Document"> | number
    fileType?: StringWithAggregatesFilter<"Document"> | string
    documentTypeId?: StringWithAggregatesFilter<"Document"> | string
    clientId?: StringWithAggregatesFilter<"Document"> | string
    status?: StringWithAggregatesFilter<"Document"> | string
    signedUrl?: StringNullableWithAggregatesFilter<"Document"> | string | null
    uploadedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"Document"> | Date | string | null
    rejectionReason?: StringNullableWithAggregatesFilter<"Document"> | string | null
  }

  export type DocumentTypeWhereInput = {
    AND?: DocumentTypeWhereInput | DocumentTypeWhereInput[]
    OR?: DocumentTypeWhereInput[]
    NOT?: DocumentTypeWhereInput | DocumentTypeWhereInput[]
    id?: StringFilter<"DocumentType"> | string
    name?: StringFilter<"DocumentType"> | string
    description?: StringFilter<"DocumentType"> | string
    required?: BoolFilter<"DocumentType"> | boolean
    category?: StringFilter<"DocumentType"> | string
    acceptedFormats?: StringFilter<"DocumentType"> | string
    maxFileSize?: IntFilter<"DocumentType"> | number
    documents?: DocumentListRelationFilter
  }

  export type DocumentTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    required?: SortOrder
    category?: SortOrder
    acceptedFormats?: SortOrder
    maxFileSize?: SortOrder
    documents?: DocumentOrderByRelationAggregateInput
  }

  export type DocumentTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: DocumentTypeWhereInput | DocumentTypeWhereInput[]
    OR?: DocumentTypeWhereInput[]
    NOT?: DocumentTypeWhereInput | DocumentTypeWhereInput[]
    description?: StringFilter<"DocumentType"> | string
    required?: BoolFilter<"DocumentType"> | boolean
    category?: StringFilter<"DocumentType"> | string
    acceptedFormats?: StringFilter<"DocumentType"> | string
    maxFileSize?: IntFilter<"DocumentType"> | number
    documents?: DocumentListRelationFilter
  }, "id" | "name">

  export type DocumentTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    required?: SortOrder
    category?: SortOrder
    acceptedFormats?: SortOrder
    maxFileSize?: SortOrder
    _count?: DocumentTypeCountOrderByAggregateInput
    _avg?: DocumentTypeAvgOrderByAggregateInput
    _max?: DocumentTypeMaxOrderByAggregateInput
    _min?: DocumentTypeMinOrderByAggregateInput
    _sum?: DocumentTypeSumOrderByAggregateInput
  }

  export type DocumentTypeScalarWhereWithAggregatesInput = {
    AND?: DocumentTypeScalarWhereWithAggregatesInput | DocumentTypeScalarWhereWithAggregatesInput[]
    OR?: DocumentTypeScalarWhereWithAggregatesInput[]
    NOT?: DocumentTypeScalarWhereWithAggregatesInput | DocumentTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DocumentType"> | string
    name?: StringWithAggregatesFilter<"DocumentType"> | string
    description?: StringWithAggregatesFilter<"DocumentType"> | string
    required?: BoolWithAggregatesFilter<"DocumentType"> | boolean
    category?: StringWithAggregatesFilter<"DocumentType"> | string
    acceptedFormats?: StringWithAggregatesFilter<"DocumentType"> | string
    maxFileSize?: IntWithAggregatesFilter<"DocumentType"> | number
  }

  export type OnboardingDataWhereInput = {
    AND?: OnboardingDataWhereInput | OnboardingDataWhereInput[]
    OR?: OnboardingDataWhereInput[]
    NOT?: OnboardingDataWhereInput | OnboardingDataWhereInput[]
    id?: StringFilter<"OnboardingData"> | string
    clientId?: StringFilter<"OnboardingData"> | string
    personalInfo?: JsonFilter<"OnboardingData">
    contactInfo?: JsonNullableFilter<"OnboardingData">
    employmentInfo?: JsonNullableFilter<"OnboardingData">
    riskProfile?: JsonNullableFilter<"OnboardingData">
    investmentObjectives?: JsonNullableFilter<"OnboardingData">
    financialGoals?: JsonFilter<"OnboardingData">
    selectedAccountTypes?: JsonFilter<"OnboardingData">
    fundingMethods?: JsonFilter<"OnboardingData">
    uploadedDocuments?: JsonFilter<"OnboardingData">
    disclosures?: JsonFilter<"OnboardingData">
    complianceRecords?: JsonFilter<"OnboardingData">
    status?: StringFilter<"OnboardingData"> | string
    currentStep?: IntFilter<"OnboardingData"> | number
    totalSteps?: IntFilter<"OnboardingData"> | number
    submittedAt?: DateTimeNullableFilter<"OnboardingData"> | Date | string | null
    reviewedAt?: DateTimeNullableFilter<"OnboardingData"> | Date | string | null
    createdAt?: DateTimeFilter<"OnboardingData"> | Date | string
    updatedAt?: DateTimeFilter<"OnboardingData"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type OnboardingDataOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    personalInfo?: SortOrder
    contactInfo?: SortOrderInput | SortOrder
    employmentInfo?: SortOrderInput | SortOrder
    riskProfile?: SortOrderInput | SortOrder
    investmentObjectives?: SortOrderInput | SortOrder
    financialGoals?: SortOrder
    selectedAccountTypes?: SortOrder
    fundingMethods?: SortOrder
    uploadedDocuments?: SortOrder
    disclosures?: SortOrder
    complianceRecords?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    totalSteps?: SortOrder
    submittedAt?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type OnboardingDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clientId?: string
    AND?: OnboardingDataWhereInput | OnboardingDataWhereInput[]
    OR?: OnboardingDataWhereInput[]
    NOT?: OnboardingDataWhereInput | OnboardingDataWhereInput[]
    personalInfo?: JsonFilter<"OnboardingData">
    contactInfo?: JsonNullableFilter<"OnboardingData">
    employmentInfo?: JsonNullableFilter<"OnboardingData">
    riskProfile?: JsonNullableFilter<"OnboardingData">
    investmentObjectives?: JsonNullableFilter<"OnboardingData">
    financialGoals?: JsonFilter<"OnboardingData">
    selectedAccountTypes?: JsonFilter<"OnboardingData">
    fundingMethods?: JsonFilter<"OnboardingData">
    uploadedDocuments?: JsonFilter<"OnboardingData">
    disclosures?: JsonFilter<"OnboardingData">
    complianceRecords?: JsonFilter<"OnboardingData">
    status?: StringFilter<"OnboardingData"> | string
    currentStep?: IntFilter<"OnboardingData"> | number
    totalSteps?: IntFilter<"OnboardingData"> | number
    submittedAt?: DateTimeNullableFilter<"OnboardingData"> | Date | string | null
    reviewedAt?: DateTimeNullableFilter<"OnboardingData"> | Date | string | null
    createdAt?: DateTimeFilter<"OnboardingData"> | Date | string
    updatedAt?: DateTimeFilter<"OnboardingData"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id" | "clientId">

  export type OnboardingDataOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    personalInfo?: SortOrder
    contactInfo?: SortOrderInput | SortOrder
    employmentInfo?: SortOrderInput | SortOrder
    riskProfile?: SortOrderInput | SortOrder
    investmentObjectives?: SortOrderInput | SortOrder
    financialGoals?: SortOrder
    selectedAccountTypes?: SortOrder
    fundingMethods?: SortOrder
    uploadedDocuments?: SortOrder
    disclosures?: SortOrder
    complianceRecords?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    totalSteps?: SortOrder
    submittedAt?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OnboardingDataCountOrderByAggregateInput
    _avg?: OnboardingDataAvgOrderByAggregateInput
    _max?: OnboardingDataMaxOrderByAggregateInput
    _min?: OnboardingDataMinOrderByAggregateInput
    _sum?: OnboardingDataSumOrderByAggregateInput
  }

  export type OnboardingDataScalarWhereWithAggregatesInput = {
    AND?: OnboardingDataScalarWhereWithAggregatesInput | OnboardingDataScalarWhereWithAggregatesInput[]
    OR?: OnboardingDataScalarWhereWithAggregatesInput[]
    NOT?: OnboardingDataScalarWhereWithAggregatesInput | OnboardingDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OnboardingData"> | string
    clientId?: StringWithAggregatesFilter<"OnboardingData"> | string
    personalInfo?: JsonWithAggregatesFilter<"OnboardingData">
    contactInfo?: JsonNullableWithAggregatesFilter<"OnboardingData">
    employmentInfo?: JsonNullableWithAggregatesFilter<"OnboardingData">
    riskProfile?: JsonNullableWithAggregatesFilter<"OnboardingData">
    investmentObjectives?: JsonNullableWithAggregatesFilter<"OnboardingData">
    financialGoals?: JsonWithAggregatesFilter<"OnboardingData">
    selectedAccountTypes?: JsonWithAggregatesFilter<"OnboardingData">
    fundingMethods?: JsonWithAggregatesFilter<"OnboardingData">
    uploadedDocuments?: JsonWithAggregatesFilter<"OnboardingData">
    disclosures?: JsonWithAggregatesFilter<"OnboardingData">
    complianceRecords?: JsonWithAggregatesFilter<"OnboardingData">
    status?: StringWithAggregatesFilter<"OnboardingData"> | string
    currentStep?: IntWithAggregatesFilter<"OnboardingData"> | number
    totalSteps?: IntWithAggregatesFilter<"OnboardingData"> | number
    submittedAt?: DateTimeNullableWithAggregatesFilter<"OnboardingData"> | Date | string | null
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"OnboardingData"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OnboardingData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OnboardingData"> | Date | string
  }

  export type RiskAssessmentWhereInput = {
    AND?: RiskAssessmentWhereInput | RiskAssessmentWhereInput[]
    OR?: RiskAssessmentWhereInput[]
    NOT?: RiskAssessmentWhereInput | RiskAssessmentWhereInput[]
    id?: StringFilter<"RiskAssessment"> | string
    clientId?: StringFilter<"RiskAssessment"> | string
    investmentExperience?: StringFilter<"RiskAssessment"> | string
    riskTolerance?: StringFilter<"RiskAssessment"> | string
    investmentTimeHorizon?: StringFilter<"RiskAssessment"> | string
    liquidityNeeds?: StringFilter<"RiskAssessment"> | string
    ageRange?: StringFilter<"RiskAssessment"> | string
    investmentKnowledge?: StringFilter<"RiskAssessment"> | string
    createdAt?: DateTimeFilter<"RiskAssessment"> | Date | string
    updatedAt?: DateTimeFilter<"RiskAssessment"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type RiskAssessmentOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    investmentExperience?: SortOrder
    riskTolerance?: SortOrder
    investmentTimeHorizon?: SortOrder
    liquidityNeeds?: SortOrder
    ageRange?: SortOrder
    investmentKnowledge?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type RiskAssessmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clientId?: string
    AND?: RiskAssessmentWhereInput | RiskAssessmentWhereInput[]
    OR?: RiskAssessmentWhereInput[]
    NOT?: RiskAssessmentWhereInput | RiskAssessmentWhereInput[]
    investmentExperience?: StringFilter<"RiskAssessment"> | string
    riskTolerance?: StringFilter<"RiskAssessment"> | string
    investmentTimeHorizon?: StringFilter<"RiskAssessment"> | string
    liquidityNeeds?: StringFilter<"RiskAssessment"> | string
    ageRange?: StringFilter<"RiskAssessment"> | string
    investmentKnowledge?: StringFilter<"RiskAssessment"> | string
    createdAt?: DateTimeFilter<"RiskAssessment"> | Date | string
    updatedAt?: DateTimeFilter<"RiskAssessment"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id" | "clientId">

  export type RiskAssessmentOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    investmentExperience?: SortOrder
    riskTolerance?: SortOrder
    investmentTimeHorizon?: SortOrder
    liquidityNeeds?: SortOrder
    ageRange?: SortOrder
    investmentKnowledge?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RiskAssessmentCountOrderByAggregateInput
    _max?: RiskAssessmentMaxOrderByAggregateInput
    _min?: RiskAssessmentMinOrderByAggregateInput
  }

  export type RiskAssessmentScalarWhereWithAggregatesInput = {
    AND?: RiskAssessmentScalarWhereWithAggregatesInput | RiskAssessmentScalarWhereWithAggregatesInput[]
    OR?: RiskAssessmentScalarWhereWithAggregatesInput[]
    NOT?: RiskAssessmentScalarWhereWithAggregatesInput | RiskAssessmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RiskAssessment"> | string
    clientId?: StringWithAggregatesFilter<"RiskAssessment"> | string
    investmentExperience?: StringWithAggregatesFilter<"RiskAssessment"> | string
    riskTolerance?: StringWithAggregatesFilter<"RiskAssessment"> | string
    investmentTimeHorizon?: StringWithAggregatesFilter<"RiskAssessment"> | string
    liquidityNeeds?: StringWithAggregatesFilter<"RiskAssessment"> | string
    ageRange?: StringWithAggregatesFilter<"RiskAssessment"> | string
    investmentKnowledge?: StringWithAggregatesFilter<"RiskAssessment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RiskAssessment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RiskAssessment"> | Date | string
  }

  export type InvestmentObjectivesWhereInput = {
    AND?: InvestmentObjectivesWhereInput | InvestmentObjectivesWhereInput[]
    OR?: InvestmentObjectivesWhereInput[]
    NOT?: InvestmentObjectivesWhereInput | InvestmentObjectivesWhereInput[]
    id?: StringFilter<"InvestmentObjectives"> | string
    clientId?: StringFilter<"InvestmentObjectives"> | string
    primaryGoal?: StringFilter<"InvestmentObjectives"> | string
    specificGoals?: JsonFilter<"InvestmentObjectives">
    targetAmount?: FloatNullableFilter<"InvestmentObjectives"> | number | null
    timeHorizon?: IntFilter<"InvestmentObjectives"> | number
    monthlyContribution?: FloatNullableFilter<"InvestmentObjectives"> | number | null
    riskComfort?: IntFilter<"InvestmentObjectives"> | number
    createdAt?: DateTimeFilter<"InvestmentObjectives"> | Date | string
    updatedAt?: DateTimeFilter<"InvestmentObjectives"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type InvestmentObjectivesOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    primaryGoal?: SortOrder
    specificGoals?: SortOrder
    targetAmount?: SortOrderInput | SortOrder
    timeHorizon?: SortOrder
    monthlyContribution?: SortOrderInput | SortOrder
    riskComfort?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type InvestmentObjectivesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clientId?: string
    AND?: InvestmentObjectivesWhereInput | InvestmentObjectivesWhereInput[]
    OR?: InvestmentObjectivesWhereInput[]
    NOT?: InvestmentObjectivesWhereInput | InvestmentObjectivesWhereInput[]
    primaryGoal?: StringFilter<"InvestmentObjectives"> | string
    specificGoals?: JsonFilter<"InvestmentObjectives">
    targetAmount?: FloatNullableFilter<"InvestmentObjectives"> | number | null
    timeHorizon?: IntFilter<"InvestmentObjectives"> | number
    monthlyContribution?: FloatNullableFilter<"InvestmentObjectives"> | number | null
    riskComfort?: IntFilter<"InvestmentObjectives"> | number
    createdAt?: DateTimeFilter<"InvestmentObjectives"> | Date | string
    updatedAt?: DateTimeFilter<"InvestmentObjectives"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id" | "clientId">

  export type InvestmentObjectivesOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    primaryGoal?: SortOrder
    specificGoals?: SortOrder
    targetAmount?: SortOrderInput | SortOrder
    timeHorizon?: SortOrder
    monthlyContribution?: SortOrderInput | SortOrder
    riskComfort?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvestmentObjectivesCountOrderByAggregateInput
    _avg?: InvestmentObjectivesAvgOrderByAggregateInput
    _max?: InvestmentObjectivesMaxOrderByAggregateInput
    _min?: InvestmentObjectivesMinOrderByAggregateInput
    _sum?: InvestmentObjectivesSumOrderByAggregateInput
  }

  export type InvestmentObjectivesScalarWhereWithAggregatesInput = {
    AND?: InvestmentObjectivesScalarWhereWithAggregatesInput | InvestmentObjectivesScalarWhereWithAggregatesInput[]
    OR?: InvestmentObjectivesScalarWhereWithAggregatesInput[]
    NOT?: InvestmentObjectivesScalarWhereWithAggregatesInput | InvestmentObjectivesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InvestmentObjectives"> | string
    clientId?: StringWithAggregatesFilter<"InvestmentObjectives"> | string
    primaryGoal?: StringWithAggregatesFilter<"InvestmentObjectives"> | string
    specificGoals?: JsonWithAggregatesFilter<"InvestmentObjectives">
    targetAmount?: FloatNullableWithAggregatesFilter<"InvestmentObjectives"> | number | null
    timeHorizon?: IntWithAggregatesFilter<"InvestmentObjectives"> | number
    monthlyContribution?: FloatNullableWithAggregatesFilter<"InvestmentObjectives"> | number | null
    riskComfort?: IntWithAggregatesFilter<"InvestmentObjectives"> | number
    createdAt?: DateTimeWithAggregatesFilter<"InvestmentObjectives"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InvestmentObjectives"> | Date | string
  }

  export type AccountTypeWhereInput = {
    AND?: AccountTypeWhereInput | AccountTypeWhereInput[]
    OR?: AccountTypeWhereInput[]
    NOT?: AccountTypeWhereInput | AccountTypeWhereInput[]
    id?: StringFilter<"AccountType"> | string
    name?: StringFilter<"AccountType"> | string
    description?: StringFilter<"AccountType"> | string
    taxAdvantaged?: BoolFilter<"AccountType"> | boolean
    minimumBalance?: FloatFilter<"AccountType"> | number
    annualFee?: FloatFilter<"AccountType"> | number
    transactionFee?: FloatFilter<"AccountType"> | number
    createdAt?: DateTimeFilter<"AccountType"> | Date | string
    updatedAt?: DateTimeFilter<"AccountType"> | Date | string
  }

  export type AccountTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    taxAdvantaged?: SortOrder
    minimumBalance?: SortOrder
    annualFee?: SortOrder
    transactionFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: AccountTypeWhereInput | AccountTypeWhereInput[]
    OR?: AccountTypeWhereInput[]
    NOT?: AccountTypeWhereInput | AccountTypeWhereInput[]
    description?: StringFilter<"AccountType"> | string
    taxAdvantaged?: BoolFilter<"AccountType"> | boolean
    minimumBalance?: FloatFilter<"AccountType"> | number
    annualFee?: FloatFilter<"AccountType"> | number
    transactionFee?: FloatFilter<"AccountType"> | number
    createdAt?: DateTimeFilter<"AccountType"> | Date | string
    updatedAt?: DateTimeFilter<"AccountType"> | Date | string
  }, "id" | "name">

  export type AccountTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    taxAdvantaged?: SortOrder
    minimumBalance?: SortOrder
    annualFee?: SortOrder
    transactionFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountTypeCountOrderByAggregateInput
    _avg?: AccountTypeAvgOrderByAggregateInput
    _max?: AccountTypeMaxOrderByAggregateInput
    _min?: AccountTypeMinOrderByAggregateInput
    _sum?: AccountTypeSumOrderByAggregateInput
  }

  export type AccountTypeScalarWhereWithAggregatesInput = {
    AND?: AccountTypeScalarWhereWithAggregatesInput | AccountTypeScalarWhereWithAggregatesInput[]
    OR?: AccountTypeScalarWhereWithAggregatesInput[]
    NOT?: AccountTypeScalarWhereWithAggregatesInput | AccountTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AccountType"> | string
    name?: StringWithAggregatesFilter<"AccountType"> | string
    description?: StringWithAggregatesFilter<"AccountType"> | string
    taxAdvantaged?: BoolWithAggregatesFilter<"AccountType"> | boolean
    minimumBalance?: FloatWithAggregatesFilter<"AccountType"> | number
    annualFee?: FloatWithAggregatesFilter<"AccountType"> | number
    transactionFee?: FloatWithAggregatesFilter<"AccountType"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AccountType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AccountType"> | Date | string
  }

  export type DisclosureWhereInput = {
    AND?: DisclosureWhereInput | DisclosureWhereInput[]
    OR?: DisclosureWhereInput[]
    NOT?: DisclosureWhereInput | DisclosureWhereInput[]
    id?: StringFilter<"Disclosure"> | string
    title?: StringFilter<"Disclosure"> | string
    content?: StringFilter<"Disclosure"> | string
    required?: BoolFilter<"Disclosure"> | boolean
    createdAt?: DateTimeFilter<"Disclosure"> | Date | string
    updatedAt?: DateTimeFilter<"Disclosure"> | Date | string
    complianceAgreements?: ComplianceAgreementListRelationFilter
  }

  export type DisclosureOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    required?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    complianceAgreements?: ComplianceAgreementOrderByRelationAggregateInput
  }

  export type DisclosureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DisclosureWhereInput | DisclosureWhereInput[]
    OR?: DisclosureWhereInput[]
    NOT?: DisclosureWhereInput | DisclosureWhereInput[]
    title?: StringFilter<"Disclosure"> | string
    content?: StringFilter<"Disclosure"> | string
    required?: BoolFilter<"Disclosure"> | boolean
    createdAt?: DateTimeFilter<"Disclosure"> | Date | string
    updatedAt?: DateTimeFilter<"Disclosure"> | Date | string
    complianceAgreements?: ComplianceAgreementListRelationFilter
  }, "id">

  export type DisclosureOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    required?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DisclosureCountOrderByAggregateInput
    _max?: DisclosureMaxOrderByAggregateInput
    _min?: DisclosureMinOrderByAggregateInput
  }

  export type DisclosureScalarWhereWithAggregatesInput = {
    AND?: DisclosureScalarWhereWithAggregatesInput | DisclosureScalarWhereWithAggregatesInput[]
    OR?: DisclosureScalarWhereWithAggregatesInput[]
    NOT?: DisclosureScalarWhereWithAggregatesInput | DisclosureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Disclosure"> | string
    title?: StringWithAggregatesFilter<"Disclosure"> | string
    content?: StringWithAggregatesFilter<"Disclosure"> | string
    required?: BoolWithAggregatesFilter<"Disclosure"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Disclosure"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Disclosure"> | Date | string
  }

  export type ComplianceAgreementWhereInput = {
    AND?: ComplianceAgreementWhereInput | ComplianceAgreementWhereInput[]
    OR?: ComplianceAgreementWhereInput[]
    NOT?: ComplianceAgreementWhereInput | ComplianceAgreementWhereInput[]
    id?: StringFilter<"ComplianceAgreement"> | string
    clientId?: StringFilter<"ComplianceAgreement"> | string
    disclosureId?: StringFilter<"ComplianceAgreement"> | string
    acknowledged?: BoolFilter<"ComplianceAgreement"> | boolean
    acknowledgedAt?: DateTimeNullableFilter<"ComplianceAgreement"> | Date | string | null
    createdAt?: DateTimeFilter<"ComplianceAgreement"> | Date | string
    updatedAt?: DateTimeFilter<"ComplianceAgreement"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    disclosure?: XOR<DisclosureScalarRelationFilter, DisclosureWhereInput>
  }

  export type ComplianceAgreementOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    disclosureId?: SortOrder
    acknowledged?: SortOrder
    acknowledgedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    disclosure?: DisclosureOrderByWithRelationInput
  }

  export type ComplianceAgreementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clientId_disclosureId?: ComplianceAgreementClientIdDisclosureIdCompoundUniqueInput
    AND?: ComplianceAgreementWhereInput | ComplianceAgreementWhereInput[]
    OR?: ComplianceAgreementWhereInput[]
    NOT?: ComplianceAgreementWhereInput | ComplianceAgreementWhereInput[]
    clientId?: StringFilter<"ComplianceAgreement"> | string
    disclosureId?: StringFilter<"ComplianceAgreement"> | string
    acknowledged?: BoolFilter<"ComplianceAgreement"> | boolean
    acknowledgedAt?: DateTimeNullableFilter<"ComplianceAgreement"> | Date | string | null
    createdAt?: DateTimeFilter<"ComplianceAgreement"> | Date | string
    updatedAt?: DateTimeFilter<"ComplianceAgreement"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    disclosure?: XOR<DisclosureScalarRelationFilter, DisclosureWhereInput>
  }, "id" | "clientId_disclosureId">

  export type ComplianceAgreementOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    disclosureId?: SortOrder
    acknowledged?: SortOrder
    acknowledgedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ComplianceAgreementCountOrderByAggregateInput
    _max?: ComplianceAgreementMaxOrderByAggregateInput
    _min?: ComplianceAgreementMinOrderByAggregateInput
  }

  export type ComplianceAgreementScalarWhereWithAggregatesInput = {
    AND?: ComplianceAgreementScalarWhereWithAggregatesInput | ComplianceAgreementScalarWhereWithAggregatesInput[]
    OR?: ComplianceAgreementScalarWhereWithAggregatesInput[]
    NOT?: ComplianceAgreementScalarWhereWithAggregatesInput | ComplianceAgreementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ComplianceAgreement"> | string
    clientId?: StringWithAggregatesFilter<"ComplianceAgreement"> | string
    disclosureId?: StringWithAggregatesFilter<"ComplianceAgreement"> | string
    acknowledged?: BoolWithAggregatesFilter<"ComplianceAgreement"> | boolean
    acknowledgedAt?: DateTimeNullableWithAggregatesFilter<"ComplianceAgreement"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ComplianceAgreement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ComplianceAgreement"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    password: string
    role?: string
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenCreateNestedManyWithoutUserInput
    clients?: ClientCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    role?: string
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutUserNestedInput
    clients?: ClientUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    role?: string
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateInput = {
    token: string
    type: string
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTokensInput
  }

  export type TokenUncheckedCreateInput = {
    id?: number
    token: string
    type: string
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
    userId: number
  }

  export type TokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTokensNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TokenCreateManyInput = {
    id?: number
    token: string
    type: string
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
    userId: number
  }

  export type TokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ClientCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    status?: string
    progress?: number
    riskProfile?: string | null
    accountValue?: number | null
    firmId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClientsInput
    documents?: DocumentCreateNestedManyWithoutClientInput
    activities?: ActivityCreateNestedManyWithoutClientInput
    onboardingData?: OnboardingDataCreateNestedOneWithoutClientInput
    riskAssessment?: RiskAssessmentCreateNestedOneWithoutClientInput
    investmentObjectives?: InvestmentObjectivesCreateNestedOneWithoutClientInput
    complianceAgreements?: ComplianceAgreementCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    status?: string
    progress?: number
    riskProfile?: string | null
    accountValue?: number | null
    firmId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    documents?: DocumentUncheckedCreateNestedManyWithoutClientInput
    activities?: ActivityUncheckedCreateNestedManyWithoutClientInput
    onboardingData?: OnboardingDataUncheckedCreateNestedOneWithoutClientInput
    riskAssessment?: RiskAssessmentUncheckedCreateNestedOneWithoutClientInput
    investmentObjectives?: InvestmentObjectivesUncheckedCreateNestedOneWithoutClientInput
    complianceAgreements?: ComplianceAgreementUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    riskProfile?: NullableStringFieldUpdateOperationsInput | string | null
    accountValue?: NullableFloatFieldUpdateOperationsInput | number | null
    firmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClientsNestedInput
    documents?: DocumentUpdateManyWithoutClientNestedInput
    activities?: ActivityUpdateManyWithoutClientNestedInput
    onboardingData?: OnboardingDataUpdateOneWithoutClientNestedInput
    riskAssessment?: RiskAssessmentUpdateOneWithoutClientNestedInput
    investmentObjectives?: InvestmentObjectivesUpdateOneWithoutClientNestedInput
    complianceAgreements?: ComplianceAgreementUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    riskProfile?: NullableStringFieldUpdateOperationsInput | string | null
    accountValue?: NullableFloatFieldUpdateOperationsInput | number | null
    firmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    documents?: DocumentUncheckedUpdateManyWithoutClientNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutClientNestedInput
    onboardingData?: OnboardingDataUncheckedUpdateOneWithoutClientNestedInput
    riskAssessment?: RiskAssessmentUncheckedUpdateOneWithoutClientNestedInput
    investmentObjectives?: InvestmentObjectivesUncheckedUpdateOneWithoutClientNestedInput
    complianceAgreements?: ComplianceAgreementUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    status?: string
    progress?: number
    riskProfile?: string | null
    accountValue?: number | null
    firmId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    riskProfile?: NullableStringFieldUpdateOperationsInput | string | null
    accountValue?: NullableFloatFieldUpdateOperationsInput | number | null
    firmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    riskProfile?: NullableStringFieldUpdateOperationsInput | string | null
    accountValue?: NullableFloatFieldUpdateOperationsInput | number | null
    firmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ActivityCreateInput = {
    id?: string
    type: string
    clientName: string
    description: string
    timestamp?: Date | string
    client?: ClientCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateInput = {
    id?: string
    type: string
    clientName: string
    description: string
    timestamp?: Date | string
    clientId?: string | null
  }

  export type ActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivityCreateManyInput = {
    id?: string
    type: string
    clientName: string
    description: string
    timestamp?: Date | string
    clientId?: string | null
  }

  export type ActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentCreateInput = {
    id?: string
    fileName: string
    fileSize: number
    fileType: string
    status?: string
    signedUrl?: string | null
    uploadedAt?: Date | string
    verifiedAt?: Date | string | null
    rejectionReason?: string | null
    documentType: DocumentTypeCreateNestedOneWithoutDocumentsInput
    client: ClientCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    fileName: string
    fileSize: number
    fileType: string
    documentTypeId: string
    clientId: string
    status?: string
    signedUrl?: string | null
    uploadedAt?: Date | string
    verifiedAt?: Date | string | null
    rejectionReason?: string | null
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    signedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    documentType?: DocumentTypeUpdateOneRequiredWithoutDocumentsNestedInput
    client?: ClientUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    documentTypeId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    signedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentCreateManyInput = {
    id?: string
    fileName: string
    fileSize: number
    fileType: string
    documentTypeId: string
    clientId: string
    status?: string
    signedUrl?: string | null
    uploadedAt?: Date | string
    verifiedAt?: Date | string | null
    rejectionReason?: string | null
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    signedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    documentTypeId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    signedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentTypeCreateInput = {
    id?: string
    name: string
    description: string
    required?: boolean
    category: string
    acceptedFormats: string
    maxFileSize: number
    documents?: DocumentCreateNestedManyWithoutDocumentTypeInput
  }

  export type DocumentTypeUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    required?: boolean
    category: string
    acceptedFormats: string
    maxFileSize: number
    documents?: DocumentUncheckedCreateNestedManyWithoutDocumentTypeInput
  }

  export type DocumentTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    acceptedFormats?: StringFieldUpdateOperationsInput | string
    maxFileSize?: IntFieldUpdateOperationsInput | number
    documents?: DocumentUpdateManyWithoutDocumentTypeNestedInput
  }

  export type DocumentTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    acceptedFormats?: StringFieldUpdateOperationsInput | string
    maxFileSize?: IntFieldUpdateOperationsInput | number
    documents?: DocumentUncheckedUpdateManyWithoutDocumentTypeNestedInput
  }

  export type DocumentTypeCreateManyInput = {
    id?: string
    name: string
    description: string
    required?: boolean
    category: string
    acceptedFormats: string
    maxFileSize: number
  }

  export type DocumentTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    acceptedFormats?: StringFieldUpdateOperationsInput | string
    maxFileSize?: IntFieldUpdateOperationsInput | number
  }

  export type DocumentTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    acceptedFormats?: StringFieldUpdateOperationsInput | string
    maxFileSize?: IntFieldUpdateOperationsInput | number
  }

  export type OnboardingDataCreateInput = {
    id?: string
    personalInfo: JsonNullValueInput | InputJsonValue
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    employmentInfo?: NullableJsonNullValueInput | InputJsonValue
    riskProfile?: NullableJsonNullValueInput | InputJsonValue
    investmentObjectives?: NullableJsonNullValueInput | InputJsonValue
    financialGoals: JsonNullValueInput | InputJsonValue
    selectedAccountTypes: JsonNullValueInput | InputJsonValue
    fundingMethods: JsonNullValueInput | InputJsonValue
    uploadedDocuments: JsonNullValueInput | InputJsonValue
    disclosures: JsonNullValueInput | InputJsonValue
    complianceRecords: JsonNullValueInput | InputJsonValue
    status?: string
    currentStep?: number
    totalSteps?: number
    submittedAt?: Date | string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutOnboardingDataInput
  }

  export type OnboardingDataUncheckedCreateInput = {
    id?: string
    clientId: string
    personalInfo: JsonNullValueInput | InputJsonValue
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    employmentInfo?: NullableJsonNullValueInput | InputJsonValue
    riskProfile?: NullableJsonNullValueInput | InputJsonValue
    investmentObjectives?: NullableJsonNullValueInput | InputJsonValue
    financialGoals: JsonNullValueInput | InputJsonValue
    selectedAccountTypes: JsonNullValueInput | InputJsonValue
    fundingMethods: JsonNullValueInput | InputJsonValue
    uploadedDocuments: JsonNullValueInput | InputJsonValue
    disclosures: JsonNullValueInput | InputJsonValue
    complianceRecords: JsonNullValueInput | InputJsonValue
    status?: string
    currentStep?: number
    totalSteps?: number
    submittedAt?: Date | string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OnboardingDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    personalInfo?: JsonNullValueInput | InputJsonValue
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    employmentInfo?: NullableJsonNullValueInput | InputJsonValue
    riskProfile?: NullableJsonNullValueInput | InputJsonValue
    investmentObjectives?: NullableJsonNullValueInput | InputJsonValue
    financialGoals?: JsonNullValueInput | InputJsonValue
    selectedAccountTypes?: JsonNullValueInput | InputJsonValue
    fundingMethods?: JsonNullValueInput | InputJsonValue
    uploadedDocuments?: JsonNullValueInput | InputJsonValue
    disclosures?: JsonNullValueInput | InputJsonValue
    complianceRecords?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    totalSteps?: IntFieldUpdateOperationsInput | number
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutOnboardingDataNestedInput
  }

  export type OnboardingDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    personalInfo?: JsonNullValueInput | InputJsonValue
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    employmentInfo?: NullableJsonNullValueInput | InputJsonValue
    riskProfile?: NullableJsonNullValueInput | InputJsonValue
    investmentObjectives?: NullableJsonNullValueInput | InputJsonValue
    financialGoals?: JsonNullValueInput | InputJsonValue
    selectedAccountTypes?: JsonNullValueInput | InputJsonValue
    fundingMethods?: JsonNullValueInput | InputJsonValue
    uploadedDocuments?: JsonNullValueInput | InputJsonValue
    disclosures?: JsonNullValueInput | InputJsonValue
    complianceRecords?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    totalSteps?: IntFieldUpdateOperationsInput | number
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OnboardingDataCreateManyInput = {
    id?: string
    clientId: string
    personalInfo: JsonNullValueInput | InputJsonValue
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    employmentInfo?: NullableJsonNullValueInput | InputJsonValue
    riskProfile?: NullableJsonNullValueInput | InputJsonValue
    investmentObjectives?: NullableJsonNullValueInput | InputJsonValue
    financialGoals: JsonNullValueInput | InputJsonValue
    selectedAccountTypes: JsonNullValueInput | InputJsonValue
    fundingMethods: JsonNullValueInput | InputJsonValue
    uploadedDocuments: JsonNullValueInput | InputJsonValue
    disclosures: JsonNullValueInput | InputJsonValue
    complianceRecords: JsonNullValueInput | InputJsonValue
    status?: string
    currentStep?: number
    totalSteps?: number
    submittedAt?: Date | string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OnboardingDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    personalInfo?: JsonNullValueInput | InputJsonValue
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    employmentInfo?: NullableJsonNullValueInput | InputJsonValue
    riskProfile?: NullableJsonNullValueInput | InputJsonValue
    investmentObjectives?: NullableJsonNullValueInput | InputJsonValue
    financialGoals?: JsonNullValueInput | InputJsonValue
    selectedAccountTypes?: JsonNullValueInput | InputJsonValue
    fundingMethods?: JsonNullValueInput | InputJsonValue
    uploadedDocuments?: JsonNullValueInput | InputJsonValue
    disclosures?: JsonNullValueInput | InputJsonValue
    complianceRecords?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    totalSteps?: IntFieldUpdateOperationsInput | number
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OnboardingDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    personalInfo?: JsonNullValueInput | InputJsonValue
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    employmentInfo?: NullableJsonNullValueInput | InputJsonValue
    riskProfile?: NullableJsonNullValueInput | InputJsonValue
    investmentObjectives?: NullableJsonNullValueInput | InputJsonValue
    financialGoals?: JsonNullValueInput | InputJsonValue
    selectedAccountTypes?: JsonNullValueInput | InputJsonValue
    fundingMethods?: JsonNullValueInput | InputJsonValue
    uploadedDocuments?: JsonNullValueInput | InputJsonValue
    disclosures?: JsonNullValueInput | InputJsonValue
    complianceRecords?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    totalSteps?: IntFieldUpdateOperationsInput | number
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskAssessmentCreateInput = {
    id?: string
    investmentExperience: string
    riskTolerance: string
    investmentTimeHorizon: string
    liquidityNeeds: string
    ageRange: string
    investmentKnowledge: string
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutRiskAssessmentInput
  }

  export type RiskAssessmentUncheckedCreateInput = {
    id?: string
    clientId: string
    investmentExperience: string
    riskTolerance: string
    investmentTimeHorizon: string
    liquidityNeeds: string
    ageRange: string
    investmentKnowledge: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiskAssessmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    investmentExperience?: StringFieldUpdateOperationsInput | string
    riskTolerance?: StringFieldUpdateOperationsInput | string
    investmentTimeHorizon?: StringFieldUpdateOperationsInput | string
    liquidityNeeds?: StringFieldUpdateOperationsInput | string
    ageRange?: StringFieldUpdateOperationsInput | string
    investmentKnowledge?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutRiskAssessmentNestedInput
  }

  export type RiskAssessmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    investmentExperience?: StringFieldUpdateOperationsInput | string
    riskTolerance?: StringFieldUpdateOperationsInput | string
    investmentTimeHorizon?: StringFieldUpdateOperationsInput | string
    liquidityNeeds?: StringFieldUpdateOperationsInput | string
    ageRange?: StringFieldUpdateOperationsInput | string
    investmentKnowledge?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskAssessmentCreateManyInput = {
    id?: string
    clientId: string
    investmentExperience: string
    riskTolerance: string
    investmentTimeHorizon: string
    liquidityNeeds: string
    ageRange: string
    investmentKnowledge: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiskAssessmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    investmentExperience?: StringFieldUpdateOperationsInput | string
    riskTolerance?: StringFieldUpdateOperationsInput | string
    investmentTimeHorizon?: StringFieldUpdateOperationsInput | string
    liquidityNeeds?: StringFieldUpdateOperationsInput | string
    ageRange?: StringFieldUpdateOperationsInput | string
    investmentKnowledge?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskAssessmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    investmentExperience?: StringFieldUpdateOperationsInput | string
    riskTolerance?: StringFieldUpdateOperationsInput | string
    investmentTimeHorizon?: StringFieldUpdateOperationsInput | string
    liquidityNeeds?: StringFieldUpdateOperationsInput | string
    ageRange?: StringFieldUpdateOperationsInput | string
    investmentKnowledge?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentObjectivesCreateInput = {
    id?: string
    primaryGoal: string
    specificGoals: JsonNullValueInput | InputJsonValue
    targetAmount?: number | null
    timeHorizon: number
    monthlyContribution?: number | null
    riskComfort: number
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutInvestmentObjectivesInput
  }

  export type InvestmentObjectivesUncheckedCreateInput = {
    id?: string
    clientId: string
    primaryGoal: string
    specificGoals: JsonNullValueInput | InputJsonValue
    targetAmount?: number | null
    timeHorizon: number
    monthlyContribution?: number | null
    riskComfort: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestmentObjectivesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    primaryGoal?: StringFieldUpdateOperationsInput | string
    specificGoals?: JsonNullValueInput | InputJsonValue
    targetAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    timeHorizon?: IntFieldUpdateOperationsInput | number
    monthlyContribution?: NullableFloatFieldUpdateOperationsInput | number | null
    riskComfort?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutInvestmentObjectivesNestedInput
  }

  export type InvestmentObjectivesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    primaryGoal?: StringFieldUpdateOperationsInput | string
    specificGoals?: JsonNullValueInput | InputJsonValue
    targetAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    timeHorizon?: IntFieldUpdateOperationsInput | number
    monthlyContribution?: NullableFloatFieldUpdateOperationsInput | number | null
    riskComfort?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentObjectivesCreateManyInput = {
    id?: string
    clientId: string
    primaryGoal: string
    specificGoals: JsonNullValueInput | InputJsonValue
    targetAmount?: number | null
    timeHorizon: number
    monthlyContribution?: number | null
    riskComfort: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestmentObjectivesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    primaryGoal?: StringFieldUpdateOperationsInput | string
    specificGoals?: JsonNullValueInput | InputJsonValue
    targetAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    timeHorizon?: IntFieldUpdateOperationsInput | number
    monthlyContribution?: NullableFloatFieldUpdateOperationsInput | number | null
    riskComfort?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentObjectivesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    primaryGoal?: StringFieldUpdateOperationsInput | string
    specificGoals?: JsonNullValueInput | InputJsonValue
    targetAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    timeHorizon?: IntFieldUpdateOperationsInput | number
    monthlyContribution?: NullableFloatFieldUpdateOperationsInput | number | null
    riskComfort?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountTypeCreateInput = {
    id?: string
    name: string
    description: string
    taxAdvantaged?: boolean
    minimumBalance?: number
    annualFee?: number
    transactionFee?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountTypeUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    taxAdvantaged?: boolean
    minimumBalance?: number
    annualFee?: number
    transactionFee?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    taxAdvantaged?: BoolFieldUpdateOperationsInput | boolean
    minimumBalance?: FloatFieldUpdateOperationsInput | number
    annualFee?: FloatFieldUpdateOperationsInput | number
    transactionFee?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    taxAdvantaged?: BoolFieldUpdateOperationsInput | boolean
    minimumBalance?: FloatFieldUpdateOperationsInput | number
    annualFee?: FloatFieldUpdateOperationsInput | number
    transactionFee?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountTypeCreateManyInput = {
    id?: string
    name: string
    description: string
    taxAdvantaged?: boolean
    minimumBalance?: number
    annualFee?: number
    transactionFee?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    taxAdvantaged?: BoolFieldUpdateOperationsInput | boolean
    minimumBalance?: FloatFieldUpdateOperationsInput | number
    annualFee?: FloatFieldUpdateOperationsInput | number
    transactionFee?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    taxAdvantaged?: BoolFieldUpdateOperationsInput | boolean
    minimumBalance?: FloatFieldUpdateOperationsInput | number
    annualFee?: FloatFieldUpdateOperationsInput | number
    transactionFee?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisclosureCreateInput = {
    id?: string
    title: string
    content: string
    required?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    complianceAgreements?: ComplianceAgreementCreateNestedManyWithoutDisclosureInput
  }

  export type DisclosureUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    required?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    complianceAgreements?: ComplianceAgreementUncheckedCreateNestedManyWithoutDisclosureInput
  }

  export type DisclosureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    complianceAgreements?: ComplianceAgreementUpdateManyWithoutDisclosureNestedInput
  }

  export type DisclosureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    complianceAgreements?: ComplianceAgreementUncheckedUpdateManyWithoutDisclosureNestedInput
  }

  export type DisclosureCreateManyInput = {
    id?: string
    title: string
    content: string
    required?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisclosureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisclosureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComplianceAgreementCreateInput = {
    id?: string
    acknowledged?: boolean
    acknowledgedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutComplianceAgreementsInput
    disclosure: DisclosureCreateNestedOneWithoutComplianceAgreementsInput
  }

  export type ComplianceAgreementUncheckedCreateInput = {
    id?: string
    clientId: string
    disclosureId: string
    acknowledged?: boolean
    acknowledgedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComplianceAgreementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    acknowledged?: BoolFieldUpdateOperationsInput | boolean
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutComplianceAgreementsNestedInput
    disclosure?: DisclosureUpdateOneRequiredWithoutComplianceAgreementsNestedInput
  }

  export type ComplianceAgreementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    disclosureId?: StringFieldUpdateOperationsInput | string
    acknowledged?: BoolFieldUpdateOperationsInput | boolean
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComplianceAgreementCreateManyInput = {
    id?: string
    clientId: string
    disclosureId: string
    acknowledged?: boolean
    acknowledgedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComplianceAgreementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    acknowledged?: BoolFieldUpdateOperationsInput | boolean
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComplianceAgreementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    disclosureId?: StringFieldUpdateOperationsInput | string
    acknowledged?: BoolFieldUpdateOperationsInput | boolean
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type ClientListRelationFilter = {
    every?: ClientWhereInput
    some?: ClientWhereInput
    none?: ClientWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TokenAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TokenSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type ActivityListRelationFilter = {
    every?: ActivityWhereInput
    some?: ActivityWhereInput
    none?: ActivityWhereInput
  }

  export type OnboardingDataNullableScalarRelationFilter = {
    is?: OnboardingDataWhereInput | null
    isNot?: OnboardingDataWhereInput | null
  }

  export type RiskAssessmentNullableScalarRelationFilter = {
    is?: RiskAssessmentWhereInput | null
    isNot?: RiskAssessmentWhereInput | null
  }

  export type InvestmentObjectivesNullableScalarRelationFilter = {
    is?: InvestmentObjectivesWhereInput | null
    isNot?: InvestmentObjectivesWhereInput | null
  }

  export type ComplianceAgreementListRelationFilter = {
    every?: ComplianceAgreementWhereInput
    some?: ComplianceAgreementWhereInput
    none?: ComplianceAgreementWhereInput
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComplianceAgreementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    riskProfile?: SortOrder
    accountValue?: SortOrder
    firmId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    progress?: SortOrder
    accountValue?: SortOrder
    userId?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    riskProfile?: SortOrder
    accountValue?: SortOrder
    firmId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    riskProfile?: SortOrder
    accountValue?: SortOrder
    firmId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    progress?: SortOrder
    accountValue?: SortOrder
    userId?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ClientNullableScalarRelationFilter = {
    is?: ClientWhereInput | null
    isNot?: ClientWhereInput | null
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    clientName?: SortOrder
    description?: SortOrder
    timestamp?: SortOrder
    clientId?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    clientName?: SortOrder
    description?: SortOrder
    timestamp?: SortOrder
    clientId?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    clientName?: SortOrder
    description?: SortOrder
    timestamp?: SortOrder
    clientId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DocumentTypeScalarRelationFilter = {
    is?: DocumentTypeWhereInput
    isNot?: DocumentTypeWhereInput
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    fileType?: SortOrder
    documentTypeId?: SortOrder
    clientId?: SortOrder
    status?: SortOrder
    signedUrl?: SortOrder
    uploadedAt?: SortOrder
    verifiedAt?: SortOrder
    rejectionReason?: SortOrder
  }

  export type DocumentAvgOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    fileType?: SortOrder
    documentTypeId?: SortOrder
    clientId?: SortOrder
    status?: SortOrder
    signedUrl?: SortOrder
    uploadedAt?: SortOrder
    verifiedAt?: SortOrder
    rejectionReason?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    fileType?: SortOrder
    documentTypeId?: SortOrder
    clientId?: SortOrder
    status?: SortOrder
    signedUrl?: SortOrder
    uploadedAt?: SortOrder
    verifiedAt?: SortOrder
    rejectionReason?: SortOrder
  }

  export type DocumentSumOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DocumentTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    required?: SortOrder
    category?: SortOrder
    acceptedFormats?: SortOrder
    maxFileSize?: SortOrder
  }

  export type DocumentTypeAvgOrderByAggregateInput = {
    maxFileSize?: SortOrder
  }

  export type DocumentTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    required?: SortOrder
    category?: SortOrder
    acceptedFormats?: SortOrder
    maxFileSize?: SortOrder
  }

  export type DocumentTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    required?: SortOrder
    category?: SortOrder
    acceptedFormats?: SortOrder
    maxFileSize?: SortOrder
  }

  export type DocumentTypeSumOrderByAggregateInput = {
    maxFileSize?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type OnboardingDataCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    personalInfo?: SortOrder
    contactInfo?: SortOrder
    employmentInfo?: SortOrder
    riskProfile?: SortOrder
    investmentObjectives?: SortOrder
    financialGoals?: SortOrder
    selectedAccountTypes?: SortOrder
    fundingMethods?: SortOrder
    uploadedDocuments?: SortOrder
    disclosures?: SortOrder
    complianceRecords?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    totalSteps?: SortOrder
    submittedAt?: SortOrder
    reviewedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OnboardingDataAvgOrderByAggregateInput = {
    currentStep?: SortOrder
    totalSteps?: SortOrder
  }

  export type OnboardingDataMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    totalSteps?: SortOrder
    submittedAt?: SortOrder
    reviewedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OnboardingDataMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    totalSteps?: SortOrder
    submittedAt?: SortOrder
    reviewedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OnboardingDataSumOrderByAggregateInput = {
    currentStep?: SortOrder
    totalSteps?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type RiskAssessmentCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    investmentExperience?: SortOrder
    riskTolerance?: SortOrder
    investmentTimeHorizon?: SortOrder
    liquidityNeeds?: SortOrder
    ageRange?: SortOrder
    investmentKnowledge?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiskAssessmentMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    investmentExperience?: SortOrder
    riskTolerance?: SortOrder
    investmentTimeHorizon?: SortOrder
    liquidityNeeds?: SortOrder
    ageRange?: SortOrder
    investmentKnowledge?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiskAssessmentMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    investmentExperience?: SortOrder
    riskTolerance?: SortOrder
    investmentTimeHorizon?: SortOrder
    liquidityNeeds?: SortOrder
    ageRange?: SortOrder
    investmentKnowledge?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestmentObjectivesCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    primaryGoal?: SortOrder
    specificGoals?: SortOrder
    targetAmount?: SortOrder
    timeHorizon?: SortOrder
    monthlyContribution?: SortOrder
    riskComfort?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestmentObjectivesAvgOrderByAggregateInput = {
    targetAmount?: SortOrder
    timeHorizon?: SortOrder
    monthlyContribution?: SortOrder
    riskComfort?: SortOrder
  }

  export type InvestmentObjectivesMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    primaryGoal?: SortOrder
    targetAmount?: SortOrder
    timeHorizon?: SortOrder
    monthlyContribution?: SortOrder
    riskComfort?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestmentObjectivesMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    primaryGoal?: SortOrder
    targetAmount?: SortOrder
    timeHorizon?: SortOrder
    monthlyContribution?: SortOrder
    riskComfort?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestmentObjectivesSumOrderByAggregateInput = {
    targetAmount?: SortOrder
    timeHorizon?: SortOrder
    monthlyContribution?: SortOrder
    riskComfort?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AccountTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    taxAdvantaged?: SortOrder
    minimumBalance?: SortOrder
    annualFee?: SortOrder
    transactionFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountTypeAvgOrderByAggregateInput = {
    minimumBalance?: SortOrder
    annualFee?: SortOrder
    transactionFee?: SortOrder
  }

  export type AccountTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    taxAdvantaged?: SortOrder
    minimumBalance?: SortOrder
    annualFee?: SortOrder
    transactionFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    taxAdvantaged?: SortOrder
    minimumBalance?: SortOrder
    annualFee?: SortOrder
    transactionFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountTypeSumOrderByAggregateInput = {
    minimumBalance?: SortOrder
    annualFee?: SortOrder
    transactionFee?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DisclosureCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    required?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisclosureMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    required?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisclosureMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    required?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisclosureScalarRelationFilter = {
    is?: DisclosureWhereInput
    isNot?: DisclosureWhereInput
  }

  export type ComplianceAgreementClientIdDisclosureIdCompoundUniqueInput = {
    clientId: string
    disclosureId: string
  }

  export type ComplianceAgreementCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    disclosureId?: SortOrder
    acknowledged?: SortOrder
    acknowledgedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComplianceAgreementMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    disclosureId?: SortOrder
    acknowledged?: SortOrder
    acknowledgedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComplianceAgreementMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    disclosureId?: SortOrder
    acknowledged?: SortOrder
    acknowledgedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type ClientCreateNestedManyWithoutUserInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput> | ClientCreateWithoutUserInput[] | ClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput | ClientCreateOrConnectWithoutUserInput[]
    createMany?: ClientCreateManyUserInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type TokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type ClientUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput> | ClientCreateWithoutUserInput[] | ClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput | ClientCreateOrConnectWithoutUserInput[]
    createMany?: ClientCreateManyUserInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type ClientUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput> | ClientCreateWithoutUserInput[] | ClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput | ClientCreateOrConnectWithoutUserInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutUserInput | ClientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClientCreateManyUserInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutUserInput | ClientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutUserInput | ClientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type ClientUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput> | ClientCreateWithoutUserInput[] | ClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput | ClientCreateOrConnectWithoutUserInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutUserInput | ClientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClientCreateManyUserInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutUserInput | ClientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutUserInput | ClientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTokensInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    upsert?: UserUpsertWithoutTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokensInput, UserUpdateWithoutTokensInput>, UserUncheckedUpdateWithoutTokensInput>
  }

  export type UserCreateNestedOneWithoutClientsInput = {
    create?: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientsInput
    connect?: UserWhereUniqueInput
  }

  export type DocumentCreateNestedManyWithoutClientInput = {
    create?: XOR<DocumentCreateWithoutClientInput, DocumentUncheckedCreateWithoutClientInput> | DocumentCreateWithoutClientInput[] | DocumentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutClientInput | DocumentCreateOrConnectWithoutClientInput[]
    createMany?: DocumentCreateManyClientInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type ActivityCreateNestedManyWithoutClientInput = {
    create?: XOR<ActivityCreateWithoutClientInput, ActivityUncheckedCreateWithoutClientInput> | ActivityCreateWithoutClientInput[] | ActivityUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutClientInput | ActivityCreateOrConnectWithoutClientInput[]
    createMany?: ActivityCreateManyClientInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type OnboardingDataCreateNestedOneWithoutClientInput = {
    create?: XOR<OnboardingDataCreateWithoutClientInput, OnboardingDataUncheckedCreateWithoutClientInput>
    connectOrCreate?: OnboardingDataCreateOrConnectWithoutClientInput
    connect?: OnboardingDataWhereUniqueInput
  }

  export type RiskAssessmentCreateNestedOneWithoutClientInput = {
    create?: XOR<RiskAssessmentCreateWithoutClientInput, RiskAssessmentUncheckedCreateWithoutClientInput>
    connectOrCreate?: RiskAssessmentCreateOrConnectWithoutClientInput
    connect?: RiskAssessmentWhereUniqueInput
  }

  export type InvestmentObjectivesCreateNestedOneWithoutClientInput = {
    create?: XOR<InvestmentObjectivesCreateWithoutClientInput, InvestmentObjectivesUncheckedCreateWithoutClientInput>
    connectOrCreate?: InvestmentObjectivesCreateOrConnectWithoutClientInput
    connect?: InvestmentObjectivesWhereUniqueInput
  }

  export type ComplianceAgreementCreateNestedManyWithoutClientInput = {
    create?: XOR<ComplianceAgreementCreateWithoutClientInput, ComplianceAgreementUncheckedCreateWithoutClientInput> | ComplianceAgreementCreateWithoutClientInput[] | ComplianceAgreementUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ComplianceAgreementCreateOrConnectWithoutClientInput | ComplianceAgreementCreateOrConnectWithoutClientInput[]
    createMany?: ComplianceAgreementCreateManyClientInputEnvelope
    connect?: ComplianceAgreementWhereUniqueInput | ComplianceAgreementWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<DocumentCreateWithoutClientInput, DocumentUncheckedCreateWithoutClientInput> | DocumentCreateWithoutClientInput[] | DocumentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutClientInput | DocumentCreateOrConnectWithoutClientInput[]
    createMany?: DocumentCreateManyClientInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ActivityCreateWithoutClientInput, ActivityUncheckedCreateWithoutClientInput> | ActivityCreateWithoutClientInput[] | ActivityUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutClientInput | ActivityCreateOrConnectWithoutClientInput[]
    createMany?: ActivityCreateManyClientInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type OnboardingDataUncheckedCreateNestedOneWithoutClientInput = {
    create?: XOR<OnboardingDataCreateWithoutClientInput, OnboardingDataUncheckedCreateWithoutClientInput>
    connectOrCreate?: OnboardingDataCreateOrConnectWithoutClientInput
    connect?: OnboardingDataWhereUniqueInput
  }

  export type RiskAssessmentUncheckedCreateNestedOneWithoutClientInput = {
    create?: XOR<RiskAssessmentCreateWithoutClientInput, RiskAssessmentUncheckedCreateWithoutClientInput>
    connectOrCreate?: RiskAssessmentCreateOrConnectWithoutClientInput
    connect?: RiskAssessmentWhereUniqueInput
  }

  export type InvestmentObjectivesUncheckedCreateNestedOneWithoutClientInput = {
    create?: XOR<InvestmentObjectivesCreateWithoutClientInput, InvestmentObjectivesUncheckedCreateWithoutClientInput>
    connectOrCreate?: InvestmentObjectivesCreateOrConnectWithoutClientInput
    connect?: InvestmentObjectivesWhereUniqueInput
  }

  export type ComplianceAgreementUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ComplianceAgreementCreateWithoutClientInput, ComplianceAgreementUncheckedCreateWithoutClientInput> | ComplianceAgreementCreateWithoutClientInput[] | ComplianceAgreementUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ComplianceAgreementCreateOrConnectWithoutClientInput | ComplianceAgreementCreateOrConnectWithoutClientInput[]
    createMany?: ComplianceAgreementCreateManyClientInputEnvelope
    connect?: ComplianceAgreementWhereUniqueInput | ComplianceAgreementWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutClientsNestedInput = {
    create?: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientsInput
    upsert?: UserUpsertWithoutClientsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClientsInput, UserUpdateWithoutClientsInput>, UserUncheckedUpdateWithoutClientsInput>
  }

  export type DocumentUpdateManyWithoutClientNestedInput = {
    create?: XOR<DocumentCreateWithoutClientInput, DocumentUncheckedCreateWithoutClientInput> | DocumentCreateWithoutClientInput[] | DocumentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutClientInput | DocumentCreateOrConnectWithoutClientInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutClientInput | DocumentUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: DocumentCreateManyClientInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutClientInput | DocumentUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutClientInput | DocumentUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type ActivityUpdateManyWithoutClientNestedInput = {
    create?: XOR<ActivityCreateWithoutClientInput, ActivityUncheckedCreateWithoutClientInput> | ActivityCreateWithoutClientInput[] | ActivityUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutClientInput | ActivityCreateOrConnectWithoutClientInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutClientInput | ActivityUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ActivityCreateManyClientInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutClientInput | ActivityUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutClientInput | ActivityUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type OnboardingDataUpdateOneWithoutClientNestedInput = {
    create?: XOR<OnboardingDataCreateWithoutClientInput, OnboardingDataUncheckedCreateWithoutClientInput>
    connectOrCreate?: OnboardingDataCreateOrConnectWithoutClientInput
    upsert?: OnboardingDataUpsertWithoutClientInput
    disconnect?: OnboardingDataWhereInput | boolean
    delete?: OnboardingDataWhereInput | boolean
    connect?: OnboardingDataWhereUniqueInput
    update?: XOR<XOR<OnboardingDataUpdateToOneWithWhereWithoutClientInput, OnboardingDataUpdateWithoutClientInput>, OnboardingDataUncheckedUpdateWithoutClientInput>
  }

  export type RiskAssessmentUpdateOneWithoutClientNestedInput = {
    create?: XOR<RiskAssessmentCreateWithoutClientInput, RiskAssessmentUncheckedCreateWithoutClientInput>
    connectOrCreate?: RiskAssessmentCreateOrConnectWithoutClientInput
    upsert?: RiskAssessmentUpsertWithoutClientInput
    disconnect?: RiskAssessmentWhereInput | boolean
    delete?: RiskAssessmentWhereInput | boolean
    connect?: RiskAssessmentWhereUniqueInput
    update?: XOR<XOR<RiskAssessmentUpdateToOneWithWhereWithoutClientInput, RiskAssessmentUpdateWithoutClientInput>, RiskAssessmentUncheckedUpdateWithoutClientInput>
  }

  export type InvestmentObjectivesUpdateOneWithoutClientNestedInput = {
    create?: XOR<InvestmentObjectivesCreateWithoutClientInput, InvestmentObjectivesUncheckedCreateWithoutClientInput>
    connectOrCreate?: InvestmentObjectivesCreateOrConnectWithoutClientInput
    upsert?: InvestmentObjectivesUpsertWithoutClientInput
    disconnect?: InvestmentObjectivesWhereInput | boolean
    delete?: InvestmentObjectivesWhereInput | boolean
    connect?: InvestmentObjectivesWhereUniqueInput
    update?: XOR<XOR<InvestmentObjectivesUpdateToOneWithWhereWithoutClientInput, InvestmentObjectivesUpdateWithoutClientInput>, InvestmentObjectivesUncheckedUpdateWithoutClientInput>
  }

  export type ComplianceAgreementUpdateManyWithoutClientNestedInput = {
    create?: XOR<ComplianceAgreementCreateWithoutClientInput, ComplianceAgreementUncheckedCreateWithoutClientInput> | ComplianceAgreementCreateWithoutClientInput[] | ComplianceAgreementUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ComplianceAgreementCreateOrConnectWithoutClientInput | ComplianceAgreementCreateOrConnectWithoutClientInput[]
    upsert?: ComplianceAgreementUpsertWithWhereUniqueWithoutClientInput | ComplianceAgreementUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ComplianceAgreementCreateManyClientInputEnvelope
    set?: ComplianceAgreementWhereUniqueInput | ComplianceAgreementWhereUniqueInput[]
    disconnect?: ComplianceAgreementWhereUniqueInput | ComplianceAgreementWhereUniqueInput[]
    delete?: ComplianceAgreementWhereUniqueInput | ComplianceAgreementWhereUniqueInput[]
    connect?: ComplianceAgreementWhereUniqueInput | ComplianceAgreementWhereUniqueInput[]
    update?: ComplianceAgreementUpdateWithWhereUniqueWithoutClientInput | ComplianceAgreementUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ComplianceAgreementUpdateManyWithWhereWithoutClientInput | ComplianceAgreementUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ComplianceAgreementScalarWhereInput | ComplianceAgreementScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<DocumentCreateWithoutClientInput, DocumentUncheckedCreateWithoutClientInput> | DocumentCreateWithoutClientInput[] | DocumentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutClientInput | DocumentCreateOrConnectWithoutClientInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutClientInput | DocumentUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: DocumentCreateManyClientInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutClientInput | DocumentUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutClientInput | DocumentUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ActivityCreateWithoutClientInput, ActivityUncheckedCreateWithoutClientInput> | ActivityCreateWithoutClientInput[] | ActivityUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutClientInput | ActivityCreateOrConnectWithoutClientInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutClientInput | ActivityUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ActivityCreateManyClientInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutClientInput | ActivityUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutClientInput | ActivityUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type OnboardingDataUncheckedUpdateOneWithoutClientNestedInput = {
    create?: XOR<OnboardingDataCreateWithoutClientInput, OnboardingDataUncheckedCreateWithoutClientInput>
    connectOrCreate?: OnboardingDataCreateOrConnectWithoutClientInput
    upsert?: OnboardingDataUpsertWithoutClientInput
    disconnect?: OnboardingDataWhereInput | boolean
    delete?: OnboardingDataWhereInput | boolean
    connect?: OnboardingDataWhereUniqueInput
    update?: XOR<XOR<OnboardingDataUpdateToOneWithWhereWithoutClientInput, OnboardingDataUpdateWithoutClientInput>, OnboardingDataUncheckedUpdateWithoutClientInput>
  }

  export type RiskAssessmentUncheckedUpdateOneWithoutClientNestedInput = {
    create?: XOR<RiskAssessmentCreateWithoutClientInput, RiskAssessmentUncheckedCreateWithoutClientInput>
    connectOrCreate?: RiskAssessmentCreateOrConnectWithoutClientInput
    upsert?: RiskAssessmentUpsertWithoutClientInput
    disconnect?: RiskAssessmentWhereInput | boolean
    delete?: RiskAssessmentWhereInput | boolean
    connect?: RiskAssessmentWhereUniqueInput
    update?: XOR<XOR<RiskAssessmentUpdateToOneWithWhereWithoutClientInput, RiskAssessmentUpdateWithoutClientInput>, RiskAssessmentUncheckedUpdateWithoutClientInput>
  }

  export type InvestmentObjectivesUncheckedUpdateOneWithoutClientNestedInput = {
    create?: XOR<InvestmentObjectivesCreateWithoutClientInput, InvestmentObjectivesUncheckedCreateWithoutClientInput>
    connectOrCreate?: InvestmentObjectivesCreateOrConnectWithoutClientInput
    upsert?: InvestmentObjectivesUpsertWithoutClientInput
    disconnect?: InvestmentObjectivesWhereInput | boolean
    delete?: InvestmentObjectivesWhereInput | boolean
    connect?: InvestmentObjectivesWhereUniqueInput
    update?: XOR<XOR<InvestmentObjectivesUpdateToOneWithWhereWithoutClientInput, InvestmentObjectivesUpdateWithoutClientInput>, InvestmentObjectivesUncheckedUpdateWithoutClientInput>
  }

  export type ComplianceAgreementUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ComplianceAgreementCreateWithoutClientInput, ComplianceAgreementUncheckedCreateWithoutClientInput> | ComplianceAgreementCreateWithoutClientInput[] | ComplianceAgreementUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ComplianceAgreementCreateOrConnectWithoutClientInput | ComplianceAgreementCreateOrConnectWithoutClientInput[]
    upsert?: ComplianceAgreementUpsertWithWhereUniqueWithoutClientInput | ComplianceAgreementUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ComplianceAgreementCreateManyClientInputEnvelope
    set?: ComplianceAgreementWhereUniqueInput | ComplianceAgreementWhereUniqueInput[]
    disconnect?: ComplianceAgreementWhereUniqueInput | ComplianceAgreementWhereUniqueInput[]
    delete?: ComplianceAgreementWhereUniqueInput | ComplianceAgreementWhereUniqueInput[]
    connect?: ComplianceAgreementWhereUniqueInput | ComplianceAgreementWhereUniqueInput[]
    update?: ComplianceAgreementUpdateWithWhereUniqueWithoutClientInput | ComplianceAgreementUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ComplianceAgreementUpdateManyWithWhereWithoutClientInput | ComplianceAgreementUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ComplianceAgreementScalarWhereInput | ComplianceAgreementScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<ClientCreateWithoutActivitiesInput, ClientUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutActivitiesInput
    connect?: ClientWhereUniqueInput
  }

  export type ClientUpdateOneWithoutActivitiesNestedInput = {
    create?: XOR<ClientCreateWithoutActivitiesInput, ClientUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutActivitiesInput
    upsert?: ClientUpsertWithoutActivitiesInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutActivitiesInput, ClientUpdateWithoutActivitiesInput>, ClientUncheckedUpdateWithoutActivitiesInput>
  }

  export type DocumentTypeCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<DocumentTypeCreateWithoutDocumentsInput, DocumentTypeUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: DocumentTypeCreateOrConnectWithoutDocumentsInput
    connect?: DocumentTypeWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<ClientCreateWithoutDocumentsInput, ClientUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutDocumentsInput
    connect?: ClientWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DocumentTypeUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<DocumentTypeCreateWithoutDocumentsInput, DocumentTypeUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: DocumentTypeCreateOrConnectWithoutDocumentsInput
    upsert?: DocumentTypeUpsertWithoutDocumentsInput
    connect?: DocumentTypeWhereUniqueInput
    update?: XOR<XOR<DocumentTypeUpdateToOneWithWhereWithoutDocumentsInput, DocumentTypeUpdateWithoutDocumentsInput>, DocumentTypeUncheckedUpdateWithoutDocumentsInput>
  }

  export type ClientUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<ClientCreateWithoutDocumentsInput, ClientUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutDocumentsInput
    upsert?: ClientUpsertWithoutDocumentsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutDocumentsInput, ClientUpdateWithoutDocumentsInput>, ClientUncheckedUpdateWithoutDocumentsInput>
  }

  export type DocumentCreateNestedManyWithoutDocumentTypeInput = {
    create?: XOR<DocumentCreateWithoutDocumentTypeInput, DocumentUncheckedCreateWithoutDocumentTypeInput> | DocumentCreateWithoutDocumentTypeInput[] | DocumentUncheckedCreateWithoutDocumentTypeInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutDocumentTypeInput | DocumentCreateOrConnectWithoutDocumentTypeInput[]
    createMany?: DocumentCreateManyDocumentTypeInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutDocumentTypeInput = {
    create?: XOR<DocumentCreateWithoutDocumentTypeInput, DocumentUncheckedCreateWithoutDocumentTypeInput> | DocumentCreateWithoutDocumentTypeInput[] | DocumentUncheckedCreateWithoutDocumentTypeInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutDocumentTypeInput | DocumentCreateOrConnectWithoutDocumentTypeInput[]
    createMany?: DocumentCreateManyDocumentTypeInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type DocumentUpdateManyWithoutDocumentTypeNestedInput = {
    create?: XOR<DocumentCreateWithoutDocumentTypeInput, DocumentUncheckedCreateWithoutDocumentTypeInput> | DocumentCreateWithoutDocumentTypeInput[] | DocumentUncheckedCreateWithoutDocumentTypeInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutDocumentTypeInput | DocumentCreateOrConnectWithoutDocumentTypeInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutDocumentTypeInput | DocumentUpsertWithWhereUniqueWithoutDocumentTypeInput[]
    createMany?: DocumentCreateManyDocumentTypeInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutDocumentTypeInput | DocumentUpdateWithWhereUniqueWithoutDocumentTypeInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutDocumentTypeInput | DocumentUpdateManyWithWhereWithoutDocumentTypeInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutDocumentTypeNestedInput = {
    create?: XOR<DocumentCreateWithoutDocumentTypeInput, DocumentUncheckedCreateWithoutDocumentTypeInput> | DocumentCreateWithoutDocumentTypeInput[] | DocumentUncheckedCreateWithoutDocumentTypeInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutDocumentTypeInput | DocumentCreateOrConnectWithoutDocumentTypeInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutDocumentTypeInput | DocumentUpsertWithWhereUniqueWithoutDocumentTypeInput[]
    createMany?: DocumentCreateManyDocumentTypeInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutDocumentTypeInput | DocumentUpdateWithWhereUniqueWithoutDocumentTypeInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutDocumentTypeInput | DocumentUpdateManyWithWhereWithoutDocumentTypeInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutOnboardingDataInput = {
    create?: XOR<ClientCreateWithoutOnboardingDataInput, ClientUncheckedCreateWithoutOnboardingDataInput>
    connectOrCreate?: ClientCreateOrConnectWithoutOnboardingDataInput
    connect?: ClientWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutOnboardingDataNestedInput = {
    create?: XOR<ClientCreateWithoutOnboardingDataInput, ClientUncheckedCreateWithoutOnboardingDataInput>
    connectOrCreate?: ClientCreateOrConnectWithoutOnboardingDataInput
    upsert?: ClientUpsertWithoutOnboardingDataInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutOnboardingDataInput, ClientUpdateWithoutOnboardingDataInput>, ClientUncheckedUpdateWithoutOnboardingDataInput>
  }

  export type ClientCreateNestedOneWithoutRiskAssessmentInput = {
    create?: XOR<ClientCreateWithoutRiskAssessmentInput, ClientUncheckedCreateWithoutRiskAssessmentInput>
    connectOrCreate?: ClientCreateOrConnectWithoutRiskAssessmentInput
    connect?: ClientWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutRiskAssessmentNestedInput = {
    create?: XOR<ClientCreateWithoutRiskAssessmentInput, ClientUncheckedCreateWithoutRiskAssessmentInput>
    connectOrCreate?: ClientCreateOrConnectWithoutRiskAssessmentInput
    upsert?: ClientUpsertWithoutRiskAssessmentInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutRiskAssessmentInput, ClientUpdateWithoutRiskAssessmentInput>, ClientUncheckedUpdateWithoutRiskAssessmentInput>
  }

  export type ClientCreateNestedOneWithoutInvestmentObjectivesInput = {
    create?: XOR<ClientCreateWithoutInvestmentObjectivesInput, ClientUncheckedCreateWithoutInvestmentObjectivesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutInvestmentObjectivesInput
    connect?: ClientWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutInvestmentObjectivesNestedInput = {
    create?: XOR<ClientCreateWithoutInvestmentObjectivesInput, ClientUncheckedCreateWithoutInvestmentObjectivesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutInvestmentObjectivesInput
    upsert?: ClientUpsertWithoutInvestmentObjectivesInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutInvestmentObjectivesInput, ClientUpdateWithoutInvestmentObjectivesInput>, ClientUncheckedUpdateWithoutInvestmentObjectivesInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ComplianceAgreementCreateNestedManyWithoutDisclosureInput = {
    create?: XOR<ComplianceAgreementCreateWithoutDisclosureInput, ComplianceAgreementUncheckedCreateWithoutDisclosureInput> | ComplianceAgreementCreateWithoutDisclosureInput[] | ComplianceAgreementUncheckedCreateWithoutDisclosureInput[]
    connectOrCreate?: ComplianceAgreementCreateOrConnectWithoutDisclosureInput | ComplianceAgreementCreateOrConnectWithoutDisclosureInput[]
    createMany?: ComplianceAgreementCreateManyDisclosureInputEnvelope
    connect?: ComplianceAgreementWhereUniqueInput | ComplianceAgreementWhereUniqueInput[]
  }

  export type ComplianceAgreementUncheckedCreateNestedManyWithoutDisclosureInput = {
    create?: XOR<ComplianceAgreementCreateWithoutDisclosureInput, ComplianceAgreementUncheckedCreateWithoutDisclosureInput> | ComplianceAgreementCreateWithoutDisclosureInput[] | ComplianceAgreementUncheckedCreateWithoutDisclosureInput[]
    connectOrCreate?: ComplianceAgreementCreateOrConnectWithoutDisclosureInput | ComplianceAgreementCreateOrConnectWithoutDisclosureInput[]
    createMany?: ComplianceAgreementCreateManyDisclosureInputEnvelope
    connect?: ComplianceAgreementWhereUniqueInput | ComplianceAgreementWhereUniqueInput[]
  }

  export type ComplianceAgreementUpdateManyWithoutDisclosureNestedInput = {
    create?: XOR<ComplianceAgreementCreateWithoutDisclosureInput, ComplianceAgreementUncheckedCreateWithoutDisclosureInput> | ComplianceAgreementCreateWithoutDisclosureInput[] | ComplianceAgreementUncheckedCreateWithoutDisclosureInput[]
    connectOrCreate?: ComplianceAgreementCreateOrConnectWithoutDisclosureInput | ComplianceAgreementCreateOrConnectWithoutDisclosureInput[]
    upsert?: ComplianceAgreementUpsertWithWhereUniqueWithoutDisclosureInput | ComplianceAgreementUpsertWithWhereUniqueWithoutDisclosureInput[]
    createMany?: ComplianceAgreementCreateManyDisclosureInputEnvelope
    set?: ComplianceAgreementWhereUniqueInput | ComplianceAgreementWhereUniqueInput[]
    disconnect?: ComplianceAgreementWhereUniqueInput | ComplianceAgreementWhereUniqueInput[]
    delete?: ComplianceAgreementWhereUniqueInput | ComplianceAgreementWhereUniqueInput[]
    connect?: ComplianceAgreementWhereUniqueInput | ComplianceAgreementWhereUniqueInput[]
    update?: ComplianceAgreementUpdateWithWhereUniqueWithoutDisclosureInput | ComplianceAgreementUpdateWithWhereUniqueWithoutDisclosureInput[]
    updateMany?: ComplianceAgreementUpdateManyWithWhereWithoutDisclosureInput | ComplianceAgreementUpdateManyWithWhereWithoutDisclosureInput[]
    deleteMany?: ComplianceAgreementScalarWhereInput | ComplianceAgreementScalarWhereInput[]
  }

  export type ComplianceAgreementUncheckedUpdateManyWithoutDisclosureNestedInput = {
    create?: XOR<ComplianceAgreementCreateWithoutDisclosureInput, ComplianceAgreementUncheckedCreateWithoutDisclosureInput> | ComplianceAgreementCreateWithoutDisclosureInput[] | ComplianceAgreementUncheckedCreateWithoutDisclosureInput[]
    connectOrCreate?: ComplianceAgreementCreateOrConnectWithoutDisclosureInput | ComplianceAgreementCreateOrConnectWithoutDisclosureInput[]
    upsert?: ComplianceAgreementUpsertWithWhereUniqueWithoutDisclosureInput | ComplianceAgreementUpsertWithWhereUniqueWithoutDisclosureInput[]
    createMany?: ComplianceAgreementCreateManyDisclosureInputEnvelope
    set?: ComplianceAgreementWhereUniqueInput | ComplianceAgreementWhereUniqueInput[]
    disconnect?: ComplianceAgreementWhereUniqueInput | ComplianceAgreementWhereUniqueInput[]
    delete?: ComplianceAgreementWhereUniqueInput | ComplianceAgreementWhereUniqueInput[]
    connect?: ComplianceAgreementWhereUniqueInput | ComplianceAgreementWhereUniqueInput[]
    update?: ComplianceAgreementUpdateWithWhereUniqueWithoutDisclosureInput | ComplianceAgreementUpdateWithWhereUniqueWithoutDisclosureInput[]
    updateMany?: ComplianceAgreementUpdateManyWithWhereWithoutDisclosureInput | ComplianceAgreementUpdateManyWithWhereWithoutDisclosureInput[]
    deleteMany?: ComplianceAgreementScalarWhereInput | ComplianceAgreementScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutComplianceAgreementsInput = {
    create?: XOR<ClientCreateWithoutComplianceAgreementsInput, ClientUncheckedCreateWithoutComplianceAgreementsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutComplianceAgreementsInput
    connect?: ClientWhereUniqueInput
  }

  export type DisclosureCreateNestedOneWithoutComplianceAgreementsInput = {
    create?: XOR<DisclosureCreateWithoutComplianceAgreementsInput, DisclosureUncheckedCreateWithoutComplianceAgreementsInput>
    connectOrCreate?: DisclosureCreateOrConnectWithoutComplianceAgreementsInput
    connect?: DisclosureWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutComplianceAgreementsNestedInput = {
    create?: XOR<ClientCreateWithoutComplianceAgreementsInput, ClientUncheckedCreateWithoutComplianceAgreementsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutComplianceAgreementsInput
    upsert?: ClientUpsertWithoutComplianceAgreementsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutComplianceAgreementsInput, ClientUpdateWithoutComplianceAgreementsInput>, ClientUncheckedUpdateWithoutComplianceAgreementsInput>
  }

  export type DisclosureUpdateOneRequiredWithoutComplianceAgreementsNestedInput = {
    create?: XOR<DisclosureCreateWithoutComplianceAgreementsInput, DisclosureUncheckedCreateWithoutComplianceAgreementsInput>
    connectOrCreate?: DisclosureCreateOrConnectWithoutComplianceAgreementsInput
    upsert?: DisclosureUpsertWithoutComplianceAgreementsInput
    connect?: DisclosureWhereUniqueInput
    update?: XOR<XOR<DisclosureUpdateToOneWithWhereWithoutComplianceAgreementsInput, DisclosureUpdateWithoutComplianceAgreementsInput>, DisclosureUncheckedUpdateWithoutComplianceAgreementsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TokenCreateWithoutUserInput = {
    token: string
    type: string
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
  }

  export type TokenUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    type: string
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
  }

  export type TokenCreateOrConnectWithoutUserInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenCreateManyUserInputEnvelope = {
    data: TokenCreateManyUserInput | TokenCreateManyUserInput[]
  }

  export type ClientCreateWithoutUserInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    status?: string
    progress?: number
    riskProfile?: string | null
    accountValue?: number | null
    firmId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutClientInput
    activities?: ActivityCreateNestedManyWithoutClientInput
    onboardingData?: OnboardingDataCreateNestedOneWithoutClientInput
    riskAssessment?: RiskAssessmentCreateNestedOneWithoutClientInput
    investmentObjectives?: InvestmentObjectivesCreateNestedOneWithoutClientInput
    complianceAgreements?: ComplianceAgreementCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutUserInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    status?: string
    progress?: number
    riskProfile?: string | null
    accountValue?: number | null
    firmId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutClientInput
    activities?: ActivityUncheckedCreateNestedManyWithoutClientInput
    onboardingData?: OnboardingDataUncheckedCreateNestedOneWithoutClientInput
    riskAssessment?: RiskAssessmentUncheckedCreateNestedOneWithoutClientInput
    investmentObjectives?: InvestmentObjectivesUncheckedCreateNestedOneWithoutClientInput
    complianceAgreements?: ComplianceAgreementUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutUserInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput>
  }

  export type ClientCreateManyUserInputEnvelope = {
    data: ClientCreateManyUserInput | ClientCreateManyUserInput[]
  }

  export type TokenUpsertWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
  }

  export type TokenUpdateManyWithWhereWithoutUserInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutUserInput>
  }

  export type TokenScalarWhereInput = {
    AND?: TokenScalarWhereInput | TokenScalarWhereInput[]
    OR?: TokenScalarWhereInput[]
    NOT?: TokenScalarWhereInput | TokenScalarWhereInput[]
    id?: IntFilter<"Token"> | number
    token?: StringFilter<"Token"> | string
    type?: StringFilter<"Token"> | string
    expires?: DateTimeFilter<"Token"> | Date | string
    blacklisted?: BoolFilter<"Token"> | boolean
    createdAt?: DateTimeFilter<"Token"> | Date | string
    userId?: IntFilter<"Token"> | number
  }

  export type ClientUpsertWithWhereUniqueWithoutUserInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutUserInput, ClientUncheckedUpdateWithoutUserInput>
    create: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutUserInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutUserInput, ClientUncheckedUpdateWithoutUserInput>
  }

  export type ClientUpdateManyWithWhereWithoutUserInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutUserInput>
  }

  export type ClientScalarWhereInput = {
    AND?: ClientScalarWhereInput | ClientScalarWhereInput[]
    OR?: ClientScalarWhereInput[]
    NOT?: ClientScalarWhereInput | ClientScalarWhereInput[]
    id?: StringFilter<"Client"> | string
    firstName?: StringFilter<"Client"> | string
    lastName?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    phone?: StringFilter<"Client"> | string
    status?: StringFilter<"Client"> | string
    progress?: IntFilter<"Client"> | number
    riskProfile?: StringNullableFilter<"Client"> | string | null
    accountValue?: FloatNullableFilter<"Client"> | number | null
    firmId?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    userId?: IntFilter<"Client"> | number
  }

  export type UserCreateWithoutTokensInput = {
    email: string
    name?: string | null
    password: string
    role?: string
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTokensInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    role?: string
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
  }

  export type UserUpsertWithoutTokensInput = {
    update: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
  }

  export type UserUpdateWithoutTokensInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutClientsInput = {
    email: string
    name?: string | null
    password: string
    role?: string
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClientsInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    role?: string
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClientsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
  }

  export type DocumentCreateWithoutClientInput = {
    id?: string
    fileName: string
    fileSize: number
    fileType: string
    status?: string
    signedUrl?: string | null
    uploadedAt?: Date | string
    verifiedAt?: Date | string | null
    rejectionReason?: string | null
    documentType: DocumentTypeCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateWithoutClientInput = {
    id?: string
    fileName: string
    fileSize: number
    fileType: string
    documentTypeId: string
    status?: string
    signedUrl?: string | null
    uploadedAt?: Date | string
    verifiedAt?: Date | string | null
    rejectionReason?: string | null
  }

  export type DocumentCreateOrConnectWithoutClientInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutClientInput, DocumentUncheckedCreateWithoutClientInput>
  }

  export type DocumentCreateManyClientInputEnvelope = {
    data: DocumentCreateManyClientInput | DocumentCreateManyClientInput[]
  }

  export type ActivityCreateWithoutClientInput = {
    id?: string
    type: string
    clientName: string
    description: string
    timestamp?: Date | string
  }

  export type ActivityUncheckedCreateWithoutClientInput = {
    id?: string
    type: string
    clientName: string
    description: string
    timestamp?: Date | string
  }

  export type ActivityCreateOrConnectWithoutClientInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutClientInput, ActivityUncheckedCreateWithoutClientInput>
  }

  export type ActivityCreateManyClientInputEnvelope = {
    data: ActivityCreateManyClientInput | ActivityCreateManyClientInput[]
  }

  export type OnboardingDataCreateWithoutClientInput = {
    id?: string
    personalInfo: JsonNullValueInput | InputJsonValue
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    employmentInfo?: NullableJsonNullValueInput | InputJsonValue
    riskProfile?: NullableJsonNullValueInput | InputJsonValue
    investmentObjectives?: NullableJsonNullValueInput | InputJsonValue
    financialGoals: JsonNullValueInput | InputJsonValue
    selectedAccountTypes: JsonNullValueInput | InputJsonValue
    fundingMethods: JsonNullValueInput | InputJsonValue
    uploadedDocuments: JsonNullValueInput | InputJsonValue
    disclosures: JsonNullValueInput | InputJsonValue
    complianceRecords: JsonNullValueInput | InputJsonValue
    status?: string
    currentStep?: number
    totalSteps?: number
    submittedAt?: Date | string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OnboardingDataUncheckedCreateWithoutClientInput = {
    id?: string
    personalInfo: JsonNullValueInput | InputJsonValue
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    employmentInfo?: NullableJsonNullValueInput | InputJsonValue
    riskProfile?: NullableJsonNullValueInput | InputJsonValue
    investmentObjectives?: NullableJsonNullValueInput | InputJsonValue
    financialGoals: JsonNullValueInput | InputJsonValue
    selectedAccountTypes: JsonNullValueInput | InputJsonValue
    fundingMethods: JsonNullValueInput | InputJsonValue
    uploadedDocuments: JsonNullValueInput | InputJsonValue
    disclosures: JsonNullValueInput | InputJsonValue
    complianceRecords: JsonNullValueInput | InputJsonValue
    status?: string
    currentStep?: number
    totalSteps?: number
    submittedAt?: Date | string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OnboardingDataCreateOrConnectWithoutClientInput = {
    where: OnboardingDataWhereUniqueInput
    create: XOR<OnboardingDataCreateWithoutClientInput, OnboardingDataUncheckedCreateWithoutClientInput>
  }

  export type RiskAssessmentCreateWithoutClientInput = {
    id?: string
    investmentExperience: string
    riskTolerance: string
    investmentTimeHorizon: string
    liquidityNeeds: string
    ageRange: string
    investmentKnowledge: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiskAssessmentUncheckedCreateWithoutClientInput = {
    id?: string
    investmentExperience: string
    riskTolerance: string
    investmentTimeHorizon: string
    liquidityNeeds: string
    ageRange: string
    investmentKnowledge: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiskAssessmentCreateOrConnectWithoutClientInput = {
    where: RiskAssessmentWhereUniqueInput
    create: XOR<RiskAssessmentCreateWithoutClientInput, RiskAssessmentUncheckedCreateWithoutClientInput>
  }

  export type InvestmentObjectivesCreateWithoutClientInput = {
    id?: string
    primaryGoal: string
    specificGoals: JsonNullValueInput | InputJsonValue
    targetAmount?: number | null
    timeHorizon: number
    monthlyContribution?: number | null
    riskComfort: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestmentObjectivesUncheckedCreateWithoutClientInput = {
    id?: string
    primaryGoal: string
    specificGoals: JsonNullValueInput | InputJsonValue
    targetAmount?: number | null
    timeHorizon: number
    monthlyContribution?: number | null
    riskComfort: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestmentObjectivesCreateOrConnectWithoutClientInput = {
    where: InvestmentObjectivesWhereUniqueInput
    create: XOR<InvestmentObjectivesCreateWithoutClientInput, InvestmentObjectivesUncheckedCreateWithoutClientInput>
  }

  export type ComplianceAgreementCreateWithoutClientInput = {
    id?: string
    acknowledged?: boolean
    acknowledgedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    disclosure: DisclosureCreateNestedOneWithoutComplianceAgreementsInput
  }

  export type ComplianceAgreementUncheckedCreateWithoutClientInput = {
    id?: string
    disclosureId: string
    acknowledged?: boolean
    acknowledgedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComplianceAgreementCreateOrConnectWithoutClientInput = {
    where: ComplianceAgreementWhereUniqueInput
    create: XOR<ComplianceAgreementCreateWithoutClientInput, ComplianceAgreementUncheckedCreateWithoutClientInput>
  }

  export type ComplianceAgreementCreateManyClientInputEnvelope = {
    data: ComplianceAgreementCreateManyClientInput | ComplianceAgreementCreateManyClientInput[]
  }

  export type UserUpsertWithoutClientsInput = {
    update: XOR<UserUpdateWithoutClientsInput, UserUncheckedUpdateWithoutClientsInput>
    create: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClientsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClientsInput, UserUncheckedUpdateWithoutClientsInput>
  }

  export type UserUpdateWithoutClientsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DocumentUpsertWithWhereUniqueWithoutClientInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutClientInput, DocumentUncheckedUpdateWithoutClientInput>
    create: XOR<DocumentCreateWithoutClientInput, DocumentUncheckedCreateWithoutClientInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutClientInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutClientInput, DocumentUncheckedUpdateWithoutClientInput>
  }

  export type DocumentUpdateManyWithWhereWithoutClientInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutClientInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    fileName?: StringFilter<"Document"> | string
    fileSize?: IntFilter<"Document"> | number
    fileType?: StringFilter<"Document"> | string
    documentTypeId?: StringFilter<"Document"> | string
    clientId?: StringFilter<"Document"> | string
    status?: StringFilter<"Document"> | string
    signedUrl?: StringNullableFilter<"Document"> | string | null
    uploadedAt?: DateTimeFilter<"Document"> | Date | string
    verifiedAt?: DateTimeNullableFilter<"Document"> | Date | string | null
    rejectionReason?: StringNullableFilter<"Document"> | string | null
  }

  export type ActivityUpsertWithWhereUniqueWithoutClientInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutClientInput, ActivityUncheckedUpdateWithoutClientInput>
    create: XOR<ActivityCreateWithoutClientInput, ActivityUncheckedCreateWithoutClientInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutClientInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutClientInput, ActivityUncheckedUpdateWithoutClientInput>
  }

  export type ActivityUpdateManyWithWhereWithoutClientInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutClientInput>
  }

  export type ActivityScalarWhereInput = {
    AND?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    OR?: ActivityScalarWhereInput[]
    NOT?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    id?: StringFilter<"Activity"> | string
    type?: StringFilter<"Activity"> | string
    clientName?: StringFilter<"Activity"> | string
    description?: StringFilter<"Activity"> | string
    timestamp?: DateTimeFilter<"Activity"> | Date | string
    clientId?: StringNullableFilter<"Activity"> | string | null
  }

  export type OnboardingDataUpsertWithoutClientInput = {
    update: XOR<OnboardingDataUpdateWithoutClientInput, OnboardingDataUncheckedUpdateWithoutClientInput>
    create: XOR<OnboardingDataCreateWithoutClientInput, OnboardingDataUncheckedCreateWithoutClientInput>
    where?: OnboardingDataWhereInput
  }

  export type OnboardingDataUpdateToOneWithWhereWithoutClientInput = {
    where?: OnboardingDataWhereInput
    data: XOR<OnboardingDataUpdateWithoutClientInput, OnboardingDataUncheckedUpdateWithoutClientInput>
  }

  export type OnboardingDataUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    personalInfo?: JsonNullValueInput | InputJsonValue
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    employmentInfo?: NullableJsonNullValueInput | InputJsonValue
    riskProfile?: NullableJsonNullValueInput | InputJsonValue
    investmentObjectives?: NullableJsonNullValueInput | InputJsonValue
    financialGoals?: JsonNullValueInput | InputJsonValue
    selectedAccountTypes?: JsonNullValueInput | InputJsonValue
    fundingMethods?: JsonNullValueInput | InputJsonValue
    uploadedDocuments?: JsonNullValueInput | InputJsonValue
    disclosures?: JsonNullValueInput | InputJsonValue
    complianceRecords?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    totalSteps?: IntFieldUpdateOperationsInput | number
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OnboardingDataUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    personalInfo?: JsonNullValueInput | InputJsonValue
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    employmentInfo?: NullableJsonNullValueInput | InputJsonValue
    riskProfile?: NullableJsonNullValueInput | InputJsonValue
    investmentObjectives?: NullableJsonNullValueInput | InputJsonValue
    financialGoals?: JsonNullValueInput | InputJsonValue
    selectedAccountTypes?: JsonNullValueInput | InputJsonValue
    fundingMethods?: JsonNullValueInput | InputJsonValue
    uploadedDocuments?: JsonNullValueInput | InputJsonValue
    disclosures?: JsonNullValueInput | InputJsonValue
    complianceRecords?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    currentStep?: IntFieldUpdateOperationsInput | number
    totalSteps?: IntFieldUpdateOperationsInput | number
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskAssessmentUpsertWithoutClientInput = {
    update: XOR<RiskAssessmentUpdateWithoutClientInput, RiskAssessmentUncheckedUpdateWithoutClientInput>
    create: XOR<RiskAssessmentCreateWithoutClientInput, RiskAssessmentUncheckedCreateWithoutClientInput>
    where?: RiskAssessmentWhereInput
  }

  export type RiskAssessmentUpdateToOneWithWhereWithoutClientInput = {
    where?: RiskAssessmentWhereInput
    data: XOR<RiskAssessmentUpdateWithoutClientInput, RiskAssessmentUncheckedUpdateWithoutClientInput>
  }

  export type RiskAssessmentUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    investmentExperience?: StringFieldUpdateOperationsInput | string
    riskTolerance?: StringFieldUpdateOperationsInput | string
    investmentTimeHorizon?: StringFieldUpdateOperationsInput | string
    liquidityNeeds?: StringFieldUpdateOperationsInput | string
    ageRange?: StringFieldUpdateOperationsInput | string
    investmentKnowledge?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskAssessmentUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    investmentExperience?: StringFieldUpdateOperationsInput | string
    riskTolerance?: StringFieldUpdateOperationsInput | string
    investmentTimeHorizon?: StringFieldUpdateOperationsInput | string
    liquidityNeeds?: StringFieldUpdateOperationsInput | string
    ageRange?: StringFieldUpdateOperationsInput | string
    investmentKnowledge?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentObjectivesUpsertWithoutClientInput = {
    update: XOR<InvestmentObjectivesUpdateWithoutClientInput, InvestmentObjectivesUncheckedUpdateWithoutClientInput>
    create: XOR<InvestmentObjectivesCreateWithoutClientInput, InvestmentObjectivesUncheckedCreateWithoutClientInput>
    where?: InvestmentObjectivesWhereInput
  }

  export type InvestmentObjectivesUpdateToOneWithWhereWithoutClientInput = {
    where?: InvestmentObjectivesWhereInput
    data: XOR<InvestmentObjectivesUpdateWithoutClientInput, InvestmentObjectivesUncheckedUpdateWithoutClientInput>
  }

  export type InvestmentObjectivesUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    primaryGoal?: StringFieldUpdateOperationsInput | string
    specificGoals?: JsonNullValueInput | InputJsonValue
    targetAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    timeHorizon?: IntFieldUpdateOperationsInput | number
    monthlyContribution?: NullableFloatFieldUpdateOperationsInput | number | null
    riskComfort?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentObjectivesUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    primaryGoal?: StringFieldUpdateOperationsInput | string
    specificGoals?: JsonNullValueInput | InputJsonValue
    targetAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    timeHorizon?: IntFieldUpdateOperationsInput | number
    monthlyContribution?: NullableFloatFieldUpdateOperationsInput | number | null
    riskComfort?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComplianceAgreementUpsertWithWhereUniqueWithoutClientInput = {
    where: ComplianceAgreementWhereUniqueInput
    update: XOR<ComplianceAgreementUpdateWithoutClientInput, ComplianceAgreementUncheckedUpdateWithoutClientInput>
    create: XOR<ComplianceAgreementCreateWithoutClientInput, ComplianceAgreementUncheckedCreateWithoutClientInput>
  }

  export type ComplianceAgreementUpdateWithWhereUniqueWithoutClientInput = {
    where: ComplianceAgreementWhereUniqueInput
    data: XOR<ComplianceAgreementUpdateWithoutClientInput, ComplianceAgreementUncheckedUpdateWithoutClientInput>
  }

  export type ComplianceAgreementUpdateManyWithWhereWithoutClientInput = {
    where: ComplianceAgreementScalarWhereInput
    data: XOR<ComplianceAgreementUpdateManyMutationInput, ComplianceAgreementUncheckedUpdateManyWithoutClientInput>
  }

  export type ComplianceAgreementScalarWhereInput = {
    AND?: ComplianceAgreementScalarWhereInput | ComplianceAgreementScalarWhereInput[]
    OR?: ComplianceAgreementScalarWhereInput[]
    NOT?: ComplianceAgreementScalarWhereInput | ComplianceAgreementScalarWhereInput[]
    id?: StringFilter<"ComplianceAgreement"> | string
    clientId?: StringFilter<"ComplianceAgreement"> | string
    disclosureId?: StringFilter<"ComplianceAgreement"> | string
    acknowledged?: BoolFilter<"ComplianceAgreement"> | boolean
    acknowledgedAt?: DateTimeNullableFilter<"ComplianceAgreement"> | Date | string | null
    createdAt?: DateTimeFilter<"ComplianceAgreement"> | Date | string
    updatedAt?: DateTimeFilter<"ComplianceAgreement"> | Date | string
  }

  export type ClientCreateWithoutActivitiesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    status?: string
    progress?: number
    riskProfile?: string | null
    accountValue?: number | null
    firmId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClientsInput
    documents?: DocumentCreateNestedManyWithoutClientInput
    onboardingData?: OnboardingDataCreateNestedOneWithoutClientInput
    riskAssessment?: RiskAssessmentCreateNestedOneWithoutClientInput
    investmentObjectives?: InvestmentObjectivesCreateNestedOneWithoutClientInput
    complianceAgreements?: ComplianceAgreementCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutActivitiesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    status?: string
    progress?: number
    riskProfile?: string | null
    accountValue?: number | null
    firmId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    documents?: DocumentUncheckedCreateNestedManyWithoutClientInput
    onboardingData?: OnboardingDataUncheckedCreateNestedOneWithoutClientInput
    riskAssessment?: RiskAssessmentUncheckedCreateNestedOneWithoutClientInput
    investmentObjectives?: InvestmentObjectivesUncheckedCreateNestedOneWithoutClientInput
    complianceAgreements?: ComplianceAgreementUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutActivitiesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutActivitiesInput, ClientUncheckedCreateWithoutActivitiesInput>
  }

  export type ClientUpsertWithoutActivitiesInput = {
    update: XOR<ClientUpdateWithoutActivitiesInput, ClientUncheckedUpdateWithoutActivitiesInput>
    create: XOR<ClientCreateWithoutActivitiesInput, ClientUncheckedCreateWithoutActivitiesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutActivitiesInput, ClientUncheckedUpdateWithoutActivitiesInput>
  }

  export type ClientUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    riskProfile?: NullableStringFieldUpdateOperationsInput | string | null
    accountValue?: NullableFloatFieldUpdateOperationsInput | number | null
    firmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClientsNestedInput
    documents?: DocumentUpdateManyWithoutClientNestedInput
    onboardingData?: OnboardingDataUpdateOneWithoutClientNestedInput
    riskAssessment?: RiskAssessmentUpdateOneWithoutClientNestedInput
    investmentObjectives?: InvestmentObjectivesUpdateOneWithoutClientNestedInput
    complianceAgreements?: ComplianceAgreementUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    riskProfile?: NullableStringFieldUpdateOperationsInput | string | null
    accountValue?: NullableFloatFieldUpdateOperationsInput | number | null
    firmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    documents?: DocumentUncheckedUpdateManyWithoutClientNestedInput
    onboardingData?: OnboardingDataUncheckedUpdateOneWithoutClientNestedInput
    riskAssessment?: RiskAssessmentUncheckedUpdateOneWithoutClientNestedInput
    investmentObjectives?: InvestmentObjectivesUncheckedUpdateOneWithoutClientNestedInput
    complianceAgreements?: ComplianceAgreementUncheckedUpdateManyWithoutClientNestedInput
  }

  export type DocumentTypeCreateWithoutDocumentsInput = {
    id?: string
    name: string
    description: string
    required?: boolean
    category: string
    acceptedFormats: string
    maxFileSize: number
  }

  export type DocumentTypeUncheckedCreateWithoutDocumentsInput = {
    id?: string
    name: string
    description: string
    required?: boolean
    category: string
    acceptedFormats: string
    maxFileSize: number
  }

  export type DocumentTypeCreateOrConnectWithoutDocumentsInput = {
    where: DocumentTypeWhereUniqueInput
    create: XOR<DocumentTypeCreateWithoutDocumentsInput, DocumentTypeUncheckedCreateWithoutDocumentsInput>
  }

  export type ClientCreateWithoutDocumentsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    status?: string
    progress?: number
    riskProfile?: string | null
    accountValue?: number | null
    firmId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClientsInput
    activities?: ActivityCreateNestedManyWithoutClientInput
    onboardingData?: OnboardingDataCreateNestedOneWithoutClientInput
    riskAssessment?: RiskAssessmentCreateNestedOneWithoutClientInput
    investmentObjectives?: InvestmentObjectivesCreateNestedOneWithoutClientInput
    complianceAgreements?: ComplianceAgreementCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutDocumentsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    status?: string
    progress?: number
    riskProfile?: string | null
    accountValue?: number | null
    firmId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    activities?: ActivityUncheckedCreateNestedManyWithoutClientInput
    onboardingData?: OnboardingDataUncheckedCreateNestedOneWithoutClientInput
    riskAssessment?: RiskAssessmentUncheckedCreateNestedOneWithoutClientInput
    investmentObjectives?: InvestmentObjectivesUncheckedCreateNestedOneWithoutClientInput
    complianceAgreements?: ComplianceAgreementUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutDocumentsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutDocumentsInput, ClientUncheckedCreateWithoutDocumentsInput>
  }

  export type DocumentTypeUpsertWithoutDocumentsInput = {
    update: XOR<DocumentTypeUpdateWithoutDocumentsInput, DocumentTypeUncheckedUpdateWithoutDocumentsInput>
    create: XOR<DocumentTypeCreateWithoutDocumentsInput, DocumentTypeUncheckedCreateWithoutDocumentsInput>
    where?: DocumentTypeWhereInput
  }

  export type DocumentTypeUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: DocumentTypeWhereInput
    data: XOR<DocumentTypeUpdateWithoutDocumentsInput, DocumentTypeUncheckedUpdateWithoutDocumentsInput>
  }

  export type DocumentTypeUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    acceptedFormats?: StringFieldUpdateOperationsInput | string
    maxFileSize?: IntFieldUpdateOperationsInput | number
  }

  export type DocumentTypeUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    acceptedFormats?: StringFieldUpdateOperationsInput | string
    maxFileSize?: IntFieldUpdateOperationsInput | number
  }

  export type ClientUpsertWithoutDocumentsInput = {
    update: XOR<ClientUpdateWithoutDocumentsInput, ClientUncheckedUpdateWithoutDocumentsInput>
    create: XOR<ClientCreateWithoutDocumentsInput, ClientUncheckedCreateWithoutDocumentsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutDocumentsInput, ClientUncheckedUpdateWithoutDocumentsInput>
  }

  export type ClientUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    riskProfile?: NullableStringFieldUpdateOperationsInput | string | null
    accountValue?: NullableFloatFieldUpdateOperationsInput | number | null
    firmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClientsNestedInput
    activities?: ActivityUpdateManyWithoutClientNestedInput
    onboardingData?: OnboardingDataUpdateOneWithoutClientNestedInput
    riskAssessment?: RiskAssessmentUpdateOneWithoutClientNestedInput
    investmentObjectives?: InvestmentObjectivesUpdateOneWithoutClientNestedInput
    complianceAgreements?: ComplianceAgreementUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    riskProfile?: NullableStringFieldUpdateOperationsInput | string | null
    accountValue?: NullableFloatFieldUpdateOperationsInput | number | null
    firmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    activities?: ActivityUncheckedUpdateManyWithoutClientNestedInput
    onboardingData?: OnboardingDataUncheckedUpdateOneWithoutClientNestedInput
    riskAssessment?: RiskAssessmentUncheckedUpdateOneWithoutClientNestedInput
    investmentObjectives?: InvestmentObjectivesUncheckedUpdateOneWithoutClientNestedInput
    complianceAgreements?: ComplianceAgreementUncheckedUpdateManyWithoutClientNestedInput
  }

  export type DocumentCreateWithoutDocumentTypeInput = {
    id?: string
    fileName: string
    fileSize: number
    fileType: string
    status?: string
    signedUrl?: string | null
    uploadedAt?: Date | string
    verifiedAt?: Date | string | null
    rejectionReason?: string | null
    client: ClientCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateWithoutDocumentTypeInput = {
    id?: string
    fileName: string
    fileSize: number
    fileType: string
    clientId: string
    status?: string
    signedUrl?: string | null
    uploadedAt?: Date | string
    verifiedAt?: Date | string | null
    rejectionReason?: string | null
  }

  export type DocumentCreateOrConnectWithoutDocumentTypeInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutDocumentTypeInput, DocumentUncheckedCreateWithoutDocumentTypeInput>
  }

  export type DocumentCreateManyDocumentTypeInputEnvelope = {
    data: DocumentCreateManyDocumentTypeInput | DocumentCreateManyDocumentTypeInput[]
  }

  export type DocumentUpsertWithWhereUniqueWithoutDocumentTypeInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutDocumentTypeInput, DocumentUncheckedUpdateWithoutDocumentTypeInput>
    create: XOR<DocumentCreateWithoutDocumentTypeInput, DocumentUncheckedCreateWithoutDocumentTypeInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutDocumentTypeInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutDocumentTypeInput, DocumentUncheckedUpdateWithoutDocumentTypeInput>
  }

  export type DocumentUpdateManyWithWhereWithoutDocumentTypeInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutDocumentTypeInput>
  }

  export type ClientCreateWithoutOnboardingDataInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    status?: string
    progress?: number
    riskProfile?: string | null
    accountValue?: number | null
    firmId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClientsInput
    documents?: DocumentCreateNestedManyWithoutClientInput
    activities?: ActivityCreateNestedManyWithoutClientInput
    riskAssessment?: RiskAssessmentCreateNestedOneWithoutClientInput
    investmentObjectives?: InvestmentObjectivesCreateNestedOneWithoutClientInput
    complianceAgreements?: ComplianceAgreementCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutOnboardingDataInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    status?: string
    progress?: number
    riskProfile?: string | null
    accountValue?: number | null
    firmId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    documents?: DocumentUncheckedCreateNestedManyWithoutClientInput
    activities?: ActivityUncheckedCreateNestedManyWithoutClientInput
    riskAssessment?: RiskAssessmentUncheckedCreateNestedOneWithoutClientInput
    investmentObjectives?: InvestmentObjectivesUncheckedCreateNestedOneWithoutClientInput
    complianceAgreements?: ComplianceAgreementUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutOnboardingDataInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutOnboardingDataInput, ClientUncheckedCreateWithoutOnboardingDataInput>
  }

  export type ClientUpsertWithoutOnboardingDataInput = {
    update: XOR<ClientUpdateWithoutOnboardingDataInput, ClientUncheckedUpdateWithoutOnboardingDataInput>
    create: XOR<ClientCreateWithoutOnboardingDataInput, ClientUncheckedCreateWithoutOnboardingDataInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutOnboardingDataInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutOnboardingDataInput, ClientUncheckedUpdateWithoutOnboardingDataInput>
  }

  export type ClientUpdateWithoutOnboardingDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    riskProfile?: NullableStringFieldUpdateOperationsInput | string | null
    accountValue?: NullableFloatFieldUpdateOperationsInput | number | null
    firmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClientsNestedInput
    documents?: DocumentUpdateManyWithoutClientNestedInput
    activities?: ActivityUpdateManyWithoutClientNestedInput
    riskAssessment?: RiskAssessmentUpdateOneWithoutClientNestedInput
    investmentObjectives?: InvestmentObjectivesUpdateOneWithoutClientNestedInput
    complianceAgreements?: ComplianceAgreementUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutOnboardingDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    riskProfile?: NullableStringFieldUpdateOperationsInput | string | null
    accountValue?: NullableFloatFieldUpdateOperationsInput | number | null
    firmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    documents?: DocumentUncheckedUpdateManyWithoutClientNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutClientNestedInput
    riskAssessment?: RiskAssessmentUncheckedUpdateOneWithoutClientNestedInput
    investmentObjectives?: InvestmentObjectivesUncheckedUpdateOneWithoutClientNestedInput
    complianceAgreements?: ComplianceAgreementUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateWithoutRiskAssessmentInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    status?: string
    progress?: number
    riskProfile?: string | null
    accountValue?: number | null
    firmId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClientsInput
    documents?: DocumentCreateNestedManyWithoutClientInput
    activities?: ActivityCreateNestedManyWithoutClientInput
    onboardingData?: OnboardingDataCreateNestedOneWithoutClientInput
    investmentObjectives?: InvestmentObjectivesCreateNestedOneWithoutClientInput
    complianceAgreements?: ComplianceAgreementCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutRiskAssessmentInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    status?: string
    progress?: number
    riskProfile?: string | null
    accountValue?: number | null
    firmId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    documents?: DocumentUncheckedCreateNestedManyWithoutClientInput
    activities?: ActivityUncheckedCreateNestedManyWithoutClientInput
    onboardingData?: OnboardingDataUncheckedCreateNestedOneWithoutClientInput
    investmentObjectives?: InvestmentObjectivesUncheckedCreateNestedOneWithoutClientInput
    complianceAgreements?: ComplianceAgreementUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutRiskAssessmentInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutRiskAssessmentInput, ClientUncheckedCreateWithoutRiskAssessmentInput>
  }

  export type ClientUpsertWithoutRiskAssessmentInput = {
    update: XOR<ClientUpdateWithoutRiskAssessmentInput, ClientUncheckedUpdateWithoutRiskAssessmentInput>
    create: XOR<ClientCreateWithoutRiskAssessmentInput, ClientUncheckedCreateWithoutRiskAssessmentInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutRiskAssessmentInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutRiskAssessmentInput, ClientUncheckedUpdateWithoutRiskAssessmentInput>
  }

  export type ClientUpdateWithoutRiskAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    riskProfile?: NullableStringFieldUpdateOperationsInput | string | null
    accountValue?: NullableFloatFieldUpdateOperationsInput | number | null
    firmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClientsNestedInput
    documents?: DocumentUpdateManyWithoutClientNestedInput
    activities?: ActivityUpdateManyWithoutClientNestedInput
    onboardingData?: OnboardingDataUpdateOneWithoutClientNestedInput
    investmentObjectives?: InvestmentObjectivesUpdateOneWithoutClientNestedInput
    complianceAgreements?: ComplianceAgreementUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutRiskAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    riskProfile?: NullableStringFieldUpdateOperationsInput | string | null
    accountValue?: NullableFloatFieldUpdateOperationsInput | number | null
    firmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    documents?: DocumentUncheckedUpdateManyWithoutClientNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutClientNestedInput
    onboardingData?: OnboardingDataUncheckedUpdateOneWithoutClientNestedInput
    investmentObjectives?: InvestmentObjectivesUncheckedUpdateOneWithoutClientNestedInput
    complianceAgreements?: ComplianceAgreementUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateWithoutInvestmentObjectivesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    status?: string
    progress?: number
    riskProfile?: string | null
    accountValue?: number | null
    firmId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClientsInput
    documents?: DocumentCreateNestedManyWithoutClientInput
    activities?: ActivityCreateNestedManyWithoutClientInput
    onboardingData?: OnboardingDataCreateNestedOneWithoutClientInput
    riskAssessment?: RiskAssessmentCreateNestedOneWithoutClientInput
    complianceAgreements?: ComplianceAgreementCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutInvestmentObjectivesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    status?: string
    progress?: number
    riskProfile?: string | null
    accountValue?: number | null
    firmId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    documents?: DocumentUncheckedCreateNestedManyWithoutClientInput
    activities?: ActivityUncheckedCreateNestedManyWithoutClientInput
    onboardingData?: OnboardingDataUncheckedCreateNestedOneWithoutClientInput
    riskAssessment?: RiskAssessmentUncheckedCreateNestedOneWithoutClientInput
    complianceAgreements?: ComplianceAgreementUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutInvestmentObjectivesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutInvestmentObjectivesInput, ClientUncheckedCreateWithoutInvestmentObjectivesInput>
  }

  export type ClientUpsertWithoutInvestmentObjectivesInput = {
    update: XOR<ClientUpdateWithoutInvestmentObjectivesInput, ClientUncheckedUpdateWithoutInvestmentObjectivesInput>
    create: XOR<ClientCreateWithoutInvestmentObjectivesInput, ClientUncheckedCreateWithoutInvestmentObjectivesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutInvestmentObjectivesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutInvestmentObjectivesInput, ClientUncheckedUpdateWithoutInvestmentObjectivesInput>
  }

  export type ClientUpdateWithoutInvestmentObjectivesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    riskProfile?: NullableStringFieldUpdateOperationsInput | string | null
    accountValue?: NullableFloatFieldUpdateOperationsInput | number | null
    firmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClientsNestedInput
    documents?: DocumentUpdateManyWithoutClientNestedInput
    activities?: ActivityUpdateManyWithoutClientNestedInput
    onboardingData?: OnboardingDataUpdateOneWithoutClientNestedInput
    riskAssessment?: RiskAssessmentUpdateOneWithoutClientNestedInput
    complianceAgreements?: ComplianceAgreementUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutInvestmentObjectivesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    riskProfile?: NullableStringFieldUpdateOperationsInput | string | null
    accountValue?: NullableFloatFieldUpdateOperationsInput | number | null
    firmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    documents?: DocumentUncheckedUpdateManyWithoutClientNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutClientNestedInput
    onboardingData?: OnboardingDataUncheckedUpdateOneWithoutClientNestedInput
    riskAssessment?: RiskAssessmentUncheckedUpdateOneWithoutClientNestedInput
    complianceAgreements?: ComplianceAgreementUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ComplianceAgreementCreateWithoutDisclosureInput = {
    id?: string
    acknowledged?: boolean
    acknowledgedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutComplianceAgreementsInput
  }

  export type ComplianceAgreementUncheckedCreateWithoutDisclosureInput = {
    id?: string
    clientId: string
    acknowledged?: boolean
    acknowledgedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComplianceAgreementCreateOrConnectWithoutDisclosureInput = {
    where: ComplianceAgreementWhereUniqueInput
    create: XOR<ComplianceAgreementCreateWithoutDisclosureInput, ComplianceAgreementUncheckedCreateWithoutDisclosureInput>
  }

  export type ComplianceAgreementCreateManyDisclosureInputEnvelope = {
    data: ComplianceAgreementCreateManyDisclosureInput | ComplianceAgreementCreateManyDisclosureInput[]
  }

  export type ComplianceAgreementUpsertWithWhereUniqueWithoutDisclosureInput = {
    where: ComplianceAgreementWhereUniqueInput
    update: XOR<ComplianceAgreementUpdateWithoutDisclosureInput, ComplianceAgreementUncheckedUpdateWithoutDisclosureInput>
    create: XOR<ComplianceAgreementCreateWithoutDisclosureInput, ComplianceAgreementUncheckedCreateWithoutDisclosureInput>
  }

  export type ComplianceAgreementUpdateWithWhereUniqueWithoutDisclosureInput = {
    where: ComplianceAgreementWhereUniqueInput
    data: XOR<ComplianceAgreementUpdateWithoutDisclosureInput, ComplianceAgreementUncheckedUpdateWithoutDisclosureInput>
  }

  export type ComplianceAgreementUpdateManyWithWhereWithoutDisclosureInput = {
    where: ComplianceAgreementScalarWhereInput
    data: XOR<ComplianceAgreementUpdateManyMutationInput, ComplianceAgreementUncheckedUpdateManyWithoutDisclosureInput>
  }

  export type ClientCreateWithoutComplianceAgreementsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    status?: string
    progress?: number
    riskProfile?: string | null
    accountValue?: number | null
    firmId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClientsInput
    documents?: DocumentCreateNestedManyWithoutClientInput
    activities?: ActivityCreateNestedManyWithoutClientInput
    onboardingData?: OnboardingDataCreateNestedOneWithoutClientInput
    riskAssessment?: RiskAssessmentCreateNestedOneWithoutClientInput
    investmentObjectives?: InvestmentObjectivesCreateNestedOneWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutComplianceAgreementsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    status?: string
    progress?: number
    riskProfile?: string | null
    accountValue?: number | null
    firmId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    documents?: DocumentUncheckedCreateNestedManyWithoutClientInput
    activities?: ActivityUncheckedCreateNestedManyWithoutClientInput
    onboardingData?: OnboardingDataUncheckedCreateNestedOneWithoutClientInput
    riskAssessment?: RiskAssessmentUncheckedCreateNestedOneWithoutClientInput
    investmentObjectives?: InvestmentObjectivesUncheckedCreateNestedOneWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutComplianceAgreementsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutComplianceAgreementsInput, ClientUncheckedCreateWithoutComplianceAgreementsInput>
  }

  export type DisclosureCreateWithoutComplianceAgreementsInput = {
    id?: string
    title: string
    content: string
    required?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisclosureUncheckedCreateWithoutComplianceAgreementsInput = {
    id?: string
    title: string
    content: string
    required?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisclosureCreateOrConnectWithoutComplianceAgreementsInput = {
    where: DisclosureWhereUniqueInput
    create: XOR<DisclosureCreateWithoutComplianceAgreementsInput, DisclosureUncheckedCreateWithoutComplianceAgreementsInput>
  }

  export type ClientUpsertWithoutComplianceAgreementsInput = {
    update: XOR<ClientUpdateWithoutComplianceAgreementsInput, ClientUncheckedUpdateWithoutComplianceAgreementsInput>
    create: XOR<ClientCreateWithoutComplianceAgreementsInput, ClientUncheckedCreateWithoutComplianceAgreementsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutComplianceAgreementsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutComplianceAgreementsInput, ClientUncheckedUpdateWithoutComplianceAgreementsInput>
  }

  export type ClientUpdateWithoutComplianceAgreementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    riskProfile?: NullableStringFieldUpdateOperationsInput | string | null
    accountValue?: NullableFloatFieldUpdateOperationsInput | number | null
    firmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClientsNestedInput
    documents?: DocumentUpdateManyWithoutClientNestedInput
    activities?: ActivityUpdateManyWithoutClientNestedInput
    onboardingData?: OnboardingDataUpdateOneWithoutClientNestedInput
    riskAssessment?: RiskAssessmentUpdateOneWithoutClientNestedInput
    investmentObjectives?: InvestmentObjectivesUpdateOneWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutComplianceAgreementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    riskProfile?: NullableStringFieldUpdateOperationsInput | string | null
    accountValue?: NullableFloatFieldUpdateOperationsInput | number | null
    firmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    documents?: DocumentUncheckedUpdateManyWithoutClientNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutClientNestedInput
    onboardingData?: OnboardingDataUncheckedUpdateOneWithoutClientNestedInput
    riskAssessment?: RiskAssessmentUncheckedUpdateOneWithoutClientNestedInput
    investmentObjectives?: InvestmentObjectivesUncheckedUpdateOneWithoutClientNestedInput
  }

  export type DisclosureUpsertWithoutComplianceAgreementsInput = {
    update: XOR<DisclosureUpdateWithoutComplianceAgreementsInput, DisclosureUncheckedUpdateWithoutComplianceAgreementsInput>
    create: XOR<DisclosureCreateWithoutComplianceAgreementsInput, DisclosureUncheckedCreateWithoutComplianceAgreementsInput>
    where?: DisclosureWhereInput
  }

  export type DisclosureUpdateToOneWithWhereWithoutComplianceAgreementsInput = {
    where?: DisclosureWhereInput
    data: XOR<DisclosureUpdateWithoutComplianceAgreementsInput, DisclosureUncheckedUpdateWithoutComplianceAgreementsInput>
  }

  export type DisclosureUpdateWithoutComplianceAgreementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisclosureUncheckedUpdateWithoutComplianceAgreementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateManyUserInput = {
    id?: number
    token: string
    type: string
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
  }

  export type ClientCreateManyUserInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    status?: string
    progress?: number
    riskProfile?: string | null
    accountValue?: number | null
    firmId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    riskProfile?: NullableStringFieldUpdateOperationsInput | string | null
    accountValue?: NullableFloatFieldUpdateOperationsInput | number | null
    firmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutClientNestedInput
    activities?: ActivityUpdateManyWithoutClientNestedInput
    onboardingData?: OnboardingDataUpdateOneWithoutClientNestedInput
    riskAssessment?: RiskAssessmentUpdateOneWithoutClientNestedInput
    investmentObjectives?: InvestmentObjectivesUpdateOneWithoutClientNestedInput
    complianceAgreements?: ComplianceAgreementUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    riskProfile?: NullableStringFieldUpdateOperationsInput | string | null
    accountValue?: NullableFloatFieldUpdateOperationsInput | number | null
    firmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutClientNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutClientNestedInput
    onboardingData?: OnboardingDataUncheckedUpdateOneWithoutClientNestedInput
    riskAssessment?: RiskAssessmentUncheckedUpdateOneWithoutClientNestedInput
    investmentObjectives?: InvestmentObjectivesUncheckedUpdateOneWithoutClientNestedInput
    complianceAgreements?: ComplianceAgreementUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    riskProfile?: NullableStringFieldUpdateOperationsInput | string | null
    accountValue?: NullableFloatFieldUpdateOperationsInput | number | null
    firmId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyClientInput = {
    id?: string
    fileName: string
    fileSize: number
    fileType: string
    documentTypeId: string
    status?: string
    signedUrl?: string | null
    uploadedAt?: Date | string
    verifiedAt?: Date | string | null
    rejectionReason?: string | null
  }

  export type ActivityCreateManyClientInput = {
    id?: string
    type: string
    clientName: string
    description: string
    timestamp?: Date | string
  }

  export type ComplianceAgreementCreateManyClientInput = {
    id?: string
    disclosureId: string
    acknowledged?: boolean
    acknowledgedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    signedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    documentType?: DocumentTypeUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    documentTypeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    signedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    documentTypeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    signedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivityUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComplianceAgreementUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    acknowledged?: BoolFieldUpdateOperationsInput | boolean
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disclosure?: DisclosureUpdateOneRequiredWithoutComplianceAgreementsNestedInput
  }

  export type ComplianceAgreementUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    disclosureId?: StringFieldUpdateOperationsInput | string
    acknowledged?: BoolFieldUpdateOperationsInput | boolean
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComplianceAgreementUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    disclosureId?: StringFieldUpdateOperationsInput | string
    acknowledged?: BoolFieldUpdateOperationsInput | boolean
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyDocumentTypeInput = {
    id?: string
    fileName: string
    fileSize: number
    fileType: string
    clientId: string
    status?: string
    signedUrl?: string | null
    uploadedAt?: Date | string
    verifiedAt?: Date | string | null
    rejectionReason?: string | null
  }

  export type DocumentUpdateWithoutDocumentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    signedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateWithoutDocumentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    signedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentUncheckedUpdateManyWithoutDocumentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    signedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComplianceAgreementCreateManyDisclosureInput = {
    id?: string
    clientId: string
    acknowledged?: boolean
    acknowledgedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComplianceAgreementUpdateWithoutDisclosureInput = {
    id?: StringFieldUpdateOperationsInput | string
    acknowledged?: BoolFieldUpdateOperationsInput | boolean
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutComplianceAgreementsNestedInput
  }

  export type ComplianceAgreementUncheckedUpdateWithoutDisclosureInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    acknowledged?: BoolFieldUpdateOperationsInput | boolean
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComplianceAgreementUncheckedUpdateManyWithoutDisclosureInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    acknowledged?: BoolFieldUpdateOperationsInput | boolean
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}