
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Sub
 * 
 */
export type Sub = $Result.DefaultSelection<Prisma.$SubPayload>
/**
 * Model ReferalDetails
 * 
 */
export type ReferalDetails = $Result.DefaultSelection<Prisma.$ReferalDetailsPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model SubPackageExtendedAuditEvent
 * 
 */
export type SubPackageExtendedAuditEvent = $Result.DefaultSelection<Prisma.$SubPackageExtendedAuditEventPayload>
/**
 * Model UserRewardTriggeredAuditEvent
 * 
 */
export type UserRewardTriggeredAuditEvent = $Result.DefaultSelection<Prisma.$UserRewardTriggeredAuditEventPayload>
/**
 * Model UserRepaymentAuditEvent
 * 
 */
export type UserRepaymentAuditEvent = $Result.DefaultSelection<Prisma.$UserRepaymentAuditEventPayload>
/**
 * Model EntityUpdatedAuditEvent
 * 
 */
export type EntityUpdatedAuditEvent = $Result.DefaultSelection<Prisma.$EntityUpdatedAuditEventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PackageExtensionReason: {
  PAID_EXTENSION: 'PAID_EXTENSION',
  NEW_SUB_ATTRACTED: 'NEW_SUB_ATTRACTED'
};

export type PackageExtensionReason = (typeof PackageExtensionReason)[keyof typeof PackageExtensionReason]


export const EntityTypes: {
  SUB: 'SUB',
  USER: 'USER'
};

export type EntityTypes = (typeof EntityTypes)[keyof typeof EntityTypes]


export const MonetaryRewardType: {
  SUB_EXT: 'SUB_EXT',
  NEW_SUB: 'NEW_SUB'
};

export type MonetaryRewardType = (typeof MonetaryRewardType)[keyof typeof MonetaryRewardType]


export const Currency: {
  USD: 'USD',
  EUR: 'EUR'
};

export type Currency = (typeof Currency)[keyof typeof Currency]


export const PackageType: {
  REGULAR: 'REGULAR',
  PREMIUM: 'PREMIUM'
};

export type PackageType = (typeof PackageType)[keyof typeof PackageType]


export const Role: {
  ADMIN: 'ADMIN',
  PARTNER: 'PARTNER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Region: {
  EU: 'EU',
  USA_CANADA: 'USA_CANADA'
};

export type Region = (typeof Region)[keyof typeof Region]

}

export type PackageExtensionReason = $Enums.PackageExtensionReason

export const PackageExtensionReason: typeof $Enums.PackageExtensionReason

export type EntityTypes = $Enums.EntityTypes

export const EntityTypes: typeof $Enums.EntityTypes

export type MonetaryRewardType = $Enums.MonetaryRewardType

export const MonetaryRewardType: typeof $Enums.MonetaryRewardType

export type Currency = $Enums.Currency

export const Currency: typeof $Enums.Currency

export type PackageType = $Enums.PackageType

export const PackageType: typeof $Enums.PackageType

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Region = $Enums.Region

export const Region: typeof $Enums.Region

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
 * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
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
   * `prisma.sub`: Exposes CRUD operations for the **Sub** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subs
    * const subs = await prisma.sub.findMany()
    * ```
    */
  get sub(): Prisma.SubDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.referalDetails`: Exposes CRUD operations for the **ReferalDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReferalDetails
    * const referalDetails = await prisma.referalDetails.findMany()
    * ```
    */
  get referalDetails(): Prisma.ReferalDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subPackageExtendedAuditEvent`: Exposes CRUD operations for the **SubPackageExtendedAuditEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubPackageExtendedAuditEvents
    * const subPackageExtendedAuditEvents = await prisma.subPackageExtendedAuditEvent.findMany()
    * ```
    */
  get subPackageExtendedAuditEvent(): Prisma.SubPackageExtendedAuditEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRewardTriggeredAuditEvent`: Exposes CRUD operations for the **UserRewardTriggeredAuditEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRewardTriggeredAuditEvents
    * const userRewardTriggeredAuditEvents = await prisma.userRewardTriggeredAuditEvent.findMany()
    * ```
    */
  get userRewardTriggeredAuditEvent(): Prisma.UserRewardTriggeredAuditEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRepaymentAuditEvent`: Exposes CRUD operations for the **UserRepaymentAuditEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRepaymentAuditEvents
    * const userRepaymentAuditEvents = await prisma.userRepaymentAuditEvent.findMany()
    * ```
    */
  get userRepaymentAuditEvent(): Prisma.UserRepaymentAuditEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entityUpdatedAuditEvent`: Exposes CRUD operations for the **EntityUpdatedAuditEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EntityUpdatedAuditEvents
    * const entityUpdatedAuditEvents = await prisma.entityUpdatedAuditEvent.findMany()
    * ```
    */
  get entityUpdatedAuditEvent(): Prisma.EntityUpdatedAuditEventDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Sub: 'Sub',
    ReferalDetails: 'ReferalDetails',
    Payment: 'Payment',
    SubPackageExtendedAuditEvent: 'SubPackageExtendedAuditEvent',
    UserRewardTriggeredAuditEvent: 'UserRewardTriggeredAuditEvent',
    UserRepaymentAuditEvent: 'UserRepaymentAuditEvent',
    EntityUpdatedAuditEvent: 'EntityUpdatedAuditEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "sub" | "referalDetails" | "payment" | "subPackageExtendedAuditEvent" | "userRewardTriggeredAuditEvent" | "userRepaymentAuditEvent" | "entityUpdatedAuditEvent"
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
      Sub: {
        payload: Prisma.$SubPayload<ExtArgs>
        fields: Prisma.SubFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubPayload>
          }
          findFirst: {
            args: Prisma.SubFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubPayload>
          }
          findMany: {
            args: Prisma.SubFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubPayload>[]
          }
          create: {
            args: Prisma.SubCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubPayload>
          }
          createMany: {
            args: Prisma.SubCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubPayload>
          }
          update: {
            args: Prisma.SubUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubPayload>
          }
          deleteMany: {
            args: Prisma.SubDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubPayload>
          }
          aggregate: {
            args: Prisma.SubAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSub>
          }
          groupBy: {
            args: Prisma.SubGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubCountArgs<ExtArgs>
            result: $Utils.Optional<SubCountAggregateOutputType> | number
          }
        }
      }
      ReferalDetails: {
        payload: Prisma.$ReferalDetailsPayload<ExtArgs>
        fields: Prisma.ReferalDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferalDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferalDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferalDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferalDetailsPayload>
          }
          findFirst: {
            args: Prisma.ReferalDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferalDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferalDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferalDetailsPayload>
          }
          findMany: {
            args: Prisma.ReferalDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferalDetailsPayload>[]
          }
          create: {
            args: Prisma.ReferalDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferalDetailsPayload>
          }
          createMany: {
            args: Prisma.ReferalDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReferalDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferalDetailsPayload>
          }
          update: {
            args: Prisma.ReferalDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferalDetailsPayload>
          }
          deleteMany: {
            args: Prisma.ReferalDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReferalDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReferalDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferalDetailsPayload>
          }
          aggregate: {
            args: Prisma.ReferalDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferalDetails>
          }
          groupBy: {
            args: Prisma.ReferalDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferalDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferalDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<ReferalDetailsCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      SubPackageExtendedAuditEvent: {
        payload: Prisma.$SubPackageExtendedAuditEventPayload<ExtArgs>
        fields: Prisma.SubPackageExtendedAuditEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubPackageExtendedAuditEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubPackageExtendedAuditEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubPackageExtendedAuditEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubPackageExtendedAuditEventPayload>
          }
          findFirst: {
            args: Prisma.SubPackageExtendedAuditEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubPackageExtendedAuditEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubPackageExtendedAuditEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubPackageExtendedAuditEventPayload>
          }
          findMany: {
            args: Prisma.SubPackageExtendedAuditEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubPackageExtendedAuditEventPayload>[]
          }
          create: {
            args: Prisma.SubPackageExtendedAuditEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubPackageExtendedAuditEventPayload>
          }
          createMany: {
            args: Prisma.SubPackageExtendedAuditEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubPackageExtendedAuditEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubPackageExtendedAuditEventPayload>
          }
          update: {
            args: Prisma.SubPackageExtendedAuditEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubPackageExtendedAuditEventPayload>
          }
          deleteMany: {
            args: Prisma.SubPackageExtendedAuditEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubPackageExtendedAuditEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubPackageExtendedAuditEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubPackageExtendedAuditEventPayload>
          }
          aggregate: {
            args: Prisma.SubPackageExtendedAuditEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubPackageExtendedAuditEvent>
          }
          groupBy: {
            args: Prisma.SubPackageExtendedAuditEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubPackageExtendedAuditEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubPackageExtendedAuditEventCountArgs<ExtArgs>
            result: $Utils.Optional<SubPackageExtendedAuditEventCountAggregateOutputType> | number
          }
        }
      }
      UserRewardTriggeredAuditEvent: {
        payload: Prisma.$UserRewardTriggeredAuditEventPayload<ExtArgs>
        fields: Prisma.UserRewardTriggeredAuditEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRewardTriggeredAuditEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRewardTriggeredAuditEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRewardTriggeredAuditEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRewardTriggeredAuditEventPayload>
          }
          findFirst: {
            args: Prisma.UserRewardTriggeredAuditEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRewardTriggeredAuditEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRewardTriggeredAuditEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRewardTriggeredAuditEventPayload>
          }
          findMany: {
            args: Prisma.UserRewardTriggeredAuditEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRewardTriggeredAuditEventPayload>[]
          }
          create: {
            args: Prisma.UserRewardTriggeredAuditEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRewardTriggeredAuditEventPayload>
          }
          createMany: {
            args: Prisma.UserRewardTriggeredAuditEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserRewardTriggeredAuditEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRewardTriggeredAuditEventPayload>
          }
          update: {
            args: Prisma.UserRewardTriggeredAuditEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRewardTriggeredAuditEventPayload>
          }
          deleteMany: {
            args: Prisma.UserRewardTriggeredAuditEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRewardTriggeredAuditEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserRewardTriggeredAuditEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRewardTriggeredAuditEventPayload>
          }
          aggregate: {
            args: Prisma.UserRewardTriggeredAuditEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRewardTriggeredAuditEvent>
          }
          groupBy: {
            args: Prisma.UserRewardTriggeredAuditEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRewardTriggeredAuditEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRewardTriggeredAuditEventCountArgs<ExtArgs>
            result: $Utils.Optional<UserRewardTriggeredAuditEventCountAggregateOutputType> | number
          }
        }
      }
      UserRepaymentAuditEvent: {
        payload: Prisma.$UserRepaymentAuditEventPayload<ExtArgs>
        fields: Prisma.UserRepaymentAuditEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRepaymentAuditEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRepaymentAuditEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRepaymentAuditEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRepaymentAuditEventPayload>
          }
          findFirst: {
            args: Prisma.UserRepaymentAuditEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRepaymentAuditEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRepaymentAuditEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRepaymentAuditEventPayload>
          }
          findMany: {
            args: Prisma.UserRepaymentAuditEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRepaymentAuditEventPayload>[]
          }
          create: {
            args: Prisma.UserRepaymentAuditEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRepaymentAuditEventPayload>
          }
          createMany: {
            args: Prisma.UserRepaymentAuditEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserRepaymentAuditEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRepaymentAuditEventPayload>
          }
          update: {
            args: Prisma.UserRepaymentAuditEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRepaymentAuditEventPayload>
          }
          deleteMany: {
            args: Prisma.UserRepaymentAuditEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRepaymentAuditEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserRepaymentAuditEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRepaymentAuditEventPayload>
          }
          aggregate: {
            args: Prisma.UserRepaymentAuditEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRepaymentAuditEvent>
          }
          groupBy: {
            args: Prisma.UserRepaymentAuditEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRepaymentAuditEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRepaymentAuditEventCountArgs<ExtArgs>
            result: $Utils.Optional<UserRepaymentAuditEventCountAggregateOutputType> | number
          }
        }
      }
      EntityUpdatedAuditEvent: {
        payload: Prisma.$EntityUpdatedAuditEventPayload<ExtArgs>
        fields: Prisma.EntityUpdatedAuditEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntityUpdatedAuditEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityUpdatedAuditEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntityUpdatedAuditEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityUpdatedAuditEventPayload>
          }
          findFirst: {
            args: Prisma.EntityUpdatedAuditEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityUpdatedAuditEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntityUpdatedAuditEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityUpdatedAuditEventPayload>
          }
          findMany: {
            args: Prisma.EntityUpdatedAuditEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityUpdatedAuditEventPayload>[]
          }
          create: {
            args: Prisma.EntityUpdatedAuditEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityUpdatedAuditEventPayload>
          }
          createMany: {
            args: Prisma.EntityUpdatedAuditEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EntityUpdatedAuditEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityUpdatedAuditEventPayload>
          }
          update: {
            args: Prisma.EntityUpdatedAuditEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityUpdatedAuditEventPayload>
          }
          deleteMany: {
            args: Prisma.EntityUpdatedAuditEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntityUpdatedAuditEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EntityUpdatedAuditEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityUpdatedAuditEventPayload>
          }
          aggregate: {
            args: Prisma.EntityUpdatedAuditEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntityUpdatedAuditEvent>
          }
          groupBy: {
            args: Prisma.EntityUpdatedAuditEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntityUpdatedAuditEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntityUpdatedAuditEventCountArgs<ExtArgs>
            result: $Utils.Optional<EntityUpdatedAuditEventCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    sub?: SubOmit
    referalDetails?: ReferalDetailsOmit
    payment?: PaymentOmit
    subPackageExtendedAuditEvent?: SubPackageExtendedAuditEventOmit
    userRewardTriggeredAuditEvent?: UserRewardTriggeredAuditEventOmit
    userRepaymentAuditEvent?: UserRepaymentAuditEventOmit
    entityUpdatedAuditEvent?: EntityUpdatedAuditEventOmit
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
    attractedSubs: number
    ur_ae: number
    createdSubs: number
    createdUsers: number
    extensionsSubmitted: number
    repaymentsSubmitted: number
    modificationsSubmitted: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attractedSubs?: boolean | UserCountOutputTypeCountAttractedSubsArgs
    ur_ae?: boolean | UserCountOutputTypeCountUr_aeArgs
    createdSubs?: boolean | UserCountOutputTypeCountCreatedSubsArgs
    createdUsers?: boolean | UserCountOutputTypeCountCreatedUsersArgs
    extensionsSubmitted?: boolean | UserCountOutputTypeCountExtensionsSubmittedArgs
    repaymentsSubmitted?: boolean | UserCountOutputTypeCountRepaymentsSubmittedArgs
    modificationsSubmitted?: boolean | UserCountOutputTypeCountModificationsSubmittedArgs
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
  export type UserCountOutputTypeCountAttractedSubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferalDetailsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUr_aeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRepaymentAuditEventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedSubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExtensionsSubmittedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubPackageExtendedAuditEventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRepaymentsSubmittedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRepaymentAuditEventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountModificationsSubmittedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntityUpdatedAuditEventWhereInput
  }


  /**
   * Count Type SubCountOutputType
   */

  export type SubCountOutputType = {
    payments: number
    packageExtensions: number
  }

  export type SubCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | SubCountOutputTypeCountPaymentsArgs
    packageExtensions?: boolean | SubCountOutputTypeCountPackageExtensionsArgs
  }

  // Custom InputTypes
  /**
   * SubCountOutputType without action
   */
  export type SubCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCountOutputType
     */
    select?: SubCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubCountOutputType without action
   */
  export type SubCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * SubCountOutputType without action
   */
  export type SubCountOutputTypeCountPackageExtensionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubPackageExtendedAuditEventWhereInput
  }


  /**
   * Count Type ReferalDetailsCountOutputType
   */

  export type ReferalDetailsCountOutputType = {
    urt_ae: number
  }

  export type ReferalDetailsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    urt_ae?: boolean | ReferalDetailsCountOutputTypeCountUrt_aeArgs
  }

  // Custom InputTypes
  /**
   * ReferalDetailsCountOutputType without action
   */
  export type ReferalDetailsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferalDetailsCountOutputType
     */
    select?: ReferalDetailsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReferalDetailsCountOutputType without action
   */
  export type ReferalDetailsCountOutputTypeCountUrt_aeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRewardTriggeredAuditEventWhereInput
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
    totalPayableReward: number | null
    customMonetaryRewardAmount: number | null
  }

  export type UserSumAggregateOutputType = {
    totalPayableReward: number | null
    customMonetaryRewardAmount: number | null
  }

  export type UserMinAggregateOutputType = {
    login: string | null
    pwd: string | null
    role: $Enums.Role | null
    subExternalId: string | null
    totalPayableReward: number | null
    customMonetaryRewardAmount: number | null
    note: string | null
    createdAt: Date | null
    createdByUserId: string | null
  }

  export type UserMaxAggregateOutputType = {
    login: string | null
    pwd: string | null
    role: $Enums.Role | null
    subExternalId: string | null
    totalPayableReward: number | null
    customMonetaryRewardAmount: number | null
    note: string | null
    createdAt: Date | null
    createdByUserId: string | null
  }

  export type UserCountAggregateOutputType = {
    login: number
    pwd: number
    role: number
    subExternalId: number
    totalPayableReward: number
    customMonetaryRewardAmount: number
    note: number
    createdAt: number
    createdByUserId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    totalPayableReward?: true
    customMonetaryRewardAmount?: true
  }

  export type UserSumAggregateInputType = {
    totalPayableReward?: true
    customMonetaryRewardAmount?: true
  }

  export type UserMinAggregateInputType = {
    login?: true
    pwd?: true
    role?: true
    subExternalId?: true
    totalPayableReward?: true
    customMonetaryRewardAmount?: true
    note?: true
    createdAt?: true
    createdByUserId?: true
  }

  export type UserMaxAggregateInputType = {
    login?: true
    pwd?: true
    role?: true
    subExternalId?: true
    totalPayableReward?: true
    customMonetaryRewardAmount?: true
    note?: true
    createdAt?: true
    createdByUserId?: true
  }

  export type UserCountAggregateInputType = {
    login?: true
    pwd?: true
    role?: true
    subExternalId?: true
    totalPayableReward?: true
    customMonetaryRewardAmount?: true
    note?: true
    createdAt?: true
    createdByUserId?: true
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
    login: string
    pwd: string
    role: $Enums.Role
    subExternalId: string | null
    totalPayableReward: number
    customMonetaryRewardAmount: number | null
    note: string | null
    createdAt: Date
    createdByUserId: string | null
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
    login?: boolean
    pwd?: boolean
    role?: boolean
    subExternalId?: boolean
    totalPayableReward?: boolean
    customMonetaryRewardAmount?: boolean
    note?: boolean
    createdAt?: boolean
    createdByUserId?: boolean
    sub?: boolean | User$subArgs<ExtArgs>
    attractedSubs?: boolean | User$attractedSubsArgs<ExtArgs>
    ur_ae?: boolean | User$ur_aeArgs<ExtArgs>
    createdSubs?: boolean | User$createdSubsArgs<ExtArgs>
    createdUsers?: boolean | User$createdUsersArgs<ExtArgs>
    createdBy?: boolean | User$createdByArgs<ExtArgs>
    extensionsSubmitted?: boolean | User$extensionsSubmittedArgs<ExtArgs>
    repaymentsSubmitted?: boolean | User$repaymentsSubmittedArgs<ExtArgs>
    modificationsSubmitted?: boolean | User$modificationsSubmittedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    login?: boolean
    pwd?: boolean
    role?: boolean
    subExternalId?: boolean
    totalPayableReward?: boolean
    customMonetaryRewardAmount?: boolean
    note?: boolean
    createdAt?: boolean
    createdByUserId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"login" | "pwd" | "role" | "subExternalId" | "totalPayableReward" | "customMonetaryRewardAmount" | "note" | "createdAt" | "createdByUserId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sub?: boolean | User$subArgs<ExtArgs>
    attractedSubs?: boolean | User$attractedSubsArgs<ExtArgs>
    ur_ae?: boolean | User$ur_aeArgs<ExtArgs>
    createdSubs?: boolean | User$createdSubsArgs<ExtArgs>
    createdUsers?: boolean | User$createdUsersArgs<ExtArgs>
    createdBy?: boolean | User$createdByArgs<ExtArgs>
    extensionsSubmitted?: boolean | User$extensionsSubmittedArgs<ExtArgs>
    repaymentsSubmitted?: boolean | User$repaymentsSubmittedArgs<ExtArgs>
    modificationsSubmitted?: boolean | User$modificationsSubmittedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sub: Prisma.$SubPayload<ExtArgs> | null
      attractedSubs: Prisma.$ReferalDetailsPayload<ExtArgs>[]
      ur_ae: Prisma.$UserRepaymentAuditEventPayload<ExtArgs>[]
      createdSubs: Prisma.$SubPayload<ExtArgs>[]
      createdUsers: Prisma.$UserPayload<ExtArgs>[]
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      extensionsSubmitted: Prisma.$SubPackageExtendedAuditEventPayload<ExtArgs>[]
      repaymentsSubmitted: Prisma.$UserRepaymentAuditEventPayload<ExtArgs>[]
      modificationsSubmitted: Prisma.$EntityUpdatedAuditEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      login: string
      pwd: string
      role: $Enums.Role
      subExternalId: string | null
      totalPayableReward: number
      customMonetaryRewardAmount: number | null
      note: string | null
      createdAt: Date
      createdByUserId: string | null
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
     * // Only select the `login`
     * const userWithLoginOnly = await prisma.user.findMany({ select: { login: true } })
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
    sub<T extends User$subArgs<ExtArgs> = {}>(args?: Subset<T, User$subArgs<ExtArgs>>): Prisma__SubClient<$Result.GetResult<Prisma.$SubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    attractedSubs<T extends User$attractedSubsArgs<ExtArgs> = {}>(args?: Subset<T, User$attractedSubsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferalDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ur_ae<T extends User$ur_aeArgs<ExtArgs> = {}>(args?: Subset<T, User$ur_aeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRepaymentAuditEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdSubs<T extends User$createdSubsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdSubsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdUsers<T extends User$createdUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$createdUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdBy<T extends User$createdByArgs<ExtArgs> = {}>(args?: Subset<T, User$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    extensionsSubmitted<T extends User$extensionsSubmittedArgs<ExtArgs> = {}>(args?: Subset<T, User$extensionsSubmittedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubPackageExtendedAuditEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    repaymentsSubmitted<T extends User$repaymentsSubmittedArgs<ExtArgs> = {}>(args?: Subset<T, User$repaymentsSubmittedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRepaymentAuditEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    modificationsSubmitted<T extends User$modificationsSubmittedArgs<ExtArgs> = {}>(args?: Subset<T, User$modificationsSubmittedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntityUpdatedAuditEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly login: FieldRef<"User", 'String'>
    readonly pwd: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly subExternalId: FieldRef<"User", 'String'>
    readonly totalPayableReward: FieldRef<"User", 'Float'>
    readonly customMonetaryRewardAmount: FieldRef<"User", 'Float'>
    readonly note: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly createdByUserId: FieldRef<"User", 'String'>
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
    skipDuplicates?: boolean
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
   * User.sub
   */
  export type User$subArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub
     */
    select?: SubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sub
     */
    omit?: SubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubInclude<ExtArgs> | null
    where?: SubWhereInput
  }

  /**
   * User.attractedSubs
   */
  export type User$attractedSubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferalDetails
     */
    select?: ReferalDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferalDetails
     */
    omit?: ReferalDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferalDetailsInclude<ExtArgs> | null
    where?: ReferalDetailsWhereInput
    orderBy?: ReferalDetailsOrderByWithRelationInput | ReferalDetailsOrderByWithRelationInput[]
    cursor?: ReferalDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferalDetailsScalarFieldEnum | ReferalDetailsScalarFieldEnum[]
  }

  /**
   * User.ur_ae
   */
  export type User$ur_aeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRepaymentAuditEvent
     */
    select?: UserRepaymentAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRepaymentAuditEvent
     */
    omit?: UserRepaymentAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRepaymentAuditEventInclude<ExtArgs> | null
    where?: UserRepaymentAuditEventWhereInput
    orderBy?: UserRepaymentAuditEventOrderByWithRelationInput | UserRepaymentAuditEventOrderByWithRelationInput[]
    cursor?: UserRepaymentAuditEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRepaymentAuditEventScalarFieldEnum | UserRepaymentAuditEventScalarFieldEnum[]
  }

  /**
   * User.createdSubs
   */
  export type User$createdSubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub
     */
    select?: SubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sub
     */
    omit?: SubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubInclude<ExtArgs> | null
    where?: SubWhereInput
    orderBy?: SubOrderByWithRelationInput | SubOrderByWithRelationInput[]
    cursor?: SubWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubScalarFieldEnum | SubScalarFieldEnum[]
  }

  /**
   * User.createdUsers
   */
  export type User$createdUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.createdBy
   */
  export type User$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * User.extensionsSubmitted
   */
  export type User$extensionsSubmittedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubPackageExtendedAuditEvent
     */
    select?: SubPackageExtendedAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubPackageExtendedAuditEvent
     */
    omit?: SubPackageExtendedAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubPackageExtendedAuditEventInclude<ExtArgs> | null
    where?: SubPackageExtendedAuditEventWhereInput
    orderBy?: SubPackageExtendedAuditEventOrderByWithRelationInput | SubPackageExtendedAuditEventOrderByWithRelationInput[]
    cursor?: SubPackageExtendedAuditEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubPackageExtendedAuditEventScalarFieldEnum | SubPackageExtendedAuditEventScalarFieldEnum[]
  }

  /**
   * User.repaymentsSubmitted
   */
  export type User$repaymentsSubmittedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRepaymentAuditEvent
     */
    select?: UserRepaymentAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRepaymentAuditEvent
     */
    omit?: UserRepaymentAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRepaymentAuditEventInclude<ExtArgs> | null
    where?: UserRepaymentAuditEventWhereInput
    orderBy?: UserRepaymentAuditEventOrderByWithRelationInput | UserRepaymentAuditEventOrderByWithRelationInput[]
    cursor?: UserRepaymentAuditEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRepaymentAuditEventScalarFieldEnum | UserRepaymentAuditEventScalarFieldEnum[]
  }

  /**
   * User.modificationsSubmitted
   */
  export type User$modificationsSubmittedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityUpdatedAuditEvent
     */
    select?: EntityUpdatedAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntityUpdatedAuditEvent
     */
    omit?: EntityUpdatedAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityUpdatedAuditEventInclude<ExtArgs> | null
    where?: EntityUpdatedAuditEventWhereInput
    orderBy?: EntityUpdatedAuditEventOrderByWithRelationInput | EntityUpdatedAuditEventOrderByWithRelationInput[]
    cursor?: EntityUpdatedAuditEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntityUpdatedAuditEventScalarFieldEnum | EntityUpdatedAuditEventScalarFieldEnum[]
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
   * Model Sub
   */

  export type AggregateSub = {
    _count: SubCountAggregateOutputType | null
    _min: SubMinAggregateOutputType | null
    _max: SubMaxAggregateOutputType | null
  }

  export type SubMinAggregateOutputType = {
    externalId: string | null
    login: string | null
    pwd: string | null
    note: string | null
    m3uPlaylist: string | null
    epg: string | null
    publicKey: string | null
    media: string | null
    pkgType: $Enums.PackageType | null
    startDate: Date | null
    endDate: Date | null
    region: $Enums.Region | null
    createdAt: Date | null
    createdByUserId: string | null
  }

  export type SubMaxAggregateOutputType = {
    externalId: string | null
    login: string | null
    pwd: string | null
    note: string | null
    m3uPlaylist: string | null
    epg: string | null
    publicKey: string | null
    media: string | null
    pkgType: $Enums.PackageType | null
    startDate: Date | null
    endDate: Date | null
    region: $Enums.Region | null
    createdAt: Date | null
    createdByUserId: string | null
  }

  export type SubCountAggregateOutputType = {
    externalId: number
    login: number
    pwd: number
    note: number
    m3uPlaylist: number
    epg: number
    publicKey: number
    media: number
    pkgType: number
    startDate: number
    endDate: number
    region: number
    createdAt: number
    createdByUserId: number
    _all: number
  }


  export type SubMinAggregateInputType = {
    externalId?: true
    login?: true
    pwd?: true
    note?: true
    m3uPlaylist?: true
    epg?: true
    publicKey?: true
    media?: true
    pkgType?: true
    startDate?: true
    endDate?: true
    region?: true
    createdAt?: true
    createdByUserId?: true
  }

  export type SubMaxAggregateInputType = {
    externalId?: true
    login?: true
    pwd?: true
    note?: true
    m3uPlaylist?: true
    epg?: true
    publicKey?: true
    media?: true
    pkgType?: true
    startDate?: true
    endDate?: true
    region?: true
    createdAt?: true
    createdByUserId?: true
  }

  export type SubCountAggregateInputType = {
    externalId?: true
    login?: true
    pwd?: true
    note?: true
    m3uPlaylist?: true
    epg?: true
    publicKey?: true
    media?: true
    pkgType?: true
    startDate?: true
    endDate?: true
    region?: true
    createdAt?: true
    createdByUserId?: true
    _all?: true
  }

  export type SubAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sub to aggregate.
     */
    where?: SubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subs to fetch.
     */
    orderBy?: SubOrderByWithRelationInput | SubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subs
    **/
    _count?: true | SubCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubMaxAggregateInputType
  }

  export type GetSubAggregateType<T extends SubAggregateArgs> = {
        [P in keyof T & keyof AggregateSub]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSub[P]>
      : GetScalarType<T[P], AggregateSub[P]>
  }




  export type SubGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubWhereInput
    orderBy?: SubOrderByWithAggregationInput | SubOrderByWithAggregationInput[]
    by: SubScalarFieldEnum[] | SubScalarFieldEnum
    having?: SubScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubCountAggregateInputType | true
    _min?: SubMinAggregateInputType
    _max?: SubMaxAggregateInputType
  }

  export type SubGroupByOutputType = {
    externalId: string
    login: string | null
    pwd: string | null
    note: string | null
    m3uPlaylist: string | null
    epg: string | null
    publicKey: string | null
    media: string | null
    pkgType: $Enums.PackageType | null
    startDate: Date
    endDate: Date
    region: $Enums.Region | null
    createdAt: Date
    createdByUserId: string
    _count: SubCountAggregateOutputType | null
    _min: SubMinAggregateOutputType | null
    _max: SubMaxAggregateOutputType | null
  }

  type GetSubGroupByPayload<T extends SubGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubGroupByOutputType[P]>
            : GetScalarType<T[P], SubGroupByOutputType[P]>
        }
      >
    >


  export type SubSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    externalId?: boolean
    login?: boolean
    pwd?: boolean
    note?: boolean
    m3uPlaylist?: boolean
    epg?: boolean
    publicKey?: boolean
    media?: boolean
    pkgType?: boolean
    startDate?: boolean
    endDate?: boolean
    region?: boolean
    createdAt?: boolean
    createdByUserId?: boolean
    user?: boolean | Sub$userArgs<ExtArgs>
    referalDetails?: boolean | Sub$referalDetailsArgs<ExtArgs>
    payments?: boolean | Sub$paymentsArgs<ExtArgs>
    packageExtensions?: boolean | Sub$packageExtensionsArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | SubCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sub"]>



  export type SubSelectScalar = {
    externalId?: boolean
    login?: boolean
    pwd?: boolean
    note?: boolean
    m3uPlaylist?: boolean
    epg?: boolean
    publicKey?: boolean
    media?: boolean
    pkgType?: boolean
    startDate?: boolean
    endDate?: boolean
    region?: boolean
    createdAt?: boolean
    createdByUserId?: boolean
  }

  export type SubOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"externalId" | "login" | "pwd" | "note" | "m3uPlaylist" | "epg" | "publicKey" | "media" | "pkgType" | "startDate" | "endDate" | "region" | "createdAt" | "createdByUserId", ExtArgs["result"]["sub"]>
  export type SubInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Sub$userArgs<ExtArgs>
    referalDetails?: boolean | Sub$referalDetailsArgs<ExtArgs>
    payments?: boolean | Sub$paymentsArgs<ExtArgs>
    packageExtensions?: boolean | Sub$packageExtensionsArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | SubCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SubPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sub"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      referalDetails: Prisma.$ReferalDetailsPayload<ExtArgs> | null
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      packageExtensions: Prisma.$SubPackageExtendedAuditEventPayload<ExtArgs>[]
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      externalId: string
      login: string | null
      pwd: string | null
      note: string | null
      m3uPlaylist: string | null
      epg: string | null
      publicKey: string | null
      media: string | null
      pkgType: $Enums.PackageType | null
      startDate: Date
      endDate: Date
      region: $Enums.Region | null
      createdAt: Date
      createdByUserId: string
    }, ExtArgs["result"]["sub"]>
    composites: {}
  }

  type SubGetPayload<S extends boolean | null | undefined | SubDefaultArgs> = $Result.GetResult<Prisma.$SubPayload, S>

  type SubCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubCountAggregateInputType | true
    }

  export interface SubDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sub'], meta: { name: 'Sub' } }
    /**
     * Find zero or one Sub that matches the filter.
     * @param {SubFindUniqueArgs} args - Arguments to find a Sub
     * @example
     * // Get one Sub
     * const sub = await prisma.sub.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubFindUniqueArgs>(args: SelectSubset<T, SubFindUniqueArgs<ExtArgs>>): Prisma__SubClient<$Result.GetResult<Prisma.$SubPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sub that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubFindUniqueOrThrowArgs} args - Arguments to find a Sub
     * @example
     * // Get one Sub
     * const sub = await prisma.sub.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubFindUniqueOrThrowArgs>(args: SelectSubset<T, SubFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubClient<$Result.GetResult<Prisma.$SubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sub that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubFindFirstArgs} args - Arguments to find a Sub
     * @example
     * // Get one Sub
     * const sub = await prisma.sub.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubFindFirstArgs>(args?: SelectSubset<T, SubFindFirstArgs<ExtArgs>>): Prisma__SubClient<$Result.GetResult<Prisma.$SubPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sub that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubFindFirstOrThrowArgs} args - Arguments to find a Sub
     * @example
     * // Get one Sub
     * const sub = await prisma.sub.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubFindFirstOrThrowArgs>(args?: SelectSubset<T, SubFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubClient<$Result.GetResult<Prisma.$SubPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subs
     * const subs = await prisma.sub.findMany()
     * 
     * // Get first 10 Subs
     * const subs = await prisma.sub.findMany({ take: 10 })
     * 
     * // Only select the `externalId`
     * const subWithExternalIdOnly = await prisma.sub.findMany({ select: { externalId: true } })
     * 
     */
    findMany<T extends SubFindManyArgs>(args?: SelectSubset<T, SubFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sub.
     * @param {SubCreateArgs} args - Arguments to create a Sub.
     * @example
     * // Create one Sub
     * const Sub = await prisma.sub.create({
     *   data: {
     *     // ... data to create a Sub
     *   }
     * })
     * 
     */
    create<T extends SubCreateArgs>(args: SelectSubset<T, SubCreateArgs<ExtArgs>>): Prisma__SubClient<$Result.GetResult<Prisma.$SubPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subs.
     * @param {SubCreateManyArgs} args - Arguments to create many Subs.
     * @example
     * // Create many Subs
     * const sub = await prisma.sub.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubCreateManyArgs>(args?: SelectSubset<T, SubCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sub.
     * @param {SubDeleteArgs} args - Arguments to delete one Sub.
     * @example
     * // Delete one Sub
     * const Sub = await prisma.sub.delete({
     *   where: {
     *     // ... filter to delete one Sub
     *   }
     * })
     * 
     */
    delete<T extends SubDeleteArgs>(args: SelectSubset<T, SubDeleteArgs<ExtArgs>>): Prisma__SubClient<$Result.GetResult<Prisma.$SubPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sub.
     * @param {SubUpdateArgs} args - Arguments to update one Sub.
     * @example
     * // Update one Sub
     * const sub = await prisma.sub.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubUpdateArgs>(args: SelectSubset<T, SubUpdateArgs<ExtArgs>>): Prisma__SubClient<$Result.GetResult<Prisma.$SubPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subs.
     * @param {SubDeleteManyArgs} args - Arguments to filter Subs to delete.
     * @example
     * // Delete a few Subs
     * const { count } = await prisma.sub.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubDeleteManyArgs>(args?: SelectSubset<T, SubDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subs
     * const sub = await prisma.sub.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubUpdateManyArgs>(args: SelectSubset<T, SubUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sub.
     * @param {SubUpsertArgs} args - Arguments to update or create a Sub.
     * @example
     * // Update or create a Sub
     * const sub = await prisma.sub.upsert({
     *   create: {
     *     // ... data to create a Sub
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sub we want to update
     *   }
     * })
     */
    upsert<T extends SubUpsertArgs>(args: SelectSubset<T, SubUpsertArgs<ExtArgs>>): Prisma__SubClient<$Result.GetResult<Prisma.$SubPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCountArgs} args - Arguments to filter Subs to count.
     * @example
     * // Count the number of Subs
     * const count = await prisma.sub.count({
     *   where: {
     *     // ... the filter for the Subs we want to count
     *   }
     * })
    **/
    count<T extends SubCountArgs>(
      args?: Subset<T, SubCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sub.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubAggregateArgs>(args: Subset<T, SubAggregateArgs>): Prisma.PrismaPromise<GetSubAggregateType<T>>

    /**
     * Group by Sub.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubGroupByArgs} args - Group by arguments.
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
      T extends SubGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubGroupByArgs['orderBy'] }
        : { orderBy?: SubGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sub model
   */
  readonly fields: SubFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sub.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Sub$userArgs<ExtArgs> = {}>(args?: Subset<T, Sub$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    referalDetails<T extends Sub$referalDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Sub$referalDetailsArgs<ExtArgs>>): Prisma__ReferalDetailsClient<$Result.GetResult<Prisma.$ReferalDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payments<T extends Sub$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Sub$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    packageExtensions<T extends Sub$packageExtensionsArgs<ExtArgs> = {}>(args?: Subset<T, Sub$packageExtensionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubPackageExtendedAuditEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Sub model
   */
  interface SubFieldRefs {
    readonly externalId: FieldRef<"Sub", 'String'>
    readonly login: FieldRef<"Sub", 'String'>
    readonly pwd: FieldRef<"Sub", 'String'>
    readonly note: FieldRef<"Sub", 'String'>
    readonly m3uPlaylist: FieldRef<"Sub", 'String'>
    readonly epg: FieldRef<"Sub", 'String'>
    readonly publicKey: FieldRef<"Sub", 'String'>
    readonly media: FieldRef<"Sub", 'String'>
    readonly pkgType: FieldRef<"Sub", 'PackageType'>
    readonly startDate: FieldRef<"Sub", 'DateTime'>
    readonly endDate: FieldRef<"Sub", 'DateTime'>
    readonly region: FieldRef<"Sub", 'Region'>
    readonly createdAt: FieldRef<"Sub", 'DateTime'>
    readonly createdByUserId: FieldRef<"Sub", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sub findUnique
   */
  export type SubFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub
     */
    select?: SubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sub
     */
    omit?: SubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubInclude<ExtArgs> | null
    /**
     * Filter, which Sub to fetch.
     */
    where: SubWhereUniqueInput
  }

  /**
   * Sub findUniqueOrThrow
   */
  export type SubFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub
     */
    select?: SubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sub
     */
    omit?: SubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubInclude<ExtArgs> | null
    /**
     * Filter, which Sub to fetch.
     */
    where: SubWhereUniqueInput
  }

  /**
   * Sub findFirst
   */
  export type SubFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub
     */
    select?: SubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sub
     */
    omit?: SubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubInclude<ExtArgs> | null
    /**
     * Filter, which Sub to fetch.
     */
    where?: SubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subs to fetch.
     */
    orderBy?: SubOrderByWithRelationInput | SubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subs.
     */
    cursor?: SubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subs.
     */
    distinct?: SubScalarFieldEnum | SubScalarFieldEnum[]
  }

  /**
   * Sub findFirstOrThrow
   */
  export type SubFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub
     */
    select?: SubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sub
     */
    omit?: SubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubInclude<ExtArgs> | null
    /**
     * Filter, which Sub to fetch.
     */
    where?: SubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subs to fetch.
     */
    orderBy?: SubOrderByWithRelationInput | SubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subs.
     */
    cursor?: SubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subs.
     */
    distinct?: SubScalarFieldEnum | SubScalarFieldEnum[]
  }

  /**
   * Sub findMany
   */
  export type SubFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub
     */
    select?: SubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sub
     */
    omit?: SubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubInclude<ExtArgs> | null
    /**
     * Filter, which Subs to fetch.
     */
    where?: SubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subs to fetch.
     */
    orderBy?: SubOrderByWithRelationInput | SubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subs.
     */
    cursor?: SubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subs.
     */
    skip?: number
    distinct?: SubScalarFieldEnum | SubScalarFieldEnum[]
  }

  /**
   * Sub create
   */
  export type SubCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub
     */
    select?: SubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sub
     */
    omit?: SubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubInclude<ExtArgs> | null
    /**
     * The data needed to create a Sub.
     */
    data: XOR<SubCreateInput, SubUncheckedCreateInput>
  }

  /**
   * Sub createMany
   */
  export type SubCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subs.
     */
    data: SubCreateManyInput | SubCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sub update
   */
  export type SubUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub
     */
    select?: SubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sub
     */
    omit?: SubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubInclude<ExtArgs> | null
    /**
     * The data needed to update a Sub.
     */
    data: XOR<SubUpdateInput, SubUncheckedUpdateInput>
    /**
     * Choose, which Sub to update.
     */
    where: SubWhereUniqueInput
  }

  /**
   * Sub updateMany
   */
  export type SubUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subs.
     */
    data: XOR<SubUpdateManyMutationInput, SubUncheckedUpdateManyInput>
    /**
     * Filter which Subs to update
     */
    where?: SubWhereInput
    /**
     * Limit how many Subs to update.
     */
    limit?: number
  }

  /**
   * Sub upsert
   */
  export type SubUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub
     */
    select?: SubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sub
     */
    omit?: SubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubInclude<ExtArgs> | null
    /**
     * The filter to search for the Sub to update in case it exists.
     */
    where: SubWhereUniqueInput
    /**
     * In case the Sub found by the `where` argument doesn't exist, create a new Sub with this data.
     */
    create: XOR<SubCreateInput, SubUncheckedCreateInput>
    /**
     * In case the Sub was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubUpdateInput, SubUncheckedUpdateInput>
  }

  /**
   * Sub delete
   */
  export type SubDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub
     */
    select?: SubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sub
     */
    omit?: SubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubInclude<ExtArgs> | null
    /**
     * Filter which Sub to delete.
     */
    where: SubWhereUniqueInput
  }

  /**
   * Sub deleteMany
   */
  export type SubDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subs to delete
     */
    where?: SubWhereInput
    /**
     * Limit how many Subs to delete.
     */
    limit?: number
  }

  /**
   * Sub.user
   */
  export type Sub$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Sub.referalDetails
   */
  export type Sub$referalDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferalDetails
     */
    select?: ReferalDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferalDetails
     */
    omit?: ReferalDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferalDetailsInclude<ExtArgs> | null
    where?: ReferalDetailsWhereInput
  }

  /**
   * Sub.payments
   */
  export type Sub$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Sub.packageExtensions
   */
  export type Sub$packageExtensionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubPackageExtendedAuditEvent
     */
    select?: SubPackageExtendedAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubPackageExtendedAuditEvent
     */
    omit?: SubPackageExtendedAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubPackageExtendedAuditEventInclude<ExtArgs> | null
    where?: SubPackageExtendedAuditEventWhereInput
    orderBy?: SubPackageExtendedAuditEventOrderByWithRelationInput | SubPackageExtendedAuditEventOrderByWithRelationInput[]
    cursor?: SubPackageExtendedAuditEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubPackageExtendedAuditEventScalarFieldEnum | SubPackageExtendedAuditEventScalarFieldEnum[]
  }

  /**
   * Sub without action
   */
  export type SubDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub
     */
    select?: SubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sub
     */
    omit?: SubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubInclude<ExtArgs> | null
  }


  /**
   * Model ReferalDetails
   */

  export type AggregateReferalDetails = {
    _count: ReferalDetailsCountAggregateOutputType | null
    _avg: ReferalDetailsAvgAggregateOutputType | null
    _sum: ReferalDetailsSumAggregateOutputType | null
    _min: ReferalDetailsMinAggregateOutputType | null
    _max: ReferalDetailsMaxAggregateOutputType | null
  }

  export type ReferalDetailsAvgAggregateOutputType = {
    effectiveAttractorTier: number | null
  }

  export type ReferalDetailsSumAggregateOutputType = {
    effectiveAttractorTier: number | null
  }

  export type ReferalDetailsMinAggregateOutputType = {
    attractedSubExternalId: string | null
    attractorUserId: string | null
    effectiveAttractorTier: number | null
  }

  export type ReferalDetailsMaxAggregateOutputType = {
    attractedSubExternalId: string | null
    attractorUserId: string | null
    effectiveAttractorTier: number | null
  }

  export type ReferalDetailsCountAggregateOutputType = {
    attractedSubExternalId: number
    attractorUserId: number
    effectiveAttractorTier: number
    _all: number
  }


  export type ReferalDetailsAvgAggregateInputType = {
    effectiveAttractorTier?: true
  }

  export type ReferalDetailsSumAggregateInputType = {
    effectiveAttractorTier?: true
  }

  export type ReferalDetailsMinAggregateInputType = {
    attractedSubExternalId?: true
    attractorUserId?: true
    effectiveAttractorTier?: true
  }

  export type ReferalDetailsMaxAggregateInputType = {
    attractedSubExternalId?: true
    attractorUserId?: true
    effectiveAttractorTier?: true
  }

  export type ReferalDetailsCountAggregateInputType = {
    attractedSubExternalId?: true
    attractorUserId?: true
    effectiveAttractorTier?: true
    _all?: true
  }

  export type ReferalDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReferalDetails to aggregate.
     */
    where?: ReferalDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferalDetails to fetch.
     */
    orderBy?: ReferalDetailsOrderByWithRelationInput | ReferalDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferalDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferalDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferalDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReferalDetails
    **/
    _count?: true | ReferalDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReferalDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReferalDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferalDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferalDetailsMaxAggregateInputType
  }

  export type GetReferalDetailsAggregateType<T extends ReferalDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateReferalDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferalDetails[P]>
      : GetScalarType<T[P], AggregateReferalDetails[P]>
  }




  export type ReferalDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferalDetailsWhereInput
    orderBy?: ReferalDetailsOrderByWithAggregationInput | ReferalDetailsOrderByWithAggregationInput[]
    by: ReferalDetailsScalarFieldEnum[] | ReferalDetailsScalarFieldEnum
    having?: ReferalDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferalDetailsCountAggregateInputType | true
    _avg?: ReferalDetailsAvgAggregateInputType
    _sum?: ReferalDetailsSumAggregateInputType
    _min?: ReferalDetailsMinAggregateInputType
    _max?: ReferalDetailsMaxAggregateInputType
  }

  export type ReferalDetailsGroupByOutputType = {
    attractedSubExternalId: string
    attractorUserId: string
    effectiveAttractorTier: number
    _count: ReferalDetailsCountAggregateOutputType | null
    _avg: ReferalDetailsAvgAggregateOutputType | null
    _sum: ReferalDetailsSumAggregateOutputType | null
    _min: ReferalDetailsMinAggregateOutputType | null
    _max: ReferalDetailsMaxAggregateOutputType | null
  }

  type GetReferalDetailsGroupByPayload<T extends ReferalDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferalDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferalDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferalDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], ReferalDetailsGroupByOutputType[P]>
        }
      >
    >


  export type ReferalDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    attractedSubExternalId?: boolean
    attractorUserId?: boolean
    effectiveAttractorTier?: boolean
    attractedSub?: boolean | SubDefaultArgs<ExtArgs>
    attractor?: boolean | UserDefaultArgs<ExtArgs>
    spe_ae?: boolean | ReferalDetails$spe_aeArgs<ExtArgs>
    urt_ae?: boolean | ReferalDetails$urt_aeArgs<ExtArgs>
    _count?: boolean | ReferalDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referalDetails"]>



  export type ReferalDetailsSelectScalar = {
    attractedSubExternalId?: boolean
    attractorUserId?: boolean
    effectiveAttractorTier?: boolean
  }

  export type ReferalDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"attractedSubExternalId" | "attractorUserId" | "effectiveAttractorTier", ExtArgs["result"]["referalDetails"]>
  export type ReferalDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attractedSub?: boolean | SubDefaultArgs<ExtArgs>
    attractor?: boolean | UserDefaultArgs<ExtArgs>
    spe_ae?: boolean | ReferalDetails$spe_aeArgs<ExtArgs>
    urt_ae?: boolean | ReferalDetails$urt_aeArgs<ExtArgs>
    _count?: boolean | ReferalDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ReferalDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReferalDetails"
    objects: {
      attractedSub: Prisma.$SubPayload<ExtArgs>
      attractor: Prisma.$UserPayload<ExtArgs>
      spe_ae: Prisma.$SubPackageExtendedAuditEventPayload<ExtArgs> | null
      urt_ae: Prisma.$UserRewardTriggeredAuditEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      attractedSubExternalId: string
      attractorUserId: string
      effectiveAttractorTier: number
    }, ExtArgs["result"]["referalDetails"]>
    composites: {}
  }

  type ReferalDetailsGetPayload<S extends boolean | null | undefined | ReferalDetailsDefaultArgs> = $Result.GetResult<Prisma.$ReferalDetailsPayload, S>

  type ReferalDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReferalDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReferalDetailsCountAggregateInputType | true
    }

  export interface ReferalDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReferalDetails'], meta: { name: 'ReferalDetails' } }
    /**
     * Find zero or one ReferalDetails that matches the filter.
     * @param {ReferalDetailsFindUniqueArgs} args - Arguments to find a ReferalDetails
     * @example
     * // Get one ReferalDetails
     * const referalDetails = await prisma.referalDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReferalDetailsFindUniqueArgs>(args: SelectSubset<T, ReferalDetailsFindUniqueArgs<ExtArgs>>): Prisma__ReferalDetailsClient<$Result.GetResult<Prisma.$ReferalDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReferalDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReferalDetailsFindUniqueOrThrowArgs} args - Arguments to find a ReferalDetails
     * @example
     * // Get one ReferalDetails
     * const referalDetails = await prisma.referalDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReferalDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, ReferalDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReferalDetailsClient<$Result.GetResult<Prisma.$ReferalDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReferalDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferalDetailsFindFirstArgs} args - Arguments to find a ReferalDetails
     * @example
     * // Get one ReferalDetails
     * const referalDetails = await prisma.referalDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReferalDetailsFindFirstArgs>(args?: SelectSubset<T, ReferalDetailsFindFirstArgs<ExtArgs>>): Prisma__ReferalDetailsClient<$Result.GetResult<Prisma.$ReferalDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReferalDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferalDetailsFindFirstOrThrowArgs} args - Arguments to find a ReferalDetails
     * @example
     * // Get one ReferalDetails
     * const referalDetails = await prisma.referalDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReferalDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, ReferalDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReferalDetailsClient<$Result.GetResult<Prisma.$ReferalDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReferalDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferalDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReferalDetails
     * const referalDetails = await prisma.referalDetails.findMany()
     * 
     * // Get first 10 ReferalDetails
     * const referalDetails = await prisma.referalDetails.findMany({ take: 10 })
     * 
     * // Only select the `attractedSubExternalId`
     * const referalDetailsWithAttractedSubExternalIdOnly = await prisma.referalDetails.findMany({ select: { attractedSubExternalId: true } })
     * 
     */
    findMany<T extends ReferalDetailsFindManyArgs>(args?: SelectSubset<T, ReferalDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferalDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReferalDetails.
     * @param {ReferalDetailsCreateArgs} args - Arguments to create a ReferalDetails.
     * @example
     * // Create one ReferalDetails
     * const ReferalDetails = await prisma.referalDetails.create({
     *   data: {
     *     // ... data to create a ReferalDetails
     *   }
     * })
     * 
     */
    create<T extends ReferalDetailsCreateArgs>(args: SelectSubset<T, ReferalDetailsCreateArgs<ExtArgs>>): Prisma__ReferalDetailsClient<$Result.GetResult<Prisma.$ReferalDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReferalDetails.
     * @param {ReferalDetailsCreateManyArgs} args - Arguments to create many ReferalDetails.
     * @example
     * // Create many ReferalDetails
     * const referalDetails = await prisma.referalDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReferalDetailsCreateManyArgs>(args?: SelectSubset<T, ReferalDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReferalDetails.
     * @param {ReferalDetailsDeleteArgs} args - Arguments to delete one ReferalDetails.
     * @example
     * // Delete one ReferalDetails
     * const ReferalDetails = await prisma.referalDetails.delete({
     *   where: {
     *     // ... filter to delete one ReferalDetails
     *   }
     * })
     * 
     */
    delete<T extends ReferalDetailsDeleteArgs>(args: SelectSubset<T, ReferalDetailsDeleteArgs<ExtArgs>>): Prisma__ReferalDetailsClient<$Result.GetResult<Prisma.$ReferalDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReferalDetails.
     * @param {ReferalDetailsUpdateArgs} args - Arguments to update one ReferalDetails.
     * @example
     * // Update one ReferalDetails
     * const referalDetails = await prisma.referalDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReferalDetailsUpdateArgs>(args: SelectSubset<T, ReferalDetailsUpdateArgs<ExtArgs>>): Prisma__ReferalDetailsClient<$Result.GetResult<Prisma.$ReferalDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReferalDetails.
     * @param {ReferalDetailsDeleteManyArgs} args - Arguments to filter ReferalDetails to delete.
     * @example
     * // Delete a few ReferalDetails
     * const { count } = await prisma.referalDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReferalDetailsDeleteManyArgs>(args?: SelectSubset<T, ReferalDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReferalDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferalDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReferalDetails
     * const referalDetails = await prisma.referalDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReferalDetailsUpdateManyArgs>(args: SelectSubset<T, ReferalDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReferalDetails.
     * @param {ReferalDetailsUpsertArgs} args - Arguments to update or create a ReferalDetails.
     * @example
     * // Update or create a ReferalDetails
     * const referalDetails = await prisma.referalDetails.upsert({
     *   create: {
     *     // ... data to create a ReferalDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReferalDetails we want to update
     *   }
     * })
     */
    upsert<T extends ReferalDetailsUpsertArgs>(args: SelectSubset<T, ReferalDetailsUpsertArgs<ExtArgs>>): Prisma__ReferalDetailsClient<$Result.GetResult<Prisma.$ReferalDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReferalDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferalDetailsCountArgs} args - Arguments to filter ReferalDetails to count.
     * @example
     * // Count the number of ReferalDetails
     * const count = await prisma.referalDetails.count({
     *   where: {
     *     // ... the filter for the ReferalDetails we want to count
     *   }
     * })
    **/
    count<T extends ReferalDetailsCountArgs>(
      args?: Subset<T, ReferalDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferalDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReferalDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferalDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReferalDetailsAggregateArgs>(args: Subset<T, ReferalDetailsAggregateArgs>): Prisma.PrismaPromise<GetReferalDetailsAggregateType<T>>

    /**
     * Group by ReferalDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferalDetailsGroupByArgs} args - Group by arguments.
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
      T extends ReferalDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferalDetailsGroupByArgs['orderBy'] }
        : { orderBy?: ReferalDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReferalDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferalDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReferalDetails model
   */
  readonly fields: ReferalDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReferalDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferalDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attractedSub<T extends SubDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubDefaultArgs<ExtArgs>>): Prisma__SubClient<$Result.GetResult<Prisma.$SubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attractor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    spe_ae<T extends ReferalDetails$spe_aeArgs<ExtArgs> = {}>(args?: Subset<T, ReferalDetails$spe_aeArgs<ExtArgs>>): Prisma__SubPackageExtendedAuditEventClient<$Result.GetResult<Prisma.$SubPackageExtendedAuditEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    urt_ae<T extends ReferalDetails$urt_aeArgs<ExtArgs> = {}>(args?: Subset<T, ReferalDetails$urt_aeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRewardTriggeredAuditEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ReferalDetails model
   */
  interface ReferalDetailsFieldRefs {
    readonly attractedSubExternalId: FieldRef<"ReferalDetails", 'String'>
    readonly attractorUserId: FieldRef<"ReferalDetails", 'String'>
    readonly effectiveAttractorTier: FieldRef<"ReferalDetails", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ReferalDetails findUnique
   */
  export type ReferalDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferalDetails
     */
    select?: ReferalDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferalDetails
     */
    omit?: ReferalDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferalDetailsInclude<ExtArgs> | null
    /**
     * Filter, which ReferalDetails to fetch.
     */
    where: ReferalDetailsWhereUniqueInput
  }

  /**
   * ReferalDetails findUniqueOrThrow
   */
  export type ReferalDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferalDetails
     */
    select?: ReferalDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferalDetails
     */
    omit?: ReferalDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferalDetailsInclude<ExtArgs> | null
    /**
     * Filter, which ReferalDetails to fetch.
     */
    where: ReferalDetailsWhereUniqueInput
  }

  /**
   * ReferalDetails findFirst
   */
  export type ReferalDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferalDetails
     */
    select?: ReferalDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferalDetails
     */
    omit?: ReferalDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferalDetailsInclude<ExtArgs> | null
    /**
     * Filter, which ReferalDetails to fetch.
     */
    where?: ReferalDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferalDetails to fetch.
     */
    orderBy?: ReferalDetailsOrderByWithRelationInput | ReferalDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReferalDetails.
     */
    cursor?: ReferalDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferalDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferalDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReferalDetails.
     */
    distinct?: ReferalDetailsScalarFieldEnum | ReferalDetailsScalarFieldEnum[]
  }

  /**
   * ReferalDetails findFirstOrThrow
   */
  export type ReferalDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferalDetails
     */
    select?: ReferalDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferalDetails
     */
    omit?: ReferalDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferalDetailsInclude<ExtArgs> | null
    /**
     * Filter, which ReferalDetails to fetch.
     */
    where?: ReferalDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferalDetails to fetch.
     */
    orderBy?: ReferalDetailsOrderByWithRelationInput | ReferalDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReferalDetails.
     */
    cursor?: ReferalDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferalDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferalDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReferalDetails.
     */
    distinct?: ReferalDetailsScalarFieldEnum | ReferalDetailsScalarFieldEnum[]
  }

  /**
   * ReferalDetails findMany
   */
  export type ReferalDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferalDetails
     */
    select?: ReferalDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferalDetails
     */
    omit?: ReferalDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferalDetailsInclude<ExtArgs> | null
    /**
     * Filter, which ReferalDetails to fetch.
     */
    where?: ReferalDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferalDetails to fetch.
     */
    orderBy?: ReferalDetailsOrderByWithRelationInput | ReferalDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReferalDetails.
     */
    cursor?: ReferalDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferalDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferalDetails.
     */
    skip?: number
    distinct?: ReferalDetailsScalarFieldEnum | ReferalDetailsScalarFieldEnum[]
  }

  /**
   * ReferalDetails create
   */
  export type ReferalDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferalDetails
     */
    select?: ReferalDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferalDetails
     */
    omit?: ReferalDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferalDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a ReferalDetails.
     */
    data: XOR<ReferalDetailsCreateInput, ReferalDetailsUncheckedCreateInput>
  }

  /**
   * ReferalDetails createMany
   */
  export type ReferalDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReferalDetails.
     */
    data: ReferalDetailsCreateManyInput | ReferalDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReferalDetails update
   */
  export type ReferalDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferalDetails
     */
    select?: ReferalDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferalDetails
     */
    omit?: ReferalDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferalDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a ReferalDetails.
     */
    data: XOR<ReferalDetailsUpdateInput, ReferalDetailsUncheckedUpdateInput>
    /**
     * Choose, which ReferalDetails to update.
     */
    where: ReferalDetailsWhereUniqueInput
  }

  /**
   * ReferalDetails updateMany
   */
  export type ReferalDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReferalDetails.
     */
    data: XOR<ReferalDetailsUpdateManyMutationInput, ReferalDetailsUncheckedUpdateManyInput>
    /**
     * Filter which ReferalDetails to update
     */
    where?: ReferalDetailsWhereInput
    /**
     * Limit how many ReferalDetails to update.
     */
    limit?: number
  }

  /**
   * ReferalDetails upsert
   */
  export type ReferalDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferalDetails
     */
    select?: ReferalDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferalDetails
     */
    omit?: ReferalDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferalDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the ReferalDetails to update in case it exists.
     */
    where: ReferalDetailsWhereUniqueInput
    /**
     * In case the ReferalDetails found by the `where` argument doesn't exist, create a new ReferalDetails with this data.
     */
    create: XOR<ReferalDetailsCreateInput, ReferalDetailsUncheckedCreateInput>
    /**
     * In case the ReferalDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferalDetailsUpdateInput, ReferalDetailsUncheckedUpdateInput>
  }

  /**
   * ReferalDetails delete
   */
  export type ReferalDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferalDetails
     */
    select?: ReferalDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferalDetails
     */
    omit?: ReferalDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferalDetailsInclude<ExtArgs> | null
    /**
     * Filter which ReferalDetails to delete.
     */
    where: ReferalDetailsWhereUniqueInput
  }

  /**
   * ReferalDetails deleteMany
   */
  export type ReferalDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReferalDetails to delete
     */
    where?: ReferalDetailsWhereInput
    /**
     * Limit how many ReferalDetails to delete.
     */
    limit?: number
  }

  /**
   * ReferalDetails.spe_ae
   */
  export type ReferalDetails$spe_aeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubPackageExtendedAuditEvent
     */
    select?: SubPackageExtendedAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubPackageExtendedAuditEvent
     */
    omit?: SubPackageExtendedAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubPackageExtendedAuditEventInclude<ExtArgs> | null
    where?: SubPackageExtendedAuditEventWhereInput
  }

  /**
   * ReferalDetails.urt_ae
   */
  export type ReferalDetails$urt_aeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRewardTriggeredAuditEvent
     */
    select?: UserRewardTriggeredAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRewardTriggeredAuditEvent
     */
    omit?: UserRewardTriggeredAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRewardTriggeredAuditEventInclude<ExtArgs> | null
    where?: UserRewardTriggeredAuditEventWhereInput
    orderBy?: UserRewardTriggeredAuditEventOrderByWithRelationInput | UserRewardTriggeredAuditEventOrderByWithRelationInput[]
    cursor?: UserRewardTriggeredAuditEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRewardTriggeredAuditEventScalarFieldEnum | UserRewardTriggeredAuditEventScalarFieldEnum[]
  }

  /**
   * ReferalDetails without action
   */
  export type ReferalDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferalDetails
     */
    select?: ReferalDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferalDetails
     */
    omit?: ReferalDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferalDetailsInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    currency: $Enums.Currency | null
    amount: number | null
    date: Date | null
    subExternalId: string | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    currency: $Enums.Currency | null
    amount: number | null
    date: Date | null
    subExternalId: string | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    currency: number
    amount: number
    date: number
    subExternalId: number
    createdAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    currency?: true
    amount?: true
    date?: true
    subExternalId?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    currency?: true
    amount?: true
    date?: true
    subExternalId?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    currency?: true
    amount?: true
    date?: true
    subExternalId?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    currency: $Enums.Currency
    amount: number
    date: Date
    subExternalId: string
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    currency?: boolean
    amount?: boolean
    date?: boolean
    subExternalId?: boolean
    createdAt?: boolean
    sub?: boolean | SubDefaultArgs<ExtArgs>
    spe_ae?: boolean | Payment$spe_aeArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>



  export type PaymentSelectScalar = {
    id?: boolean
    currency?: boolean
    amount?: boolean
    date?: boolean
    subExternalId?: boolean
    createdAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "currency" | "amount" | "date" | "subExternalId" | "createdAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sub?: boolean | SubDefaultArgs<ExtArgs>
    spe_ae?: boolean | Payment$spe_aeArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      sub: Prisma.$SubPayload<ExtArgs>
      spe_ae: Prisma.$SubPackageExtendedAuditEventPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      currency: $Enums.Currency
      amount: number
      date: Date
      subExternalId: string
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sub<T extends SubDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubDefaultArgs<ExtArgs>>): Prisma__SubClient<$Result.GetResult<Prisma.$SubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    spe_ae<T extends Payment$spe_aeArgs<ExtArgs> = {}>(args?: Subset<T, Payment$spe_aeArgs<ExtArgs>>): Prisma__SubPackageExtendedAuditEventClient<$Result.GetResult<Prisma.$SubPackageExtendedAuditEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly currency: FieldRef<"Payment", 'Currency'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly date: FieldRef<"Payment", 'DateTime'>
    readonly subExternalId: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.spe_ae
   */
  export type Payment$spe_aeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubPackageExtendedAuditEvent
     */
    select?: SubPackageExtendedAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubPackageExtendedAuditEvent
     */
    omit?: SubPackageExtendedAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubPackageExtendedAuditEventInclude<ExtArgs> | null
    where?: SubPackageExtendedAuditEventWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model SubPackageExtendedAuditEvent
   */

  export type AggregateSubPackageExtendedAuditEvent = {
    _count: SubPackageExtendedAuditEventCountAggregateOutputType | null
    _min: SubPackageExtendedAuditEventMinAggregateOutputType | null
    _max: SubPackageExtendedAuditEventMaxAggregateOutputType | null
  }

  export type SubPackageExtendedAuditEventMinAggregateOutputType = {
    id: string | null
    prevEndDate: Date | null
    newEndDate: Date | null
    attractedSubExternalId: string | null
    paymentId: string | null
    subExternalId: string | null
    reason: $Enums.PackageExtensionReason | null
    createdAt: Date | null
    createdByUserId: string | null
  }

  export type SubPackageExtendedAuditEventMaxAggregateOutputType = {
    id: string | null
    prevEndDate: Date | null
    newEndDate: Date | null
    attractedSubExternalId: string | null
    paymentId: string | null
    subExternalId: string | null
    reason: $Enums.PackageExtensionReason | null
    createdAt: Date | null
    createdByUserId: string | null
  }

  export type SubPackageExtendedAuditEventCountAggregateOutputType = {
    id: number
    prevEndDate: number
    newEndDate: number
    attractedSubExternalId: number
    paymentId: number
    subExternalId: number
    reason: number
    createdAt: number
    createdByUserId: number
    _all: number
  }


  export type SubPackageExtendedAuditEventMinAggregateInputType = {
    id?: true
    prevEndDate?: true
    newEndDate?: true
    attractedSubExternalId?: true
    paymentId?: true
    subExternalId?: true
    reason?: true
    createdAt?: true
    createdByUserId?: true
  }

  export type SubPackageExtendedAuditEventMaxAggregateInputType = {
    id?: true
    prevEndDate?: true
    newEndDate?: true
    attractedSubExternalId?: true
    paymentId?: true
    subExternalId?: true
    reason?: true
    createdAt?: true
    createdByUserId?: true
  }

  export type SubPackageExtendedAuditEventCountAggregateInputType = {
    id?: true
    prevEndDate?: true
    newEndDate?: true
    attractedSubExternalId?: true
    paymentId?: true
    subExternalId?: true
    reason?: true
    createdAt?: true
    createdByUserId?: true
    _all?: true
  }

  export type SubPackageExtendedAuditEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubPackageExtendedAuditEvent to aggregate.
     */
    where?: SubPackageExtendedAuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubPackageExtendedAuditEvents to fetch.
     */
    orderBy?: SubPackageExtendedAuditEventOrderByWithRelationInput | SubPackageExtendedAuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubPackageExtendedAuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubPackageExtendedAuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubPackageExtendedAuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubPackageExtendedAuditEvents
    **/
    _count?: true | SubPackageExtendedAuditEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubPackageExtendedAuditEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubPackageExtendedAuditEventMaxAggregateInputType
  }

  export type GetSubPackageExtendedAuditEventAggregateType<T extends SubPackageExtendedAuditEventAggregateArgs> = {
        [P in keyof T & keyof AggregateSubPackageExtendedAuditEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubPackageExtendedAuditEvent[P]>
      : GetScalarType<T[P], AggregateSubPackageExtendedAuditEvent[P]>
  }




  export type SubPackageExtendedAuditEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubPackageExtendedAuditEventWhereInput
    orderBy?: SubPackageExtendedAuditEventOrderByWithAggregationInput | SubPackageExtendedAuditEventOrderByWithAggregationInput[]
    by: SubPackageExtendedAuditEventScalarFieldEnum[] | SubPackageExtendedAuditEventScalarFieldEnum
    having?: SubPackageExtendedAuditEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubPackageExtendedAuditEventCountAggregateInputType | true
    _min?: SubPackageExtendedAuditEventMinAggregateInputType
    _max?: SubPackageExtendedAuditEventMaxAggregateInputType
  }

  export type SubPackageExtendedAuditEventGroupByOutputType = {
    id: string
    prevEndDate: Date
    newEndDate: Date
    attractedSubExternalId: string | null
    paymentId: string
    subExternalId: string
    reason: $Enums.PackageExtensionReason
    createdAt: Date
    createdByUserId: string
    _count: SubPackageExtendedAuditEventCountAggregateOutputType | null
    _min: SubPackageExtendedAuditEventMinAggregateOutputType | null
    _max: SubPackageExtendedAuditEventMaxAggregateOutputType | null
  }

  type GetSubPackageExtendedAuditEventGroupByPayload<T extends SubPackageExtendedAuditEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubPackageExtendedAuditEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubPackageExtendedAuditEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubPackageExtendedAuditEventGroupByOutputType[P]>
            : GetScalarType<T[P], SubPackageExtendedAuditEventGroupByOutputType[P]>
        }
      >
    >


  export type SubPackageExtendedAuditEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prevEndDate?: boolean
    newEndDate?: boolean
    attractedSubExternalId?: boolean
    paymentId?: boolean
    subExternalId?: boolean
    reason?: boolean
    createdAt?: boolean
    createdByUserId?: boolean
    attractedSubReferalDetails?: boolean | SubPackageExtendedAuditEvent$attractedSubReferalDetailsArgs<ExtArgs>
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    sub?: boolean | SubDefaultArgs<ExtArgs>
    urt_ae?: boolean | SubPackageExtendedAuditEvent$urt_aeArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subPackageExtendedAuditEvent"]>



  export type SubPackageExtendedAuditEventSelectScalar = {
    id?: boolean
    prevEndDate?: boolean
    newEndDate?: boolean
    attractedSubExternalId?: boolean
    paymentId?: boolean
    subExternalId?: boolean
    reason?: boolean
    createdAt?: boolean
    createdByUserId?: boolean
  }

  export type SubPackageExtendedAuditEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prevEndDate" | "newEndDate" | "attractedSubExternalId" | "paymentId" | "subExternalId" | "reason" | "createdAt" | "createdByUserId", ExtArgs["result"]["subPackageExtendedAuditEvent"]>
  export type SubPackageExtendedAuditEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attractedSubReferalDetails?: boolean | SubPackageExtendedAuditEvent$attractedSubReferalDetailsArgs<ExtArgs>
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    sub?: boolean | SubDefaultArgs<ExtArgs>
    urt_ae?: boolean | SubPackageExtendedAuditEvent$urt_aeArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubPackageExtendedAuditEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubPackageExtendedAuditEvent"
    objects: {
      attractedSubReferalDetails: Prisma.$ReferalDetailsPayload<ExtArgs> | null
      payment: Prisma.$PaymentPayload<ExtArgs>
      sub: Prisma.$SubPayload<ExtArgs>
      urt_ae: Prisma.$UserRewardTriggeredAuditEventPayload<ExtArgs> | null
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      prevEndDate: Date
      newEndDate: Date
      attractedSubExternalId: string | null
      paymentId: string
      subExternalId: string
      reason: $Enums.PackageExtensionReason
      createdAt: Date
      createdByUserId: string
    }, ExtArgs["result"]["subPackageExtendedAuditEvent"]>
    composites: {}
  }

  type SubPackageExtendedAuditEventGetPayload<S extends boolean | null | undefined | SubPackageExtendedAuditEventDefaultArgs> = $Result.GetResult<Prisma.$SubPackageExtendedAuditEventPayload, S>

  type SubPackageExtendedAuditEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubPackageExtendedAuditEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubPackageExtendedAuditEventCountAggregateInputType | true
    }

  export interface SubPackageExtendedAuditEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubPackageExtendedAuditEvent'], meta: { name: 'SubPackageExtendedAuditEvent' } }
    /**
     * Find zero or one SubPackageExtendedAuditEvent that matches the filter.
     * @param {SubPackageExtendedAuditEventFindUniqueArgs} args - Arguments to find a SubPackageExtendedAuditEvent
     * @example
     * // Get one SubPackageExtendedAuditEvent
     * const subPackageExtendedAuditEvent = await prisma.subPackageExtendedAuditEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubPackageExtendedAuditEventFindUniqueArgs>(args: SelectSubset<T, SubPackageExtendedAuditEventFindUniqueArgs<ExtArgs>>): Prisma__SubPackageExtendedAuditEventClient<$Result.GetResult<Prisma.$SubPackageExtendedAuditEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubPackageExtendedAuditEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubPackageExtendedAuditEventFindUniqueOrThrowArgs} args - Arguments to find a SubPackageExtendedAuditEvent
     * @example
     * // Get one SubPackageExtendedAuditEvent
     * const subPackageExtendedAuditEvent = await prisma.subPackageExtendedAuditEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubPackageExtendedAuditEventFindUniqueOrThrowArgs>(args: SelectSubset<T, SubPackageExtendedAuditEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubPackageExtendedAuditEventClient<$Result.GetResult<Prisma.$SubPackageExtendedAuditEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubPackageExtendedAuditEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubPackageExtendedAuditEventFindFirstArgs} args - Arguments to find a SubPackageExtendedAuditEvent
     * @example
     * // Get one SubPackageExtendedAuditEvent
     * const subPackageExtendedAuditEvent = await prisma.subPackageExtendedAuditEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubPackageExtendedAuditEventFindFirstArgs>(args?: SelectSubset<T, SubPackageExtendedAuditEventFindFirstArgs<ExtArgs>>): Prisma__SubPackageExtendedAuditEventClient<$Result.GetResult<Prisma.$SubPackageExtendedAuditEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubPackageExtendedAuditEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubPackageExtendedAuditEventFindFirstOrThrowArgs} args - Arguments to find a SubPackageExtendedAuditEvent
     * @example
     * // Get one SubPackageExtendedAuditEvent
     * const subPackageExtendedAuditEvent = await prisma.subPackageExtendedAuditEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubPackageExtendedAuditEventFindFirstOrThrowArgs>(args?: SelectSubset<T, SubPackageExtendedAuditEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubPackageExtendedAuditEventClient<$Result.GetResult<Prisma.$SubPackageExtendedAuditEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubPackageExtendedAuditEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubPackageExtendedAuditEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubPackageExtendedAuditEvents
     * const subPackageExtendedAuditEvents = await prisma.subPackageExtendedAuditEvent.findMany()
     * 
     * // Get first 10 SubPackageExtendedAuditEvents
     * const subPackageExtendedAuditEvents = await prisma.subPackageExtendedAuditEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subPackageExtendedAuditEventWithIdOnly = await prisma.subPackageExtendedAuditEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubPackageExtendedAuditEventFindManyArgs>(args?: SelectSubset<T, SubPackageExtendedAuditEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubPackageExtendedAuditEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubPackageExtendedAuditEvent.
     * @param {SubPackageExtendedAuditEventCreateArgs} args - Arguments to create a SubPackageExtendedAuditEvent.
     * @example
     * // Create one SubPackageExtendedAuditEvent
     * const SubPackageExtendedAuditEvent = await prisma.subPackageExtendedAuditEvent.create({
     *   data: {
     *     // ... data to create a SubPackageExtendedAuditEvent
     *   }
     * })
     * 
     */
    create<T extends SubPackageExtendedAuditEventCreateArgs>(args: SelectSubset<T, SubPackageExtendedAuditEventCreateArgs<ExtArgs>>): Prisma__SubPackageExtendedAuditEventClient<$Result.GetResult<Prisma.$SubPackageExtendedAuditEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubPackageExtendedAuditEvents.
     * @param {SubPackageExtendedAuditEventCreateManyArgs} args - Arguments to create many SubPackageExtendedAuditEvents.
     * @example
     * // Create many SubPackageExtendedAuditEvents
     * const subPackageExtendedAuditEvent = await prisma.subPackageExtendedAuditEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubPackageExtendedAuditEventCreateManyArgs>(args?: SelectSubset<T, SubPackageExtendedAuditEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SubPackageExtendedAuditEvent.
     * @param {SubPackageExtendedAuditEventDeleteArgs} args - Arguments to delete one SubPackageExtendedAuditEvent.
     * @example
     * // Delete one SubPackageExtendedAuditEvent
     * const SubPackageExtendedAuditEvent = await prisma.subPackageExtendedAuditEvent.delete({
     *   where: {
     *     // ... filter to delete one SubPackageExtendedAuditEvent
     *   }
     * })
     * 
     */
    delete<T extends SubPackageExtendedAuditEventDeleteArgs>(args: SelectSubset<T, SubPackageExtendedAuditEventDeleteArgs<ExtArgs>>): Prisma__SubPackageExtendedAuditEventClient<$Result.GetResult<Prisma.$SubPackageExtendedAuditEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubPackageExtendedAuditEvent.
     * @param {SubPackageExtendedAuditEventUpdateArgs} args - Arguments to update one SubPackageExtendedAuditEvent.
     * @example
     * // Update one SubPackageExtendedAuditEvent
     * const subPackageExtendedAuditEvent = await prisma.subPackageExtendedAuditEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubPackageExtendedAuditEventUpdateArgs>(args: SelectSubset<T, SubPackageExtendedAuditEventUpdateArgs<ExtArgs>>): Prisma__SubPackageExtendedAuditEventClient<$Result.GetResult<Prisma.$SubPackageExtendedAuditEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubPackageExtendedAuditEvents.
     * @param {SubPackageExtendedAuditEventDeleteManyArgs} args - Arguments to filter SubPackageExtendedAuditEvents to delete.
     * @example
     * // Delete a few SubPackageExtendedAuditEvents
     * const { count } = await prisma.subPackageExtendedAuditEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubPackageExtendedAuditEventDeleteManyArgs>(args?: SelectSubset<T, SubPackageExtendedAuditEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubPackageExtendedAuditEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubPackageExtendedAuditEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubPackageExtendedAuditEvents
     * const subPackageExtendedAuditEvent = await prisma.subPackageExtendedAuditEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubPackageExtendedAuditEventUpdateManyArgs>(args: SelectSubset<T, SubPackageExtendedAuditEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubPackageExtendedAuditEvent.
     * @param {SubPackageExtendedAuditEventUpsertArgs} args - Arguments to update or create a SubPackageExtendedAuditEvent.
     * @example
     * // Update or create a SubPackageExtendedAuditEvent
     * const subPackageExtendedAuditEvent = await prisma.subPackageExtendedAuditEvent.upsert({
     *   create: {
     *     // ... data to create a SubPackageExtendedAuditEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubPackageExtendedAuditEvent we want to update
     *   }
     * })
     */
    upsert<T extends SubPackageExtendedAuditEventUpsertArgs>(args: SelectSubset<T, SubPackageExtendedAuditEventUpsertArgs<ExtArgs>>): Prisma__SubPackageExtendedAuditEventClient<$Result.GetResult<Prisma.$SubPackageExtendedAuditEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubPackageExtendedAuditEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubPackageExtendedAuditEventCountArgs} args - Arguments to filter SubPackageExtendedAuditEvents to count.
     * @example
     * // Count the number of SubPackageExtendedAuditEvents
     * const count = await prisma.subPackageExtendedAuditEvent.count({
     *   where: {
     *     // ... the filter for the SubPackageExtendedAuditEvents we want to count
     *   }
     * })
    **/
    count<T extends SubPackageExtendedAuditEventCountArgs>(
      args?: Subset<T, SubPackageExtendedAuditEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubPackageExtendedAuditEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubPackageExtendedAuditEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubPackageExtendedAuditEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubPackageExtendedAuditEventAggregateArgs>(args: Subset<T, SubPackageExtendedAuditEventAggregateArgs>): Prisma.PrismaPromise<GetSubPackageExtendedAuditEventAggregateType<T>>

    /**
     * Group by SubPackageExtendedAuditEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubPackageExtendedAuditEventGroupByArgs} args - Group by arguments.
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
      T extends SubPackageExtendedAuditEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubPackageExtendedAuditEventGroupByArgs['orderBy'] }
        : { orderBy?: SubPackageExtendedAuditEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubPackageExtendedAuditEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubPackageExtendedAuditEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubPackageExtendedAuditEvent model
   */
  readonly fields: SubPackageExtendedAuditEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubPackageExtendedAuditEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubPackageExtendedAuditEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attractedSubReferalDetails<T extends SubPackageExtendedAuditEvent$attractedSubReferalDetailsArgs<ExtArgs> = {}>(args?: Subset<T, SubPackageExtendedAuditEvent$attractedSubReferalDetailsArgs<ExtArgs>>): Prisma__ReferalDetailsClient<$Result.GetResult<Prisma.$ReferalDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payment<T extends PaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentDefaultArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sub<T extends SubDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubDefaultArgs<ExtArgs>>): Prisma__SubClient<$Result.GetResult<Prisma.$SubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    urt_ae<T extends SubPackageExtendedAuditEvent$urt_aeArgs<ExtArgs> = {}>(args?: Subset<T, SubPackageExtendedAuditEvent$urt_aeArgs<ExtArgs>>): Prisma__UserRewardTriggeredAuditEventClient<$Result.GetResult<Prisma.$UserRewardTriggeredAuditEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SubPackageExtendedAuditEvent model
   */
  interface SubPackageExtendedAuditEventFieldRefs {
    readonly id: FieldRef<"SubPackageExtendedAuditEvent", 'String'>
    readonly prevEndDate: FieldRef<"SubPackageExtendedAuditEvent", 'DateTime'>
    readonly newEndDate: FieldRef<"SubPackageExtendedAuditEvent", 'DateTime'>
    readonly attractedSubExternalId: FieldRef<"SubPackageExtendedAuditEvent", 'String'>
    readonly paymentId: FieldRef<"SubPackageExtendedAuditEvent", 'String'>
    readonly subExternalId: FieldRef<"SubPackageExtendedAuditEvent", 'String'>
    readonly reason: FieldRef<"SubPackageExtendedAuditEvent", 'PackageExtensionReason'>
    readonly createdAt: FieldRef<"SubPackageExtendedAuditEvent", 'DateTime'>
    readonly createdByUserId: FieldRef<"SubPackageExtendedAuditEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SubPackageExtendedAuditEvent findUnique
   */
  export type SubPackageExtendedAuditEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubPackageExtendedAuditEvent
     */
    select?: SubPackageExtendedAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubPackageExtendedAuditEvent
     */
    omit?: SubPackageExtendedAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubPackageExtendedAuditEventInclude<ExtArgs> | null
    /**
     * Filter, which SubPackageExtendedAuditEvent to fetch.
     */
    where: SubPackageExtendedAuditEventWhereUniqueInput
  }

  /**
   * SubPackageExtendedAuditEvent findUniqueOrThrow
   */
  export type SubPackageExtendedAuditEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubPackageExtendedAuditEvent
     */
    select?: SubPackageExtendedAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubPackageExtendedAuditEvent
     */
    omit?: SubPackageExtendedAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubPackageExtendedAuditEventInclude<ExtArgs> | null
    /**
     * Filter, which SubPackageExtendedAuditEvent to fetch.
     */
    where: SubPackageExtendedAuditEventWhereUniqueInput
  }

  /**
   * SubPackageExtendedAuditEvent findFirst
   */
  export type SubPackageExtendedAuditEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubPackageExtendedAuditEvent
     */
    select?: SubPackageExtendedAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubPackageExtendedAuditEvent
     */
    omit?: SubPackageExtendedAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubPackageExtendedAuditEventInclude<ExtArgs> | null
    /**
     * Filter, which SubPackageExtendedAuditEvent to fetch.
     */
    where?: SubPackageExtendedAuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubPackageExtendedAuditEvents to fetch.
     */
    orderBy?: SubPackageExtendedAuditEventOrderByWithRelationInput | SubPackageExtendedAuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubPackageExtendedAuditEvents.
     */
    cursor?: SubPackageExtendedAuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubPackageExtendedAuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubPackageExtendedAuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubPackageExtendedAuditEvents.
     */
    distinct?: SubPackageExtendedAuditEventScalarFieldEnum | SubPackageExtendedAuditEventScalarFieldEnum[]
  }

  /**
   * SubPackageExtendedAuditEvent findFirstOrThrow
   */
  export type SubPackageExtendedAuditEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubPackageExtendedAuditEvent
     */
    select?: SubPackageExtendedAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubPackageExtendedAuditEvent
     */
    omit?: SubPackageExtendedAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubPackageExtendedAuditEventInclude<ExtArgs> | null
    /**
     * Filter, which SubPackageExtendedAuditEvent to fetch.
     */
    where?: SubPackageExtendedAuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubPackageExtendedAuditEvents to fetch.
     */
    orderBy?: SubPackageExtendedAuditEventOrderByWithRelationInput | SubPackageExtendedAuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubPackageExtendedAuditEvents.
     */
    cursor?: SubPackageExtendedAuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubPackageExtendedAuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubPackageExtendedAuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubPackageExtendedAuditEvents.
     */
    distinct?: SubPackageExtendedAuditEventScalarFieldEnum | SubPackageExtendedAuditEventScalarFieldEnum[]
  }

  /**
   * SubPackageExtendedAuditEvent findMany
   */
  export type SubPackageExtendedAuditEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubPackageExtendedAuditEvent
     */
    select?: SubPackageExtendedAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubPackageExtendedAuditEvent
     */
    omit?: SubPackageExtendedAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubPackageExtendedAuditEventInclude<ExtArgs> | null
    /**
     * Filter, which SubPackageExtendedAuditEvents to fetch.
     */
    where?: SubPackageExtendedAuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubPackageExtendedAuditEvents to fetch.
     */
    orderBy?: SubPackageExtendedAuditEventOrderByWithRelationInput | SubPackageExtendedAuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubPackageExtendedAuditEvents.
     */
    cursor?: SubPackageExtendedAuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubPackageExtendedAuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubPackageExtendedAuditEvents.
     */
    skip?: number
    distinct?: SubPackageExtendedAuditEventScalarFieldEnum | SubPackageExtendedAuditEventScalarFieldEnum[]
  }

  /**
   * SubPackageExtendedAuditEvent create
   */
  export type SubPackageExtendedAuditEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubPackageExtendedAuditEvent
     */
    select?: SubPackageExtendedAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubPackageExtendedAuditEvent
     */
    omit?: SubPackageExtendedAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubPackageExtendedAuditEventInclude<ExtArgs> | null
    /**
     * The data needed to create a SubPackageExtendedAuditEvent.
     */
    data: XOR<SubPackageExtendedAuditEventCreateInput, SubPackageExtendedAuditEventUncheckedCreateInput>
  }

  /**
   * SubPackageExtendedAuditEvent createMany
   */
  export type SubPackageExtendedAuditEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubPackageExtendedAuditEvents.
     */
    data: SubPackageExtendedAuditEventCreateManyInput | SubPackageExtendedAuditEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubPackageExtendedAuditEvent update
   */
  export type SubPackageExtendedAuditEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubPackageExtendedAuditEvent
     */
    select?: SubPackageExtendedAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubPackageExtendedAuditEvent
     */
    omit?: SubPackageExtendedAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubPackageExtendedAuditEventInclude<ExtArgs> | null
    /**
     * The data needed to update a SubPackageExtendedAuditEvent.
     */
    data: XOR<SubPackageExtendedAuditEventUpdateInput, SubPackageExtendedAuditEventUncheckedUpdateInput>
    /**
     * Choose, which SubPackageExtendedAuditEvent to update.
     */
    where: SubPackageExtendedAuditEventWhereUniqueInput
  }

  /**
   * SubPackageExtendedAuditEvent updateMany
   */
  export type SubPackageExtendedAuditEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubPackageExtendedAuditEvents.
     */
    data: XOR<SubPackageExtendedAuditEventUpdateManyMutationInput, SubPackageExtendedAuditEventUncheckedUpdateManyInput>
    /**
     * Filter which SubPackageExtendedAuditEvents to update
     */
    where?: SubPackageExtendedAuditEventWhereInput
    /**
     * Limit how many SubPackageExtendedAuditEvents to update.
     */
    limit?: number
  }

  /**
   * SubPackageExtendedAuditEvent upsert
   */
  export type SubPackageExtendedAuditEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubPackageExtendedAuditEvent
     */
    select?: SubPackageExtendedAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubPackageExtendedAuditEvent
     */
    omit?: SubPackageExtendedAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubPackageExtendedAuditEventInclude<ExtArgs> | null
    /**
     * The filter to search for the SubPackageExtendedAuditEvent to update in case it exists.
     */
    where: SubPackageExtendedAuditEventWhereUniqueInput
    /**
     * In case the SubPackageExtendedAuditEvent found by the `where` argument doesn't exist, create a new SubPackageExtendedAuditEvent with this data.
     */
    create: XOR<SubPackageExtendedAuditEventCreateInput, SubPackageExtendedAuditEventUncheckedCreateInput>
    /**
     * In case the SubPackageExtendedAuditEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubPackageExtendedAuditEventUpdateInput, SubPackageExtendedAuditEventUncheckedUpdateInput>
  }

  /**
   * SubPackageExtendedAuditEvent delete
   */
  export type SubPackageExtendedAuditEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubPackageExtendedAuditEvent
     */
    select?: SubPackageExtendedAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubPackageExtendedAuditEvent
     */
    omit?: SubPackageExtendedAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubPackageExtendedAuditEventInclude<ExtArgs> | null
    /**
     * Filter which SubPackageExtendedAuditEvent to delete.
     */
    where: SubPackageExtendedAuditEventWhereUniqueInput
  }

  /**
   * SubPackageExtendedAuditEvent deleteMany
   */
  export type SubPackageExtendedAuditEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubPackageExtendedAuditEvents to delete
     */
    where?: SubPackageExtendedAuditEventWhereInput
    /**
     * Limit how many SubPackageExtendedAuditEvents to delete.
     */
    limit?: number
  }

  /**
   * SubPackageExtendedAuditEvent.attractedSubReferalDetails
   */
  export type SubPackageExtendedAuditEvent$attractedSubReferalDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferalDetails
     */
    select?: ReferalDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferalDetails
     */
    omit?: ReferalDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferalDetailsInclude<ExtArgs> | null
    where?: ReferalDetailsWhereInput
  }

  /**
   * SubPackageExtendedAuditEvent.urt_ae
   */
  export type SubPackageExtendedAuditEvent$urt_aeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRewardTriggeredAuditEvent
     */
    select?: UserRewardTriggeredAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRewardTriggeredAuditEvent
     */
    omit?: UserRewardTriggeredAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRewardTriggeredAuditEventInclude<ExtArgs> | null
    where?: UserRewardTriggeredAuditEventWhereInput
  }

  /**
   * SubPackageExtendedAuditEvent without action
   */
  export type SubPackageExtendedAuditEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubPackageExtendedAuditEvent
     */
    select?: SubPackageExtendedAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubPackageExtendedAuditEvent
     */
    omit?: SubPackageExtendedAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubPackageExtendedAuditEventInclude<ExtArgs> | null
  }


  /**
   * Model UserRewardTriggeredAuditEvent
   */

  export type AggregateUserRewardTriggeredAuditEvent = {
    _count: UserRewardTriggeredAuditEventCountAggregateOutputType | null
    _avg: UserRewardTriggeredAuditEventAvgAggregateOutputType | null
    _sum: UserRewardTriggeredAuditEventSumAggregateOutputType | null
    _min: UserRewardTriggeredAuditEventMinAggregateOutputType | null
    _max: UserRewardTriggeredAuditEventMaxAggregateOutputType | null
  }

  export type UserRewardTriggeredAuditEventAvgAggregateOutputType = {
    customMonetaryRewardAmount: number | null
    rewardAmount: number | null
    prevTotalPayableReward: number | null
    newTotalPayableReward: number | null
  }

  export type UserRewardTriggeredAuditEventSumAggregateOutputType = {
    customMonetaryRewardAmount: number | null
    rewardAmount: number | null
    prevTotalPayableReward: number | null
    newTotalPayableReward: number | null
  }

  export type UserRewardTriggeredAuditEventMinAggregateOutputType = {
    id: string | null
    customMonetaryRewardAmount: number | null
    rewardType: $Enums.MonetaryRewardType | null
    rewardAmount: number | null
    prevTotalPayableReward: number | null
    newTotalPayableReward: number | null
    highestTierReached: boolean | null
    referalDetails_attractedSubExternalId: string | null
    spe_ae_id: string | null
    createdAt: Date | null
  }

  export type UserRewardTriggeredAuditEventMaxAggregateOutputType = {
    id: string | null
    customMonetaryRewardAmount: number | null
    rewardType: $Enums.MonetaryRewardType | null
    rewardAmount: number | null
    prevTotalPayableReward: number | null
    newTotalPayableReward: number | null
    highestTierReached: boolean | null
    referalDetails_attractedSubExternalId: string | null
    spe_ae_id: string | null
    createdAt: Date | null
  }

  export type UserRewardTriggeredAuditEventCountAggregateOutputType = {
    id: number
    customMonetaryRewardAmount: number
    rewardType: number
    rewardAmount: number
    prevTotalPayableReward: number
    newTotalPayableReward: number
    highestTierReached: number
    referalDetails_attractedSubExternalId: number
    spe_ae_id: number
    createdAt: number
    _all: number
  }


  export type UserRewardTriggeredAuditEventAvgAggregateInputType = {
    customMonetaryRewardAmount?: true
    rewardAmount?: true
    prevTotalPayableReward?: true
    newTotalPayableReward?: true
  }

  export type UserRewardTriggeredAuditEventSumAggregateInputType = {
    customMonetaryRewardAmount?: true
    rewardAmount?: true
    prevTotalPayableReward?: true
    newTotalPayableReward?: true
  }

  export type UserRewardTriggeredAuditEventMinAggregateInputType = {
    id?: true
    customMonetaryRewardAmount?: true
    rewardType?: true
    rewardAmount?: true
    prevTotalPayableReward?: true
    newTotalPayableReward?: true
    highestTierReached?: true
    referalDetails_attractedSubExternalId?: true
    spe_ae_id?: true
    createdAt?: true
  }

  export type UserRewardTriggeredAuditEventMaxAggregateInputType = {
    id?: true
    customMonetaryRewardAmount?: true
    rewardType?: true
    rewardAmount?: true
    prevTotalPayableReward?: true
    newTotalPayableReward?: true
    highestTierReached?: true
    referalDetails_attractedSubExternalId?: true
    spe_ae_id?: true
    createdAt?: true
  }

  export type UserRewardTriggeredAuditEventCountAggregateInputType = {
    id?: true
    customMonetaryRewardAmount?: true
    rewardType?: true
    rewardAmount?: true
    prevTotalPayableReward?: true
    newTotalPayableReward?: true
    highestTierReached?: true
    referalDetails_attractedSubExternalId?: true
    spe_ae_id?: true
    createdAt?: true
    _all?: true
  }

  export type UserRewardTriggeredAuditEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRewardTriggeredAuditEvent to aggregate.
     */
    where?: UserRewardTriggeredAuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRewardTriggeredAuditEvents to fetch.
     */
    orderBy?: UserRewardTriggeredAuditEventOrderByWithRelationInput | UserRewardTriggeredAuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRewardTriggeredAuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRewardTriggeredAuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRewardTriggeredAuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRewardTriggeredAuditEvents
    **/
    _count?: true | UserRewardTriggeredAuditEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserRewardTriggeredAuditEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserRewardTriggeredAuditEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRewardTriggeredAuditEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRewardTriggeredAuditEventMaxAggregateInputType
  }

  export type GetUserRewardTriggeredAuditEventAggregateType<T extends UserRewardTriggeredAuditEventAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRewardTriggeredAuditEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRewardTriggeredAuditEvent[P]>
      : GetScalarType<T[P], AggregateUserRewardTriggeredAuditEvent[P]>
  }




  export type UserRewardTriggeredAuditEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRewardTriggeredAuditEventWhereInput
    orderBy?: UserRewardTriggeredAuditEventOrderByWithAggregationInput | UserRewardTriggeredAuditEventOrderByWithAggregationInput[]
    by: UserRewardTriggeredAuditEventScalarFieldEnum[] | UserRewardTriggeredAuditEventScalarFieldEnum
    having?: UserRewardTriggeredAuditEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRewardTriggeredAuditEventCountAggregateInputType | true
    _avg?: UserRewardTriggeredAuditEventAvgAggregateInputType
    _sum?: UserRewardTriggeredAuditEventSumAggregateInputType
    _min?: UserRewardTriggeredAuditEventMinAggregateInputType
    _max?: UserRewardTriggeredAuditEventMaxAggregateInputType
  }

  export type UserRewardTriggeredAuditEventGroupByOutputType = {
    id: string
    customMonetaryRewardAmount: number | null
    rewardType: $Enums.MonetaryRewardType
    rewardAmount: number
    prevTotalPayableReward: number
    newTotalPayableReward: number
    highestTierReached: boolean
    referalDetails_attractedSubExternalId: string
    spe_ae_id: string | null
    createdAt: Date
    _count: UserRewardTriggeredAuditEventCountAggregateOutputType | null
    _avg: UserRewardTriggeredAuditEventAvgAggregateOutputType | null
    _sum: UserRewardTriggeredAuditEventSumAggregateOutputType | null
    _min: UserRewardTriggeredAuditEventMinAggregateOutputType | null
    _max: UserRewardTriggeredAuditEventMaxAggregateOutputType | null
  }

  type GetUserRewardTriggeredAuditEventGroupByPayload<T extends UserRewardTriggeredAuditEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRewardTriggeredAuditEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRewardTriggeredAuditEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRewardTriggeredAuditEventGroupByOutputType[P]>
            : GetScalarType<T[P], UserRewardTriggeredAuditEventGroupByOutputType[P]>
        }
      >
    >


  export type UserRewardTriggeredAuditEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customMonetaryRewardAmount?: boolean
    rewardType?: boolean
    rewardAmount?: boolean
    prevTotalPayableReward?: boolean
    newTotalPayableReward?: boolean
    highestTierReached?: boolean
    referalDetails_attractedSubExternalId?: boolean
    spe_ae_id?: boolean
    createdAt?: boolean
    referalDetails?: boolean | ReferalDetailsDefaultArgs<ExtArgs>
    spe_ae?: boolean | UserRewardTriggeredAuditEvent$spe_aeArgs<ExtArgs>
  }, ExtArgs["result"]["userRewardTriggeredAuditEvent"]>



  export type UserRewardTriggeredAuditEventSelectScalar = {
    id?: boolean
    customMonetaryRewardAmount?: boolean
    rewardType?: boolean
    rewardAmount?: boolean
    prevTotalPayableReward?: boolean
    newTotalPayableReward?: boolean
    highestTierReached?: boolean
    referalDetails_attractedSubExternalId?: boolean
    spe_ae_id?: boolean
    createdAt?: boolean
  }

  export type UserRewardTriggeredAuditEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customMonetaryRewardAmount" | "rewardType" | "rewardAmount" | "prevTotalPayableReward" | "newTotalPayableReward" | "highestTierReached" | "referalDetails_attractedSubExternalId" | "spe_ae_id" | "createdAt", ExtArgs["result"]["userRewardTriggeredAuditEvent"]>
  export type UserRewardTriggeredAuditEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referalDetails?: boolean | ReferalDetailsDefaultArgs<ExtArgs>
    spe_ae?: boolean | UserRewardTriggeredAuditEvent$spe_aeArgs<ExtArgs>
  }

  export type $UserRewardTriggeredAuditEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRewardTriggeredAuditEvent"
    objects: {
      referalDetails: Prisma.$ReferalDetailsPayload<ExtArgs>
      spe_ae: Prisma.$SubPackageExtendedAuditEventPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customMonetaryRewardAmount: number | null
      rewardType: $Enums.MonetaryRewardType
      rewardAmount: number
      prevTotalPayableReward: number
      newTotalPayableReward: number
      highestTierReached: boolean
      referalDetails_attractedSubExternalId: string
      spe_ae_id: string | null
      createdAt: Date
    }, ExtArgs["result"]["userRewardTriggeredAuditEvent"]>
    composites: {}
  }

  type UserRewardTriggeredAuditEventGetPayload<S extends boolean | null | undefined | UserRewardTriggeredAuditEventDefaultArgs> = $Result.GetResult<Prisma.$UserRewardTriggeredAuditEventPayload, S>

  type UserRewardTriggeredAuditEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRewardTriggeredAuditEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRewardTriggeredAuditEventCountAggregateInputType | true
    }

  export interface UserRewardTriggeredAuditEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRewardTriggeredAuditEvent'], meta: { name: 'UserRewardTriggeredAuditEvent' } }
    /**
     * Find zero or one UserRewardTriggeredAuditEvent that matches the filter.
     * @param {UserRewardTriggeredAuditEventFindUniqueArgs} args - Arguments to find a UserRewardTriggeredAuditEvent
     * @example
     * // Get one UserRewardTriggeredAuditEvent
     * const userRewardTriggeredAuditEvent = await prisma.userRewardTriggeredAuditEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRewardTriggeredAuditEventFindUniqueArgs>(args: SelectSubset<T, UserRewardTriggeredAuditEventFindUniqueArgs<ExtArgs>>): Prisma__UserRewardTriggeredAuditEventClient<$Result.GetResult<Prisma.$UserRewardTriggeredAuditEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRewardTriggeredAuditEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRewardTriggeredAuditEventFindUniqueOrThrowArgs} args - Arguments to find a UserRewardTriggeredAuditEvent
     * @example
     * // Get one UserRewardTriggeredAuditEvent
     * const userRewardTriggeredAuditEvent = await prisma.userRewardTriggeredAuditEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRewardTriggeredAuditEventFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRewardTriggeredAuditEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRewardTriggeredAuditEventClient<$Result.GetResult<Prisma.$UserRewardTriggeredAuditEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRewardTriggeredAuditEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRewardTriggeredAuditEventFindFirstArgs} args - Arguments to find a UserRewardTriggeredAuditEvent
     * @example
     * // Get one UserRewardTriggeredAuditEvent
     * const userRewardTriggeredAuditEvent = await prisma.userRewardTriggeredAuditEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRewardTriggeredAuditEventFindFirstArgs>(args?: SelectSubset<T, UserRewardTriggeredAuditEventFindFirstArgs<ExtArgs>>): Prisma__UserRewardTriggeredAuditEventClient<$Result.GetResult<Prisma.$UserRewardTriggeredAuditEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRewardTriggeredAuditEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRewardTriggeredAuditEventFindFirstOrThrowArgs} args - Arguments to find a UserRewardTriggeredAuditEvent
     * @example
     * // Get one UserRewardTriggeredAuditEvent
     * const userRewardTriggeredAuditEvent = await prisma.userRewardTriggeredAuditEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRewardTriggeredAuditEventFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRewardTriggeredAuditEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRewardTriggeredAuditEventClient<$Result.GetResult<Prisma.$UserRewardTriggeredAuditEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRewardTriggeredAuditEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRewardTriggeredAuditEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRewardTriggeredAuditEvents
     * const userRewardTriggeredAuditEvents = await prisma.userRewardTriggeredAuditEvent.findMany()
     * 
     * // Get first 10 UserRewardTriggeredAuditEvents
     * const userRewardTriggeredAuditEvents = await prisma.userRewardTriggeredAuditEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRewardTriggeredAuditEventWithIdOnly = await prisma.userRewardTriggeredAuditEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserRewardTriggeredAuditEventFindManyArgs>(args?: SelectSubset<T, UserRewardTriggeredAuditEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRewardTriggeredAuditEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRewardTriggeredAuditEvent.
     * @param {UserRewardTriggeredAuditEventCreateArgs} args - Arguments to create a UserRewardTriggeredAuditEvent.
     * @example
     * // Create one UserRewardTriggeredAuditEvent
     * const UserRewardTriggeredAuditEvent = await prisma.userRewardTriggeredAuditEvent.create({
     *   data: {
     *     // ... data to create a UserRewardTriggeredAuditEvent
     *   }
     * })
     * 
     */
    create<T extends UserRewardTriggeredAuditEventCreateArgs>(args: SelectSubset<T, UserRewardTriggeredAuditEventCreateArgs<ExtArgs>>): Prisma__UserRewardTriggeredAuditEventClient<$Result.GetResult<Prisma.$UserRewardTriggeredAuditEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRewardTriggeredAuditEvents.
     * @param {UserRewardTriggeredAuditEventCreateManyArgs} args - Arguments to create many UserRewardTriggeredAuditEvents.
     * @example
     * // Create many UserRewardTriggeredAuditEvents
     * const userRewardTriggeredAuditEvent = await prisma.userRewardTriggeredAuditEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRewardTriggeredAuditEventCreateManyArgs>(args?: SelectSubset<T, UserRewardTriggeredAuditEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserRewardTriggeredAuditEvent.
     * @param {UserRewardTriggeredAuditEventDeleteArgs} args - Arguments to delete one UserRewardTriggeredAuditEvent.
     * @example
     * // Delete one UserRewardTriggeredAuditEvent
     * const UserRewardTriggeredAuditEvent = await prisma.userRewardTriggeredAuditEvent.delete({
     *   where: {
     *     // ... filter to delete one UserRewardTriggeredAuditEvent
     *   }
     * })
     * 
     */
    delete<T extends UserRewardTriggeredAuditEventDeleteArgs>(args: SelectSubset<T, UserRewardTriggeredAuditEventDeleteArgs<ExtArgs>>): Prisma__UserRewardTriggeredAuditEventClient<$Result.GetResult<Prisma.$UserRewardTriggeredAuditEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRewardTriggeredAuditEvent.
     * @param {UserRewardTriggeredAuditEventUpdateArgs} args - Arguments to update one UserRewardTriggeredAuditEvent.
     * @example
     * // Update one UserRewardTriggeredAuditEvent
     * const userRewardTriggeredAuditEvent = await prisma.userRewardTriggeredAuditEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRewardTriggeredAuditEventUpdateArgs>(args: SelectSubset<T, UserRewardTriggeredAuditEventUpdateArgs<ExtArgs>>): Prisma__UserRewardTriggeredAuditEventClient<$Result.GetResult<Prisma.$UserRewardTriggeredAuditEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRewardTriggeredAuditEvents.
     * @param {UserRewardTriggeredAuditEventDeleteManyArgs} args - Arguments to filter UserRewardTriggeredAuditEvents to delete.
     * @example
     * // Delete a few UserRewardTriggeredAuditEvents
     * const { count } = await prisma.userRewardTriggeredAuditEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRewardTriggeredAuditEventDeleteManyArgs>(args?: SelectSubset<T, UserRewardTriggeredAuditEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRewardTriggeredAuditEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRewardTriggeredAuditEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRewardTriggeredAuditEvents
     * const userRewardTriggeredAuditEvent = await prisma.userRewardTriggeredAuditEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRewardTriggeredAuditEventUpdateManyArgs>(args: SelectSubset<T, UserRewardTriggeredAuditEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserRewardTriggeredAuditEvent.
     * @param {UserRewardTriggeredAuditEventUpsertArgs} args - Arguments to update or create a UserRewardTriggeredAuditEvent.
     * @example
     * // Update or create a UserRewardTriggeredAuditEvent
     * const userRewardTriggeredAuditEvent = await prisma.userRewardTriggeredAuditEvent.upsert({
     *   create: {
     *     // ... data to create a UserRewardTriggeredAuditEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRewardTriggeredAuditEvent we want to update
     *   }
     * })
     */
    upsert<T extends UserRewardTriggeredAuditEventUpsertArgs>(args: SelectSubset<T, UserRewardTriggeredAuditEventUpsertArgs<ExtArgs>>): Prisma__UserRewardTriggeredAuditEventClient<$Result.GetResult<Prisma.$UserRewardTriggeredAuditEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRewardTriggeredAuditEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRewardTriggeredAuditEventCountArgs} args - Arguments to filter UserRewardTriggeredAuditEvents to count.
     * @example
     * // Count the number of UserRewardTriggeredAuditEvents
     * const count = await prisma.userRewardTriggeredAuditEvent.count({
     *   where: {
     *     // ... the filter for the UserRewardTriggeredAuditEvents we want to count
     *   }
     * })
    **/
    count<T extends UserRewardTriggeredAuditEventCountArgs>(
      args?: Subset<T, UserRewardTriggeredAuditEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRewardTriggeredAuditEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRewardTriggeredAuditEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRewardTriggeredAuditEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserRewardTriggeredAuditEventAggregateArgs>(args: Subset<T, UserRewardTriggeredAuditEventAggregateArgs>): Prisma.PrismaPromise<GetUserRewardTriggeredAuditEventAggregateType<T>>

    /**
     * Group by UserRewardTriggeredAuditEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRewardTriggeredAuditEventGroupByArgs} args - Group by arguments.
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
      T extends UserRewardTriggeredAuditEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRewardTriggeredAuditEventGroupByArgs['orderBy'] }
        : { orderBy?: UserRewardTriggeredAuditEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserRewardTriggeredAuditEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRewardTriggeredAuditEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRewardTriggeredAuditEvent model
   */
  readonly fields: UserRewardTriggeredAuditEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRewardTriggeredAuditEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRewardTriggeredAuditEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    referalDetails<T extends ReferalDetailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReferalDetailsDefaultArgs<ExtArgs>>): Prisma__ReferalDetailsClient<$Result.GetResult<Prisma.$ReferalDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    spe_ae<T extends UserRewardTriggeredAuditEvent$spe_aeArgs<ExtArgs> = {}>(args?: Subset<T, UserRewardTriggeredAuditEvent$spe_aeArgs<ExtArgs>>): Prisma__SubPackageExtendedAuditEventClient<$Result.GetResult<Prisma.$SubPackageExtendedAuditEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserRewardTriggeredAuditEvent model
   */
  interface UserRewardTriggeredAuditEventFieldRefs {
    readonly id: FieldRef<"UserRewardTriggeredAuditEvent", 'String'>
    readonly customMonetaryRewardAmount: FieldRef<"UserRewardTriggeredAuditEvent", 'Float'>
    readonly rewardType: FieldRef<"UserRewardTriggeredAuditEvent", 'MonetaryRewardType'>
    readonly rewardAmount: FieldRef<"UserRewardTriggeredAuditEvent", 'Float'>
    readonly prevTotalPayableReward: FieldRef<"UserRewardTriggeredAuditEvent", 'Float'>
    readonly newTotalPayableReward: FieldRef<"UserRewardTriggeredAuditEvent", 'Float'>
    readonly highestTierReached: FieldRef<"UserRewardTriggeredAuditEvent", 'Boolean'>
    readonly referalDetails_attractedSubExternalId: FieldRef<"UserRewardTriggeredAuditEvent", 'String'>
    readonly spe_ae_id: FieldRef<"UserRewardTriggeredAuditEvent", 'String'>
    readonly createdAt: FieldRef<"UserRewardTriggeredAuditEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserRewardTriggeredAuditEvent findUnique
   */
  export type UserRewardTriggeredAuditEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRewardTriggeredAuditEvent
     */
    select?: UserRewardTriggeredAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRewardTriggeredAuditEvent
     */
    omit?: UserRewardTriggeredAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRewardTriggeredAuditEventInclude<ExtArgs> | null
    /**
     * Filter, which UserRewardTriggeredAuditEvent to fetch.
     */
    where: UserRewardTriggeredAuditEventWhereUniqueInput
  }

  /**
   * UserRewardTriggeredAuditEvent findUniqueOrThrow
   */
  export type UserRewardTriggeredAuditEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRewardTriggeredAuditEvent
     */
    select?: UserRewardTriggeredAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRewardTriggeredAuditEvent
     */
    omit?: UserRewardTriggeredAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRewardTriggeredAuditEventInclude<ExtArgs> | null
    /**
     * Filter, which UserRewardTriggeredAuditEvent to fetch.
     */
    where: UserRewardTriggeredAuditEventWhereUniqueInput
  }

  /**
   * UserRewardTriggeredAuditEvent findFirst
   */
  export type UserRewardTriggeredAuditEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRewardTriggeredAuditEvent
     */
    select?: UserRewardTriggeredAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRewardTriggeredAuditEvent
     */
    omit?: UserRewardTriggeredAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRewardTriggeredAuditEventInclude<ExtArgs> | null
    /**
     * Filter, which UserRewardTriggeredAuditEvent to fetch.
     */
    where?: UserRewardTriggeredAuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRewardTriggeredAuditEvents to fetch.
     */
    orderBy?: UserRewardTriggeredAuditEventOrderByWithRelationInput | UserRewardTriggeredAuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRewardTriggeredAuditEvents.
     */
    cursor?: UserRewardTriggeredAuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRewardTriggeredAuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRewardTriggeredAuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRewardTriggeredAuditEvents.
     */
    distinct?: UserRewardTriggeredAuditEventScalarFieldEnum | UserRewardTriggeredAuditEventScalarFieldEnum[]
  }

  /**
   * UserRewardTriggeredAuditEvent findFirstOrThrow
   */
  export type UserRewardTriggeredAuditEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRewardTriggeredAuditEvent
     */
    select?: UserRewardTriggeredAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRewardTriggeredAuditEvent
     */
    omit?: UserRewardTriggeredAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRewardTriggeredAuditEventInclude<ExtArgs> | null
    /**
     * Filter, which UserRewardTriggeredAuditEvent to fetch.
     */
    where?: UserRewardTriggeredAuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRewardTriggeredAuditEvents to fetch.
     */
    orderBy?: UserRewardTriggeredAuditEventOrderByWithRelationInput | UserRewardTriggeredAuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRewardTriggeredAuditEvents.
     */
    cursor?: UserRewardTriggeredAuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRewardTriggeredAuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRewardTriggeredAuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRewardTriggeredAuditEvents.
     */
    distinct?: UserRewardTriggeredAuditEventScalarFieldEnum | UserRewardTriggeredAuditEventScalarFieldEnum[]
  }

  /**
   * UserRewardTriggeredAuditEvent findMany
   */
  export type UserRewardTriggeredAuditEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRewardTriggeredAuditEvent
     */
    select?: UserRewardTriggeredAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRewardTriggeredAuditEvent
     */
    omit?: UserRewardTriggeredAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRewardTriggeredAuditEventInclude<ExtArgs> | null
    /**
     * Filter, which UserRewardTriggeredAuditEvents to fetch.
     */
    where?: UserRewardTriggeredAuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRewardTriggeredAuditEvents to fetch.
     */
    orderBy?: UserRewardTriggeredAuditEventOrderByWithRelationInput | UserRewardTriggeredAuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRewardTriggeredAuditEvents.
     */
    cursor?: UserRewardTriggeredAuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRewardTriggeredAuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRewardTriggeredAuditEvents.
     */
    skip?: number
    distinct?: UserRewardTriggeredAuditEventScalarFieldEnum | UserRewardTriggeredAuditEventScalarFieldEnum[]
  }

  /**
   * UserRewardTriggeredAuditEvent create
   */
  export type UserRewardTriggeredAuditEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRewardTriggeredAuditEvent
     */
    select?: UserRewardTriggeredAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRewardTriggeredAuditEvent
     */
    omit?: UserRewardTriggeredAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRewardTriggeredAuditEventInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRewardTriggeredAuditEvent.
     */
    data: XOR<UserRewardTriggeredAuditEventCreateInput, UserRewardTriggeredAuditEventUncheckedCreateInput>
  }

  /**
   * UserRewardTriggeredAuditEvent createMany
   */
  export type UserRewardTriggeredAuditEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRewardTriggeredAuditEvents.
     */
    data: UserRewardTriggeredAuditEventCreateManyInput | UserRewardTriggeredAuditEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRewardTriggeredAuditEvent update
   */
  export type UserRewardTriggeredAuditEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRewardTriggeredAuditEvent
     */
    select?: UserRewardTriggeredAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRewardTriggeredAuditEvent
     */
    omit?: UserRewardTriggeredAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRewardTriggeredAuditEventInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRewardTriggeredAuditEvent.
     */
    data: XOR<UserRewardTriggeredAuditEventUpdateInput, UserRewardTriggeredAuditEventUncheckedUpdateInput>
    /**
     * Choose, which UserRewardTriggeredAuditEvent to update.
     */
    where: UserRewardTriggeredAuditEventWhereUniqueInput
  }

  /**
   * UserRewardTriggeredAuditEvent updateMany
   */
  export type UserRewardTriggeredAuditEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRewardTriggeredAuditEvents.
     */
    data: XOR<UserRewardTriggeredAuditEventUpdateManyMutationInput, UserRewardTriggeredAuditEventUncheckedUpdateManyInput>
    /**
     * Filter which UserRewardTriggeredAuditEvents to update
     */
    where?: UserRewardTriggeredAuditEventWhereInput
    /**
     * Limit how many UserRewardTriggeredAuditEvents to update.
     */
    limit?: number
  }

  /**
   * UserRewardTriggeredAuditEvent upsert
   */
  export type UserRewardTriggeredAuditEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRewardTriggeredAuditEvent
     */
    select?: UserRewardTriggeredAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRewardTriggeredAuditEvent
     */
    omit?: UserRewardTriggeredAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRewardTriggeredAuditEventInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRewardTriggeredAuditEvent to update in case it exists.
     */
    where: UserRewardTriggeredAuditEventWhereUniqueInput
    /**
     * In case the UserRewardTriggeredAuditEvent found by the `where` argument doesn't exist, create a new UserRewardTriggeredAuditEvent with this data.
     */
    create: XOR<UserRewardTriggeredAuditEventCreateInput, UserRewardTriggeredAuditEventUncheckedCreateInput>
    /**
     * In case the UserRewardTriggeredAuditEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRewardTriggeredAuditEventUpdateInput, UserRewardTriggeredAuditEventUncheckedUpdateInput>
  }

  /**
   * UserRewardTriggeredAuditEvent delete
   */
  export type UserRewardTriggeredAuditEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRewardTriggeredAuditEvent
     */
    select?: UserRewardTriggeredAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRewardTriggeredAuditEvent
     */
    omit?: UserRewardTriggeredAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRewardTriggeredAuditEventInclude<ExtArgs> | null
    /**
     * Filter which UserRewardTriggeredAuditEvent to delete.
     */
    where: UserRewardTriggeredAuditEventWhereUniqueInput
  }

  /**
   * UserRewardTriggeredAuditEvent deleteMany
   */
  export type UserRewardTriggeredAuditEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRewardTriggeredAuditEvents to delete
     */
    where?: UserRewardTriggeredAuditEventWhereInput
    /**
     * Limit how many UserRewardTriggeredAuditEvents to delete.
     */
    limit?: number
  }

  /**
   * UserRewardTriggeredAuditEvent.spe_ae
   */
  export type UserRewardTriggeredAuditEvent$spe_aeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubPackageExtendedAuditEvent
     */
    select?: SubPackageExtendedAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubPackageExtendedAuditEvent
     */
    omit?: SubPackageExtendedAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubPackageExtendedAuditEventInclude<ExtArgs> | null
    where?: SubPackageExtendedAuditEventWhereInput
  }

  /**
   * UserRewardTriggeredAuditEvent without action
   */
  export type UserRewardTriggeredAuditEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRewardTriggeredAuditEvent
     */
    select?: UserRewardTriggeredAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRewardTriggeredAuditEvent
     */
    omit?: UserRewardTriggeredAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRewardTriggeredAuditEventInclude<ExtArgs> | null
  }


  /**
   * Model UserRepaymentAuditEvent
   */

  export type AggregateUserRepaymentAuditEvent = {
    _count: UserRepaymentAuditEventCountAggregateOutputType | null
    _avg: UserRepaymentAuditEventAvgAggregateOutputType | null
    _sum: UserRepaymentAuditEventSumAggregateOutputType | null
    _min: UserRepaymentAuditEventMinAggregateOutputType | null
    _max: UserRepaymentAuditEventMaxAggregateOutputType | null
  }

  export type UserRepaymentAuditEventAvgAggregateOutputType = {
    repaymentAmount: number | null
    prevTotalPayableReward: number | null
    newTotalPayableReward: number | null
  }

  export type UserRepaymentAuditEventSumAggregateOutputType = {
    repaymentAmount: number | null
    prevTotalPayableReward: number | null
    newTotalPayableReward: number | null
  }

  export type UserRepaymentAuditEventMinAggregateOutputType = {
    id: string | null
    userId: string | null
    repaymentAmount: number | null
    prevTotalPayableReward: number | null
    newTotalPayableReward: number | null
    createdAt: Date | null
    createdByUserId: string | null
  }

  export type UserRepaymentAuditEventMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    repaymentAmount: number | null
    prevTotalPayableReward: number | null
    newTotalPayableReward: number | null
    createdAt: Date | null
    createdByUserId: string | null
  }

  export type UserRepaymentAuditEventCountAggregateOutputType = {
    id: number
    userId: number
    repaymentAmount: number
    prevTotalPayableReward: number
    newTotalPayableReward: number
    createdAt: number
    createdByUserId: number
    _all: number
  }


  export type UserRepaymentAuditEventAvgAggregateInputType = {
    repaymentAmount?: true
    prevTotalPayableReward?: true
    newTotalPayableReward?: true
  }

  export type UserRepaymentAuditEventSumAggregateInputType = {
    repaymentAmount?: true
    prevTotalPayableReward?: true
    newTotalPayableReward?: true
  }

  export type UserRepaymentAuditEventMinAggregateInputType = {
    id?: true
    userId?: true
    repaymentAmount?: true
    prevTotalPayableReward?: true
    newTotalPayableReward?: true
    createdAt?: true
    createdByUserId?: true
  }

  export type UserRepaymentAuditEventMaxAggregateInputType = {
    id?: true
    userId?: true
    repaymentAmount?: true
    prevTotalPayableReward?: true
    newTotalPayableReward?: true
    createdAt?: true
    createdByUserId?: true
  }

  export type UserRepaymentAuditEventCountAggregateInputType = {
    id?: true
    userId?: true
    repaymentAmount?: true
    prevTotalPayableReward?: true
    newTotalPayableReward?: true
    createdAt?: true
    createdByUserId?: true
    _all?: true
  }

  export type UserRepaymentAuditEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRepaymentAuditEvent to aggregate.
     */
    where?: UserRepaymentAuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRepaymentAuditEvents to fetch.
     */
    orderBy?: UserRepaymentAuditEventOrderByWithRelationInput | UserRepaymentAuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRepaymentAuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRepaymentAuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRepaymentAuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRepaymentAuditEvents
    **/
    _count?: true | UserRepaymentAuditEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserRepaymentAuditEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserRepaymentAuditEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRepaymentAuditEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRepaymentAuditEventMaxAggregateInputType
  }

  export type GetUserRepaymentAuditEventAggregateType<T extends UserRepaymentAuditEventAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRepaymentAuditEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRepaymentAuditEvent[P]>
      : GetScalarType<T[P], AggregateUserRepaymentAuditEvent[P]>
  }




  export type UserRepaymentAuditEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRepaymentAuditEventWhereInput
    orderBy?: UserRepaymentAuditEventOrderByWithAggregationInput | UserRepaymentAuditEventOrderByWithAggregationInput[]
    by: UserRepaymentAuditEventScalarFieldEnum[] | UserRepaymentAuditEventScalarFieldEnum
    having?: UserRepaymentAuditEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRepaymentAuditEventCountAggregateInputType | true
    _avg?: UserRepaymentAuditEventAvgAggregateInputType
    _sum?: UserRepaymentAuditEventSumAggregateInputType
    _min?: UserRepaymentAuditEventMinAggregateInputType
    _max?: UserRepaymentAuditEventMaxAggregateInputType
  }

  export type UserRepaymentAuditEventGroupByOutputType = {
    id: string
    userId: string
    repaymentAmount: number
    prevTotalPayableReward: number
    newTotalPayableReward: number
    createdAt: Date
    createdByUserId: string
    _count: UserRepaymentAuditEventCountAggregateOutputType | null
    _avg: UserRepaymentAuditEventAvgAggregateOutputType | null
    _sum: UserRepaymentAuditEventSumAggregateOutputType | null
    _min: UserRepaymentAuditEventMinAggregateOutputType | null
    _max: UserRepaymentAuditEventMaxAggregateOutputType | null
  }

  type GetUserRepaymentAuditEventGroupByPayload<T extends UserRepaymentAuditEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRepaymentAuditEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRepaymentAuditEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRepaymentAuditEventGroupByOutputType[P]>
            : GetScalarType<T[P], UserRepaymentAuditEventGroupByOutputType[P]>
        }
      >
    >


  export type UserRepaymentAuditEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    repaymentAmount?: boolean
    prevTotalPayableReward?: boolean
    newTotalPayableReward?: boolean
    createdAt?: boolean
    createdByUserId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRepaymentAuditEvent"]>



  export type UserRepaymentAuditEventSelectScalar = {
    id?: boolean
    userId?: boolean
    repaymentAmount?: boolean
    prevTotalPayableReward?: boolean
    newTotalPayableReward?: boolean
    createdAt?: boolean
    createdByUserId?: boolean
  }

  export type UserRepaymentAuditEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "repaymentAmount" | "prevTotalPayableReward" | "newTotalPayableReward" | "createdAt" | "createdByUserId", ExtArgs["result"]["userRepaymentAuditEvent"]>
  export type UserRepaymentAuditEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserRepaymentAuditEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRepaymentAuditEvent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      repaymentAmount: number
      prevTotalPayableReward: number
      newTotalPayableReward: number
      createdAt: Date
      createdByUserId: string
    }, ExtArgs["result"]["userRepaymentAuditEvent"]>
    composites: {}
  }

  type UserRepaymentAuditEventGetPayload<S extends boolean | null | undefined | UserRepaymentAuditEventDefaultArgs> = $Result.GetResult<Prisma.$UserRepaymentAuditEventPayload, S>

  type UserRepaymentAuditEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRepaymentAuditEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRepaymentAuditEventCountAggregateInputType | true
    }

  export interface UserRepaymentAuditEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRepaymentAuditEvent'], meta: { name: 'UserRepaymentAuditEvent' } }
    /**
     * Find zero or one UserRepaymentAuditEvent that matches the filter.
     * @param {UserRepaymentAuditEventFindUniqueArgs} args - Arguments to find a UserRepaymentAuditEvent
     * @example
     * // Get one UserRepaymentAuditEvent
     * const userRepaymentAuditEvent = await prisma.userRepaymentAuditEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRepaymentAuditEventFindUniqueArgs>(args: SelectSubset<T, UserRepaymentAuditEventFindUniqueArgs<ExtArgs>>): Prisma__UserRepaymentAuditEventClient<$Result.GetResult<Prisma.$UserRepaymentAuditEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRepaymentAuditEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRepaymentAuditEventFindUniqueOrThrowArgs} args - Arguments to find a UserRepaymentAuditEvent
     * @example
     * // Get one UserRepaymentAuditEvent
     * const userRepaymentAuditEvent = await prisma.userRepaymentAuditEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRepaymentAuditEventFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRepaymentAuditEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRepaymentAuditEventClient<$Result.GetResult<Prisma.$UserRepaymentAuditEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRepaymentAuditEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRepaymentAuditEventFindFirstArgs} args - Arguments to find a UserRepaymentAuditEvent
     * @example
     * // Get one UserRepaymentAuditEvent
     * const userRepaymentAuditEvent = await prisma.userRepaymentAuditEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRepaymentAuditEventFindFirstArgs>(args?: SelectSubset<T, UserRepaymentAuditEventFindFirstArgs<ExtArgs>>): Prisma__UserRepaymentAuditEventClient<$Result.GetResult<Prisma.$UserRepaymentAuditEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRepaymentAuditEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRepaymentAuditEventFindFirstOrThrowArgs} args - Arguments to find a UserRepaymentAuditEvent
     * @example
     * // Get one UserRepaymentAuditEvent
     * const userRepaymentAuditEvent = await prisma.userRepaymentAuditEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRepaymentAuditEventFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRepaymentAuditEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRepaymentAuditEventClient<$Result.GetResult<Prisma.$UserRepaymentAuditEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRepaymentAuditEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRepaymentAuditEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRepaymentAuditEvents
     * const userRepaymentAuditEvents = await prisma.userRepaymentAuditEvent.findMany()
     * 
     * // Get first 10 UserRepaymentAuditEvents
     * const userRepaymentAuditEvents = await prisma.userRepaymentAuditEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRepaymentAuditEventWithIdOnly = await prisma.userRepaymentAuditEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserRepaymentAuditEventFindManyArgs>(args?: SelectSubset<T, UserRepaymentAuditEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRepaymentAuditEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRepaymentAuditEvent.
     * @param {UserRepaymentAuditEventCreateArgs} args - Arguments to create a UserRepaymentAuditEvent.
     * @example
     * // Create one UserRepaymentAuditEvent
     * const UserRepaymentAuditEvent = await prisma.userRepaymentAuditEvent.create({
     *   data: {
     *     // ... data to create a UserRepaymentAuditEvent
     *   }
     * })
     * 
     */
    create<T extends UserRepaymentAuditEventCreateArgs>(args: SelectSubset<T, UserRepaymentAuditEventCreateArgs<ExtArgs>>): Prisma__UserRepaymentAuditEventClient<$Result.GetResult<Prisma.$UserRepaymentAuditEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRepaymentAuditEvents.
     * @param {UserRepaymentAuditEventCreateManyArgs} args - Arguments to create many UserRepaymentAuditEvents.
     * @example
     * // Create many UserRepaymentAuditEvents
     * const userRepaymentAuditEvent = await prisma.userRepaymentAuditEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRepaymentAuditEventCreateManyArgs>(args?: SelectSubset<T, UserRepaymentAuditEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserRepaymentAuditEvent.
     * @param {UserRepaymentAuditEventDeleteArgs} args - Arguments to delete one UserRepaymentAuditEvent.
     * @example
     * // Delete one UserRepaymentAuditEvent
     * const UserRepaymentAuditEvent = await prisma.userRepaymentAuditEvent.delete({
     *   where: {
     *     // ... filter to delete one UserRepaymentAuditEvent
     *   }
     * })
     * 
     */
    delete<T extends UserRepaymentAuditEventDeleteArgs>(args: SelectSubset<T, UserRepaymentAuditEventDeleteArgs<ExtArgs>>): Prisma__UserRepaymentAuditEventClient<$Result.GetResult<Prisma.$UserRepaymentAuditEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRepaymentAuditEvent.
     * @param {UserRepaymentAuditEventUpdateArgs} args - Arguments to update one UserRepaymentAuditEvent.
     * @example
     * // Update one UserRepaymentAuditEvent
     * const userRepaymentAuditEvent = await prisma.userRepaymentAuditEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRepaymentAuditEventUpdateArgs>(args: SelectSubset<T, UserRepaymentAuditEventUpdateArgs<ExtArgs>>): Prisma__UserRepaymentAuditEventClient<$Result.GetResult<Prisma.$UserRepaymentAuditEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRepaymentAuditEvents.
     * @param {UserRepaymentAuditEventDeleteManyArgs} args - Arguments to filter UserRepaymentAuditEvents to delete.
     * @example
     * // Delete a few UserRepaymentAuditEvents
     * const { count } = await prisma.userRepaymentAuditEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRepaymentAuditEventDeleteManyArgs>(args?: SelectSubset<T, UserRepaymentAuditEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRepaymentAuditEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRepaymentAuditEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRepaymentAuditEvents
     * const userRepaymentAuditEvent = await prisma.userRepaymentAuditEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRepaymentAuditEventUpdateManyArgs>(args: SelectSubset<T, UserRepaymentAuditEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserRepaymentAuditEvent.
     * @param {UserRepaymentAuditEventUpsertArgs} args - Arguments to update or create a UserRepaymentAuditEvent.
     * @example
     * // Update or create a UserRepaymentAuditEvent
     * const userRepaymentAuditEvent = await prisma.userRepaymentAuditEvent.upsert({
     *   create: {
     *     // ... data to create a UserRepaymentAuditEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRepaymentAuditEvent we want to update
     *   }
     * })
     */
    upsert<T extends UserRepaymentAuditEventUpsertArgs>(args: SelectSubset<T, UserRepaymentAuditEventUpsertArgs<ExtArgs>>): Prisma__UserRepaymentAuditEventClient<$Result.GetResult<Prisma.$UserRepaymentAuditEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRepaymentAuditEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRepaymentAuditEventCountArgs} args - Arguments to filter UserRepaymentAuditEvents to count.
     * @example
     * // Count the number of UserRepaymentAuditEvents
     * const count = await prisma.userRepaymentAuditEvent.count({
     *   where: {
     *     // ... the filter for the UserRepaymentAuditEvents we want to count
     *   }
     * })
    **/
    count<T extends UserRepaymentAuditEventCountArgs>(
      args?: Subset<T, UserRepaymentAuditEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRepaymentAuditEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRepaymentAuditEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRepaymentAuditEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserRepaymentAuditEventAggregateArgs>(args: Subset<T, UserRepaymentAuditEventAggregateArgs>): Prisma.PrismaPromise<GetUserRepaymentAuditEventAggregateType<T>>

    /**
     * Group by UserRepaymentAuditEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRepaymentAuditEventGroupByArgs} args - Group by arguments.
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
      T extends UserRepaymentAuditEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRepaymentAuditEventGroupByArgs['orderBy'] }
        : { orderBy?: UserRepaymentAuditEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserRepaymentAuditEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRepaymentAuditEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRepaymentAuditEvent model
   */
  readonly fields: UserRepaymentAuditEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRepaymentAuditEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRepaymentAuditEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserRepaymentAuditEvent model
   */
  interface UserRepaymentAuditEventFieldRefs {
    readonly id: FieldRef<"UserRepaymentAuditEvent", 'String'>
    readonly userId: FieldRef<"UserRepaymentAuditEvent", 'String'>
    readonly repaymentAmount: FieldRef<"UserRepaymentAuditEvent", 'Float'>
    readonly prevTotalPayableReward: FieldRef<"UserRepaymentAuditEvent", 'Float'>
    readonly newTotalPayableReward: FieldRef<"UserRepaymentAuditEvent", 'Float'>
    readonly createdAt: FieldRef<"UserRepaymentAuditEvent", 'DateTime'>
    readonly createdByUserId: FieldRef<"UserRepaymentAuditEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserRepaymentAuditEvent findUnique
   */
  export type UserRepaymentAuditEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRepaymentAuditEvent
     */
    select?: UserRepaymentAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRepaymentAuditEvent
     */
    omit?: UserRepaymentAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRepaymentAuditEventInclude<ExtArgs> | null
    /**
     * Filter, which UserRepaymentAuditEvent to fetch.
     */
    where: UserRepaymentAuditEventWhereUniqueInput
  }

  /**
   * UserRepaymentAuditEvent findUniqueOrThrow
   */
  export type UserRepaymentAuditEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRepaymentAuditEvent
     */
    select?: UserRepaymentAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRepaymentAuditEvent
     */
    omit?: UserRepaymentAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRepaymentAuditEventInclude<ExtArgs> | null
    /**
     * Filter, which UserRepaymentAuditEvent to fetch.
     */
    where: UserRepaymentAuditEventWhereUniqueInput
  }

  /**
   * UserRepaymentAuditEvent findFirst
   */
  export type UserRepaymentAuditEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRepaymentAuditEvent
     */
    select?: UserRepaymentAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRepaymentAuditEvent
     */
    omit?: UserRepaymentAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRepaymentAuditEventInclude<ExtArgs> | null
    /**
     * Filter, which UserRepaymentAuditEvent to fetch.
     */
    where?: UserRepaymentAuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRepaymentAuditEvents to fetch.
     */
    orderBy?: UserRepaymentAuditEventOrderByWithRelationInput | UserRepaymentAuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRepaymentAuditEvents.
     */
    cursor?: UserRepaymentAuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRepaymentAuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRepaymentAuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRepaymentAuditEvents.
     */
    distinct?: UserRepaymentAuditEventScalarFieldEnum | UserRepaymentAuditEventScalarFieldEnum[]
  }

  /**
   * UserRepaymentAuditEvent findFirstOrThrow
   */
  export type UserRepaymentAuditEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRepaymentAuditEvent
     */
    select?: UserRepaymentAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRepaymentAuditEvent
     */
    omit?: UserRepaymentAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRepaymentAuditEventInclude<ExtArgs> | null
    /**
     * Filter, which UserRepaymentAuditEvent to fetch.
     */
    where?: UserRepaymentAuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRepaymentAuditEvents to fetch.
     */
    orderBy?: UserRepaymentAuditEventOrderByWithRelationInput | UserRepaymentAuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRepaymentAuditEvents.
     */
    cursor?: UserRepaymentAuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRepaymentAuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRepaymentAuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRepaymentAuditEvents.
     */
    distinct?: UserRepaymentAuditEventScalarFieldEnum | UserRepaymentAuditEventScalarFieldEnum[]
  }

  /**
   * UserRepaymentAuditEvent findMany
   */
  export type UserRepaymentAuditEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRepaymentAuditEvent
     */
    select?: UserRepaymentAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRepaymentAuditEvent
     */
    omit?: UserRepaymentAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRepaymentAuditEventInclude<ExtArgs> | null
    /**
     * Filter, which UserRepaymentAuditEvents to fetch.
     */
    where?: UserRepaymentAuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRepaymentAuditEvents to fetch.
     */
    orderBy?: UserRepaymentAuditEventOrderByWithRelationInput | UserRepaymentAuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRepaymentAuditEvents.
     */
    cursor?: UserRepaymentAuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRepaymentAuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRepaymentAuditEvents.
     */
    skip?: number
    distinct?: UserRepaymentAuditEventScalarFieldEnum | UserRepaymentAuditEventScalarFieldEnum[]
  }

  /**
   * UserRepaymentAuditEvent create
   */
  export type UserRepaymentAuditEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRepaymentAuditEvent
     */
    select?: UserRepaymentAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRepaymentAuditEvent
     */
    omit?: UserRepaymentAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRepaymentAuditEventInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRepaymentAuditEvent.
     */
    data: XOR<UserRepaymentAuditEventCreateInput, UserRepaymentAuditEventUncheckedCreateInput>
  }

  /**
   * UserRepaymentAuditEvent createMany
   */
  export type UserRepaymentAuditEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRepaymentAuditEvents.
     */
    data: UserRepaymentAuditEventCreateManyInput | UserRepaymentAuditEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRepaymentAuditEvent update
   */
  export type UserRepaymentAuditEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRepaymentAuditEvent
     */
    select?: UserRepaymentAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRepaymentAuditEvent
     */
    omit?: UserRepaymentAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRepaymentAuditEventInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRepaymentAuditEvent.
     */
    data: XOR<UserRepaymentAuditEventUpdateInput, UserRepaymentAuditEventUncheckedUpdateInput>
    /**
     * Choose, which UserRepaymentAuditEvent to update.
     */
    where: UserRepaymentAuditEventWhereUniqueInput
  }

  /**
   * UserRepaymentAuditEvent updateMany
   */
  export type UserRepaymentAuditEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRepaymentAuditEvents.
     */
    data: XOR<UserRepaymentAuditEventUpdateManyMutationInput, UserRepaymentAuditEventUncheckedUpdateManyInput>
    /**
     * Filter which UserRepaymentAuditEvents to update
     */
    where?: UserRepaymentAuditEventWhereInput
    /**
     * Limit how many UserRepaymentAuditEvents to update.
     */
    limit?: number
  }

  /**
   * UserRepaymentAuditEvent upsert
   */
  export type UserRepaymentAuditEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRepaymentAuditEvent
     */
    select?: UserRepaymentAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRepaymentAuditEvent
     */
    omit?: UserRepaymentAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRepaymentAuditEventInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRepaymentAuditEvent to update in case it exists.
     */
    where: UserRepaymentAuditEventWhereUniqueInput
    /**
     * In case the UserRepaymentAuditEvent found by the `where` argument doesn't exist, create a new UserRepaymentAuditEvent with this data.
     */
    create: XOR<UserRepaymentAuditEventCreateInput, UserRepaymentAuditEventUncheckedCreateInput>
    /**
     * In case the UserRepaymentAuditEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRepaymentAuditEventUpdateInput, UserRepaymentAuditEventUncheckedUpdateInput>
  }

  /**
   * UserRepaymentAuditEvent delete
   */
  export type UserRepaymentAuditEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRepaymentAuditEvent
     */
    select?: UserRepaymentAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRepaymentAuditEvent
     */
    omit?: UserRepaymentAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRepaymentAuditEventInclude<ExtArgs> | null
    /**
     * Filter which UserRepaymentAuditEvent to delete.
     */
    where: UserRepaymentAuditEventWhereUniqueInput
  }

  /**
   * UserRepaymentAuditEvent deleteMany
   */
  export type UserRepaymentAuditEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRepaymentAuditEvents to delete
     */
    where?: UserRepaymentAuditEventWhereInput
    /**
     * Limit how many UserRepaymentAuditEvents to delete.
     */
    limit?: number
  }

  /**
   * UserRepaymentAuditEvent without action
   */
  export type UserRepaymentAuditEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRepaymentAuditEvent
     */
    select?: UserRepaymentAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRepaymentAuditEvent
     */
    omit?: UserRepaymentAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRepaymentAuditEventInclude<ExtArgs> | null
  }


  /**
   * Model EntityUpdatedAuditEvent
   */

  export type AggregateEntityUpdatedAuditEvent = {
    _count: EntityUpdatedAuditEventCountAggregateOutputType | null
    _min: EntityUpdatedAuditEventMinAggregateOutputType | null
    _max: EntityUpdatedAuditEventMaxAggregateOutputType | null
  }

  export type EntityUpdatedAuditEventMinAggregateOutputType = {
    id: string | null
    entityType: $Enums.EntityTypes | null
    entityId: string | null
    reason: string | null
    diff: string | null
    createdAt: Date | null
    createdByUserId: string | null
  }

  export type EntityUpdatedAuditEventMaxAggregateOutputType = {
    id: string | null
    entityType: $Enums.EntityTypes | null
    entityId: string | null
    reason: string | null
    diff: string | null
    createdAt: Date | null
    createdByUserId: string | null
  }

  export type EntityUpdatedAuditEventCountAggregateOutputType = {
    id: number
    entityType: number
    entityId: number
    reason: number
    diff: number
    createdAt: number
    createdByUserId: number
    _all: number
  }


  export type EntityUpdatedAuditEventMinAggregateInputType = {
    id?: true
    entityType?: true
    entityId?: true
    reason?: true
    diff?: true
    createdAt?: true
    createdByUserId?: true
  }

  export type EntityUpdatedAuditEventMaxAggregateInputType = {
    id?: true
    entityType?: true
    entityId?: true
    reason?: true
    diff?: true
    createdAt?: true
    createdByUserId?: true
  }

  export type EntityUpdatedAuditEventCountAggregateInputType = {
    id?: true
    entityType?: true
    entityId?: true
    reason?: true
    diff?: true
    createdAt?: true
    createdByUserId?: true
    _all?: true
  }

  export type EntityUpdatedAuditEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EntityUpdatedAuditEvent to aggregate.
     */
    where?: EntityUpdatedAuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntityUpdatedAuditEvents to fetch.
     */
    orderBy?: EntityUpdatedAuditEventOrderByWithRelationInput | EntityUpdatedAuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntityUpdatedAuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntityUpdatedAuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntityUpdatedAuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EntityUpdatedAuditEvents
    **/
    _count?: true | EntityUpdatedAuditEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntityUpdatedAuditEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntityUpdatedAuditEventMaxAggregateInputType
  }

  export type GetEntityUpdatedAuditEventAggregateType<T extends EntityUpdatedAuditEventAggregateArgs> = {
        [P in keyof T & keyof AggregateEntityUpdatedAuditEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntityUpdatedAuditEvent[P]>
      : GetScalarType<T[P], AggregateEntityUpdatedAuditEvent[P]>
  }




  export type EntityUpdatedAuditEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntityUpdatedAuditEventWhereInput
    orderBy?: EntityUpdatedAuditEventOrderByWithAggregationInput | EntityUpdatedAuditEventOrderByWithAggregationInput[]
    by: EntityUpdatedAuditEventScalarFieldEnum[] | EntityUpdatedAuditEventScalarFieldEnum
    having?: EntityUpdatedAuditEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntityUpdatedAuditEventCountAggregateInputType | true
    _min?: EntityUpdatedAuditEventMinAggregateInputType
    _max?: EntityUpdatedAuditEventMaxAggregateInputType
  }

  export type EntityUpdatedAuditEventGroupByOutputType = {
    id: string
    entityType: $Enums.EntityTypes
    entityId: string
    reason: string | null
    diff: string
    createdAt: Date
    createdByUserId: string
    _count: EntityUpdatedAuditEventCountAggregateOutputType | null
    _min: EntityUpdatedAuditEventMinAggregateOutputType | null
    _max: EntityUpdatedAuditEventMaxAggregateOutputType | null
  }

  type GetEntityUpdatedAuditEventGroupByPayload<T extends EntityUpdatedAuditEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntityUpdatedAuditEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntityUpdatedAuditEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntityUpdatedAuditEventGroupByOutputType[P]>
            : GetScalarType<T[P], EntityUpdatedAuditEventGroupByOutputType[P]>
        }
      >
    >


  export type EntityUpdatedAuditEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entityType?: boolean
    entityId?: boolean
    reason?: boolean
    diff?: boolean
    createdAt?: boolean
    createdByUserId?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entityUpdatedAuditEvent"]>



  export type EntityUpdatedAuditEventSelectScalar = {
    id?: boolean
    entityType?: boolean
    entityId?: boolean
    reason?: boolean
    diff?: boolean
    createdAt?: boolean
    createdByUserId?: boolean
  }

  export type EntityUpdatedAuditEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "entityType" | "entityId" | "reason" | "diff" | "createdAt" | "createdByUserId", ExtArgs["result"]["entityUpdatedAuditEvent"]>
  export type EntityUpdatedAuditEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EntityUpdatedAuditEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EntityUpdatedAuditEvent"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      entityType: $Enums.EntityTypes
      entityId: string
      reason: string | null
      diff: string
      createdAt: Date
      createdByUserId: string
    }, ExtArgs["result"]["entityUpdatedAuditEvent"]>
    composites: {}
  }

  type EntityUpdatedAuditEventGetPayload<S extends boolean | null | undefined | EntityUpdatedAuditEventDefaultArgs> = $Result.GetResult<Prisma.$EntityUpdatedAuditEventPayload, S>

  type EntityUpdatedAuditEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntityUpdatedAuditEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntityUpdatedAuditEventCountAggregateInputType | true
    }

  export interface EntityUpdatedAuditEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EntityUpdatedAuditEvent'], meta: { name: 'EntityUpdatedAuditEvent' } }
    /**
     * Find zero or one EntityUpdatedAuditEvent that matches the filter.
     * @param {EntityUpdatedAuditEventFindUniqueArgs} args - Arguments to find a EntityUpdatedAuditEvent
     * @example
     * // Get one EntityUpdatedAuditEvent
     * const entityUpdatedAuditEvent = await prisma.entityUpdatedAuditEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntityUpdatedAuditEventFindUniqueArgs>(args: SelectSubset<T, EntityUpdatedAuditEventFindUniqueArgs<ExtArgs>>): Prisma__EntityUpdatedAuditEventClient<$Result.GetResult<Prisma.$EntityUpdatedAuditEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EntityUpdatedAuditEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntityUpdatedAuditEventFindUniqueOrThrowArgs} args - Arguments to find a EntityUpdatedAuditEvent
     * @example
     * // Get one EntityUpdatedAuditEvent
     * const entityUpdatedAuditEvent = await prisma.entityUpdatedAuditEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntityUpdatedAuditEventFindUniqueOrThrowArgs>(args: SelectSubset<T, EntityUpdatedAuditEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntityUpdatedAuditEventClient<$Result.GetResult<Prisma.$EntityUpdatedAuditEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EntityUpdatedAuditEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityUpdatedAuditEventFindFirstArgs} args - Arguments to find a EntityUpdatedAuditEvent
     * @example
     * // Get one EntityUpdatedAuditEvent
     * const entityUpdatedAuditEvent = await prisma.entityUpdatedAuditEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntityUpdatedAuditEventFindFirstArgs>(args?: SelectSubset<T, EntityUpdatedAuditEventFindFirstArgs<ExtArgs>>): Prisma__EntityUpdatedAuditEventClient<$Result.GetResult<Prisma.$EntityUpdatedAuditEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EntityUpdatedAuditEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityUpdatedAuditEventFindFirstOrThrowArgs} args - Arguments to find a EntityUpdatedAuditEvent
     * @example
     * // Get one EntityUpdatedAuditEvent
     * const entityUpdatedAuditEvent = await prisma.entityUpdatedAuditEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntityUpdatedAuditEventFindFirstOrThrowArgs>(args?: SelectSubset<T, EntityUpdatedAuditEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntityUpdatedAuditEventClient<$Result.GetResult<Prisma.$EntityUpdatedAuditEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EntityUpdatedAuditEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityUpdatedAuditEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EntityUpdatedAuditEvents
     * const entityUpdatedAuditEvents = await prisma.entityUpdatedAuditEvent.findMany()
     * 
     * // Get first 10 EntityUpdatedAuditEvents
     * const entityUpdatedAuditEvents = await prisma.entityUpdatedAuditEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entityUpdatedAuditEventWithIdOnly = await prisma.entityUpdatedAuditEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntityUpdatedAuditEventFindManyArgs>(args?: SelectSubset<T, EntityUpdatedAuditEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntityUpdatedAuditEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EntityUpdatedAuditEvent.
     * @param {EntityUpdatedAuditEventCreateArgs} args - Arguments to create a EntityUpdatedAuditEvent.
     * @example
     * // Create one EntityUpdatedAuditEvent
     * const EntityUpdatedAuditEvent = await prisma.entityUpdatedAuditEvent.create({
     *   data: {
     *     // ... data to create a EntityUpdatedAuditEvent
     *   }
     * })
     * 
     */
    create<T extends EntityUpdatedAuditEventCreateArgs>(args: SelectSubset<T, EntityUpdatedAuditEventCreateArgs<ExtArgs>>): Prisma__EntityUpdatedAuditEventClient<$Result.GetResult<Prisma.$EntityUpdatedAuditEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EntityUpdatedAuditEvents.
     * @param {EntityUpdatedAuditEventCreateManyArgs} args - Arguments to create many EntityUpdatedAuditEvents.
     * @example
     * // Create many EntityUpdatedAuditEvents
     * const entityUpdatedAuditEvent = await prisma.entityUpdatedAuditEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntityUpdatedAuditEventCreateManyArgs>(args?: SelectSubset<T, EntityUpdatedAuditEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EntityUpdatedAuditEvent.
     * @param {EntityUpdatedAuditEventDeleteArgs} args - Arguments to delete one EntityUpdatedAuditEvent.
     * @example
     * // Delete one EntityUpdatedAuditEvent
     * const EntityUpdatedAuditEvent = await prisma.entityUpdatedAuditEvent.delete({
     *   where: {
     *     // ... filter to delete one EntityUpdatedAuditEvent
     *   }
     * })
     * 
     */
    delete<T extends EntityUpdatedAuditEventDeleteArgs>(args: SelectSubset<T, EntityUpdatedAuditEventDeleteArgs<ExtArgs>>): Prisma__EntityUpdatedAuditEventClient<$Result.GetResult<Prisma.$EntityUpdatedAuditEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EntityUpdatedAuditEvent.
     * @param {EntityUpdatedAuditEventUpdateArgs} args - Arguments to update one EntityUpdatedAuditEvent.
     * @example
     * // Update one EntityUpdatedAuditEvent
     * const entityUpdatedAuditEvent = await prisma.entityUpdatedAuditEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntityUpdatedAuditEventUpdateArgs>(args: SelectSubset<T, EntityUpdatedAuditEventUpdateArgs<ExtArgs>>): Prisma__EntityUpdatedAuditEventClient<$Result.GetResult<Prisma.$EntityUpdatedAuditEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EntityUpdatedAuditEvents.
     * @param {EntityUpdatedAuditEventDeleteManyArgs} args - Arguments to filter EntityUpdatedAuditEvents to delete.
     * @example
     * // Delete a few EntityUpdatedAuditEvents
     * const { count } = await prisma.entityUpdatedAuditEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntityUpdatedAuditEventDeleteManyArgs>(args?: SelectSubset<T, EntityUpdatedAuditEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EntityUpdatedAuditEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityUpdatedAuditEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EntityUpdatedAuditEvents
     * const entityUpdatedAuditEvent = await prisma.entityUpdatedAuditEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntityUpdatedAuditEventUpdateManyArgs>(args: SelectSubset<T, EntityUpdatedAuditEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EntityUpdatedAuditEvent.
     * @param {EntityUpdatedAuditEventUpsertArgs} args - Arguments to update or create a EntityUpdatedAuditEvent.
     * @example
     * // Update or create a EntityUpdatedAuditEvent
     * const entityUpdatedAuditEvent = await prisma.entityUpdatedAuditEvent.upsert({
     *   create: {
     *     // ... data to create a EntityUpdatedAuditEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EntityUpdatedAuditEvent we want to update
     *   }
     * })
     */
    upsert<T extends EntityUpdatedAuditEventUpsertArgs>(args: SelectSubset<T, EntityUpdatedAuditEventUpsertArgs<ExtArgs>>): Prisma__EntityUpdatedAuditEventClient<$Result.GetResult<Prisma.$EntityUpdatedAuditEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EntityUpdatedAuditEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityUpdatedAuditEventCountArgs} args - Arguments to filter EntityUpdatedAuditEvents to count.
     * @example
     * // Count the number of EntityUpdatedAuditEvents
     * const count = await prisma.entityUpdatedAuditEvent.count({
     *   where: {
     *     // ... the filter for the EntityUpdatedAuditEvents we want to count
     *   }
     * })
    **/
    count<T extends EntityUpdatedAuditEventCountArgs>(
      args?: Subset<T, EntityUpdatedAuditEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntityUpdatedAuditEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EntityUpdatedAuditEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityUpdatedAuditEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EntityUpdatedAuditEventAggregateArgs>(args: Subset<T, EntityUpdatedAuditEventAggregateArgs>): Prisma.PrismaPromise<GetEntityUpdatedAuditEventAggregateType<T>>

    /**
     * Group by EntityUpdatedAuditEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityUpdatedAuditEventGroupByArgs} args - Group by arguments.
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
      T extends EntityUpdatedAuditEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntityUpdatedAuditEventGroupByArgs['orderBy'] }
        : { orderBy?: EntityUpdatedAuditEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EntityUpdatedAuditEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntityUpdatedAuditEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EntityUpdatedAuditEvent model
   */
  readonly fields: EntityUpdatedAuditEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EntityUpdatedAuditEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntityUpdatedAuditEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EntityUpdatedAuditEvent model
   */
  interface EntityUpdatedAuditEventFieldRefs {
    readonly id: FieldRef<"EntityUpdatedAuditEvent", 'String'>
    readonly entityType: FieldRef<"EntityUpdatedAuditEvent", 'EntityTypes'>
    readonly entityId: FieldRef<"EntityUpdatedAuditEvent", 'String'>
    readonly reason: FieldRef<"EntityUpdatedAuditEvent", 'String'>
    readonly diff: FieldRef<"EntityUpdatedAuditEvent", 'String'>
    readonly createdAt: FieldRef<"EntityUpdatedAuditEvent", 'DateTime'>
    readonly createdByUserId: FieldRef<"EntityUpdatedAuditEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EntityUpdatedAuditEvent findUnique
   */
  export type EntityUpdatedAuditEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityUpdatedAuditEvent
     */
    select?: EntityUpdatedAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntityUpdatedAuditEvent
     */
    omit?: EntityUpdatedAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityUpdatedAuditEventInclude<ExtArgs> | null
    /**
     * Filter, which EntityUpdatedAuditEvent to fetch.
     */
    where: EntityUpdatedAuditEventWhereUniqueInput
  }

  /**
   * EntityUpdatedAuditEvent findUniqueOrThrow
   */
  export type EntityUpdatedAuditEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityUpdatedAuditEvent
     */
    select?: EntityUpdatedAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntityUpdatedAuditEvent
     */
    omit?: EntityUpdatedAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityUpdatedAuditEventInclude<ExtArgs> | null
    /**
     * Filter, which EntityUpdatedAuditEvent to fetch.
     */
    where: EntityUpdatedAuditEventWhereUniqueInput
  }

  /**
   * EntityUpdatedAuditEvent findFirst
   */
  export type EntityUpdatedAuditEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityUpdatedAuditEvent
     */
    select?: EntityUpdatedAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntityUpdatedAuditEvent
     */
    omit?: EntityUpdatedAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityUpdatedAuditEventInclude<ExtArgs> | null
    /**
     * Filter, which EntityUpdatedAuditEvent to fetch.
     */
    where?: EntityUpdatedAuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntityUpdatedAuditEvents to fetch.
     */
    orderBy?: EntityUpdatedAuditEventOrderByWithRelationInput | EntityUpdatedAuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EntityUpdatedAuditEvents.
     */
    cursor?: EntityUpdatedAuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntityUpdatedAuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntityUpdatedAuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EntityUpdatedAuditEvents.
     */
    distinct?: EntityUpdatedAuditEventScalarFieldEnum | EntityUpdatedAuditEventScalarFieldEnum[]
  }

  /**
   * EntityUpdatedAuditEvent findFirstOrThrow
   */
  export type EntityUpdatedAuditEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityUpdatedAuditEvent
     */
    select?: EntityUpdatedAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntityUpdatedAuditEvent
     */
    omit?: EntityUpdatedAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityUpdatedAuditEventInclude<ExtArgs> | null
    /**
     * Filter, which EntityUpdatedAuditEvent to fetch.
     */
    where?: EntityUpdatedAuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntityUpdatedAuditEvents to fetch.
     */
    orderBy?: EntityUpdatedAuditEventOrderByWithRelationInput | EntityUpdatedAuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EntityUpdatedAuditEvents.
     */
    cursor?: EntityUpdatedAuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntityUpdatedAuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntityUpdatedAuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EntityUpdatedAuditEvents.
     */
    distinct?: EntityUpdatedAuditEventScalarFieldEnum | EntityUpdatedAuditEventScalarFieldEnum[]
  }

  /**
   * EntityUpdatedAuditEvent findMany
   */
  export type EntityUpdatedAuditEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityUpdatedAuditEvent
     */
    select?: EntityUpdatedAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntityUpdatedAuditEvent
     */
    omit?: EntityUpdatedAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityUpdatedAuditEventInclude<ExtArgs> | null
    /**
     * Filter, which EntityUpdatedAuditEvents to fetch.
     */
    where?: EntityUpdatedAuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntityUpdatedAuditEvents to fetch.
     */
    orderBy?: EntityUpdatedAuditEventOrderByWithRelationInput | EntityUpdatedAuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EntityUpdatedAuditEvents.
     */
    cursor?: EntityUpdatedAuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntityUpdatedAuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntityUpdatedAuditEvents.
     */
    skip?: number
    distinct?: EntityUpdatedAuditEventScalarFieldEnum | EntityUpdatedAuditEventScalarFieldEnum[]
  }

  /**
   * EntityUpdatedAuditEvent create
   */
  export type EntityUpdatedAuditEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityUpdatedAuditEvent
     */
    select?: EntityUpdatedAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntityUpdatedAuditEvent
     */
    omit?: EntityUpdatedAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityUpdatedAuditEventInclude<ExtArgs> | null
    /**
     * The data needed to create a EntityUpdatedAuditEvent.
     */
    data: XOR<EntityUpdatedAuditEventCreateInput, EntityUpdatedAuditEventUncheckedCreateInput>
  }

  /**
   * EntityUpdatedAuditEvent createMany
   */
  export type EntityUpdatedAuditEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EntityUpdatedAuditEvents.
     */
    data: EntityUpdatedAuditEventCreateManyInput | EntityUpdatedAuditEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EntityUpdatedAuditEvent update
   */
  export type EntityUpdatedAuditEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityUpdatedAuditEvent
     */
    select?: EntityUpdatedAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntityUpdatedAuditEvent
     */
    omit?: EntityUpdatedAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityUpdatedAuditEventInclude<ExtArgs> | null
    /**
     * The data needed to update a EntityUpdatedAuditEvent.
     */
    data: XOR<EntityUpdatedAuditEventUpdateInput, EntityUpdatedAuditEventUncheckedUpdateInput>
    /**
     * Choose, which EntityUpdatedAuditEvent to update.
     */
    where: EntityUpdatedAuditEventWhereUniqueInput
  }

  /**
   * EntityUpdatedAuditEvent updateMany
   */
  export type EntityUpdatedAuditEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EntityUpdatedAuditEvents.
     */
    data: XOR<EntityUpdatedAuditEventUpdateManyMutationInput, EntityUpdatedAuditEventUncheckedUpdateManyInput>
    /**
     * Filter which EntityUpdatedAuditEvents to update
     */
    where?: EntityUpdatedAuditEventWhereInput
    /**
     * Limit how many EntityUpdatedAuditEvents to update.
     */
    limit?: number
  }

  /**
   * EntityUpdatedAuditEvent upsert
   */
  export type EntityUpdatedAuditEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityUpdatedAuditEvent
     */
    select?: EntityUpdatedAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntityUpdatedAuditEvent
     */
    omit?: EntityUpdatedAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityUpdatedAuditEventInclude<ExtArgs> | null
    /**
     * The filter to search for the EntityUpdatedAuditEvent to update in case it exists.
     */
    where: EntityUpdatedAuditEventWhereUniqueInput
    /**
     * In case the EntityUpdatedAuditEvent found by the `where` argument doesn't exist, create a new EntityUpdatedAuditEvent with this data.
     */
    create: XOR<EntityUpdatedAuditEventCreateInput, EntityUpdatedAuditEventUncheckedCreateInput>
    /**
     * In case the EntityUpdatedAuditEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntityUpdatedAuditEventUpdateInput, EntityUpdatedAuditEventUncheckedUpdateInput>
  }

  /**
   * EntityUpdatedAuditEvent delete
   */
  export type EntityUpdatedAuditEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityUpdatedAuditEvent
     */
    select?: EntityUpdatedAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntityUpdatedAuditEvent
     */
    omit?: EntityUpdatedAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityUpdatedAuditEventInclude<ExtArgs> | null
    /**
     * Filter which EntityUpdatedAuditEvent to delete.
     */
    where: EntityUpdatedAuditEventWhereUniqueInput
  }

  /**
   * EntityUpdatedAuditEvent deleteMany
   */
  export type EntityUpdatedAuditEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EntityUpdatedAuditEvents to delete
     */
    where?: EntityUpdatedAuditEventWhereInput
    /**
     * Limit how many EntityUpdatedAuditEvents to delete.
     */
    limit?: number
  }

  /**
   * EntityUpdatedAuditEvent without action
   */
  export type EntityUpdatedAuditEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityUpdatedAuditEvent
     */
    select?: EntityUpdatedAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntityUpdatedAuditEvent
     */
    omit?: EntityUpdatedAuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityUpdatedAuditEventInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    login: 'login',
    pwd: 'pwd',
    role: 'role',
    subExternalId: 'subExternalId',
    totalPayableReward: 'totalPayableReward',
    customMonetaryRewardAmount: 'customMonetaryRewardAmount',
    note: 'note',
    createdAt: 'createdAt',
    createdByUserId: 'createdByUserId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SubScalarFieldEnum: {
    externalId: 'externalId',
    login: 'login',
    pwd: 'pwd',
    note: 'note',
    m3uPlaylist: 'm3uPlaylist',
    epg: 'epg',
    publicKey: 'publicKey',
    media: 'media',
    pkgType: 'pkgType',
    startDate: 'startDate',
    endDate: 'endDate',
    region: 'region',
    createdAt: 'createdAt',
    createdByUserId: 'createdByUserId'
  };

  export type SubScalarFieldEnum = (typeof SubScalarFieldEnum)[keyof typeof SubScalarFieldEnum]


  export const ReferalDetailsScalarFieldEnum: {
    attractedSubExternalId: 'attractedSubExternalId',
    attractorUserId: 'attractorUserId',
    effectiveAttractorTier: 'effectiveAttractorTier'
  };

  export type ReferalDetailsScalarFieldEnum = (typeof ReferalDetailsScalarFieldEnum)[keyof typeof ReferalDetailsScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    currency: 'currency',
    amount: 'amount',
    date: 'date',
    subExternalId: 'subExternalId',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SubPackageExtendedAuditEventScalarFieldEnum: {
    id: 'id',
    prevEndDate: 'prevEndDate',
    newEndDate: 'newEndDate',
    attractedSubExternalId: 'attractedSubExternalId',
    paymentId: 'paymentId',
    subExternalId: 'subExternalId',
    reason: 'reason',
    createdAt: 'createdAt',
    createdByUserId: 'createdByUserId'
  };

  export type SubPackageExtendedAuditEventScalarFieldEnum = (typeof SubPackageExtendedAuditEventScalarFieldEnum)[keyof typeof SubPackageExtendedAuditEventScalarFieldEnum]


  export const UserRewardTriggeredAuditEventScalarFieldEnum: {
    id: 'id',
    customMonetaryRewardAmount: 'customMonetaryRewardAmount',
    rewardType: 'rewardType',
    rewardAmount: 'rewardAmount',
    prevTotalPayableReward: 'prevTotalPayableReward',
    newTotalPayableReward: 'newTotalPayableReward',
    highestTierReached: 'highestTierReached',
    referalDetails_attractedSubExternalId: 'referalDetails_attractedSubExternalId',
    spe_ae_id: 'spe_ae_id',
    createdAt: 'createdAt'
  };

  export type UserRewardTriggeredAuditEventScalarFieldEnum = (typeof UserRewardTriggeredAuditEventScalarFieldEnum)[keyof typeof UserRewardTriggeredAuditEventScalarFieldEnum]


  export const UserRepaymentAuditEventScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    repaymentAmount: 'repaymentAmount',
    prevTotalPayableReward: 'prevTotalPayableReward',
    newTotalPayableReward: 'newTotalPayableReward',
    createdAt: 'createdAt',
    createdByUserId: 'createdByUserId'
  };

  export type UserRepaymentAuditEventScalarFieldEnum = (typeof UserRepaymentAuditEventScalarFieldEnum)[keyof typeof UserRepaymentAuditEventScalarFieldEnum]


  export const EntityUpdatedAuditEventScalarFieldEnum: {
    id: 'id',
    entityType: 'entityType',
    entityId: 'entityId',
    reason: 'reason',
    diff: 'diff',
    createdAt: 'createdAt',
    createdByUserId: 'createdByUserId'
  };

  export type EntityUpdatedAuditEventScalarFieldEnum = (typeof EntityUpdatedAuditEventScalarFieldEnum)[keyof typeof EntityUpdatedAuditEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    login: 'login',
    pwd: 'pwd',
    subExternalId: 'subExternalId',
    note: 'note',
    createdByUserId: 'createdByUserId'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const SubOrderByRelevanceFieldEnum: {
    externalId: 'externalId',
    login: 'login',
    pwd: 'pwd',
    note: 'note',
    m3uPlaylist: 'm3uPlaylist',
    epg: 'epg',
    publicKey: 'publicKey',
    media: 'media',
    createdByUserId: 'createdByUserId'
  };

  export type SubOrderByRelevanceFieldEnum = (typeof SubOrderByRelevanceFieldEnum)[keyof typeof SubOrderByRelevanceFieldEnum]


  export const ReferalDetailsOrderByRelevanceFieldEnum: {
    attractedSubExternalId: 'attractedSubExternalId',
    attractorUserId: 'attractorUserId'
  };

  export type ReferalDetailsOrderByRelevanceFieldEnum = (typeof ReferalDetailsOrderByRelevanceFieldEnum)[keyof typeof ReferalDetailsOrderByRelevanceFieldEnum]


  export const PaymentOrderByRelevanceFieldEnum: {
    id: 'id',
    subExternalId: 'subExternalId'
  };

  export type PaymentOrderByRelevanceFieldEnum = (typeof PaymentOrderByRelevanceFieldEnum)[keyof typeof PaymentOrderByRelevanceFieldEnum]


  export const SubPackageExtendedAuditEventOrderByRelevanceFieldEnum: {
    id: 'id',
    attractedSubExternalId: 'attractedSubExternalId',
    paymentId: 'paymentId',
    subExternalId: 'subExternalId',
    createdByUserId: 'createdByUserId'
  };

  export type SubPackageExtendedAuditEventOrderByRelevanceFieldEnum = (typeof SubPackageExtendedAuditEventOrderByRelevanceFieldEnum)[keyof typeof SubPackageExtendedAuditEventOrderByRelevanceFieldEnum]


  export const UserRewardTriggeredAuditEventOrderByRelevanceFieldEnum: {
    id: 'id',
    referalDetails_attractedSubExternalId: 'referalDetails_attractedSubExternalId',
    spe_ae_id: 'spe_ae_id'
  };

  export type UserRewardTriggeredAuditEventOrderByRelevanceFieldEnum = (typeof UserRewardTriggeredAuditEventOrderByRelevanceFieldEnum)[keyof typeof UserRewardTriggeredAuditEventOrderByRelevanceFieldEnum]


  export const UserRepaymentAuditEventOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdByUserId: 'createdByUserId'
  };

  export type UserRepaymentAuditEventOrderByRelevanceFieldEnum = (typeof UserRepaymentAuditEventOrderByRelevanceFieldEnum)[keyof typeof UserRepaymentAuditEventOrderByRelevanceFieldEnum]


  export const EntityUpdatedAuditEventOrderByRelevanceFieldEnum: {
    id: 'id',
    entityId: 'entityId',
    reason: 'reason',
    diff: 'diff',
    createdByUserId: 'createdByUserId'
  };

  export type EntityUpdatedAuditEventOrderByRelevanceFieldEnum = (typeof EntityUpdatedAuditEventOrderByRelevanceFieldEnum)[keyof typeof EntityUpdatedAuditEventOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'PackageType'
   */
  export type EnumPackageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PackageType'>
    


  /**
   * Reference to a field of type 'Region'
   */
  export type EnumRegionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Region'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Currency'
   */
  export type EnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Currency'>
    


  /**
   * Reference to a field of type 'PackageExtensionReason'
   */
  export type EnumPackageExtensionReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PackageExtensionReason'>
    


  /**
   * Reference to a field of type 'MonetaryRewardType'
   */
  export type EnumMonetaryRewardTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MonetaryRewardType'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'EntityTypes'
   */
  export type EnumEntityTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EntityTypes'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    login?: StringFilter<"User"> | string
    pwd?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    subExternalId?: StringNullableFilter<"User"> | string | null
    totalPayableReward?: FloatFilter<"User"> | number
    customMonetaryRewardAmount?: FloatNullableFilter<"User"> | number | null
    note?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    createdByUserId?: StringNullableFilter<"User"> | string | null
    sub?: XOR<SubNullableScalarRelationFilter, SubWhereInput> | null
    attractedSubs?: ReferalDetailsListRelationFilter
    ur_ae?: UserRepaymentAuditEventListRelationFilter
    createdSubs?: SubListRelationFilter
    createdUsers?: UserListRelationFilter
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    extensionsSubmitted?: SubPackageExtendedAuditEventListRelationFilter
    repaymentsSubmitted?: UserRepaymentAuditEventListRelationFilter
    modificationsSubmitted?: EntityUpdatedAuditEventListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    login?: SortOrder
    pwd?: SortOrder
    role?: SortOrder
    subExternalId?: SortOrderInput | SortOrder
    totalPayableReward?: SortOrder
    customMonetaryRewardAmount?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrderInput | SortOrder
    sub?: SubOrderByWithRelationInput
    attractedSubs?: ReferalDetailsOrderByRelationAggregateInput
    ur_ae?: UserRepaymentAuditEventOrderByRelationAggregateInput
    createdSubs?: SubOrderByRelationAggregateInput
    createdUsers?: UserOrderByRelationAggregateInput
    createdBy?: UserOrderByWithRelationInput
    extensionsSubmitted?: SubPackageExtendedAuditEventOrderByRelationAggregateInput
    repaymentsSubmitted?: UserRepaymentAuditEventOrderByRelationAggregateInput
    modificationsSubmitted?: EntityUpdatedAuditEventOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    login?: string
    subExternalId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    pwd?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    totalPayableReward?: FloatFilter<"User"> | number
    customMonetaryRewardAmount?: FloatNullableFilter<"User"> | number | null
    note?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    createdByUserId?: StringNullableFilter<"User"> | string | null
    sub?: XOR<SubNullableScalarRelationFilter, SubWhereInput> | null
    attractedSubs?: ReferalDetailsListRelationFilter
    ur_ae?: UserRepaymentAuditEventListRelationFilter
    createdSubs?: SubListRelationFilter
    createdUsers?: UserListRelationFilter
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    extensionsSubmitted?: SubPackageExtendedAuditEventListRelationFilter
    repaymentsSubmitted?: UserRepaymentAuditEventListRelationFilter
    modificationsSubmitted?: EntityUpdatedAuditEventListRelationFilter
  }, "login" | "subExternalId">

  export type UserOrderByWithAggregationInput = {
    login?: SortOrder
    pwd?: SortOrder
    role?: SortOrder
    subExternalId?: SortOrderInput | SortOrder
    totalPayableReward?: SortOrder
    customMonetaryRewardAmount?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrderInput | SortOrder
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
    login?: StringWithAggregatesFilter<"User"> | string
    pwd?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    subExternalId?: StringNullableWithAggregatesFilter<"User"> | string | null
    totalPayableReward?: FloatWithAggregatesFilter<"User"> | number
    customMonetaryRewardAmount?: FloatNullableWithAggregatesFilter<"User"> | number | null
    note?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    createdByUserId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type SubWhereInput = {
    AND?: SubWhereInput | SubWhereInput[]
    OR?: SubWhereInput[]
    NOT?: SubWhereInput | SubWhereInput[]
    externalId?: StringFilter<"Sub"> | string
    login?: StringNullableFilter<"Sub"> | string | null
    pwd?: StringNullableFilter<"Sub"> | string | null
    note?: StringNullableFilter<"Sub"> | string | null
    m3uPlaylist?: StringNullableFilter<"Sub"> | string | null
    epg?: StringNullableFilter<"Sub"> | string | null
    publicKey?: StringNullableFilter<"Sub"> | string | null
    media?: StringNullableFilter<"Sub"> | string | null
    pkgType?: EnumPackageTypeNullableFilter<"Sub"> | $Enums.PackageType | null
    startDate?: DateTimeFilter<"Sub"> | Date | string
    endDate?: DateTimeFilter<"Sub"> | Date | string
    region?: EnumRegionNullableFilter<"Sub"> | $Enums.Region | null
    createdAt?: DateTimeFilter<"Sub"> | Date | string
    createdByUserId?: StringFilter<"Sub"> | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    referalDetails?: XOR<ReferalDetailsNullableScalarRelationFilter, ReferalDetailsWhereInput> | null
    payments?: PaymentListRelationFilter
    packageExtensions?: SubPackageExtendedAuditEventListRelationFilter
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SubOrderByWithRelationInput = {
    externalId?: SortOrder
    login?: SortOrderInput | SortOrder
    pwd?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    m3uPlaylist?: SortOrderInput | SortOrder
    epg?: SortOrderInput | SortOrder
    publicKey?: SortOrderInput | SortOrder
    media?: SortOrderInput | SortOrder
    pkgType?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    region?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
    user?: UserOrderByWithRelationInput
    referalDetails?: ReferalDetailsOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
    packageExtensions?: SubPackageExtendedAuditEventOrderByRelationAggregateInput
    createdBy?: UserOrderByWithRelationInput
    _relevance?: SubOrderByRelevanceInput
  }

  export type SubWhereUniqueInput = Prisma.AtLeast<{
    externalId?: string
    AND?: SubWhereInput | SubWhereInput[]
    OR?: SubWhereInput[]
    NOT?: SubWhereInput | SubWhereInput[]
    login?: StringNullableFilter<"Sub"> | string | null
    pwd?: StringNullableFilter<"Sub"> | string | null
    note?: StringNullableFilter<"Sub"> | string | null
    m3uPlaylist?: StringNullableFilter<"Sub"> | string | null
    epg?: StringNullableFilter<"Sub"> | string | null
    publicKey?: StringNullableFilter<"Sub"> | string | null
    media?: StringNullableFilter<"Sub"> | string | null
    pkgType?: EnumPackageTypeNullableFilter<"Sub"> | $Enums.PackageType | null
    startDate?: DateTimeFilter<"Sub"> | Date | string
    endDate?: DateTimeFilter<"Sub"> | Date | string
    region?: EnumRegionNullableFilter<"Sub"> | $Enums.Region | null
    createdAt?: DateTimeFilter<"Sub"> | Date | string
    createdByUserId?: StringFilter<"Sub"> | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    referalDetails?: XOR<ReferalDetailsNullableScalarRelationFilter, ReferalDetailsWhereInput> | null
    payments?: PaymentListRelationFilter
    packageExtensions?: SubPackageExtendedAuditEventListRelationFilter
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "externalId">

  export type SubOrderByWithAggregationInput = {
    externalId?: SortOrder
    login?: SortOrderInput | SortOrder
    pwd?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    m3uPlaylist?: SortOrderInput | SortOrder
    epg?: SortOrderInput | SortOrder
    publicKey?: SortOrderInput | SortOrder
    media?: SortOrderInput | SortOrder
    pkgType?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    region?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
    _count?: SubCountOrderByAggregateInput
    _max?: SubMaxOrderByAggregateInput
    _min?: SubMinOrderByAggregateInput
  }

  export type SubScalarWhereWithAggregatesInput = {
    AND?: SubScalarWhereWithAggregatesInput | SubScalarWhereWithAggregatesInput[]
    OR?: SubScalarWhereWithAggregatesInput[]
    NOT?: SubScalarWhereWithAggregatesInput | SubScalarWhereWithAggregatesInput[]
    externalId?: StringWithAggregatesFilter<"Sub"> | string
    login?: StringNullableWithAggregatesFilter<"Sub"> | string | null
    pwd?: StringNullableWithAggregatesFilter<"Sub"> | string | null
    note?: StringNullableWithAggregatesFilter<"Sub"> | string | null
    m3uPlaylist?: StringNullableWithAggregatesFilter<"Sub"> | string | null
    epg?: StringNullableWithAggregatesFilter<"Sub"> | string | null
    publicKey?: StringNullableWithAggregatesFilter<"Sub"> | string | null
    media?: StringNullableWithAggregatesFilter<"Sub"> | string | null
    pkgType?: EnumPackageTypeNullableWithAggregatesFilter<"Sub"> | $Enums.PackageType | null
    startDate?: DateTimeWithAggregatesFilter<"Sub"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Sub"> | Date | string
    region?: EnumRegionNullableWithAggregatesFilter<"Sub"> | $Enums.Region | null
    createdAt?: DateTimeWithAggregatesFilter<"Sub"> | Date | string
    createdByUserId?: StringWithAggregatesFilter<"Sub"> | string
  }

  export type ReferalDetailsWhereInput = {
    AND?: ReferalDetailsWhereInput | ReferalDetailsWhereInput[]
    OR?: ReferalDetailsWhereInput[]
    NOT?: ReferalDetailsWhereInput | ReferalDetailsWhereInput[]
    attractedSubExternalId?: StringFilter<"ReferalDetails"> | string
    attractorUserId?: StringFilter<"ReferalDetails"> | string
    effectiveAttractorTier?: IntFilter<"ReferalDetails"> | number
    attractedSub?: XOR<SubScalarRelationFilter, SubWhereInput>
    attractor?: XOR<UserScalarRelationFilter, UserWhereInput>
    spe_ae?: XOR<SubPackageExtendedAuditEventNullableScalarRelationFilter, SubPackageExtendedAuditEventWhereInput> | null
    urt_ae?: UserRewardTriggeredAuditEventListRelationFilter
  }

  export type ReferalDetailsOrderByWithRelationInput = {
    attractedSubExternalId?: SortOrder
    attractorUserId?: SortOrder
    effectiveAttractorTier?: SortOrder
    attractedSub?: SubOrderByWithRelationInput
    attractor?: UserOrderByWithRelationInput
    spe_ae?: SubPackageExtendedAuditEventOrderByWithRelationInput
    urt_ae?: UserRewardTriggeredAuditEventOrderByRelationAggregateInput
    _relevance?: ReferalDetailsOrderByRelevanceInput
  }

  export type ReferalDetailsWhereUniqueInput = Prisma.AtLeast<{
    attractedSubExternalId?: string
    AND?: ReferalDetailsWhereInput | ReferalDetailsWhereInput[]
    OR?: ReferalDetailsWhereInput[]
    NOT?: ReferalDetailsWhereInput | ReferalDetailsWhereInput[]
    attractorUserId?: StringFilter<"ReferalDetails"> | string
    effectiveAttractorTier?: IntFilter<"ReferalDetails"> | number
    attractedSub?: XOR<SubScalarRelationFilter, SubWhereInput>
    attractor?: XOR<UserScalarRelationFilter, UserWhereInput>
    spe_ae?: XOR<SubPackageExtendedAuditEventNullableScalarRelationFilter, SubPackageExtendedAuditEventWhereInput> | null
    urt_ae?: UserRewardTriggeredAuditEventListRelationFilter
  }, "attractedSubExternalId">

  export type ReferalDetailsOrderByWithAggregationInput = {
    attractedSubExternalId?: SortOrder
    attractorUserId?: SortOrder
    effectiveAttractorTier?: SortOrder
    _count?: ReferalDetailsCountOrderByAggregateInput
    _avg?: ReferalDetailsAvgOrderByAggregateInput
    _max?: ReferalDetailsMaxOrderByAggregateInput
    _min?: ReferalDetailsMinOrderByAggregateInput
    _sum?: ReferalDetailsSumOrderByAggregateInput
  }

  export type ReferalDetailsScalarWhereWithAggregatesInput = {
    AND?: ReferalDetailsScalarWhereWithAggregatesInput | ReferalDetailsScalarWhereWithAggregatesInput[]
    OR?: ReferalDetailsScalarWhereWithAggregatesInput[]
    NOT?: ReferalDetailsScalarWhereWithAggregatesInput | ReferalDetailsScalarWhereWithAggregatesInput[]
    attractedSubExternalId?: StringWithAggregatesFilter<"ReferalDetails"> | string
    attractorUserId?: StringWithAggregatesFilter<"ReferalDetails"> | string
    effectiveAttractorTier?: IntWithAggregatesFilter<"ReferalDetails"> | number
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    currency?: EnumCurrencyFilter<"Payment"> | $Enums.Currency
    amount?: FloatFilter<"Payment"> | number
    date?: DateTimeFilter<"Payment"> | Date | string
    subExternalId?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    sub?: XOR<SubScalarRelationFilter, SubWhereInput>
    spe_ae?: XOR<SubPackageExtendedAuditEventNullableScalarRelationFilter, SubPackageExtendedAuditEventWhereInput> | null
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    currency?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    subExternalId?: SortOrder
    createdAt?: SortOrder
    sub?: SubOrderByWithRelationInput
    spe_ae?: SubPackageExtendedAuditEventOrderByWithRelationInput
    _relevance?: PaymentOrderByRelevanceInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    currency?: EnumCurrencyFilter<"Payment"> | $Enums.Currency
    amount?: FloatFilter<"Payment"> | number
    date?: DateTimeFilter<"Payment"> | Date | string
    subExternalId?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    sub?: XOR<SubScalarRelationFilter, SubWhereInput>
    spe_ae?: XOR<SubPackageExtendedAuditEventNullableScalarRelationFilter, SubPackageExtendedAuditEventWhereInput> | null
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    currency?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    subExternalId?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    currency?: EnumCurrencyWithAggregatesFilter<"Payment"> | $Enums.Currency
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    date?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    subExternalId?: StringWithAggregatesFilter<"Payment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type SubPackageExtendedAuditEventWhereInput = {
    AND?: SubPackageExtendedAuditEventWhereInput | SubPackageExtendedAuditEventWhereInput[]
    OR?: SubPackageExtendedAuditEventWhereInput[]
    NOT?: SubPackageExtendedAuditEventWhereInput | SubPackageExtendedAuditEventWhereInput[]
    id?: StringFilter<"SubPackageExtendedAuditEvent"> | string
    prevEndDate?: DateTimeFilter<"SubPackageExtendedAuditEvent"> | Date | string
    newEndDate?: DateTimeFilter<"SubPackageExtendedAuditEvent"> | Date | string
    attractedSubExternalId?: StringNullableFilter<"SubPackageExtendedAuditEvent"> | string | null
    paymentId?: StringFilter<"SubPackageExtendedAuditEvent"> | string
    subExternalId?: StringFilter<"SubPackageExtendedAuditEvent"> | string
    reason?: EnumPackageExtensionReasonFilter<"SubPackageExtendedAuditEvent"> | $Enums.PackageExtensionReason
    createdAt?: DateTimeFilter<"SubPackageExtendedAuditEvent"> | Date | string
    createdByUserId?: StringFilter<"SubPackageExtendedAuditEvent"> | string
    attractedSubReferalDetails?: XOR<ReferalDetailsNullableScalarRelationFilter, ReferalDetailsWhereInput> | null
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
    sub?: XOR<SubScalarRelationFilter, SubWhereInput>
    urt_ae?: XOR<UserRewardTriggeredAuditEventNullableScalarRelationFilter, UserRewardTriggeredAuditEventWhereInput> | null
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SubPackageExtendedAuditEventOrderByWithRelationInput = {
    id?: SortOrder
    prevEndDate?: SortOrder
    newEndDate?: SortOrder
    attractedSubExternalId?: SortOrderInput | SortOrder
    paymentId?: SortOrder
    subExternalId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
    attractedSubReferalDetails?: ReferalDetailsOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
    sub?: SubOrderByWithRelationInput
    urt_ae?: UserRewardTriggeredAuditEventOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    _relevance?: SubPackageExtendedAuditEventOrderByRelevanceInput
  }

  export type SubPackageExtendedAuditEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    attractedSubExternalId?: string
    paymentId?: string
    AND?: SubPackageExtendedAuditEventWhereInput | SubPackageExtendedAuditEventWhereInput[]
    OR?: SubPackageExtendedAuditEventWhereInput[]
    NOT?: SubPackageExtendedAuditEventWhereInput | SubPackageExtendedAuditEventWhereInput[]
    prevEndDate?: DateTimeFilter<"SubPackageExtendedAuditEvent"> | Date | string
    newEndDate?: DateTimeFilter<"SubPackageExtendedAuditEvent"> | Date | string
    subExternalId?: StringFilter<"SubPackageExtendedAuditEvent"> | string
    reason?: EnumPackageExtensionReasonFilter<"SubPackageExtendedAuditEvent"> | $Enums.PackageExtensionReason
    createdAt?: DateTimeFilter<"SubPackageExtendedAuditEvent"> | Date | string
    createdByUserId?: StringFilter<"SubPackageExtendedAuditEvent"> | string
    attractedSubReferalDetails?: XOR<ReferalDetailsNullableScalarRelationFilter, ReferalDetailsWhereInput> | null
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
    sub?: XOR<SubScalarRelationFilter, SubWhereInput>
    urt_ae?: XOR<UserRewardTriggeredAuditEventNullableScalarRelationFilter, UserRewardTriggeredAuditEventWhereInput> | null
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "attractedSubExternalId" | "paymentId">

  export type SubPackageExtendedAuditEventOrderByWithAggregationInput = {
    id?: SortOrder
    prevEndDate?: SortOrder
    newEndDate?: SortOrder
    attractedSubExternalId?: SortOrderInput | SortOrder
    paymentId?: SortOrder
    subExternalId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
    _count?: SubPackageExtendedAuditEventCountOrderByAggregateInput
    _max?: SubPackageExtendedAuditEventMaxOrderByAggregateInput
    _min?: SubPackageExtendedAuditEventMinOrderByAggregateInput
  }

  export type SubPackageExtendedAuditEventScalarWhereWithAggregatesInput = {
    AND?: SubPackageExtendedAuditEventScalarWhereWithAggregatesInput | SubPackageExtendedAuditEventScalarWhereWithAggregatesInput[]
    OR?: SubPackageExtendedAuditEventScalarWhereWithAggregatesInput[]
    NOT?: SubPackageExtendedAuditEventScalarWhereWithAggregatesInput | SubPackageExtendedAuditEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubPackageExtendedAuditEvent"> | string
    prevEndDate?: DateTimeWithAggregatesFilter<"SubPackageExtendedAuditEvent"> | Date | string
    newEndDate?: DateTimeWithAggregatesFilter<"SubPackageExtendedAuditEvent"> | Date | string
    attractedSubExternalId?: StringNullableWithAggregatesFilter<"SubPackageExtendedAuditEvent"> | string | null
    paymentId?: StringWithAggregatesFilter<"SubPackageExtendedAuditEvent"> | string
    subExternalId?: StringWithAggregatesFilter<"SubPackageExtendedAuditEvent"> | string
    reason?: EnumPackageExtensionReasonWithAggregatesFilter<"SubPackageExtendedAuditEvent"> | $Enums.PackageExtensionReason
    createdAt?: DateTimeWithAggregatesFilter<"SubPackageExtendedAuditEvent"> | Date | string
    createdByUserId?: StringWithAggregatesFilter<"SubPackageExtendedAuditEvent"> | string
  }

  export type UserRewardTriggeredAuditEventWhereInput = {
    AND?: UserRewardTriggeredAuditEventWhereInput | UserRewardTriggeredAuditEventWhereInput[]
    OR?: UserRewardTriggeredAuditEventWhereInput[]
    NOT?: UserRewardTriggeredAuditEventWhereInput | UserRewardTriggeredAuditEventWhereInput[]
    id?: StringFilter<"UserRewardTriggeredAuditEvent"> | string
    customMonetaryRewardAmount?: FloatNullableFilter<"UserRewardTriggeredAuditEvent"> | number | null
    rewardType?: EnumMonetaryRewardTypeFilter<"UserRewardTriggeredAuditEvent"> | $Enums.MonetaryRewardType
    rewardAmount?: FloatFilter<"UserRewardTriggeredAuditEvent"> | number
    prevTotalPayableReward?: FloatFilter<"UserRewardTriggeredAuditEvent"> | number
    newTotalPayableReward?: FloatFilter<"UserRewardTriggeredAuditEvent"> | number
    highestTierReached?: BoolFilter<"UserRewardTriggeredAuditEvent"> | boolean
    referalDetails_attractedSubExternalId?: StringFilter<"UserRewardTriggeredAuditEvent"> | string
    spe_ae_id?: StringNullableFilter<"UserRewardTriggeredAuditEvent"> | string | null
    createdAt?: DateTimeFilter<"UserRewardTriggeredAuditEvent"> | Date | string
    referalDetails?: XOR<ReferalDetailsScalarRelationFilter, ReferalDetailsWhereInput>
    spe_ae?: XOR<SubPackageExtendedAuditEventNullableScalarRelationFilter, SubPackageExtendedAuditEventWhereInput> | null
  }

  export type UserRewardTriggeredAuditEventOrderByWithRelationInput = {
    id?: SortOrder
    customMonetaryRewardAmount?: SortOrderInput | SortOrder
    rewardType?: SortOrder
    rewardAmount?: SortOrder
    prevTotalPayableReward?: SortOrder
    newTotalPayableReward?: SortOrder
    highestTierReached?: SortOrder
    referalDetails_attractedSubExternalId?: SortOrder
    spe_ae_id?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    referalDetails?: ReferalDetailsOrderByWithRelationInput
    spe_ae?: SubPackageExtendedAuditEventOrderByWithRelationInput
    _relevance?: UserRewardTriggeredAuditEventOrderByRelevanceInput
  }

  export type UserRewardTriggeredAuditEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    spe_ae_id?: string
    AND?: UserRewardTriggeredAuditEventWhereInput | UserRewardTriggeredAuditEventWhereInput[]
    OR?: UserRewardTriggeredAuditEventWhereInput[]
    NOT?: UserRewardTriggeredAuditEventWhereInput | UserRewardTriggeredAuditEventWhereInput[]
    customMonetaryRewardAmount?: FloatNullableFilter<"UserRewardTriggeredAuditEvent"> | number | null
    rewardType?: EnumMonetaryRewardTypeFilter<"UserRewardTriggeredAuditEvent"> | $Enums.MonetaryRewardType
    rewardAmount?: FloatFilter<"UserRewardTriggeredAuditEvent"> | number
    prevTotalPayableReward?: FloatFilter<"UserRewardTriggeredAuditEvent"> | number
    newTotalPayableReward?: FloatFilter<"UserRewardTriggeredAuditEvent"> | number
    highestTierReached?: BoolFilter<"UserRewardTriggeredAuditEvent"> | boolean
    referalDetails_attractedSubExternalId?: StringFilter<"UserRewardTriggeredAuditEvent"> | string
    createdAt?: DateTimeFilter<"UserRewardTriggeredAuditEvent"> | Date | string
    referalDetails?: XOR<ReferalDetailsScalarRelationFilter, ReferalDetailsWhereInput>
    spe_ae?: XOR<SubPackageExtendedAuditEventNullableScalarRelationFilter, SubPackageExtendedAuditEventWhereInput> | null
  }, "id" | "spe_ae_id">

  export type UserRewardTriggeredAuditEventOrderByWithAggregationInput = {
    id?: SortOrder
    customMonetaryRewardAmount?: SortOrderInput | SortOrder
    rewardType?: SortOrder
    rewardAmount?: SortOrder
    prevTotalPayableReward?: SortOrder
    newTotalPayableReward?: SortOrder
    highestTierReached?: SortOrder
    referalDetails_attractedSubExternalId?: SortOrder
    spe_ae_id?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserRewardTriggeredAuditEventCountOrderByAggregateInput
    _avg?: UserRewardTriggeredAuditEventAvgOrderByAggregateInput
    _max?: UserRewardTriggeredAuditEventMaxOrderByAggregateInput
    _min?: UserRewardTriggeredAuditEventMinOrderByAggregateInput
    _sum?: UserRewardTriggeredAuditEventSumOrderByAggregateInput
  }

  export type UserRewardTriggeredAuditEventScalarWhereWithAggregatesInput = {
    AND?: UserRewardTriggeredAuditEventScalarWhereWithAggregatesInput | UserRewardTriggeredAuditEventScalarWhereWithAggregatesInput[]
    OR?: UserRewardTriggeredAuditEventScalarWhereWithAggregatesInput[]
    NOT?: UserRewardTriggeredAuditEventScalarWhereWithAggregatesInput | UserRewardTriggeredAuditEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserRewardTriggeredAuditEvent"> | string
    customMonetaryRewardAmount?: FloatNullableWithAggregatesFilter<"UserRewardTriggeredAuditEvent"> | number | null
    rewardType?: EnumMonetaryRewardTypeWithAggregatesFilter<"UserRewardTriggeredAuditEvent"> | $Enums.MonetaryRewardType
    rewardAmount?: FloatWithAggregatesFilter<"UserRewardTriggeredAuditEvent"> | number
    prevTotalPayableReward?: FloatWithAggregatesFilter<"UserRewardTriggeredAuditEvent"> | number
    newTotalPayableReward?: FloatWithAggregatesFilter<"UserRewardTriggeredAuditEvent"> | number
    highestTierReached?: BoolWithAggregatesFilter<"UserRewardTriggeredAuditEvent"> | boolean
    referalDetails_attractedSubExternalId?: StringWithAggregatesFilter<"UserRewardTriggeredAuditEvent"> | string
    spe_ae_id?: StringNullableWithAggregatesFilter<"UserRewardTriggeredAuditEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserRewardTriggeredAuditEvent"> | Date | string
  }

  export type UserRepaymentAuditEventWhereInput = {
    AND?: UserRepaymentAuditEventWhereInput | UserRepaymentAuditEventWhereInput[]
    OR?: UserRepaymentAuditEventWhereInput[]
    NOT?: UserRepaymentAuditEventWhereInput | UserRepaymentAuditEventWhereInput[]
    id?: StringFilter<"UserRepaymentAuditEvent"> | string
    userId?: StringFilter<"UserRepaymentAuditEvent"> | string
    repaymentAmount?: FloatFilter<"UserRepaymentAuditEvent"> | number
    prevTotalPayableReward?: FloatFilter<"UserRepaymentAuditEvent"> | number
    newTotalPayableReward?: FloatFilter<"UserRepaymentAuditEvent"> | number
    createdAt?: DateTimeFilter<"UserRepaymentAuditEvent"> | Date | string
    createdByUserId?: StringFilter<"UserRepaymentAuditEvent"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserRepaymentAuditEventOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    repaymentAmount?: SortOrder
    prevTotalPayableReward?: SortOrder
    newTotalPayableReward?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
    user?: UserOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    _relevance?: UserRepaymentAuditEventOrderByRelevanceInput
  }

  export type UserRepaymentAuditEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserRepaymentAuditEventWhereInput | UserRepaymentAuditEventWhereInput[]
    OR?: UserRepaymentAuditEventWhereInput[]
    NOT?: UserRepaymentAuditEventWhereInput | UserRepaymentAuditEventWhereInput[]
    userId?: StringFilter<"UserRepaymentAuditEvent"> | string
    repaymentAmount?: FloatFilter<"UserRepaymentAuditEvent"> | number
    prevTotalPayableReward?: FloatFilter<"UserRepaymentAuditEvent"> | number
    newTotalPayableReward?: FloatFilter<"UserRepaymentAuditEvent"> | number
    createdAt?: DateTimeFilter<"UserRepaymentAuditEvent"> | Date | string
    createdByUserId?: StringFilter<"UserRepaymentAuditEvent"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserRepaymentAuditEventOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    repaymentAmount?: SortOrder
    prevTotalPayableReward?: SortOrder
    newTotalPayableReward?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
    _count?: UserRepaymentAuditEventCountOrderByAggregateInput
    _avg?: UserRepaymentAuditEventAvgOrderByAggregateInput
    _max?: UserRepaymentAuditEventMaxOrderByAggregateInput
    _min?: UserRepaymentAuditEventMinOrderByAggregateInput
    _sum?: UserRepaymentAuditEventSumOrderByAggregateInput
  }

  export type UserRepaymentAuditEventScalarWhereWithAggregatesInput = {
    AND?: UserRepaymentAuditEventScalarWhereWithAggregatesInput | UserRepaymentAuditEventScalarWhereWithAggregatesInput[]
    OR?: UserRepaymentAuditEventScalarWhereWithAggregatesInput[]
    NOT?: UserRepaymentAuditEventScalarWhereWithAggregatesInput | UserRepaymentAuditEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserRepaymentAuditEvent"> | string
    userId?: StringWithAggregatesFilter<"UserRepaymentAuditEvent"> | string
    repaymentAmount?: FloatWithAggregatesFilter<"UserRepaymentAuditEvent"> | number
    prevTotalPayableReward?: FloatWithAggregatesFilter<"UserRepaymentAuditEvent"> | number
    newTotalPayableReward?: FloatWithAggregatesFilter<"UserRepaymentAuditEvent"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserRepaymentAuditEvent"> | Date | string
    createdByUserId?: StringWithAggregatesFilter<"UserRepaymentAuditEvent"> | string
  }

  export type EntityUpdatedAuditEventWhereInput = {
    AND?: EntityUpdatedAuditEventWhereInput | EntityUpdatedAuditEventWhereInput[]
    OR?: EntityUpdatedAuditEventWhereInput[]
    NOT?: EntityUpdatedAuditEventWhereInput | EntityUpdatedAuditEventWhereInput[]
    id?: StringFilter<"EntityUpdatedAuditEvent"> | string
    entityType?: EnumEntityTypesFilter<"EntityUpdatedAuditEvent"> | $Enums.EntityTypes
    entityId?: StringFilter<"EntityUpdatedAuditEvent"> | string
    reason?: StringNullableFilter<"EntityUpdatedAuditEvent"> | string | null
    diff?: StringFilter<"EntityUpdatedAuditEvent"> | string
    createdAt?: DateTimeFilter<"EntityUpdatedAuditEvent"> | Date | string
    createdByUserId?: StringFilter<"EntityUpdatedAuditEvent"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EntityUpdatedAuditEventOrderByWithRelationInput = {
    id?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    reason?: SortOrderInput | SortOrder
    diff?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    _relevance?: EntityUpdatedAuditEventOrderByRelevanceInput
  }

  export type EntityUpdatedAuditEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EntityUpdatedAuditEventWhereInput | EntityUpdatedAuditEventWhereInput[]
    OR?: EntityUpdatedAuditEventWhereInput[]
    NOT?: EntityUpdatedAuditEventWhereInput | EntityUpdatedAuditEventWhereInput[]
    entityType?: EnumEntityTypesFilter<"EntityUpdatedAuditEvent"> | $Enums.EntityTypes
    entityId?: StringFilter<"EntityUpdatedAuditEvent"> | string
    reason?: StringNullableFilter<"EntityUpdatedAuditEvent"> | string | null
    diff?: StringFilter<"EntityUpdatedAuditEvent"> | string
    createdAt?: DateTimeFilter<"EntityUpdatedAuditEvent"> | Date | string
    createdByUserId?: StringFilter<"EntityUpdatedAuditEvent"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EntityUpdatedAuditEventOrderByWithAggregationInput = {
    id?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    reason?: SortOrderInput | SortOrder
    diff?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
    _count?: EntityUpdatedAuditEventCountOrderByAggregateInput
    _max?: EntityUpdatedAuditEventMaxOrderByAggregateInput
    _min?: EntityUpdatedAuditEventMinOrderByAggregateInput
  }

  export type EntityUpdatedAuditEventScalarWhereWithAggregatesInput = {
    AND?: EntityUpdatedAuditEventScalarWhereWithAggregatesInput | EntityUpdatedAuditEventScalarWhereWithAggregatesInput[]
    OR?: EntityUpdatedAuditEventScalarWhereWithAggregatesInput[]
    NOT?: EntityUpdatedAuditEventScalarWhereWithAggregatesInput | EntityUpdatedAuditEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EntityUpdatedAuditEvent"> | string
    entityType?: EnumEntityTypesWithAggregatesFilter<"EntityUpdatedAuditEvent"> | $Enums.EntityTypes
    entityId?: StringWithAggregatesFilter<"EntityUpdatedAuditEvent"> | string
    reason?: StringNullableWithAggregatesFilter<"EntityUpdatedAuditEvent"> | string | null
    diff?: StringWithAggregatesFilter<"EntityUpdatedAuditEvent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EntityUpdatedAuditEvent"> | Date | string
    createdByUserId?: StringWithAggregatesFilter<"EntityUpdatedAuditEvent"> | string
  }

  export type UserCreateInput = {
    login: string
    pwd: string
    role: $Enums.Role
    totalPayableReward?: number
    customMonetaryRewardAmount?: number | null
    note?: string | null
    createdAt: Date | string
    sub?: SubCreateNestedOneWithoutUserInput
    attractedSubs?: ReferalDetailsCreateNestedManyWithoutAttractorInput
    ur_ae?: UserRepaymentAuditEventCreateNestedManyWithoutUserInput
    createdSubs?: SubCreateNestedManyWithoutCreatedByInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    extensionsSubmitted?: SubPackageExtendedAuditEventCreateNestedManyWithoutCreatedByInput
    repaymentsSubmitted?: UserRepaymentAuditEventCreateNestedManyWithoutCreatedByInput
    modificationsSubmitted?: EntityUpdatedAuditEventCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    login: string
    pwd: string
    role: $Enums.Role
    subExternalId?: string | null
    totalPayableReward?: number
    customMonetaryRewardAmount?: number | null
    note?: string | null
    createdAt: Date | string
    createdByUserId?: string | null
    attractedSubs?: ReferalDetailsUncheckedCreateNestedManyWithoutAttractorInput
    ur_ae?: UserRepaymentAuditEventUncheckedCreateNestedManyWithoutUserInput
    createdSubs?: SubUncheckedCreateNestedManyWithoutCreatedByInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    extensionsSubmitted?: SubPackageExtendedAuditEventUncheckedCreateNestedManyWithoutCreatedByInput
    repaymentsSubmitted?: UserRepaymentAuditEventUncheckedCreateNestedManyWithoutCreatedByInput
    modificationsSubmitted?: EntityUpdatedAuditEventUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    login?: StringFieldUpdateOperationsInput | string
    pwd?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    totalPayableReward?: FloatFieldUpdateOperationsInput | number
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sub?: SubUpdateOneWithoutUserNestedInput
    attractedSubs?: ReferalDetailsUpdateManyWithoutAttractorNestedInput
    ur_ae?: UserRepaymentAuditEventUpdateManyWithoutUserNestedInput
    createdSubs?: SubUpdateManyWithoutCreatedByNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    extensionsSubmitted?: SubPackageExtendedAuditEventUpdateManyWithoutCreatedByNestedInput
    repaymentsSubmitted?: UserRepaymentAuditEventUpdateManyWithoutCreatedByNestedInput
    modificationsSubmitted?: EntityUpdatedAuditEventUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    login?: StringFieldUpdateOperationsInput | string
    pwd?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subExternalId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPayableReward?: FloatFieldUpdateOperationsInput | number
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    attractedSubs?: ReferalDetailsUncheckedUpdateManyWithoutAttractorNestedInput
    ur_ae?: UserRepaymentAuditEventUncheckedUpdateManyWithoutUserNestedInput
    createdSubs?: SubUncheckedUpdateManyWithoutCreatedByNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    extensionsSubmitted?: SubPackageExtendedAuditEventUncheckedUpdateManyWithoutCreatedByNestedInput
    repaymentsSubmitted?: UserRepaymentAuditEventUncheckedUpdateManyWithoutCreatedByNestedInput
    modificationsSubmitted?: EntityUpdatedAuditEventUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    login: string
    pwd: string
    role: $Enums.Role
    subExternalId?: string | null
    totalPayableReward?: number
    customMonetaryRewardAmount?: number | null
    note?: string | null
    createdAt: Date | string
    createdByUserId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    login?: StringFieldUpdateOperationsInput | string
    pwd?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    totalPayableReward?: FloatFieldUpdateOperationsInput | number
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    login?: StringFieldUpdateOperationsInput | string
    pwd?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subExternalId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPayableReward?: FloatFieldUpdateOperationsInput | number
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubCreateInput = {
    externalId: string
    login?: string | null
    pwd?: string | null
    note?: string | null
    m3uPlaylist?: string | null
    epg?: string | null
    publicKey?: string | null
    media?: string | null
    pkgType?: $Enums.PackageType | null
    startDate: Date | string
    endDate: Date | string
    region?: $Enums.Region | null
    createdAt: Date | string
    user?: UserCreateNestedOneWithoutSubInput
    referalDetails?: ReferalDetailsCreateNestedOneWithoutAttractedSubInput
    payments?: PaymentCreateNestedManyWithoutSubInput
    packageExtensions?: SubPackageExtendedAuditEventCreateNestedManyWithoutSubInput
    createdBy: UserCreateNestedOneWithoutCreatedSubsInput
  }

  export type SubUncheckedCreateInput = {
    externalId: string
    login?: string | null
    pwd?: string | null
    note?: string | null
    m3uPlaylist?: string | null
    epg?: string | null
    publicKey?: string | null
    media?: string | null
    pkgType?: $Enums.PackageType | null
    startDate: Date | string
    endDate: Date | string
    region?: $Enums.Region | null
    createdAt: Date | string
    createdByUserId: string
    user?: UserUncheckedCreateNestedOneWithoutSubInput
    referalDetails?: ReferalDetailsUncheckedCreateNestedOneWithoutAttractedSubInput
    payments?: PaymentUncheckedCreateNestedManyWithoutSubInput
    packageExtensions?: SubPackageExtendedAuditEventUncheckedCreateNestedManyWithoutSubInput
  }

  export type SubUpdateInput = {
    externalId?: StringFieldUpdateOperationsInput | string
    login?: NullableStringFieldUpdateOperationsInput | string | null
    pwd?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    m3uPlaylist?: NullableStringFieldUpdateOperationsInput | string | null
    epg?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    pkgType?: NullableEnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSubNestedInput
    referalDetails?: ReferalDetailsUpdateOneWithoutAttractedSubNestedInput
    payments?: PaymentUpdateManyWithoutSubNestedInput
    packageExtensions?: SubPackageExtendedAuditEventUpdateManyWithoutSubNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedSubsNestedInput
  }

  export type SubUncheckedUpdateInput = {
    externalId?: StringFieldUpdateOperationsInput | string
    login?: NullableStringFieldUpdateOperationsInput | string | null
    pwd?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    m3uPlaylist?: NullableStringFieldUpdateOperationsInput | string | null
    epg?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    pkgType?: NullableEnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: StringFieldUpdateOperationsInput | string
    user?: UserUncheckedUpdateOneWithoutSubNestedInput
    referalDetails?: ReferalDetailsUncheckedUpdateOneWithoutAttractedSubNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutSubNestedInput
    packageExtensions?: SubPackageExtendedAuditEventUncheckedUpdateManyWithoutSubNestedInput
  }

  export type SubCreateManyInput = {
    externalId: string
    login?: string | null
    pwd?: string | null
    note?: string | null
    m3uPlaylist?: string | null
    epg?: string | null
    publicKey?: string | null
    media?: string | null
    pkgType?: $Enums.PackageType | null
    startDate: Date | string
    endDate: Date | string
    region?: $Enums.Region | null
    createdAt: Date | string
    createdByUserId: string
  }

  export type SubUpdateManyMutationInput = {
    externalId?: StringFieldUpdateOperationsInput | string
    login?: NullableStringFieldUpdateOperationsInput | string | null
    pwd?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    m3uPlaylist?: NullableStringFieldUpdateOperationsInput | string | null
    epg?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    pkgType?: NullableEnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubUncheckedUpdateManyInput = {
    externalId?: StringFieldUpdateOperationsInput | string
    login?: NullableStringFieldUpdateOperationsInput | string | null
    pwd?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    m3uPlaylist?: NullableStringFieldUpdateOperationsInput | string | null
    epg?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    pkgType?: NullableEnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: StringFieldUpdateOperationsInput | string
  }

  export type ReferalDetailsCreateInput = {
    effectiveAttractorTier: number
    attractedSub: SubCreateNestedOneWithoutReferalDetailsInput
    attractor: UserCreateNestedOneWithoutAttractedSubsInput
    spe_ae?: SubPackageExtendedAuditEventCreateNestedOneWithoutAttractedSubReferalDetailsInput
    urt_ae?: UserRewardTriggeredAuditEventCreateNestedManyWithoutReferalDetailsInput
  }

  export type ReferalDetailsUncheckedCreateInput = {
    attractedSubExternalId: string
    attractorUserId: string
    effectiveAttractorTier: number
    spe_ae?: SubPackageExtendedAuditEventUncheckedCreateNestedOneWithoutAttractedSubReferalDetailsInput
    urt_ae?: UserRewardTriggeredAuditEventUncheckedCreateNestedManyWithoutReferalDetailsInput
  }

  export type ReferalDetailsUpdateInput = {
    effectiveAttractorTier?: IntFieldUpdateOperationsInput | number
    attractedSub?: SubUpdateOneRequiredWithoutReferalDetailsNestedInput
    attractor?: UserUpdateOneRequiredWithoutAttractedSubsNestedInput
    spe_ae?: SubPackageExtendedAuditEventUpdateOneWithoutAttractedSubReferalDetailsNestedInput
    urt_ae?: UserRewardTriggeredAuditEventUpdateManyWithoutReferalDetailsNestedInput
  }

  export type ReferalDetailsUncheckedUpdateInput = {
    attractedSubExternalId?: StringFieldUpdateOperationsInput | string
    attractorUserId?: StringFieldUpdateOperationsInput | string
    effectiveAttractorTier?: IntFieldUpdateOperationsInput | number
    spe_ae?: SubPackageExtendedAuditEventUncheckedUpdateOneWithoutAttractedSubReferalDetailsNestedInput
    urt_ae?: UserRewardTriggeredAuditEventUncheckedUpdateManyWithoutReferalDetailsNestedInput
  }

  export type ReferalDetailsCreateManyInput = {
    attractedSubExternalId: string
    attractorUserId: string
    effectiveAttractorTier: number
  }

  export type ReferalDetailsUpdateManyMutationInput = {
    effectiveAttractorTier?: IntFieldUpdateOperationsInput | number
  }

  export type ReferalDetailsUncheckedUpdateManyInput = {
    attractedSubExternalId?: StringFieldUpdateOperationsInput | string
    attractorUserId?: StringFieldUpdateOperationsInput | string
    effectiveAttractorTier?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentCreateInput = {
    id?: string
    currency: $Enums.Currency
    amount: number
    date: Date | string
    createdAt: Date | string
    sub: SubCreateNestedOneWithoutPaymentsInput
    spe_ae?: SubPackageExtendedAuditEventCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    currency: $Enums.Currency
    amount: number
    date: Date | string
    subExternalId: string
    createdAt: Date | string
    spe_ae?: SubPackageExtendedAuditEventUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sub?: SubUpdateOneRequiredWithoutPaymentsNestedInput
    spe_ae?: SubPackageExtendedAuditEventUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    subExternalId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spe_ae?: SubPackageExtendedAuditEventUncheckedUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentCreateManyInput = {
    id?: string
    currency: $Enums.Currency
    amount: number
    date: Date | string
    subExternalId: string
    createdAt: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    subExternalId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubPackageExtendedAuditEventCreateInput = {
    id?: string
    prevEndDate: Date | string
    newEndDate: Date | string
    reason: $Enums.PackageExtensionReason
    createdAt: Date | string
    attractedSubReferalDetails?: ReferalDetailsCreateNestedOneWithoutSpe_aeInput
    payment: PaymentCreateNestedOneWithoutSpe_aeInput
    sub: SubCreateNestedOneWithoutPackageExtensionsInput
    urt_ae?: UserRewardTriggeredAuditEventCreateNestedOneWithoutSpe_aeInput
    createdBy: UserCreateNestedOneWithoutExtensionsSubmittedInput
  }

  export type SubPackageExtendedAuditEventUncheckedCreateInput = {
    id?: string
    prevEndDate: Date | string
    newEndDate: Date | string
    attractedSubExternalId?: string | null
    paymentId: string
    subExternalId: string
    reason: $Enums.PackageExtensionReason
    createdAt: Date | string
    createdByUserId: string
    urt_ae?: UserRewardTriggeredAuditEventUncheckedCreateNestedOneWithoutSpe_aeInput
  }

  export type SubPackageExtendedAuditEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prevEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: EnumPackageExtensionReasonFieldUpdateOperationsInput | $Enums.PackageExtensionReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attractedSubReferalDetails?: ReferalDetailsUpdateOneWithoutSpe_aeNestedInput
    payment?: PaymentUpdateOneRequiredWithoutSpe_aeNestedInput
    sub?: SubUpdateOneRequiredWithoutPackageExtensionsNestedInput
    urt_ae?: UserRewardTriggeredAuditEventUpdateOneWithoutSpe_aeNestedInput
    createdBy?: UserUpdateOneRequiredWithoutExtensionsSubmittedNestedInput
  }

  export type SubPackageExtendedAuditEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prevEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    attractedSubExternalId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: StringFieldUpdateOperationsInput | string
    subExternalId?: StringFieldUpdateOperationsInput | string
    reason?: EnumPackageExtensionReasonFieldUpdateOperationsInput | $Enums.PackageExtensionReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: StringFieldUpdateOperationsInput | string
    urt_ae?: UserRewardTriggeredAuditEventUncheckedUpdateOneWithoutSpe_aeNestedInput
  }

  export type SubPackageExtendedAuditEventCreateManyInput = {
    id?: string
    prevEndDate: Date | string
    newEndDate: Date | string
    attractedSubExternalId?: string | null
    paymentId: string
    subExternalId: string
    reason: $Enums.PackageExtensionReason
    createdAt: Date | string
    createdByUserId: string
  }

  export type SubPackageExtendedAuditEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prevEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: EnumPackageExtensionReasonFieldUpdateOperationsInput | $Enums.PackageExtensionReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubPackageExtendedAuditEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    prevEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    attractedSubExternalId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: StringFieldUpdateOperationsInput | string
    subExternalId?: StringFieldUpdateOperationsInput | string
    reason?: EnumPackageExtensionReasonFieldUpdateOperationsInput | $Enums.PackageExtensionReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRewardTriggeredAuditEventCreateInput = {
    id?: string
    customMonetaryRewardAmount?: number | null
    rewardType: $Enums.MonetaryRewardType
    rewardAmount: number
    prevTotalPayableReward: number
    newTotalPayableReward: number
    highestTierReached?: boolean
    createdAt: Date | string
    referalDetails: ReferalDetailsCreateNestedOneWithoutUrt_aeInput
    spe_ae?: SubPackageExtendedAuditEventCreateNestedOneWithoutUrt_aeInput
  }

  export type UserRewardTriggeredAuditEventUncheckedCreateInput = {
    id?: string
    customMonetaryRewardAmount?: number | null
    rewardType: $Enums.MonetaryRewardType
    rewardAmount: number
    prevTotalPayableReward: number
    newTotalPayableReward: number
    highestTierReached?: boolean
    referalDetails_attractedSubExternalId: string
    spe_ae_id?: string | null
    createdAt: Date | string
  }

  export type UserRewardTriggeredAuditEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    rewardType?: EnumMonetaryRewardTypeFieldUpdateOperationsInput | $Enums.MonetaryRewardType
    rewardAmount?: FloatFieldUpdateOperationsInput | number
    prevTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    newTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    highestTierReached?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referalDetails?: ReferalDetailsUpdateOneRequiredWithoutUrt_aeNestedInput
    spe_ae?: SubPackageExtendedAuditEventUpdateOneWithoutUrt_aeNestedInput
  }

  export type UserRewardTriggeredAuditEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    rewardType?: EnumMonetaryRewardTypeFieldUpdateOperationsInput | $Enums.MonetaryRewardType
    rewardAmount?: FloatFieldUpdateOperationsInput | number
    prevTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    newTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    highestTierReached?: BoolFieldUpdateOperationsInput | boolean
    referalDetails_attractedSubExternalId?: StringFieldUpdateOperationsInput | string
    spe_ae_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRewardTriggeredAuditEventCreateManyInput = {
    id?: string
    customMonetaryRewardAmount?: number | null
    rewardType: $Enums.MonetaryRewardType
    rewardAmount: number
    prevTotalPayableReward: number
    newTotalPayableReward: number
    highestTierReached?: boolean
    referalDetails_attractedSubExternalId: string
    spe_ae_id?: string | null
    createdAt: Date | string
  }

  export type UserRewardTriggeredAuditEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    rewardType?: EnumMonetaryRewardTypeFieldUpdateOperationsInput | $Enums.MonetaryRewardType
    rewardAmount?: FloatFieldUpdateOperationsInput | number
    prevTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    newTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    highestTierReached?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRewardTriggeredAuditEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    rewardType?: EnumMonetaryRewardTypeFieldUpdateOperationsInput | $Enums.MonetaryRewardType
    rewardAmount?: FloatFieldUpdateOperationsInput | number
    prevTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    newTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    highestTierReached?: BoolFieldUpdateOperationsInput | boolean
    referalDetails_attractedSubExternalId?: StringFieldUpdateOperationsInput | string
    spe_ae_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRepaymentAuditEventCreateInput = {
    id?: string
    repaymentAmount: number
    prevTotalPayableReward: number
    newTotalPayableReward: number
    createdAt: Date | string
    user: UserCreateNestedOneWithoutUr_aeInput
    createdBy: UserCreateNestedOneWithoutRepaymentsSubmittedInput
  }

  export type UserRepaymentAuditEventUncheckedCreateInput = {
    id?: string
    userId: string
    repaymentAmount: number
    prevTotalPayableReward: number
    newTotalPayableReward: number
    createdAt: Date | string
    createdByUserId: string
  }

  export type UserRepaymentAuditEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    repaymentAmount?: FloatFieldUpdateOperationsInput | number
    prevTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    newTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUr_aeNestedInput
    createdBy?: UserUpdateOneRequiredWithoutRepaymentsSubmittedNestedInput
  }

  export type UserRepaymentAuditEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    repaymentAmount?: FloatFieldUpdateOperationsInput | number
    prevTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    newTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRepaymentAuditEventCreateManyInput = {
    id?: string
    userId: string
    repaymentAmount: number
    prevTotalPayableReward: number
    newTotalPayableReward: number
    createdAt: Date | string
    createdByUserId: string
  }

  export type UserRepaymentAuditEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    repaymentAmount?: FloatFieldUpdateOperationsInput | number
    prevTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    newTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRepaymentAuditEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    repaymentAmount?: FloatFieldUpdateOperationsInput | number
    prevTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    newTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: StringFieldUpdateOperationsInput | string
  }

  export type EntityUpdatedAuditEventCreateInput = {
    id?: string
    entityType: $Enums.EntityTypes
    entityId: string
    reason?: string | null
    diff: string
    createdAt: Date | string
    createdBy: UserCreateNestedOneWithoutModificationsSubmittedInput
  }

  export type EntityUpdatedAuditEventUncheckedCreateInput = {
    id?: string
    entityType: $Enums.EntityTypes
    entityId: string
    reason?: string | null
    diff: string
    createdAt: Date | string
    createdByUserId: string
  }

  export type EntityUpdatedAuditEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypesFieldUpdateOperationsInput | $Enums.EntityTypes
    entityId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    diff?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutModificationsSubmittedNestedInput
  }

  export type EntityUpdatedAuditEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypesFieldUpdateOperationsInput | $Enums.EntityTypes
    entityId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    diff?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: StringFieldUpdateOperationsInput | string
  }

  export type EntityUpdatedAuditEventCreateManyInput = {
    id?: string
    entityType: $Enums.EntityTypes
    entityId: string
    reason?: string | null
    diff: string
    createdAt: Date | string
    createdByUserId: string
  }

  export type EntityUpdatedAuditEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypesFieldUpdateOperationsInput | $Enums.EntityTypes
    entityId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    diff?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityUpdatedAuditEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypesFieldUpdateOperationsInput | $Enums.EntityTypes
    entityId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    diff?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: StringFieldUpdateOperationsInput | string
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type SubNullableScalarRelationFilter = {
    is?: SubWhereInput | null
    isNot?: SubWhereInput | null
  }

  export type ReferalDetailsListRelationFilter = {
    every?: ReferalDetailsWhereInput
    some?: ReferalDetailsWhereInput
    none?: ReferalDetailsWhereInput
  }

  export type UserRepaymentAuditEventListRelationFilter = {
    every?: UserRepaymentAuditEventWhereInput
    some?: UserRepaymentAuditEventWhereInput
    none?: UserRepaymentAuditEventWhereInput
  }

  export type SubListRelationFilter = {
    every?: SubWhereInput
    some?: SubWhereInput
    none?: SubWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SubPackageExtendedAuditEventListRelationFilter = {
    every?: SubPackageExtendedAuditEventWhereInput
    some?: SubPackageExtendedAuditEventWhereInput
    none?: SubPackageExtendedAuditEventWhereInput
  }

  export type EntityUpdatedAuditEventListRelationFilter = {
    every?: EntityUpdatedAuditEventWhereInput
    some?: EntityUpdatedAuditEventWhereInput
    none?: EntityUpdatedAuditEventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReferalDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserRepaymentAuditEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubPackageExtendedAuditEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EntityUpdatedAuditEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    login?: SortOrder
    pwd?: SortOrder
    role?: SortOrder
    subExternalId?: SortOrder
    totalPayableReward?: SortOrder
    customMonetaryRewardAmount?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    totalPayableReward?: SortOrder
    customMonetaryRewardAmount?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    login?: SortOrder
    pwd?: SortOrder
    role?: SortOrder
    subExternalId?: SortOrder
    totalPayableReward?: SortOrder
    customMonetaryRewardAmount?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    login?: SortOrder
    pwd?: SortOrder
    role?: SortOrder
    subExternalId?: SortOrder
    totalPayableReward?: SortOrder
    customMonetaryRewardAmount?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    totalPayableReward?: SortOrder
    customMonetaryRewardAmount?: SortOrder
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type EnumPackageTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageType | EnumPackageTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.PackageType[] | null
    notIn?: $Enums.PackageType[] | null
    not?: NestedEnumPackageTypeNullableFilter<$PrismaModel> | $Enums.PackageType | null
  }

  export type EnumRegionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Region | EnumRegionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Region[] | null
    notIn?: $Enums.Region[] | null
    not?: NestedEnumRegionNullableFilter<$PrismaModel> | $Enums.Region | null
  }

  export type ReferalDetailsNullableScalarRelationFilter = {
    is?: ReferalDetailsWhereInput | null
    isNot?: ReferalDetailsWhereInput | null
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubOrderByRelevanceInput = {
    fields: SubOrderByRelevanceFieldEnum | SubOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubCountOrderByAggregateInput = {
    externalId?: SortOrder
    login?: SortOrder
    pwd?: SortOrder
    note?: SortOrder
    m3uPlaylist?: SortOrder
    epg?: SortOrder
    publicKey?: SortOrder
    media?: SortOrder
    pkgType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
  }

  export type SubMaxOrderByAggregateInput = {
    externalId?: SortOrder
    login?: SortOrder
    pwd?: SortOrder
    note?: SortOrder
    m3uPlaylist?: SortOrder
    epg?: SortOrder
    publicKey?: SortOrder
    media?: SortOrder
    pkgType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
  }

  export type SubMinOrderByAggregateInput = {
    externalId?: SortOrder
    login?: SortOrder
    pwd?: SortOrder
    note?: SortOrder
    m3uPlaylist?: SortOrder
    epg?: SortOrder
    publicKey?: SortOrder
    media?: SortOrder
    pkgType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
  }

  export type EnumPackageTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageType | EnumPackageTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.PackageType[] | null
    notIn?: $Enums.PackageType[] | null
    not?: NestedEnumPackageTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.PackageType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPackageTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumPackageTypeNullableFilter<$PrismaModel>
  }

  export type EnumRegionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Region | EnumRegionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Region[] | null
    notIn?: $Enums.Region[] | null
    not?: NestedEnumRegionNullableWithAggregatesFilter<$PrismaModel> | $Enums.Region | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRegionNullableFilter<$PrismaModel>
    _max?: NestedEnumRegionNullableFilter<$PrismaModel>
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

  export type SubScalarRelationFilter = {
    is?: SubWhereInput
    isNot?: SubWhereInput
  }

  export type SubPackageExtendedAuditEventNullableScalarRelationFilter = {
    is?: SubPackageExtendedAuditEventWhereInput | null
    isNot?: SubPackageExtendedAuditEventWhereInput | null
  }

  export type UserRewardTriggeredAuditEventListRelationFilter = {
    every?: UserRewardTriggeredAuditEventWhereInput
    some?: UserRewardTriggeredAuditEventWhereInput
    none?: UserRewardTriggeredAuditEventWhereInput
  }

  export type UserRewardTriggeredAuditEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReferalDetailsOrderByRelevanceInput = {
    fields: ReferalDetailsOrderByRelevanceFieldEnum | ReferalDetailsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReferalDetailsCountOrderByAggregateInput = {
    attractedSubExternalId?: SortOrder
    attractorUserId?: SortOrder
    effectiveAttractorTier?: SortOrder
  }

  export type ReferalDetailsAvgOrderByAggregateInput = {
    effectiveAttractorTier?: SortOrder
  }

  export type ReferalDetailsMaxOrderByAggregateInput = {
    attractedSubExternalId?: SortOrder
    attractorUserId?: SortOrder
    effectiveAttractorTier?: SortOrder
  }

  export type ReferalDetailsMinOrderByAggregateInput = {
    attractedSubExternalId?: SortOrder
    attractorUserId?: SortOrder
    effectiveAttractorTier?: SortOrder
  }

  export type ReferalDetailsSumOrderByAggregateInput = {
    effectiveAttractorTier?: SortOrder
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

  export type EnumCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[]
    notIn?: $Enums.Currency[]
    not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency
  }

  export type PaymentOrderByRelevanceInput = {
    fields: PaymentOrderByRelevanceFieldEnum | PaymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    currency?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    subExternalId?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    currency?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    subExternalId?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    currency?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    subExternalId?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[]
    notIn?: $Enums.Currency[]
    not?: NestedEnumCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.Currency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyFilter<$PrismaModel>
    _max?: NestedEnumCurrencyFilter<$PrismaModel>
  }

  export type EnumPackageExtensionReasonFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageExtensionReason | EnumPackageExtensionReasonFieldRefInput<$PrismaModel>
    in?: $Enums.PackageExtensionReason[]
    notIn?: $Enums.PackageExtensionReason[]
    not?: NestedEnumPackageExtensionReasonFilter<$PrismaModel> | $Enums.PackageExtensionReason
  }

  export type PaymentScalarRelationFilter = {
    is?: PaymentWhereInput
    isNot?: PaymentWhereInput
  }

  export type UserRewardTriggeredAuditEventNullableScalarRelationFilter = {
    is?: UserRewardTriggeredAuditEventWhereInput | null
    isNot?: UserRewardTriggeredAuditEventWhereInput | null
  }

  export type SubPackageExtendedAuditEventOrderByRelevanceInput = {
    fields: SubPackageExtendedAuditEventOrderByRelevanceFieldEnum | SubPackageExtendedAuditEventOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubPackageExtendedAuditEventCountOrderByAggregateInput = {
    id?: SortOrder
    prevEndDate?: SortOrder
    newEndDate?: SortOrder
    attractedSubExternalId?: SortOrder
    paymentId?: SortOrder
    subExternalId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
  }

  export type SubPackageExtendedAuditEventMaxOrderByAggregateInput = {
    id?: SortOrder
    prevEndDate?: SortOrder
    newEndDate?: SortOrder
    attractedSubExternalId?: SortOrder
    paymentId?: SortOrder
    subExternalId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
  }

  export type SubPackageExtendedAuditEventMinOrderByAggregateInput = {
    id?: SortOrder
    prevEndDate?: SortOrder
    newEndDate?: SortOrder
    attractedSubExternalId?: SortOrder
    paymentId?: SortOrder
    subExternalId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
  }

  export type EnumPackageExtensionReasonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageExtensionReason | EnumPackageExtensionReasonFieldRefInput<$PrismaModel>
    in?: $Enums.PackageExtensionReason[]
    notIn?: $Enums.PackageExtensionReason[]
    not?: NestedEnumPackageExtensionReasonWithAggregatesFilter<$PrismaModel> | $Enums.PackageExtensionReason
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPackageExtensionReasonFilter<$PrismaModel>
    _max?: NestedEnumPackageExtensionReasonFilter<$PrismaModel>
  }

  export type EnumMonetaryRewardTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MonetaryRewardType | EnumMonetaryRewardTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MonetaryRewardType[]
    notIn?: $Enums.MonetaryRewardType[]
    not?: NestedEnumMonetaryRewardTypeFilter<$PrismaModel> | $Enums.MonetaryRewardType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ReferalDetailsScalarRelationFilter = {
    is?: ReferalDetailsWhereInput
    isNot?: ReferalDetailsWhereInput
  }

  export type UserRewardTriggeredAuditEventOrderByRelevanceInput = {
    fields: UserRewardTriggeredAuditEventOrderByRelevanceFieldEnum | UserRewardTriggeredAuditEventOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserRewardTriggeredAuditEventCountOrderByAggregateInput = {
    id?: SortOrder
    customMonetaryRewardAmount?: SortOrder
    rewardType?: SortOrder
    rewardAmount?: SortOrder
    prevTotalPayableReward?: SortOrder
    newTotalPayableReward?: SortOrder
    highestTierReached?: SortOrder
    referalDetails_attractedSubExternalId?: SortOrder
    spe_ae_id?: SortOrder
    createdAt?: SortOrder
  }

  export type UserRewardTriggeredAuditEventAvgOrderByAggregateInput = {
    customMonetaryRewardAmount?: SortOrder
    rewardAmount?: SortOrder
    prevTotalPayableReward?: SortOrder
    newTotalPayableReward?: SortOrder
  }

  export type UserRewardTriggeredAuditEventMaxOrderByAggregateInput = {
    id?: SortOrder
    customMonetaryRewardAmount?: SortOrder
    rewardType?: SortOrder
    rewardAmount?: SortOrder
    prevTotalPayableReward?: SortOrder
    newTotalPayableReward?: SortOrder
    highestTierReached?: SortOrder
    referalDetails_attractedSubExternalId?: SortOrder
    spe_ae_id?: SortOrder
    createdAt?: SortOrder
  }

  export type UserRewardTriggeredAuditEventMinOrderByAggregateInput = {
    id?: SortOrder
    customMonetaryRewardAmount?: SortOrder
    rewardType?: SortOrder
    rewardAmount?: SortOrder
    prevTotalPayableReward?: SortOrder
    newTotalPayableReward?: SortOrder
    highestTierReached?: SortOrder
    referalDetails_attractedSubExternalId?: SortOrder
    spe_ae_id?: SortOrder
    createdAt?: SortOrder
  }

  export type UserRewardTriggeredAuditEventSumOrderByAggregateInput = {
    customMonetaryRewardAmount?: SortOrder
    rewardAmount?: SortOrder
    prevTotalPayableReward?: SortOrder
    newTotalPayableReward?: SortOrder
  }

  export type EnumMonetaryRewardTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MonetaryRewardType | EnumMonetaryRewardTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MonetaryRewardType[]
    notIn?: $Enums.MonetaryRewardType[]
    not?: NestedEnumMonetaryRewardTypeWithAggregatesFilter<$PrismaModel> | $Enums.MonetaryRewardType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMonetaryRewardTypeFilter<$PrismaModel>
    _max?: NestedEnumMonetaryRewardTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserRepaymentAuditEventOrderByRelevanceInput = {
    fields: UserRepaymentAuditEventOrderByRelevanceFieldEnum | UserRepaymentAuditEventOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserRepaymentAuditEventCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    repaymentAmount?: SortOrder
    prevTotalPayableReward?: SortOrder
    newTotalPayableReward?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
  }

  export type UserRepaymentAuditEventAvgOrderByAggregateInput = {
    repaymentAmount?: SortOrder
    prevTotalPayableReward?: SortOrder
    newTotalPayableReward?: SortOrder
  }

  export type UserRepaymentAuditEventMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    repaymentAmount?: SortOrder
    prevTotalPayableReward?: SortOrder
    newTotalPayableReward?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
  }

  export type UserRepaymentAuditEventMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    repaymentAmount?: SortOrder
    prevTotalPayableReward?: SortOrder
    newTotalPayableReward?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
  }

  export type UserRepaymentAuditEventSumOrderByAggregateInput = {
    repaymentAmount?: SortOrder
    prevTotalPayableReward?: SortOrder
    newTotalPayableReward?: SortOrder
  }

  export type EnumEntityTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityTypes | EnumEntityTypesFieldRefInput<$PrismaModel>
    in?: $Enums.EntityTypes[]
    notIn?: $Enums.EntityTypes[]
    not?: NestedEnumEntityTypesFilter<$PrismaModel> | $Enums.EntityTypes
  }

  export type EntityUpdatedAuditEventOrderByRelevanceInput = {
    fields: EntityUpdatedAuditEventOrderByRelevanceFieldEnum | EntityUpdatedAuditEventOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EntityUpdatedAuditEventCountOrderByAggregateInput = {
    id?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    reason?: SortOrder
    diff?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
  }

  export type EntityUpdatedAuditEventMaxOrderByAggregateInput = {
    id?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    reason?: SortOrder
    diff?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
  }

  export type EntityUpdatedAuditEventMinOrderByAggregateInput = {
    id?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    reason?: SortOrder
    diff?: SortOrder
    createdAt?: SortOrder
    createdByUserId?: SortOrder
  }

  export type EnumEntityTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityTypes | EnumEntityTypesFieldRefInput<$PrismaModel>
    in?: $Enums.EntityTypes[]
    notIn?: $Enums.EntityTypes[]
    not?: NestedEnumEntityTypesWithAggregatesFilter<$PrismaModel> | $Enums.EntityTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntityTypesFilter<$PrismaModel>
    _max?: NestedEnumEntityTypesFilter<$PrismaModel>
  }

  export type SubCreateNestedOneWithoutUserInput = {
    create?: XOR<SubCreateWithoutUserInput, SubUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubCreateOrConnectWithoutUserInput
    connect?: SubWhereUniqueInput
  }

  export type ReferalDetailsCreateNestedManyWithoutAttractorInput = {
    create?: XOR<ReferalDetailsCreateWithoutAttractorInput, ReferalDetailsUncheckedCreateWithoutAttractorInput> | ReferalDetailsCreateWithoutAttractorInput[] | ReferalDetailsUncheckedCreateWithoutAttractorInput[]
    connectOrCreate?: ReferalDetailsCreateOrConnectWithoutAttractorInput | ReferalDetailsCreateOrConnectWithoutAttractorInput[]
    createMany?: ReferalDetailsCreateManyAttractorInputEnvelope
    connect?: ReferalDetailsWhereUniqueInput | ReferalDetailsWhereUniqueInput[]
  }

  export type UserRepaymentAuditEventCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRepaymentAuditEventCreateWithoutUserInput, UserRepaymentAuditEventUncheckedCreateWithoutUserInput> | UserRepaymentAuditEventCreateWithoutUserInput[] | UserRepaymentAuditEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRepaymentAuditEventCreateOrConnectWithoutUserInput | UserRepaymentAuditEventCreateOrConnectWithoutUserInput[]
    createMany?: UserRepaymentAuditEventCreateManyUserInputEnvelope
    connect?: UserRepaymentAuditEventWhereUniqueInput | UserRepaymentAuditEventWhereUniqueInput[]
  }

  export type SubCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<SubCreateWithoutCreatedByInput, SubUncheckedCreateWithoutCreatedByInput> | SubCreateWithoutCreatedByInput[] | SubUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SubCreateOrConnectWithoutCreatedByInput | SubCreateOrConnectWithoutCreatedByInput[]
    createMany?: SubCreateManyCreatedByInputEnvelope
    connect?: SubWhereUniqueInput | SubWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput> | UserCreateWithoutCreatedByInput[] | UserUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedByInput | UserCreateOrConnectWithoutCreatedByInput[]
    createMany?: UserCreateManyCreatedByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCreatedUsersInput = {
    create?: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedUsersInput
    connect?: UserWhereUniqueInput
  }

  export type SubPackageExtendedAuditEventCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<SubPackageExtendedAuditEventCreateWithoutCreatedByInput, SubPackageExtendedAuditEventUncheckedCreateWithoutCreatedByInput> | SubPackageExtendedAuditEventCreateWithoutCreatedByInput[] | SubPackageExtendedAuditEventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SubPackageExtendedAuditEventCreateOrConnectWithoutCreatedByInput | SubPackageExtendedAuditEventCreateOrConnectWithoutCreatedByInput[]
    createMany?: SubPackageExtendedAuditEventCreateManyCreatedByInputEnvelope
    connect?: SubPackageExtendedAuditEventWhereUniqueInput | SubPackageExtendedAuditEventWhereUniqueInput[]
  }

  export type UserRepaymentAuditEventCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<UserRepaymentAuditEventCreateWithoutCreatedByInput, UserRepaymentAuditEventUncheckedCreateWithoutCreatedByInput> | UserRepaymentAuditEventCreateWithoutCreatedByInput[] | UserRepaymentAuditEventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserRepaymentAuditEventCreateOrConnectWithoutCreatedByInput | UserRepaymentAuditEventCreateOrConnectWithoutCreatedByInput[]
    createMany?: UserRepaymentAuditEventCreateManyCreatedByInputEnvelope
    connect?: UserRepaymentAuditEventWhereUniqueInput | UserRepaymentAuditEventWhereUniqueInput[]
  }

  export type EntityUpdatedAuditEventCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<EntityUpdatedAuditEventCreateWithoutCreatedByInput, EntityUpdatedAuditEventUncheckedCreateWithoutCreatedByInput> | EntityUpdatedAuditEventCreateWithoutCreatedByInput[] | EntityUpdatedAuditEventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EntityUpdatedAuditEventCreateOrConnectWithoutCreatedByInput | EntityUpdatedAuditEventCreateOrConnectWithoutCreatedByInput[]
    createMany?: EntityUpdatedAuditEventCreateManyCreatedByInputEnvelope
    connect?: EntityUpdatedAuditEventWhereUniqueInput | EntityUpdatedAuditEventWhereUniqueInput[]
  }

  export type ReferalDetailsUncheckedCreateNestedManyWithoutAttractorInput = {
    create?: XOR<ReferalDetailsCreateWithoutAttractorInput, ReferalDetailsUncheckedCreateWithoutAttractorInput> | ReferalDetailsCreateWithoutAttractorInput[] | ReferalDetailsUncheckedCreateWithoutAttractorInput[]
    connectOrCreate?: ReferalDetailsCreateOrConnectWithoutAttractorInput | ReferalDetailsCreateOrConnectWithoutAttractorInput[]
    createMany?: ReferalDetailsCreateManyAttractorInputEnvelope
    connect?: ReferalDetailsWhereUniqueInput | ReferalDetailsWhereUniqueInput[]
  }

  export type UserRepaymentAuditEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRepaymentAuditEventCreateWithoutUserInput, UserRepaymentAuditEventUncheckedCreateWithoutUserInput> | UserRepaymentAuditEventCreateWithoutUserInput[] | UserRepaymentAuditEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRepaymentAuditEventCreateOrConnectWithoutUserInput | UserRepaymentAuditEventCreateOrConnectWithoutUserInput[]
    createMany?: UserRepaymentAuditEventCreateManyUserInputEnvelope
    connect?: UserRepaymentAuditEventWhereUniqueInput | UserRepaymentAuditEventWhereUniqueInput[]
  }

  export type SubUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<SubCreateWithoutCreatedByInput, SubUncheckedCreateWithoutCreatedByInput> | SubCreateWithoutCreatedByInput[] | SubUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SubCreateOrConnectWithoutCreatedByInput | SubCreateOrConnectWithoutCreatedByInput[]
    createMany?: SubCreateManyCreatedByInputEnvelope
    connect?: SubWhereUniqueInput | SubWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput> | UserCreateWithoutCreatedByInput[] | UserUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedByInput | UserCreateOrConnectWithoutCreatedByInput[]
    createMany?: UserCreateManyCreatedByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SubPackageExtendedAuditEventUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<SubPackageExtendedAuditEventCreateWithoutCreatedByInput, SubPackageExtendedAuditEventUncheckedCreateWithoutCreatedByInput> | SubPackageExtendedAuditEventCreateWithoutCreatedByInput[] | SubPackageExtendedAuditEventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SubPackageExtendedAuditEventCreateOrConnectWithoutCreatedByInput | SubPackageExtendedAuditEventCreateOrConnectWithoutCreatedByInput[]
    createMany?: SubPackageExtendedAuditEventCreateManyCreatedByInputEnvelope
    connect?: SubPackageExtendedAuditEventWhereUniqueInput | SubPackageExtendedAuditEventWhereUniqueInput[]
  }

  export type UserRepaymentAuditEventUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<UserRepaymentAuditEventCreateWithoutCreatedByInput, UserRepaymentAuditEventUncheckedCreateWithoutCreatedByInput> | UserRepaymentAuditEventCreateWithoutCreatedByInput[] | UserRepaymentAuditEventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserRepaymentAuditEventCreateOrConnectWithoutCreatedByInput | UserRepaymentAuditEventCreateOrConnectWithoutCreatedByInput[]
    createMany?: UserRepaymentAuditEventCreateManyCreatedByInputEnvelope
    connect?: UserRepaymentAuditEventWhereUniqueInput | UserRepaymentAuditEventWhereUniqueInput[]
  }

  export type EntityUpdatedAuditEventUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<EntityUpdatedAuditEventCreateWithoutCreatedByInput, EntityUpdatedAuditEventUncheckedCreateWithoutCreatedByInput> | EntityUpdatedAuditEventCreateWithoutCreatedByInput[] | EntityUpdatedAuditEventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EntityUpdatedAuditEventCreateOrConnectWithoutCreatedByInput | EntityUpdatedAuditEventCreateOrConnectWithoutCreatedByInput[]
    createMany?: EntityUpdatedAuditEventCreateManyCreatedByInputEnvelope
    connect?: EntityUpdatedAuditEventWhereUniqueInput | EntityUpdatedAuditEventWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SubUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubCreateWithoutUserInput, SubUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubCreateOrConnectWithoutUserInput
    upsert?: SubUpsertWithoutUserInput
    disconnect?: SubWhereInput | boolean
    delete?: SubWhereInput | boolean
    connect?: SubWhereUniqueInput
    update?: XOR<XOR<SubUpdateToOneWithWhereWithoutUserInput, SubUpdateWithoutUserInput>, SubUncheckedUpdateWithoutUserInput>
  }

  export type ReferalDetailsUpdateManyWithoutAttractorNestedInput = {
    create?: XOR<ReferalDetailsCreateWithoutAttractorInput, ReferalDetailsUncheckedCreateWithoutAttractorInput> | ReferalDetailsCreateWithoutAttractorInput[] | ReferalDetailsUncheckedCreateWithoutAttractorInput[]
    connectOrCreate?: ReferalDetailsCreateOrConnectWithoutAttractorInput | ReferalDetailsCreateOrConnectWithoutAttractorInput[]
    upsert?: ReferalDetailsUpsertWithWhereUniqueWithoutAttractorInput | ReferalDetailsUpsertWithWhereUniqueWithoutAttractorInput[]
    createMany?: ReferalDetailsCreateManyAttractorInputEnvelope
    set?: ReferalDetailsWhereUniqueInput | ReferalDetailsWhereUniqueInput[]
    disconnect?: ReferalDetailsWhereUniqueInput | ReferalDetailsWhereUniqueInput[]
    delete?: ReferalDetailsWhereUniqueInput | ReferalDetailsWhereUniqueInput[]
    connect?: ReferalDetailsWhereUniqueInput | ReferalDetailsWhereUniqueInput[]
    update?: ReferalDetailsUpdateWithWhereUniqueWithoutAttractorInput | ReferalDetailsUpdateWithWhereUniqueWithoutAttractorInput[]
    updateMany?: ReferalDetailsUpdateManyWithWhereWithoutAttractorInput | ReferalDetailsUpdateManyWithWhereWithoutAttractorInput[]
    deleteMany?: ReferalDetailsScalarWhereInput | ReferalDetailsScalarWhereInput[]
  }

  export type UserRepaymentAuditEventUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRepaymentAuditEventCreateWithoutUserInput, UserRepaymentAuditEventUncheckedCreateWithoutUserInput> | UserRepaymentAuditEventCreateWithoutUserInput[] | UserRepaymentAuditEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRepaymentAuditEventCreateOrConnectWithoutUserInput | UserRepaymentAuditEventCreateOrConnectWithoutUserInput[]
    upsert?: UserRepaymentAuditEventUpsertWithWhereUniqueWithoutUserInput | UserRepaymentAuditEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRepaymentAuditEventCreateManyUserInputEnvelope
    set?: UserRepaymentAuditEventWhereUniqueInput | UserRepaymentAuditEventWhereUniqueInput[]
    disconnect?: UserRepaymentAuditEventWhereUniqueInput | UserRepaymentAuditEventWhereUniqueInput[]
    delete?: UserRepaymentAuditEventWhereUniqueInput | UserRepaymentAuditEventWhereUniqueInput[]
    connect?: UserRepaymentAuditEventWhereUniqueInput | UserRepaymentAuditEventWhereUniqueInput[]
    update?: UserRepaymentAuditEventUpdateWithWhereUniqueWithoutUserInput | UserRepaymentAuditEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRepaymentAuditEventUpdateManyWithWhereWithoutUserInput | UserRepaymentAuditEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRepaymentAuditEventScalarWhereInput | UserRepaymentAuditEventScalarWhereInput[]
  }

  export type SubUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<SubCreateWithoutCreatedByInput, SubUncheckedCreateWithoutCreatedByInput> | SubCreateWithoutCreatedByInput[] | SubUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SubCreateOrConnectWithoutCreatedByInput | SubCreateOrConnectWithoutCreatedByInput[]
    upsert?: SubUpsertWithWhereUniqueWithoutCreatedByInput | SubUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: SubCreateManyCreatedByInputEnvelope
    set?: SubWhereUniqueInput | SubWhereUniqueInput[]
    disconnect?: SubWhereUniqueInput | SubWhereUniqueInput[]
    delete?: SubWhereUniqueInput | SubWhereUniqueInput[]
    connect?: SubWhereUniqueInput | SubWhereUniqueInput[]
    update?: SubUpdateWithWhereUniqueWithoutCreatedByInput | SubUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: SubUpdateManyWithWhereWithoutCreatedByInput | SubUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: SubScalarWhereInput | SubScalarWhereInput[]
  }

  export type UserUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput> | UserCreateWithoutCreatedByInput[] | UserUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedByInput | UserCreateOrConnectWithoutCreatedByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCreatedByInput | UserUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: UserCreateManyCreatedByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCreatedByInput | UserUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCreatedByInput | UserUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateOneWithoutCreatedUsersNestedInput = {
    create?: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedUsersInput
    upsert?: UserUpsertWithoutCreatedUsersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedUsersInput, UserUpdateWithoutCreatedUsersInput>, UserUncheckedUpdateWithoutCreatedUsersInput>
  }

  export type SubPackageExtendedAuditEventUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<SubPackageExtendedAuditEventCreateWithoutCreatedByInput, SubPackageExtendedAuditEventUncheckedCreateWithoutCreatedByInput> | SubPackageExtendedAuditEventCreateWithoutCreatedByInput[] | SubPackageExtendedAuditEventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SubPackageExtendedAuditEventCreateOrConnectWithoutCreatedByInput | SubPackageExtendedAuditEventCreateOrConnectWithoutCreatedByInput[]
    upsert?: SubPackageExtendedAuditEventUpsertWithWhereUniqueWithoutCreatedByInput | SubPackageExtendedAuditEventUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: SubPackageExtendedAuditEventCreateManyCreatedByInputEnvelope
    set?: SubPackageExtendedAuditEventWhereUniqueInput | SubPackageExtendedAuditEventWhereUniqueInput[]
    disconnect?: SubPackageExtendedAuditEventWhereUniqueInput | SubPackageExtendedAuditEventWhereUniqueInput[]
    delete?: SubPackageExtendedAuditEventWhereUniqueInput | SubPackageExtendedAuditEventWhereUniqueInput[]
    connect?: SubPackageExtendedAuditEventWhereUniqueInput | SubPackageExtendedAuditEventWhereUniqueInput[]
    update?: SubPackageExtendedAuditEventUpdateWithWhereUniqueWithoutCreatedByInput | SubPackageExtendedAuditEventUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: SubPackageExtendedAuditEventUpdateManyWithWhereWithoutCreatedByInput | SubPackageExtendedAuditEventUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: SubPackageExtendedAuditEventScalarWhereInput | SubPackageExtendedAuditEventScalarWhereInput[]
  }

  export type UserRepaymentAuditEventUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<UserRepaymentAuditEventCreateWithoutCreatedByInput, UserRepaymentAuditEventUncheckedCreateWithoutCreatedByInput> | UserRepaymentAuditEventCreateWithoutCreatedByInput[] | UserRepaymentAuditEventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserRepaymentAuditEventCreateOrConnectWithoutCreatedByInput | UserRepaymentAuditEventCreateOrConnectWithoutCreatedByInput[]
    upsert?: UserRepaymentAuditEventUpsertWithWhereUniqueWithoutCreatedByInput | UserRepaymentAuditEventUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: UserRepaymentAuditEventCreateManyCreatedByInputEnvelope
    set?: UserRepaymentAuditEventWhereUniqueInput | UserRepaymentAuditEventWhereUniqueInput[]
    disconnect?: UserRepaymentAuditEventWhereUniqueInput | UserRepaymentAuditEventWhereUniqueInput[]
    delete?: UserRepaymentAuditEventWhereUniqueInput | UserRepaymentAuditEventWhereUniqueInput[]
    connect?: UserRepaymentAuditEventWhereUniqueInput | UserRepaymentAuditEventWhereUniqueInput[]
    update?: UserRepaymentAuditEventUpdateWithWhereUniqueWithoutCreatedByInput | UserRepaymentAuditEventUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: UserRepaymentAuditEventUpdateManyWithWhereWithoutCreatedByInput | UserRepaymentAuditEventUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: UserRepaymentAuditEventScalarWhereInput | UserRepaymentAuditEventScalarWhereInput[]
  }

  export type EntityUpdatedAuditEventUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<EntityUpdatedAuditEventCreateWithoutCreatedByInput, EntityUpdatedAuditEventUncheckedCreateWithoutCreatedByInput> | EntityUpdatedAuditEventCreateWithoutCreatedByInput[] | EntityUpdatedAuditEventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EntityUpdatedAuditEventCreateOrConnectWithoutCreatedByInput | EntityUpdatedAuditEventCreateOrConnectWithoutCreatedByInput[]
    upsert?: EntityUpdatedAuditEventUpsertWithWhereUniqueWithoutCreatedByInput | EntityUpdatedAuditEventUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: EntityUpdatedAuditEventCreateManyCreatedByInputEnvelope
    set?: EntityUpdatedAuditEventWhereUniqueInput | EntityUpdatedAuditEventWhereUniqueInput[]
    disconnect?: EntityUpdatedAuditEventWhereUniqueInput | EntityUpdatedAuditEventWhereUniqueInput[]
    delete?: EntityUpdatedAuditEventWhereUniqueInput | EntityUpdatedAuditEventWhereUniqueInput[]
    connect?: EntityUpdatedAuditEventWhereUniqueInput | EntityUpdatedAuditEventWhereUniqueInput[]
    update?: EntityUpdatedAuditEventUpdateWithWhereUniqueWithoutCreatedByInput | EntityUpdatedAuditEventUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: EntityUpdatedAuditEventUpdateManyWithWhereWithoutCreatedByInput | EntityUpdatedAuditEventUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: EntityUpdatedAuditEventScalarWhereInput | EntityUpdatedAuditEventScalarWhereInput[]
  }

  export type ReferalDetailsUncheckedUpdateManyWithoutAttractorNestedInput = {
    create?: XOR<ReferalDetailsCreateWithoutAttractorInput, ReferalDetailsUncheckedCreateWithoutAttractorInput> | ReferalDetailsCreateWithoutAttractorInput[] | ReferalDetailsUncheckedCreateWithoutAttractorInput[]
    connectOrCreate?: ReferalDetailsCreateOrConnectWithoutAttractorInput | ReferalDetailsCreateOrConnectWithoutAttractorInput[]
    upsert?: ReferalDetailsUpsertWithWhereUniqueWithoutAttractorInput | ReferalDetailsUpsertWithWhereUniqueWithoutAttractorInput[]
    createMany?: ReferalDetailsCreateManyAttractorInputEnvelope
    set?: ReferalDetailsWhereUniqueInput | ReferalDetailsWhereUniqueInput[]
    disconnect?: ReferalDetailsWhereUniqueInput | ReferalDetailsWhereUniqueInput[]
    delete?: ReferalDetailsWhereUniqueInput | ReferalDetailsWhereUniqueInput[]
    connect?: ReferalDetailsWhereUniqueInput | ReferalDetailsWhereUniqueInput[]
    update?: ReferalDetailsUpdateWithWhereUniqueWithoutAttractorInput | ReferalDetailsUpdateWithWhereUniqueWithoutAttractorInput[]
    updateMany?: ReferalDetailsUpdateManyWithWhereWithoutAttractorInput | ReferalDetailsUpdateManyWithWhereWithoutAttractorInput[]
    deleteMany?: ReferalDetailsScalarWhereInput | ReferalDetailsScalarWhereInput[]
  }

  export type UserRepaymentAuditEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRepaymentAuditEventCreateWithoutUserInput, UserRepaymentAuditEventUncheckedCreateWithoutUserInput> | UserRepaymentAuditEventCreateWithoutUserInput[] | UserRepaymentAuditEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRepaymentAuditEventCreateOrConnectWithoutUserInput | UserRepaymentAuditEventCreateOrConnectWithoutUserInput[]
    upsert?: UserRepaymentAuditEventUpsertWithWhereUniqueWithoutUserInput | UserRepaymentAuditEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRepaymentAuditEventCreateManyUserInputEnvelope
    set?: UserRepaymentAuditEventWhereUniqueInput | UserRepaymentAuditEventWhereUniqueInput[]
    disconnect?: UserRepaymentAuditEventWhereUniqueInput | UserRepaymentAuditEventWhereUniqueInput[]
    delete?: UserRepaymentAuditEventWhereUniqueInput | UserRepaymentAuditEventWhereUniqueInput[]
    connect?: UserRepaymentAuditEventWhereUniqueInput | UserRepaymentAuditEventWhereUniqueInput[]
    update?: UserRepaymentAuditEventUpdateWithWhereUniqueWithoutUserInput | UserRepaymentAuditEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRepaymentAuditEventUpdateManyWithWhereWithoutUserInput | UserRepaymentAuditEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRepaymentAuditEventScalarWhereInput | UserRepaymentAuditEventScalarWhereInput[]
  }

  export type SubUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<SubCreateWithoutCreatedByInput, SubUncheckedCreateWithoutCreatedByInput> | SubCreateWithoutCreatedByInput[] | SubUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SubCreateOrConnectWithoutCreatedByInput | SubCreateOrConnectWithoutCreatedByInput[]
    upsert?: SubUpsertWithWhereUniqueWithoutCreatedByInput | SubUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: SubCreateManyCreatedByInputEnvelope
    set?: SubWhereUniqueInput | SubWhereUniqueInput[]
    disconnect?: SubWhereUniqueInput | SubWhereUniqueInput[]
    delete?: SubWhereUniqueInput | SubWhereUniqueInput[]
    connect?: SubWhereUniqueInput | SubWhereUniqueInput[]
    update?: SubUpdateWithWhereUniqueWithoutCreatedByInput | SubUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: SubUpdateManyWithWhereWithoutCreatedByInput | SubUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: SubScalarWhereInput | SubScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput> | UserCreateWithoutCreatedByInput[] | UserUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedByInput | UserCreateOrConnectWithoutCreatedByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCreatedByInput | UserUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: UserCreateManyCreatedByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCreatedByInput | UserUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCreatedByInput | UserUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SubPackageExtendedAuditEventUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<SubPackageExtendedAuditEventCreateWithoutCreatedByInput, SubPackageExtendedAuditEventUncheckedCreateWithoutCreatedByInput> | SubPackageExtendedAuditEventCreateWithoutCreatedByInput[] | SubPackageExtendedAuditEventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SubPackageExtendedAuditEventCreateOrConnectWithoutCreatedByInput | SubPackageExtendedAuditEventCreateOrConnectWithoutCreatedByInput[]
    upsert?: SubPackageExtendedAuditEventUpsertWithWhereUniqueWithoutCreatedByInput | SubPackageExtendedAuditEventUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: SubPackageExtendedAuditEventCreateManyCreatedByInputEnvelope
    set?: SubPackageExtendedAuditEventWhereUniqueInput | SubPackageExtendedAuditEventWhereUniqueInput[]
    disconnect?: SubPackageExtendedAuditEventWhereUniqueInput | SubPackageExtendedAuditEventWhereUniqueInput[]
    delete?: SubPackageExtendedAuditEventWhereUniqueInput | SubPackageExtendedAuditEventWhereUniqueInput[]
    connect?: SubPackageExtendedAuditEventWhereUniqueInput | SubPackageExtendedAuditEventWhereUniqueInput[]
    update?: SubPackageExtendedAuditEventUpdateWithWhereUniqueWithoutCreatedByInput | SubPackageExtendedAuditEventUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: SubPackageExtendedAuditEventUpdateManyWithWhereWithoutCreatedByInput | SubPackageExtendedAuditEventUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: SubPackageExtendedAuditEventScalarWhereInput | SubPackageExtendedAuditEventScalarWhereInput[]
  }

  export type UserRepaymentAuditEventUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<UserRepaymentAuditEventCreateWithoutCreatedByInput, UserRepaymentAuditEventUncheckedCreateWithoutCreatedByInput> | UserRepaymentAuditEventCreateWithoutCreatedByInput[] | UserRepaymentAuditEventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserRepaymentAuditEventCreateOrConnectWithoutCreatedByInput | UserRepaymentAuditEventCreateOrConnectWithoutCreatedByInput[]
    upsert?: UserRepaymentAuditEventUpsertWithWhereUniqueWithoutCreatedByInput | UserRepaymentAuditEventUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: UserRepaymentAuditEventCreateManyCreatedByInputEnvelope
    set?: UserRepaymentAuditEventWhereUniqueInput | UserRepaymentAuditEventWhereUniqueInput[]
    disconnect?: UserRepaymentAuditEventWhereUniqueInput | UserRepaymentAuditEventWhereUniqueInput[]
    delete?: UserRepaymentAuditEventWhereUniqueInput | UserRepaymentAuditEventWhereUniqueInput[]
    connect?: UserRepaymentAuditEventWhereUniqueInput | UserRepaymentAuditEventWhereUniqueInput[]
    update?: UserRepaymentAuditEventUpdateWithWhereUniqueWithoutCreatedByInput | UserRepaymentAuditEventUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: UserRepaymentAuditEventUpdateManyWithWhereWithoutCreatedByInput | UserRepaymentAuditEventUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: UserRepaymentAuditEventScalarWhereInput | UserRepaymentAuditEventScalarWhereInput[]
  }

  export type EntityUpdatedAuditEventUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<EntityUpdatedAuditEventCreateWithoutCreatedByInput, EntityUpdatedAuditEventUncheckedCreateWithoutCreatedByInput> | EntityUpdatedAuditEventCreateWithoutCreatedByInput[] | EntityUpdatedAuditEventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EntityUpdatedAuditEventCreateOrConnectWithoutCreatedByInput | EntityUpdatedAuditEventCreateOrConnectWithoutCreatedByInput[]
    upsert?: EntityUpdatedAuditEventUpsertWithWhereUniqueWithoutCreatedByInput | EntityUpdatedAuditEventUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: EntityUpdatedAuditEventCreateManyCreatedByInputEnvelope
    set?: EntityUpdatedAuditEventWhereUniqueInput | EntityUpdatedAuditEventWhereUniqueInput[]
    disconnect?: EntityUpdatedAuditEventWhereUniqueInput | EntityUpdatedAuditEventWhereUniqueInput[]
    delete?: EntityUpdatedAuditEventWhereUniqueInput | EntityUpdatedAuditEventWhereUniqueInput[]
    connect?: EntityUpdatedAuditEventWhereUniqueInput | EntityUpdatedAuditEventWhereUniqueInput[]
    update?: EntityUpdatedAuditEventUpdateWithWhereUniqueWithoutCreatedByInput | EntityUpdatedAuditEventUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: EntityUpdatedAuditEventUpdateManyWithWhereWithoutCreatedByInput | EntityUpdatedAuditEventUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: EntityUpdatedAuditEventScalarWhereInput | EntityUpdatedAuditEventScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubInput = {
    create?: XOR<UserCreateWithoutSubInput, UserUncheckedCreateWithoutSubInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubInput
    connect?: UserWhereUniqueInput
  }

  export type ReferalDetailsCreateNestedOneWithoutAttractedSubInput = {
    create?: XOR<ReferalDetailsCreateWithoutAttractedSubInput, ReferalDetailsUncheckedCreateWithoutAttractedSubInput>
    connectOrCreate?: ReferalDetailsCreateOrConnectWithoutAttractedSubInput
    connect?: ReferalDetailsWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutSubInput = {
    create?: XOR<PaymentCreateWithoutSubInput, PaymentUncheckedCreateWithoutSubInput> | PaymentCreateWithoutSubInput[] | PaymentUncheckedCreateWithoutSubInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubInput | PaymentCreateOrConnectWithoutSubInput[]
    createMany?: PaymentCreateManySubInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type SubPackageExtendedAuditEventCreateNestedManyWithoutSubInput = {
    create?: XOR<SubPackageExtendedAuditEventCreateWithoutSubInput, SubPackageExtendedAuditEventUncheckedCreateWithoutSubInput> | SubPackageExtendedAuditEventCreateWithoutSubInput[] | SubPackageExtendedAuditEventUncheckedCreateWithoutSubInput[]
    connectOrCreate?: SubPackageExtendedAuditEventCreateOrConnectWithoutSubInput | SubPackageExtendedAuditEventCreateOrConnectWithoutSubInput[]
    createMany?: SubPackageExtendedAuditEventCreateManySubInputEnvelope
    connect?: SubPackageExtendedAuditEventWhereUniqueInput | SubPackageExtendedAuditEventWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCreatedSubsInput = {
    create?: XOR<UserCreateWithoutCreatedSubsInput, UserUncheckedCreateWithoutCreatedSubsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedSubsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUncheckedCreateNestedOneWithoutSubInput = {
    create?: XOR<UserCreateWithoutSubInput, UserUncheckedCreateWithoutSubInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubInput
    connect?: UserWhereUniqueInput
  }

  export type ReferalDetailsUncheckedCreateNestedOneWithoutAttractedSubInput = {
    create?: XOR<ReferalDetailsCreateWithoutAttractedSubInput, ReferalDetailsUncheckedCreateWithoutAttractedSubInput>
    connectOrCreate?: ReferalDetailsCreateOrConnectWithoutAttractedSubInput
    connect?: ReferalDetailsWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedManyWithoutSubInput = {
    create?: XOR<PaymentCreateWithoutSubInput, PaymentUncheckedCreateWithoutSubInput> | PaymentCreateWithoutSubInput[] | PaymentUncheckedCreateWithoutSubInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubInput | PaymentCreateOrConnectWithoutSubInput[]
    createMany?: PaymentCreateManySubInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type SubPackageExtendedAuditEventUncheckedCreateNestedManyWithoutSubInput = {
    create?: XOR<SubPackageExtendedAuditEventCreateWithoutSubInput, SubPackageExtendedAuditEventUncheckedCreateWithoutSubInput> | SubPackageExtendedAuditEventCreateWithoutSubInput[] | SubPackageExtendedAuditEventUncheckedCreateWithoutSubInput[]
    connectOrCreate?: SubPackageExtendedAuditEventCreateOrConnectWithoutSubInput | SubPackageExtendedAuditEventCreateOrConnectWithoutSubInput[]
    createMany?: SubPackageExtendedAuditEventCreateManySubInputEnvelope
    connect?: SubPackageExtendedAuditEventWhereUniqueInput | SubPackageExtendedAuditEventWhereUniqueInput[]
  }

  export type NullableEnumPackageTypeFieldUpdateOperationsInput = {
    set?: $Enums.PackageType | null
  }

  export type NullableEnumRegionFieldUpdateOperationsInput = {
    set?: $Enums.Region | null
  }

  export type UserUpdateOneWithoutSubNestedInput = {
    create?: XOR<UserCreateWithoutSubInput, UserUncheckedCreateWithoutSubInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubInput
    upsert?: UserUpsertWithoutSubInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubInput, UserUpdateWithoutSubInput>, UserUncheckedUpdateWithoutSubInput>
  }

  export type ReferalDetailsUpdateOneWithoutAttractedSubNestedInput = {
    create?: XOR<ReferalDetailsCreateWithoutAttractedSubInput, ReferalDetailsUncheckedCreateWithoutAttractedSubInput>
    connectOrCreate?: ReferalDetailsCreateOrConnectWithoutAttractedSubInput
    upsert?: ReferalDetailsUpsertWithoutAttractedSubInput
    disconnect?: ReferalDetailsWhereInput | boolean
    delete?: ReferalDetailsWhereInput | boolean
    connect?: ReferalDetailsWhereUniqueInput
    update?: XOR<XOR<ReferalDetailsUpdateToOneWithWhereWithoutAttractedSubInput, ReferalDetailsUpdateWithoutAttractedSubInput>, ReferalDetailsUncheckedUpdateWithoutAttractedSubInput>
  }

  export type PaymentUpdateManyWithoutSubNestedInput = {
    create?: XOR<PaymentCreateWithoutSubInput, PaymentUncheckedCreateWithoutSubInput> | PaymentCreateWithoutSubInput[] | PaymentUncheckedCreateWithoutSubInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubInput | PaymentCreateOrConnectWithoutSubInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutSubInput | PaymentUpsertWithWhereUniqueWithoutSubInput[]
    createMany?: PaymentCreateManySubInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutSubInput | PaymentUpdateWithWhereUniqueWithoutSubInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutSubInput | PaymentUpdateManyWithWhereWithoutSubInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type SubPackageExtendedAuditEventUpdateManyWithoutSubNestedInput = {
    create?: XOR<SubPackageExtendedAuditEventCreateWithoutSubInput, SubPackageExtendedAuditEventUncheckedCreateWithoutSubInput> | SubPackageExtendedAuditEventCreateWithoutSubInput[] | SubPackageExtendedAuditEventUncheckedCreateWithoutSubInput[]
    connectOrCreate?: SubPackageExtendedAuditEventCreateOrConnectWithoutSubInput | SubPackageExtendedAuditEventCreateOrConnectWithoutSubInput[]
    upsert?: SubPackageExtendedAuditEventUpsertWithWhereUniqueWithoutSubInput | SubPackageExtendedAuditEventUpsertWithWhereUniqueWithoutSubInput[]
    createMany?: SubPackageExtendedAuditEventCreateManySubInputEnvelope
    set?: SubPackageExtendedAuditEventWhereUniqueInput | SubPackageExtendedAuditEventWhereUniqueInput[]
    disconnect?: SubPackageExtendedAuditEventWhereUniqueInput | SubPackageExtendedAuditEventWhereUniqueInput[]
    delete?: SubPackageExtendedAuditEventWhereUniqueInput | SubPackageExtendedAuditEventWhereUniqueInput[]
    connect?: SubPackageExtendedAuditEventWhereUniqueInput | SubPackageExtendedAuditEventWhereUniqueInput[]
    update?: SubPackageExtendedAuditEventUpdateWithWhereUniqueWithoutSubInput | SubPackageExtendedAuditEventUpdateWithWhereUniqueWithoutSubInput[]
    updateMany?: SubPackageExtendedAuditEventUpdateManyWithWhereWithoutSubInput | SubPackageExtendedAuditEventUpdateManyWithWhereWithoutSubInput[]
    deleteMany?: SubPackageExtendedAuditEventScalarWhereInput | SubPackageExtendedAuditEventScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedSubsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedSubsInput, UserUncheckedCreateWithoutCreatedSubsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedSubsInput
    upsert?: UserUpsertWithoutCreatedSubsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedSubsInput, UserUpdateWithoutCreatedSubsInput>, UserUncheckedUpdateWithoutCreatedSubsInput>
  }

  export type UserUncheckedUpdateOneWithoutSubNestedInput = {
    create?: XOR<UserCreateWithoutSubInput, UserUncheckedCreateWithoutSubInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubInput
    upsert?: UserUpsertWithoutSubInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubInput, UserUpdateWithoutSubInput>, UserUncheckedUpdateWithoutSubInput>
  }

  export type ReferalDetailsUncheckedUpdateOneWithoutAttractedSubNestedInput = {
    create?: XOR<ReferalDetailsCreateWithoutAttractedSubInput, ReferalDetailsUncheckedCreateWithoutAttractedSubInput>
    connectOrCreate?: ReferalDetailsCreateOrConnectWithoutAttractedSubInput
    upsert?: ReferalDetailsUpsertWithoutAttractedSubInput
    disconnect?: ReferalDetailsWhereInput | boolean
    delete?: ReferalDetailsWhereInput | boolean
    connect?: ReferalDetailsWhereUniqueInput
    update?: XOR<XOR<ReferalDetailsUpdateToOneWithWhereWithoutAttractedSubInput, ReferalDetailsUpdateWithoutAttractedSubInput>, ReferalDetailsUncheckedUpdateWithoutAttractedSubInput>
  }

  export type PaymentUncheckedUpdateManyWithoutSubNestedInput = {
    create?: XOR<PaymentCreateWithoutSubInput, PaymentUncheckedCreateWithoutSubInput> | PaymentCreateWithoutSubInput[] | PaymentUncheckedCreateWithoutSubInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubInput | PaymentCreateOrConnectWithoutSubInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutSubInput | PaymentUpsertWithWhereUniqueWithoutSubInput[]
    createMany?: PaymentCreateManySubInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutSubInput | PaymentUpdateWithWhereUniqueWithoutSubInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutSubInput | PaymentUpdateManyWithWhereWithoutSubInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type SubPackageExtendedAuditEventUncheckedUpdateManyWithoutSubNestedInput = {
    create?: XOR<SubPackageExtendedAuditEventCreateWithoutSubInput, SubPackageExtendedAuditEventUncheckedCreateWithoutSubInput> | SubPackageExtendedAuditEventCreateWithoutSubInput[] | SubPackageExtendedAuditEventUncheckedCreateWithoutSubInput[]
    connectOrCreate?: SubPackageExtendedAuditEventCreateOrConnectWithoutSubInput | SubPackageExtendedAuditEventCreateOrConnectWithoutSubInput[]
    upsert?: SubPackageExtendedAuditEventUpsertWithWhereUniqueWithoutSubInput | SubPackageExtendedAuditEventUpsertWithWhereUniqueWithoutSubInput[]
    createMany?: SubPackageExtendedAuditEventCreateManySubInputEnvelope
    set?: SubPackageExtendedAuditEventWhereUniqueInput | SubPackageExtendedAuditEventWhereUniqueInput[]
    disconnect?: SubPackageExtendedAuditEventWhereUniqueInput | SubPackageExtendedAuditEventWhereUniqueInput[]
    delete?: SubPackageExtendedAuditEventWhereUniqueInput | SubPackageExtendedAuditEventWhereUniqueInput[]
    connect?: SubPackageExtendedAuditEventWhereUniqueInput | SubPackageExtendedAuditEventWhereUniqueInput[]
    update?: SubPackageExtendedAuditEventUpdateWithWhereUniqueWithoutSubInput | SubPackageExtendedAuditEventUpdateWithWhereUniqueWithoutSubInput[]
    updateMany?: SubPackageExtendedAuditEventUpdateManyWithWhereWithoutSubInput | SubPackageExtendedAuditEventUpdateManyWithWhereWithoutSubInput[]
    deleteMany?: SubPackageExtendedAuditEventScalarWhereInput | SubPackageExtendedAuditEventScalarWhereInput[]
  }

  export type SubCreateNestedOneWithoutReferalDetailsInput = {
    create?: XOR<SubCreateWithoutReferalDetailsInput, SubUncheckedCreateWithoutReferalDetailsInput>
    connectOrCreate?: SubCreateOrConnectWithoutReferalDetailsInput
    connect?: SubWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAttractedSubsInput = {
    create?: XOR<UserCreateWithoutAttractedSubsInput, UserUncheckedCreateWithoutAttractedSubsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttractedSubsInput
    connect?: UserWhereUniqueInput
  }

  export type SubPackageExtendedAuditEventCreateNestedOneWithoutAttractedSubReferalDetailsInput = {
    create?: XOR<SubPackageExtendedAuditEventCreateWithoutAttractedSubReferalDetailsInput, SubPackageExtendedAuditEventUncheckedCreateWithoutAttractedSubReferalDetailsInput>
    connectOrCreate?: SubPackageExtendedAuditEventCreateOrConnectWithoutAttractedSubReferalDetailsInput
    connect?: SubPackageExtendedAuditEventWhereUniqueInput
  }

  export type UserRewardTriggeredAuditEventCreateNestedManyWithoutReferalDetailsInput = {
    create?: XOR<UserRewardTriggeredAuditEventCreateWithoutReferalDetailsInput, UserRewardTriggeredAuditEventUncheckedCreateWithoutReferalDetailsInput> | UserRewardTriggeredAuditEventCreateWithoutReferalDetailsInput[] | UserRewardTriggeredAuditEventUncheckedCreateWithoutReferalDetailsInput[]
    connectOrCreate?: UserRewardTriggeredAuditEventCreateOrConnectWithoutReferalDetailsInput | UserRewardTriggeredAuditEventCreateOrConnectWithoutReferalDetailsInput[]
    createMany?: UserRewardTriggeredAuditEventCreateManyReferalDetailsInputEnvelope
    connect?: UserRewardTriggeredAuditEventWhereUniqueInput | UserRewardTriggeredAuditEventWhereUniqueInput[]
  }

  export type SubPackageExtendedAuditEventUncheckedCreateNestedOneWithoutAttractedSubReferalDetailsInput = {
    create?: XOR<SubPackageExtendedAuditEventCreateWithoutAttractedSubReferalDetailsInput, SubPackageExtendedAuditEventUncheckedCreateWithoutAttractedSubReferalDetailsInput>
    connectOrCreate?: SubPackageExtendedAuditEventCreateOrConnectWithoutAttractedSubReferalDetailsInput
    connect?: SubPackageExtendedAuditEventWhereUniqueInput
  }

  export type UserRewardTriggeredAuditEventUncheckedCreateNestedManyWithoutReferalDetailsInput = {
    create?: XOR<UserRewardTriggeredAuditEventCreateWithoutReferalDetailsInput, UserRewardTriggeredAuditEventUncheckedCreateWithoutReferalDetailsInput> | UserRewardTriggeredAuditEventCreateWithoutReferalDetailsInput[] | UserRewardTriggeredAuditEventUncheckedCreateWithoutReferalDetailsInput[]
    connectOrCreate?: UserRewardTriggeredAuditEventCreateOrConnectWithoutReferalDetailsInput | UserRewardTriggeredAuditEventCreateOrConnectWithoutReferalDetailsInput[]
    createMany?: UserRewardTriggeredAuditEventCreateManyReferalDetailsInputEnvelope
    connect?: UserRewardTriggeredAuditEventWhereUniqueInput | UserRewardTriggeredAuditEventWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubUpdateOneRequiredWithoutReferalDetailsNestedInput = {
    create?: XOR<SubCreateWithoutReferalDetailsInput, SubUncheckedCreateWithoutReferalDetailsInput>
    connectOrCreate?: SubCreateOrConnectWithoutReferalDetailsInput
    upsert?: SubUpsertWithoutReferalDetailsInput
    connect?: SubWhereUniqueInput
    update?: XOR<XOR<SubUpdateToOneWithWhereWithoutReferalDetailsInput, SubUpdateWithoutReferalDetailsInput>, SubUncheckedUpdateWithoutReferalDetailsInput>
  }

  export type UserUpdateOneRequiredWithoutAttractedSubsNestedInput = {
    create?: XOR<UserCreateWithoutAttractedSubsInput, UserUncheckedCreateWithoutAttractedSubsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttractedSubsInput
    upsert?: UserUpsertWithoutAttractedSubsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAttractedSubsInput, UserUpdateWithoutAttractedSubsInput>, UserUncheckedUpdateWithoutAttractedSubsInput>
  }

  export type SubPackageExtendedAuditEventUpdateOneWithoutAttractedSubReferalDetailsNestedInput = {
    create?: XOR<SubPackageExtendedAuditEventCreateWithoutAttractedSubReferalDetailsInput, SubPackageExtendedAuditEventUncheckedCreateWithoutAttractedSubReferalDetailsInput>
    connectOrCreate?: SubPackageExtendedAuditEventCreateOrConnectWithoutAttractedSubReferalDetailsInput
    upsert?: SubPackageExtendedAuditEventUpsertWithoutAttractedSubReferalDetailsInput
    disconnect?: SubPackageExtendedAuditEventWhereInput | boolean
    delete?: SubPackageExtendedAuditEventWhereInput | boolean
    connect?: SubPackageExtendedAuditEventWhereUniqueInput
    update?: XOR<XOR<SubPackageExtendedAuditEventUpdateToOneWithWhereWithoutAttractedSubReferalDetailsInput, SubPackageExtendedAuditEventUpdateWithoutAttractedSubReferalDetailsInput>, SubPackageExtendedAuditEventUncheckedUpdateWithoutAttractedSubReferalDetailsInput>
  }

  export type UserRewardTriggeredAuditEventUpdateManyWithoutReferalDetailsNestedInput = {
    create?: XOR<UserRewardTriggeredAuditEventCreateWithoutReferalDetailsInput, UserRewardTriggeredAuditEventUncheckedCreateWithoutReferalDetailsInput> | UserRewardTriggeredAuditEventCreateWithoutReferalDetailsInput[] | UserRewardTriggeredAuditEventUncheckedCreateWithoutReferalDetailsInput[]
    connectOrCreate?: UserRewardTriggeredAuditEventCreateOrConnectWithoutReferalDetailsInput | UserRewardTriggeredAuditEventCreateOrConnectWithoutReferalDetailsInput[]
    upsert?: UserRewardTriggeredAuditEventUpsertWithWhereUniqueWithoutReferalDetailsInput | UserRewardTriggeredAuditEventUpsertWithWhereUniqueWithoutReferalDetailsInput[]
    createMany?: UserRewardTriggeredAuditEventCreateManyReferalDetailsInputEnvelope
    set?: UserRewardTriggeredAuditEventWhereUniqueInput | UserRewardTriggeredAuditEventWhereUniqueInput[]
    disconnect?: UserRewardTriggeredAuditEventWhereUniqueInput | UserRewardTriggeredAuditEventWhereUniqueInput[]
    delete?: UserRewardTriggeredAuditEventWhereUniqueInput | UserRewardTriggeredAuditEventWhereUniqueInput[]
    connect?: UserRewardTriggeredAuditEventWhereUniqueInput | UserRewardTriggeredAuditEventWhereUniqueInput[]
    update?: UserRewardTriggeredAuditEventUpdateWithWhereUniqueWithoutReferalDetailsInput | UserRewardTriggeredAuditEventUpdateWithWhereUniqueWithoutReferalDetailsInput[]
    updateMany?: UserRewardTriggeredAuditEventUpdateManyWithWhereWithoutReferalDetailsInput | UserRewardTriggeredAuditEventUpdateManyWithWhereWithoutReferalDetailsInput[]
    deleteMany?: UserRewardTriggeredAuditEventScalarWhereInput | UserRewardTriggeredAuditEventScalarWhereInput[]
  }

  export type SubPackageExtendedAuditEventUncheckedUpdateOneWithoutAttractedSubReferalDetailsNestedInput = {
    create?: XOR<SubPackageExtendedAuditEventCreateWithoutAttractedSubReferalDetailsInput, SubPackageExtendedAuditEventUncheckedCreateWithoutAttractedSubReferalDetailsInput>
    connectOrCreate?: SubPackageExtendedAuditEventCreateOrConnectWithoutAttractedSubReferalDetailsInput
    upsert?: SubPackageExtendedAuditEventUpsertWithoutAttractedSubReferalDetailsInput
    disconnect?: SubPackageExtendedAuditEventWhereInput | boolean
    delete?: SubPackageExtendedAuditEventWhereInput | boolean
    connect?: SubPackageExtendedAuditEventWhereUniqueInput
    update?: XOR<XOR<SubPackageExtendedAuditEventUpdateToOneWithWhereWithoutAttractedSubReferalDetailsInput, SubPackageExtendedAuditEventUpdateWithoutAttractedSubReferalDetailsInput>, SubPackageExtendedAuditEventUncheckedUpdateWithoutAttractedSubReferalDetailsInput>
  }

  export type UserRewardTriggeredAuditEventUncheckedUpdateManyWithoutReferalDetailsNestedInput = {
    create?: XOR<UserRewardTriggeredAuditEventCreateWithoutReferalDetailsInput, UserRewardTriggeredAuditEventUncheckedCreateWithoutReferalDetailsInput> | UserRewardTriggeredAuditEventCreateWithoutReferalDetailsInput[] | UserRewardTriggeredAuditEventUncheckedCreateWithoutReferalDetailsInput[]
    connectOrCreate?: UserRewardTriggeredAuditEventCreateOrConnectWithoutReferalDetailsInput | UserRewardTriggeredAuditEventCreateOrConnectWithoutReferalDetailsInput[]
    upsert?: UserRewardTriggeredAuditEventUpsertWithWhereUniqueWithoutReferalDetailsInput | UserRewardTriggeredAuditEventUpsertWithWhereUniqueWithoutReferalDetailsInput[]
    createMany?: UserRewardTriggeredAuditEventCreateManyReferalDetailsInputEnvelope
    set?: UserRewardTriggeredAuditEventWhereUniqueInput | UserRewardTriggeredAuditEventWhereUniqueInput[]
    disconnect?: UserRewardTriggeredAuditEventWhereUniqueInput | UserRewardTriggeredAuditEventWhereUniqueInput[]
    delete?: UserRewardTriggeredAuditEventWhereUniqueInput | UserRewardTriggeredAuditEventWhereUniqueInput[]
    connect?: UserRewardTriggeredAuditEventWhereUniqueInput | UserRewardTriggeredAuditEventWhereUniqueInput[]
    update?: UserRewardTriggeredAuditEventUpdateWithWhereUniqueWithoutReferalDetailsInput | UserRewardTriggeredAuditEventUpdateWithWhereUniqueWithoutReferalDetailsInput[]
    updateMany?: UserRewardTriggeredAuditEventUpdateManyWithWhereWithoutReferalDetailsInput | UserRewardTriggeredAuditEventUpdateManyWithWhereWithoutReferalDetailsInput[]
    deleteMany?: UserRewardTriggeredAuditEventScalarWhereInput | UserRewardTriggeredAuditEventScalarWhereInput[]
  }

  export type SubCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<SubCreateWithoutPaymentsInput, SubUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SubCreateOrConnectWithoutPaymentsInput
    connect?: SubWhereUniqueInput
  }

  export type SubPackageExtendedAuditEventCreateNestedOneWithoutPaymentInput = {
    create?: XOR<SubPackageExtendedAuditEventCreateWithoutPaymentInput, SubPackageExtendedAuditEventUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: SubPackageExtendedAuditEventCreateOrConnectWithoutPaymentInput
    connect?: SubPackageExtendedAuditEventWhereUniqueInput
  }

  export type SubPackageExtendedAuditEventUncheckedCreateNestedOneWithoutPaymentInput = {
    create?: XOR<SubPackageExtendedAuditEventCreateWithoutPaymentInput, SubPackageExtendedAuditEventUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: SubPackageExtendedAuditEventCreateOrConnectWithoutPaymentInput
    connect?: SubPackageExtendedAuditEventWhereUniqueInput
  }

  export type EnumCurrencyFieldUpdateOperationsInput = {
    set?: $Enums.Currency
  }

  export type SubUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<SubCreateWithoutPaymentsInput, SubUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SubCreateOrConnectWithoutPaymentsInput
    upsert?: SubUpsertWithoutPaymentsInput
    connect?: SubWhereUniqueInput
    update?: XOR<XOR<SubUpdateToOneWithWhereWithoutPaymentsInput, SubUpdateWithoutPaymentsInput>, SubUncheckedUpdateWithoutPaymentsInput>
  }

  export type SubPackageExtendedAuditEventUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<SubPackageExtendedAuditEventCreateWithoutPaymentInput, SubPackageExtendedAuditEventUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: SubPackageExtendedAuditEventCreateOrConnectWithoutPaymentInput
    upsert?: SubPackageExtendedAuditEventUpsertWithoutPaymentInput
    disconnect?: SubPackageExtendedAuditEventWhereInput | boolean
    delete?: SubPackageExtendedAuditEventWhereInput | boolean
    connect?: SubPackageExtendedAuditEventWhereUniqueInput
    update?: XOR<XOR<SubPackageExtendedAuditEventUpdateToOneWithWhereWithoutPaymentInput, SubPackageExtendedAuditEventUpdateWithoutPaymentInput>, SubPackageExtendedAuditEventUncheckedUpdateWithoutPaymentInput>
  }

  export type SubPackageExtendedAuditEventUncheckedUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<SubPackageExtendedAuditEventCreateWithoutPaymentInput, SubPackageExtendedAuditEventUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: SubPackageExtendedAuditEventCreateOrConnectWithoutPaymentInput
    upsert?: SubPackageExtendedAuditEventUpsertWithoutPaymentInput
    disconnect?: SubPackageExtendedAuditEventWhereInput | boolean
    delete?: SubPackageExtendedAuditEventWhereInput | boolean
    connect?: SubPackageExtendedAuditEventWhereUniqueInput
    update?: XOR<XOR<SubPackageExtendedAuditEventUpdateToOneWithWhereWithoutPaymentInput, SubPackageExtendedAuditEventUpdateWithoutPaymentInput>, SubPackageExtendedAuditEventUncheckedUpdateWithoutPaymentInput>
  }

  export type ReferalDetailsCreateNestedOneWithoutSpe_aeInput = {
    create?: XOR<ReferalDetailsCreateWithoutSpe_aeInput, ReferalDetailsUncheckedCreateWithoutSpe_aeInput>
    connectOrCreate?: ReferalDetailsCreateOrConnectWithoutSpe_aeInput
    connect?: ReferalDetailsWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutSpe_aeInput = {
    create?: XOR<PaymentCreateWithoutSpe_aeInput, PaymentUncheckedCreateWithoutSpe_aeInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutSpe_aeInput
    connect?: PaymentWhereUniqueInput
  }

  export type SubCreateNestedOneWithoutPackageExtensionsInput = {
    create?: XOR<SubCreateWithoutPackageExtensionsInput, SubUncheckedCreateWithoutPackageExtensionsInput>
    connectOrCreate?: SubCreateOrConnectWithoutPackageExtensionsInput
    connect?: SubWhereUniqueInput
  }

  export type UserRewardTriggeredAuditEventCreateNestedOneWithoutSpe_aeInput = {
    create?: XOR<UserRewardTriggeredAuditEventCreateWithoutSpe_aeInput, UserRewardTriggeredAuditEventUncheckedCreateWithoutSpe_aeInput>
    connectOrCreate?: UserRewardTriggeredAuditEventCreateOrConnectWithoutSpe_aeInput
    connect?: UserRewardTriggeredAuditEventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutExtensionsSubmittedInput = {
    create?: XOR<UserCreateWithoutExtensionsSubmittedInput, UserUncheckedCreateWithoutExtensionsSubmittedInput>
    connectOrCreate?: UserCreateOrConnectWithoutExtensionsSubmittedInput
    connect?: UserWhereUniqueInput
  }

  export type UserRewardTriggeredAuditEventUncheckedCreateNestedOneWithoutSpe_aeInput = {
    create?: XOR<UserRewardTriggeredAuditEventCreateWithoutSpe_aeInput, UserRewardTriggeredAuditEventUncheckedCreateWithoutSpe_aeInput>
    connectOrCreate?: UserRewardTriggeredAuditEventCreateOrConnectWithoutSpe_aeInput
    connect?: UserRewardTriggeredAuditEventWhereUniqueInput
  }

  export type EnumPackageExtensionReasonFieldUpdateOperationsInput = {
    set?: $Enums.PackageExtensionReason
  }

  export type ReferalDetailsUpdateOneWithoutSpe_aeNestedInput = {
    create?: XOR<ReferalDetailsCreateWithoutSpe_aeInput, ReferalDetailsUncheckedCreateWithoutSpe_aeInput>
    connectOrCreate?: ReferalDetailsCreateOrConnectWithoutSpe_aeInput
    upsert?: ReferalDetailsUpsertWithoutSpe_aeInput
    disconnect?: ReferalDetailsWhereInput | boolean
    delete?: ReferalDetailsWhereInput | boolean
    connect?: ReferalDetailsWhereUniqueInput
    update?: XOR<XOR<ReferalDetailsUpdateToOneWithWhereWithoutSpe_aeInput, ReferalDetailsUpdateWithoutSpe_aeInput>, ReferalDetailsUncheckedUpdateWithoutSpe_aeInput>
  }

  export type PaymentUpdateOneRequiredWithoutSpe_aeNestedInput = {
    create?: XOR<PaymentCreateWithoutSpe_aeInput, PaymentUncheckedCreateWithoutSpe_aeInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutSpe_aeInput
    upsert?: PaymentUpsertWithoutSpe_aeInput
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutSpe_aeInput, PaymentUpdateWithoutSpe_aeInput>, PaymentUncheckedUpdateWithoutSpe_aeInput>
  }

  export type SubUpdateOneRequiredWithoutPackageExtensionsNestedInput = {
    create?: XOR<SubCreateWithoutPackageExtensionsInput, SubUncheckedCreateWithoutPackageExtensionsInput>
    connectOrCreate?: SubCreateOrConnectWithoutPackageExtensionsInput
    upsert?: SubUpsertWithoutPackageExtensionsInput
    connect?: SubWhereUniqueInput
    update?: XOR<XOR<SubUpdateToOneWithWhereWithoutPackageExtensionsInput, SubUpdateWithoutPackageExtensionsInput>, SubUncheckedUpdateWithoutPackageExtensionsInput>
  }

  export type UserRewardTriggeredAuditEventUpdateOneWithoutSpe_aeNestedInput = {
    create?: XOR<UserRewardTriggeredAuditEventCreateWithoutSpe_aeInput, UserRewardTriggeredAuditEventUncheckedCreateWithoutSpe_aeInput>
    connectOrCreate?: UserRewardTriggeredAuditEventCreateOrConnectWithoutSpe_aeInput
    upsert?: UserRewardTriggeredAuditEventUpsertWithoutSpe_aeInput
    disconnect?: UserRewardTriggeredAuditEventWhereInput | boolean
    delete?: UserRewardTriggeredAuditEventWhereInput | boolean
    connect?: UserRewardTriggeredAuditEventWhereUniqueInput
    update?: XOR<XOR<UserRewardTriggeredAuditEventUpdateToOneWithWhereWithoutSpe_aeInput, UserRewardTriggeredAuditEventUpdateWithoutSpe_aeInput>, UserRewardTriggeredAuditEventUncheckedUpdateWithoutSpe_aeInput>
  }

  export type UserUpdateOneRequiredWithoutExtensionsSubmittedNestedInput = {
    create?: XOR<UserCreateWithoutExtensionsSubmittedInput, UserUncheckedCreateWithoutExtensionsSubmittedInput>
    connectOrCreate?: UserCreateOrConnectWithoutExtensionsSubmittedInput
    upsert?: UserUpsertWithoutExtensionsSubmittedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExtensionsSubmittedInput, UserUpdateWithoutExtensionsSubmittedInput>, UserUncheckedUpdateWithoutExtensionsSubmittedInput>
  }

  export type UserRewardTriggeredAuditEventUncheckedUpdateOneWithoutSpe_aeNestedInput = {
    create?: XOR<UserRewardTriggeredAuditEventCreateWithoutSpe_aeInput, UserRewardTriggeredAuditEventUncheckedCreateWithoutSpe_aeInput>
    connectOrCreate?: UserRewardTriggeredAuditEventCreateOrConnectWithoutSpe_aeInput
    upsert?: UserRewardTriggeredAuditEventUpsertWithoutSpe_aeInput
    disconnect?: UserRewardTriggeredAuditEventWhereInput | boolean
    delete?: UserRewardTriggeredAuditEventWhereInput | boolean
    connect?: UserRewardTriggeredAuditEventWhereUniqueInput
    update?: XOR<XOR<UserRewardTriggeredAuditEventUpdateToOneWithWhereWithoutSpe_aeInput, UserRewardTriggeredAuditEventUpdateWithoutSpe_aeInput>, UserRewardTriggeredAuditEventUncheckedUpdateWithoutSpe_aeInput>
  }

  export type ReferalDetailsCreateNestedOneWithoutUrt_aeInput = {
    create?: XOR<ReferalDetailsCreateWithoutUrt_aeInput, ReferalDetailsUncheckedCreateWithoutUrt_aeInput>
    connectOrCreate?: ReferalDetailsCreateOrConnectWithoutUrt_aeInput
    connect?: ReferalDetailsWhereUniqueInput
  }

  export type SubPackageExtendedAuditEventCreateNestedOneWithoutUrt_aeInput = {
    create?: XOR<SubPackageExtendedAuditEventCreateWithoutUrt_aeInput, SubPackageExtendedAuditEventUncheckedCreateWithoutUrt_aeInput>
    connectOrCreate?: SubPackageExtendedAuditEventCreateOrConnectWithoutUrt_aeInput
    connect?: SubPackageExtendedAuditEventWhereUniqueInput
  }

  export type EnumMonetaryRewardTypeFieldUpdateOperationsInput = {
    set?: $Enums.MonetaryRewardType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ReferalDetailsUpdateOneRequiredWithoutUrt_aeNestedInput = {
    create?: XOR<ReferalDetailsCreateWithoutUrt_aeInput, ReferalDetailsUncheckedCreateWithoutUrt_aeInput>
    connectOrCreate?: ReferalDetailsCreateOrConnectWithoutUrt_aeInput
    upsert?: ReferalDetailsUpsertWithoutUrt_aeInput
    connect?: ReferalDetailsWhereUniqueInput
    update?: XOR<XOR<ReferalDetailsUpdateToOneWithWhereWithoutUrt_aeInput, ReferalDetailsUpdateWithoutUrt_aeInput>, ReferalDetailsUncheckedUpdateWithoutUrt_aeInput>
  }

  export type SubPackageExtendedAuditEventUpdateOneWithoutUrt_aeNestedInput = {
    create?: XOR<SubPackageExtendedAuditEventCreateWithoutUrt_aeInput, SubPackageExtendedAuditEventUncheckedCreateWithoutUrt_aeInput>
    connectOrCreate?: SubPackageExtendedAuditEventCreateOrConnectWithoutUrt_aeInput
    upsert?: SubPackageExtendedAuditEventUpsertWithoutUrt_aeInput
    disconnect?: SubPackageExtendedAuditEventWhereInput | boolean
    delete?: SubPackageExtendedAuditEventWhereInput | boolean
    connect?: SubPackageExtendedAuditEventWhereUniqueInput
    update?: XOR<XOR<SubPackageExtendedAuditEventUpdateToOneWithWhereWithoutUrt_aeInput, SubPackageExtendedAuditEventUpdateWithoutUrt_aeInput>, SubPackageExtendedAuditEventUncheckedUpdateWithoutUrt_aeInput>
  }

  export type UserCreateNestedOneWithoutUr_aeInput = {
    create?: XOR<UserCreateWithoutUr_aeInput, UserUncheckedCreateWithoutUr_aeInput>
    connectOrCreate?: UserCreateOrConnectWithoutUr_aeInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRepaymentsSubmittedInput = {
    create?: XOR<UserCreateWithoutRepaymentsSubmittedInput, UserUncheckedCreateWithoutRepaymentsSubmittedInput>
    connectOrCreate?: UserCreateOrConnectWithoutRepaymentsSubmittedInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUr_aeNestedInput = {
    create?: XOR<UserCreateWithoutUr_aeInput, UserUncheckedCreateWithoutUr_aeInput>
    connectOrCreate?: UserCreateOrConnectWithoutUr_aeInput
    upsert?: UserUpsertWithoutUr_aeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUr_aeInput, UserUpdateWithoutUr_aeInput>, UserUncheckedUpdateWithoutUr_aeInput>
  }

  export type UserUpdateOneRequiredWithoutRepaymentsSubmittedNestedInput = {
    create?: XOR<UserCreateWithoutRepaymentsSubmittedInput, UserUncheckedCreateWithoutRepaymentsSubmittedInput>
    connectOrCreate?: UserCreateOrConnectWithoutRepaymentsSubmittedInput
    upsert?: UserUpsertWithoutRepaymentsSubmittedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRepaymentsSubmittedInput, UserUpdateWithoutRepaymentsSubmittedInput>, UserUncheckedUpdateWithoutRepaymentsSubmittedInput>
  }

  export type UserCreateNestedOneWithoutModificationsSubmittedInput = {
    create?: XOR<UserCreateWithoutModificationsSubmittedInput, UserUncheckedCreateWithoutModificationsSubmittedInput>
    connectOrCreate?: UserCreateOrConnectWithoutModificationsSubmittedInput
    connect?: UserWhereUniqueInput
  }

  export type EnumEntityTypesFieldUpdateOperationsInput = {
    set?: $Enums.EntityTypes
  }

  export type UserUpdateOneRequiredWithoutModificationsSubmittedNestedInput = {
    create?: XOR<UserCreateWithoutModificationsSubmittedInput, UserUncheckedCreateWithoutModificationsSubmittedInput>
    connectOrCreate?: UserCreateOrConnectWithoutModificationsSubmittedInput
    upsert?: UserUpsertWithoutModificationsSubmittedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutModificationsSubmittedInput, UserUpdateWithoutModificationsSubmittedInput>, UserUncheckedUpdateWithoutModificationsSubmittedInput>
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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
    search?: string
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

  export type NestedEnumPackageTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageType | EnumPackageTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.PackageType[] | null
    notIn?: $Enums.PackageType[] | null
    not?: NestedEnumPackageTypeNullableFilter<$PrismaModel> | $Enums.PackageType | null
  }

  export type NestedEnumRegionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Region | EnumRegionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Region[] | null
    notIn?: $Enums.Region[] | null
    not?: NestedEnumRegionNullableFilter<$PrismaModel> | $Enums.Region | null
  }

  export type NestedEnumPackageTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageType | EnumPackageTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.PackageType[] | null
    notIn?: $Enums.PackageType[] | null
    not?: NestedEnumPackageTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.PackageType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPackageTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumPackageTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRegionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Region | EnumRegionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Region[] | null
    notIn?: $Enums.Region[] | null
    not?: NestedEnumRegionNullableWithAggregatesFilter<$PrismaModel> | $Enums.Region | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRegionNullableFilter<$PrismaModel>
    _max?: NestedEnumRegionNullableFilter<$PrismaModel>
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

  export type NestedEnumCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[]
    notIn?: $Enums.Currency[]
    not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency
  }

  export type NestedEnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[]
    notIn?: $Enums.Currency[]
    not?: NestedEnumCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.Currency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyFilter<$PrismaModel>
    _max?: NestedEnumCurrencyFilter<$PrismaModel>
  }

  export type NestedEnumPackageExtensionReasonFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageExtensionReason | EnumPackageExtensionReasonFieldRefInput<$PrismaModel>
    in?: $Enums.PackageExtensionReason[]
    notIn?: $Enums.PackageExtensionReason[]
    not?: NestedEnumPackageExtensionReasonFilter<$PrismaModel> | $Enums.PackageExtensionReason
  }

  export type NestedEnumPackageExtensionReasonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageExtensionReason | EnumPackageExtensionReasonFieldRefInput<$PrismaModel>
    in?: $Enums.PackageExtensionReason[]
    notIn?: $Enums.PackageExtensionReason[]
    not?: NestedEnumPackageExtensionReasonWithAggregatesFilter<$PrismaModel> | $Enums.PackageExtensionReason
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPackageExtensionReasonFilter<$PrismaModel>
    _max?: NestedEnumPackageExtensionReasonFilter<$PrismaModel>
  }

  export type NestedEnumMonetaryRewardTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MonetaryRewardType | EnumMonetaryRewardTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MonetaryRewardType[]
    notIn?: $Enums.MonetaryRewardType[]
    not?: NestedEnumMonetaryRewardTypeFilter<$PrismaModel> | $Enums.MonetaryRewardType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumMonetaryRewardTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MonetaryRewardType | EnumMonetaryRewardTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MonetaryRewardType[]
    notIn?: $Enums.MonetaryRewardType[]
    not?: NestedEnumMonetaryRewardTypeWithAggregatesFilter<$PrismaModel> | $Enums.MonetaryRewardType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMonetaryRewardTypeFilter<$PrismaModel>
    _max?: NestedEnumMonetaryRewardTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumEntityTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityTypes | EnumEntityTypesFieldRefInput<$PrismaModel>
    in?: $Enums.EntityTypes[]
    notIn?: $Enums.EntityTypes[]
    not?: NestedEnumEntityTypesFilter<$PrismaModel> | $Enums.EntityTypes
  }

  export type NestedEnumEntityTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityTypes | EnumEntityTypesFieldRefInput<$PrismaModel>
    in?: $Enums.EntityTypes[]
    notIn?: $Enums.EntityTypes[]
    not?: NestedEnumEntityTypesWithAggregatesFilter<$PrismaModel> | $Enums.EntityTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntityTypesFilter<$PrismaModel>
    _max?: NestedEnumEntityTypesFilter<$PrismaModel>
  }

  export type SubCreateWithoutUserInput = {
    externalId: string
    login?: string | null
    pwd?: string | null
    note?: string | null
    m3uPlaylist?: string | null
    epg?: string | null
    publicKey?: string | null
    media?: string | null
    pkgType?: $Enums.PackageType | null
    startDate: Date | string
    endDate: Date | string
    region?: $Enums.Region | null
    createdAt: Date | string
    referalDetails?: ReferalDetailsCreateNestedOneWithoutAttractedSubInput
    payments?: PaymentCreateNestedManyWithoutSubInput
    packageExtensions?: SubPackageExtendedAuditEventCreateNestedManyWithoutSubInput
    createdBy: UserCreateNestedOneWithoutCreatedSubsInput
  }

  export type SubUncheckedCreateWithoutUserInput = {
    externalId: string
    login?: string | null
    pwd?: string | null
    note?: string | null
    m3uPlaylist?: string | null
    epg?: string | null
    publicKey?: string | null
    media?: string | null
    pkgType?: $Enums.PackageType | null
    startDate: Date | string
    endDate: Date | string
    region?: $Enums.Region | null
    createdAt: Date | string
    createdByUserId: string
    referalDetails?: ReferalDetailsUncheckedCreateNestedOneWithoutAttractedSubInput
    payments?: PaymentUncheckedCreateNestedManyWithoutSubInput
    packageExtensions?: SubPackageExtendedAuditEventUncheckedCreateNestedManyWithoutSubInput
  }

  export type SubCreateOrConnectWithoutUserInput = {
    where: SubWhereUniqueInput
    create: XOR<SubCreateWithoutUserInput, SubUncheckedCreateWithoutUserInput>
  }

  export type ReferalDetailsCreateWithoutAttractorInput = {
    effectiveAttractorTier: number
    attractedSub: SubCreateNestedOneWithoutReferalDetailsInput
    spe_ae?: SubPackageExtendedAuditEventCreateNestedOneWithoutAttractedSubReferalDetailsInput
    urt_ae?: UserRewardTriggeredAuditEventCreateNestedManyWithoutReferalDetailsInput
  }

  export type ReferalDetailsUncheckedCreateWithoutAttractorInput = {
    attractedSubExternalId: string
    effectiveAttractorTier: number
    spe_ae?: SubPackageExtendedAuditEventUncheckedCreateNestedOneWithoutAttractedSubReferalDetailsInput
    urt_ae?: UserRewardTriggeredAuditEventUncheckedCreateNestedManyWithoutReferalDetailsInput
  }

  export type ReferalDetailsCreateOrConnectWithoutAttractorInput = {
    where: ReferalDetailsWhereUniqueInput
    create: XOR<ReferalDetailsCreateWithoutAttractorInput, ReferalDetailsUncheckedCreateWithoutAttractorInput>
  }

  export type ReferalDetailsCreateManyAttractorInputEnvelope = {
    data: ReferalDetailsCreateManyAttractorInput | ReferalDetailsCreateManyAttractorInput[]
    skipDuplicates?: boolean
  }

  export type UserRepaymentAuditEventCreateWithoutUserInput = {
    id?: string
    repaymentAmount: number
    prevTotalPayableReward: number
    newTotalPayableReward: number
    createdAt: Date | string
    createdBy: UserCreateNestedOneWithoutRepaymentsSubmittedInput
  }

  export type UserRepaymentAuditEventUncheckedCreateWithoutUserInput = {
    id?: string
    repaymentAmount: number
    prevTotalPayableReward: number
    newTotalPayableReward: number
    createdAt: Date | string
    createdByUserId: string
  }

  export type UserRepaymentAuditEventCreateOrConnectWithoutUserInput = {
    where: UserRepaymentAuditEventWhereUniqueInput
    create: XOR<UserRepaymentAuditEventCreateWithoutUserInput, UserRepaymentAuditEventUncheckedCreateWithoutUserInput>
  }

  export type UserRepaymentAuditEventCreateManyUserInputEnvelope = {
    data: UserRepaymentAuditEventCreateManyUserInput | UserRepaymentAuditEventCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubCreateWithoutCreatedByInput = {
    externalId: string
    login?: string | null
    pwd?: string | null
    note?: string | null
    m3uPlaylist?: string | null
    epg?: string | null
    publicKey?: string | null
    media?: string | null
    pkgType?: $Enums.PackageType | null
    startDate: Date | string
    endDate: Date | string
    region?: $Enums.Region | null
    createdAt: Date | string
    user?: UserCreateNestedOneWithoutSubInput
    referalDetails?: ReferalDetailsCreateNestedOneWithoutAttractedSubInput
    payments?: PaymentCreateNestedManyWithoutSubInput
    packageExtensions?: SubPackageExtendedAuditEventCreateNestedManyWithoutSubInput
  }

  export type SubUncheckedCreateWithoutCreatedByInput = {
    externalId: string
    login?: string | null
    pwd?: string | null
    note?: string | null
    m3uPlaylist?: string | null
    epg?: string | null
    publicKey?: string | null
    media?: string | null
    pkgType?: $Enums.PackageType | null
    startDate: Date | string
    endDate: Date | string
    region?: $Enums.Region | null
    createdAt: Date | string
    user?: UserUncheckedCreateNestedOneWithoutSubInput
    referalDetails?: ReferalDetailsUncheckedCreateNestedOneWithoutAttractedSubInput
    payments?: PaymentUncheckedCreateNestedManyWithoutSubInput
    packageExtensions?: SubPackageExtendedAuditEventUncheckedCreateNestedManyWithoutSubInput
  }

  export type SubCreateOrConnectWithoutCreatedByInput = {
    where: SubWhereUniqueInput
    create: XOR<SubCreateWithoutCreatedByInput, SubUncheckedCreateWithoutCreatedByInput>
  }

  export type SubCreateManyCreatedByInputEnvelope = {
    data: SubCreateManyCreatedByInput | SubCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCreatedByInput = {
    login: string
    pwd: string
    role: $Enums.Role
    totalPayableReward?: number
    customMonetaryRewardAmount?: number | null
    note?: string | null
    createdAt: Date | string
    sub?: SubCreateNestedOneWithoutUserInput
    attractedSubs?: ReferalDetailsCreateNestedManyWithoutAttractorInput
    ur_ae?: UserRepaymentAuditEventCreateNestedManyWithoutUserInput
    createdSubs?: SubCreateNestedManyWithoutCreatedByInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    extensionsSubmitted?: SubPackageExtendedAuditEventCreateNestedManyWithoutCreatedByInput
    repaymentsSubmitted?: UserRepaymentAuditEventCreateNestedManyWithoutCreatedByInput
    modificationsSubmitted?: EntityUpdatedAuditEventCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCreatedByInput = {
    login: string
    pwd: string
    role: $Enums.Role
    subExternalId?: string | null
    totalPayableReward?: number
    customMonetaryRewardAmount?: number | null
    note?: string | null
    createdAt: Date | string
    attractedSubs?: ReferalDetailsUncheckedCreateNestedManyWithoutAttractorInput
    ur_ae?: UserRepaymentAuditEventUncheckedCreateNestedManyWithoutUserInput
    createdSubs?: SubUncheckedCreateNestedManyWithoutCreatedByInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    extensionsSubmitted?: SubPackageExtendedAuditEventUncheckedCreateNestedManyWithoutCreatedByInput
    repaymentsSubmitted?: UserRepaymentAuditEventUncheckedCreateNestedManyWithoutCreatedByInput
    modificationsSubmitted?: EntityUpdatedAuditEventUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCreatedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput>
  }

  export type UserCreateManyCreatedByInputEnvelope = {
    data: UserCreateManyCreatedByInput | UserCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCreatedUsersInput = {
    login: string
    pwd: string
    role: $Enums.Role
    totalPayableReward?: number
    customMonetaryRewardAmount?: number | null
    note?: string | null
    createdAt: Date | string
    sub?: SubCreateNestedOneWithoutUserInput
    attractedSubs?: ReferalDetailsCreateNestedManyWithoutAttractorInput
    ur_ae?: UserRepaymentAuditEventCreateNestedManyWithoutUserInput
    createdSubs?: SubCreateNestedManyWithoutCreatedByInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    extensionsSubmitted?: SubPackageExtendedAuditEventCreateNestedManyWithoutCreatedByInput
    repaymentsSubmitted?: UserRepaymentAuditEventCreateNestedManyWithoutCreatedByInput
    modificationsSubmitted?: EntityUpdatedAuditEventCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCreatedUsersInput = {
    login: string
    pwd: string
    role: $Enums.Role
    subExternalId?: string | null
    totalPayableReward?: number
    customMonetaryRewardAmount?: number | null
    note?: string | null
    createdAt: Date | string
    createdByUserId?: string | null
    attractedSubs?: ReferalDetailsUncheckedCreateNestedManyWithoutAttractorInput
    ur_ae?: UserRepaymentAuditEventUncheckedCreateNestedManyWithoutUserInput
    createdSubs?: SubUncheckedCreateNestedManyWithoutCreatedByInput
    extensionsSubmitted?: SubPackageExtendedAuditEventUncheckedCreateNestedManyWithoutCreatedByInput
    repaymentsSubmitted?: UserRepaymentAuditEventUncheckedCreateNestedManyWithoutCreatedByInput
    modificationsSubmitted?: EntityUpdatedAuditEventUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCreatedUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
  }

  export type SubPackageExtendedAuditEventCreateWithoutCreatedByInput = {
    id?: string
    prevEndDate: Date | string
    newEndDate: Date | string
    reason: $Enums.PackageExtensionReason
    createdAt: Date | string
    attractedSubReferalDetails?: ReferalDetailsCreateNestedOneWithoutSpe_aeInput
    payment: PaymentCreateNestedOneWithoutSpe_aeInput
    sub: SubCreateNestedOneWithoutPackageExtensionsInput
    urt_ae?: UserRewardTriggeredAuditEventCreateNestedOneWithoutSpe_aeInput
  }

  export type SubPackageExtendedAuditEventUncheckedCreateWithoutCreatedByInput = {
    id?: string
    prevEndDate: Date | string
    newEndDate: Date | string
    attractedSubExternalId?: string | null
    paymentId: string
    subExternalId: string
    reason: $Enums.PackageExtensionReason
    createdAt: Date | string
    urt_ae?: UserRewardTriggeredAuditEventUncheckedCreateNestedOneWithoutSpe_aeInput
  }

  export type SubPackageExtendedAuditEventCreateOrConnectWithoutCreatedByInput = {
    where: SubPackageExtendedAuditEventWhereUniqueInput
    create: XOR<SubPackageExtendedAuditEventCreateWithoutCreatedByInput, SubPackageExtendedAuditEventUncheckedCreateWithoutCreatedByInput>
  }

  export type SubPackageExtendedAuditEventCreateManyCreatedByInputEnvelope = {
    data: SubPackageExtendedAuditEventCreateManyCreatedByInput | SubPackageExtendedAuditEventCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type UserRepaymentAuditEventCreateWithoutCreatedByInput = {
    id?: string
    repaymentAmount: number
    prevTotalPayableReward: number
    newTotalPayableReward: number
    createdAt: Date | string
    user: UserCreateNestedOneWithoutUr_aeInput
  }

  export type UserRepaymentAuditEventUncheckedCreateWithoutCreatedByInput = {
    id?: string
    userId: string
    repaymentAmount: number
    prevTotalPayableReward: number
    newTotalPayableReward: number
    createdAt: Date | string
  }

  export type UserRepaymentAuditEventCreateOrConnectWithoutCreatedByInput = {
    where: UserRepaymentAuditEventWhereUniqueInput
    create: XOR<UserRepaymentAuditEventCreateWithoutCreatedByInput, UserRepaymentAuditEventUncheckedCreateWithoutCreatedByInput>
  }

  export type UserRepaymentAuditEventCreateManyCreatedByInputEnvelope = {
    data: UserRepaymentAuditEventCreateManyCreatedByInput | UserRepaymentAuditEventCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type EntityUpdatedAuditEventCreateWithoutCreatedByInput = {
    id?: string
    entityType: $Enums.EntityTypes
    entityId: string
    reason?: string | null
    diff: string
    createdAt: Date | string
  }

  export type EntityUpdatedAuditEventUncheckedCreateWithoutCreatedByInput = {
    id?: string
    entityType: $Enums.EntityTypes
    entityId: string
    reason?: string | null
    diff: string
    createdAt: Date | string
  }

  export type EntityUpdatedAuditEventCreateOrConnectWithoutCreatedByInput = {
    where: EntityUpdatedAuditEventWhereUniqueInput
    create: XOR<EntityUpdatedAuditEventCreateWithoutCreatedByInput, EntityUpdatedAuditEventUncheckedCreateWithoutCreatedByInput>
  }

  export type EntityUpdatedAuditEventCreateManyCreatedByInputEnvelope = {
    data: EntityUpdatedAuditEventCreateManyCreatedByInput | EntityUpdatedAuditEventCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type SubUpsertWithoutUserInput = {
    update: XOR<SubUpdateWithoutUserInput, SubUncheckedUpdateWithoutUserInput>
    create: XOR<SubCreateWithoutUserInput, SubUncheckedCreateWithoutUserInput>
    where?: SubWhereInput
  }

  export type SubUpdateToOneWithWhereWithoutUserInput = {
    where?: SubWhereInput
    data: XOR<SubUpdateWithoutUserInput, SubUncheckedUpdateWithoutUserInput>
  }

  export type SubUpdateWithoutUserInput = {
    externalId?: StringFieldUpdateOperationsInput | string
    login?: NullableStringFieldUpdateOperationsInput | string | null
    pwd?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    m3uPlaylist?: NullableStringFieldUpdateOperationsInput | string | null
    epg?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    pkgType?: NullableEnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referalDetails?: ReferalDetailsUpdateOneWithoutAttractedSubNestedInput
    payments?: PaymentUpdateManyWithoutSubNestedInput
    packageExtensions?: SubPackageExtendedAuditEventUpdateManyWithoutSubNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedSubsNestedInput
  }

  export type SubUncheckedUpdateWithoutUserInput = {
    externalId?: StringFieldUpdateOperationsInput | string
    login?: NullableStringFieldUpdateOperationsInput | string | null
    pwd?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    m3uPlaylist?: NullableStringFieldUpdateOperationsInput | string | null
    epg?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    pkgType?: NullableEnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: StringFieldUpdateOperationsInput | string
    referalDetails?: ReferalDetailsUncheckedUpdateOneWithoutAttractedSubNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutSubNestedInput
    packageExtensions?: SubPackageExtendedAuditEventUncheckedUpdateManyWithoutSubNestedInput
  }

  export type ReferalDetailsUpsertWithWhereUniqueWithoutAttractorInput = {
    where: ReferalDetailsWhereUniqueInput
    update: XOR<ReferalDetailsUpdateWithoutAttractorInput, ReferalDetailsUncheckedUpdateWithoutAttractorInput>
    create: XOR<ReferalDetailsCreateWithoutAttractorInput, ReferalDetailsUncheckedCreateWithoutAttractorInput>
  }

  export type ReferalDetailsUpdateWithWhereUniqueWithoutAttractorInput = {
    where: ReferalDetailsWhereUniqueInput
    data: XOR<ReferalDetailsUpdateWithoutAttractorInput, ReferalDetailsUncheckedUpdateWithoutAttractorInput>
  }

  export type ReferalDetailsUpdateManyWithWhereWithoutAttractorInput = {
    where: ReferalDetailsScalarWhereInput
    data: XOR<ReferalDetailsUpdateManyMutationInput, ReferalDetailsUncheckedUpdateManyWithoutAttractorInput>
  }

  export type ReferalDetailsScalarWhereInput = {
    AND?: ReferalDetailsScalarWhereInput | ReferalDetailsScalarWhereInput[]
    OR?: ReferalDetailsScalarWhereInput[]
    NOT?: ReferalDetailsScalarWhereInput | ReferalDetailsScalarWhereInput[]
    attractedSubExternalId?: StringFilter<"ReferalDetails"> | string
    attractorUserId?: StringFilter<"ReferalDetails"> | string
    effectiveAttractorTier?: IntFilter<"ReferalDetails"> | number
  }

  export type UserRepaymentAuditEventUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRepaymentAuditEventWhereUniqueInput
    update: XOR<UserRepaymentAuditEventUpdateWithoutUserInput, UserRepaymentAuditEventUncheckedUpdateWithoutUserInput>
    create: XOR<UserRepaymentAuditEventCreateWithoutUserInput, UserRepaymentAuditEventUncheckedCreateWithoutUserInput>
  }

  export type UserRepaymentAuditEventUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRepaymentAuditEventWhereUniqueInput
    data: XOR<UserRepaymentAuditEventUpdateWithoutUserInput, UserRepaymentAuditEventUncheckedUpdateWithoutUserInput>
  }

  export type UserRepaymentAuditEventUpdateManyWithWhereWithoutUserInput = {
    where: UserRepaymentAuditEventScalarWhereInput
    data: XOR<UserRepaymentAuditEventUpdateManyMutationInput, UserRepaymentAuditEventUncheckedUpdateManyWithoutUserInput>
  }

  export type UserRepaymentAuditEventScalarWhereInput = {
    AND?: UserRepaymentAuditEventScalarWhereInput | UserRepaymentAuditEventScalarWhereInput[]
    OR?: UserRepaymentAuditEventScalarWhereInput[]
    NOT?: UserRepaymentAuditEventScalarWhereInput | UserRepaymentAuditEventScalarWhereInput[]
    id?: StringFilter<"UserRepaymentAuditEvent"> | string
    userId?: StringFilter<"UserRepaymentAuditEvent"> | string
    repaymentAmount?: FloatFilter<"UserRepaymentAuditEvent"> | number
    prevTotalPayableReward?: FloatFilter<"UserRepaymentAuditEvent"> | number
    newTotalPayableReward?: FloatFilter<"UserRepaymentAuditEvent"> | number
    createdAt?: DateTimeFilter<"UserRepaymentAuditEvent"> | Date | string
    createdByUserId?: StringFilter<"UserRepaymentAuditEvent"> | string
  }

  export type SubUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: SubWhereUniqueInput
    update: XOR<SubUpdateWithoutCreatedByInput, SubUncheckedUpdateWithoutCreatedByInput>
    create: XOR<SubCreateWithoutCreatedByInput, SubUncheckedCreateWithoutCreatedByInput>
  }

  export type SubUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: SubWhereUniqueInput
    data: XOR<SubUpdateWithoutCreatedByInput, SubUncheckedUpdateWithoutCreatedByInput>
  }

  export type SubUpdateManyWithWhereWithoutCreatedByInput = {
    where: SubScalarWhereInput
    data: XOR<SubUpdateManyMutationInput, SubUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type SubScalarWhereInput = {
    AND?: SubScalarWhereInput | SubScalarWhereInput[]
    OR?: SubScalarWhereInput[]
    NOT?: SubScalarWhereInput | SubScalarWhereInput[]
    externalId?: StringFilter<"Sub"> | string
    login?: StringNullableFilter<"Sub"> | string | null
    pwd?: StringNullableFilter<"Sub"> | string | null
    note?: StringNullableFilter<"Sub"> | string | null
    m3uPlaylist?: StringNullableFilter<"Sub"> | string | null
    epg?: StringNullableFilter<"Sub"> | string | null
    publicKey?: StringNullableFilter<"Sub"> | string | null
    media?: StringNullableFilter<"Sub"> | string | null
    pkgType?: EnumPackageTypeNullableFilter<"Sub"> | $Enums.PackageType | null
    startDate?: DateTimeFilter<"Sub"> | Date | string
    endDate?: DateTimeFilter<"Sub"> | Date | string
    region?: EnumRegionNullableFilter<"Sub"> | $Enums.Region | null
    createdAt?: DateTimeFilter<"Sub"> | Date | string
    createdByUserId?: StringFilter<"Sub"> | string
  }

  export type UserUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCreatedByInput, UserUncheckedUpdateWithoutCreatedByInput>
    create: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCreatedByInput, UserUncheckedUpdateWithoutCreatedByInput>
  }

  export type UserUpdateManyWithWhereWithoutCreatedByInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    login?: StringFilter<"User"> | string
    pwd?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    subExternalId?: StringNullableFilter<"User"> | string | null
    totalPayableReward?: FloatFilter<"User"> | number
    customMonetaryRewardAmount?: FloatNullableFilter<"User"> | number | null
    note?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    createdByUserId?: StringNullableFilter<"User"> | string | null
  }

  export type UserUpsertWithoutCreatedUsersInput = {
    update: XOR<UserUpdateWithoutCreatedUsersInput, UserUncheckedUpdateWithoutCreatedUsersInput>
    create: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedUsersInput, UserUncheckedUpdateWithoutCreatedUsersInput>
  }

  export type UserUpdateWithoutCreatedUsersInput = {
    login?: StringFieldUpdateOperationsInput | string
    pwd?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    totalPayableReward?: FloatFieldUpdateOperationsInput | number
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sub?: SubUpdateOneWithoutUserNestedInput
    attractedSubs?: ReferalDetailsUpdateManyWithoutAttractorNestedInput
    ur_ae?: UserRepaymentAuditEventUpdateManyWithoutUserNestedInput
    createdSubs?: SubUpdateManyWithoutCreatedByNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    extensionsSubmitted?: SubPackageExtendedAuditEventUpdateManyWithoutCreatedByNestedInput
    repaymentsSubmitted?: UserRepaymentAuditEventUpdateManyWithoutCreatedByNestedInput
    modificationsSubmitted?: EntityUpdatedAuditEventUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedUsersInput = {
    login?: StringFieldUpdateOperationsInput | string
    pwd?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subExternalId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPayableReward?: FloatFieldUpdateOperationsInput | number
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    attractedSubs?: ReferalDetailsUncheckedUpdateManyWithoutAttractorNestedInput
    ur_ae?: UserRepaymentAuditEventUncheckedUpdateManyWithoutUserNestedInput
    createdSubs?: SubUncheckedUpdateManyWithoutCreatedByNestedInput
    extensionsSubmitted?: SubPackageExtendedAuditEventUncheckedUpdateManyWithoutCreatedByNestedInput
    repaymentsSubmitted?: UserRepaymentAuditEventUncheckedUpdateManyWithoutCreatedByNestedInput
    modificationsSubmitted?: EntityUpdatedAuditEventUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type SubPackageExtendedAuditEventUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: SubPackageExtendedAuditEventWhereUniqueInput
    update: XOR<SubPackageExtendedAuditEventUpdateWithoutCreatedByInput, SubPackageExtendedAuditEventUncheckedUpdateWithoutCreatedByInput>
    create: XOR<SubPackageExtendedAuditEventCreateWithoutCreatedByInput, SubPackageExtendedAuditEventUncheckedCreateWithoutCreatedByInput>
  }

  export type SubPackageExtendedAuditEventUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: SubPackageExtendedAuditEventWhereUniqueInput
    data: XOR<SubPackageExtendedAuditEventUpdateWithoutCreatedByInput, SubPackageExtendedAuditEventUncheckedUpdateWithoutCreatedByInput>
  }

  export type SubPackageExtendedAuditEventUpdateManyWithWhereWithoutCreatedByInput = {
    where: SubPackageExtendedAuditEventScalarWhereInput
    data: XOR<SubPackageExtendedAuditEventUpdateManyMutationInput, SubPackageExtendedAuditEventUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type SubPackageExtendedAuditEventScalarWhereInput = {
    AND?: SubPackageExtendedAuditEventScalarWhereInput | SubPackageExtendedAuditEventScalarWhereInput[]
    OR?: SubPackageExtendedAuditEventScalarWhereInput[]
    NOT?: SubPackageExtendedAuditEventScalarWhereInput | SubPackageExtendedAuditEventScalarWhereInput[]
    id?: StringFilter<"SubPackageExtendedAuditEvent"> | string
    prevEndDate?: DateTimeFilter<"SubPackageExtendedAuditEvent"> | Date | string
    newEndDate?: DateTimeFilter<"SubPackageExtendedAuditEvent"> | Date | string
    attractedSubExternalId?: StringNullableFilter<"SubPackageExtendedAuditEvent"> | string | null
    paymentId?: StringFilter<"SubPackageExtendedAuditEvent"> | string
    subExternalId?: StringFilter<"SubPackageExtendedAuditEvent"> | string
    reason?: EnumPackageExtensionReasonFilter<"SubPackageExtendedAuditEvent"> | $Enums.PackageExtensionReason
    createdAt?: DateTimeFilter<"SubPackageExtendedAuditEvent"> | Date | string
    createdByUserId?: StringFilter<"SubPackageExtendedAuditEvent"> | string
  }

  export type UserRepaymentAuditEventUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: UserRepaymentAuditEventWhereUniqueInput
    update: XOR<UserRepaymentAuditEventUpdateWithoutCreatedByInput, UserRepaymentAuditEventUncheckedUpdateWithoutCreatedByInput>
    create: XOR<UserRepaymentAuditEventCreateWithoutCreatedByInput, UserRepaymentAuditEventUncheckedCreateWithoutCreatedByInput>
  }

  export type UserRepaymentAuditEventUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: UserRepaymentAuditEventWhereUniqueInput
    data: XOR<UserRepaymentAuditEventUpdateWithoutCreatedByInput, UserRepaymentAuditEventUncheckedUpdateWithoutCreatedByInput>
  }

  export type UserRepaymentAuditEventUpdateManyWithWhereWithoutCreatedByInput = {
    where: UserRepaymentAuditEventScalarWhereInput
    data: XOR<UserRepaymentAuditEventUpdateManyMutationInput, UserRepaymentAuditEventUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type EntityUpdatedAuditEventUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: EntityUpdatedAuditEventWhereUniqueInput
    update: XOR<EntityUpdatedAuditEventUpdateWithoutCreatedByInput, EntityUpdatedAuditEventUncheckedUpdateWithoutCreatedByInput>
    create: XOR<EntityUpdatedAuditEventCreateWithoutCreatedByInput, EntityUpdatedAuditEventUncheckedCreateWithoutCreatedByInput>
  }

  export type EntityUpdatedAuditEventUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: EntityUpdatedAuditEventWhereUniqueInput
    data: XOR<EntityUpdatedAuditEventUpdateWithoutCreatedByInput, EntityUpdatedAuditEventUncheckedUpdateWithoutCreatedByInput>
  }

  export type EntityUpdatedAuditEventUpdateManyWithWhereWithoutCreatedByInput = {
    where: EntityUpdatedAuditEventScalarWhereInput
    data: XOR<EntityUpdatedAuditEventUpdateManyMutationInput, EntityUpdatedAuditEventUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type EntityUpdatedAuditEventScalarWhereInput = {
    AND?: EntityUpdatedAuditEventScalarWhereInput | EntityUpdatedAuditEventScalarWhereInput[]
    OR?: EntityUpdatedAuditEventScalarWhereInput[]
    NOT?: EntityUpdatedAuditEventScalarWhereInput | EntityUpdatedAuditEventScalarWhereInput[]
    id?: StringFilter<"EntityUpdatedAuditEvent"> | string
    entityType?: EnumEntityTypesFilter<"EntityUpdatedAuditEvent"> | $Enums.EntityTypes
    entityId?: StringFilter<"EntityUpdatedAuditEvent"> | string
    reason?: StringNullableFilter<"EntityUpdatedAuditEvent"> | string | null
    diff?: StringFilter<"EntityUpdatedAuditEvent"> | string
    createdAt?: DateTimeFilter<"EntityUpdatedAuditEvent"> | Date | string
    createdByUserId?: StringFilter<"EntityUpdatedAuditEvent"> | string
  }

  export type UserCreateWithoutSubInput = {
    login: string
    pwd: string
    role: $Enums.Role
    totalPayableReward?: number
    customMonetaryRewardAmount?: number | null
    note?: string | null
    createdAt: Date | string
    attractedSubs?: ReferalDetailsCreateNestedManyWithoutAttractorInput
    ur_ae?: UserRepaymentAuditEventCreateNestedManyWithoutUserInput
    createdSubs?: SubCreateNestedManyWithoutCreatedByInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    extensionsSubmitted?: SubPackageExtendedAuditEventCreateNestedManyWithoutCreatedByInput
    repaymentsSubmitted?: UserRepaymentAuditEventCreateNestedManyWithoutCreatedByInput
    modificationsSubmitted?: EntityUpdatedAuditEventCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutSubInput = {
    login: string
    pwd: string
    role: $Enums.Role
    totalPayableReward?: number
    customMonetaryRewardAmount?: number | null
    note?: string | null
    createdAt: Date | string
    createdByUserId?: string | null
    attractedSubs?: ReferalDetailsUncheckedCreateNestedManyWithoutAttractorInput
    ur_ae?: UserRepaymentAuditEventUncheckedCreateNestedManyWithoutUserInput
    createdSubs?: SubUncheckedCreateNestedManyWithoutCreatedByInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    extensionsSubmitted?: SubPackageExtendedAuditEventUncheckedCreateNestedManyWithoutCreatedByInput
    repaymentsSubmitted?: UserRepaymentAuditEventUncheckedCreateNestedManyWithoutCreatedByInput
    modificationsSubmitted?: EntityUpdatedAuditEventUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutSubInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubInput, UserUncheckedCreateWithoutSubInput>
  }

  export type ReferalDetailsCreateWithoutAttractedSubInput = {
    effectiveAttractorTier: number
    attractor: UserCreateNestedOneWithoutAttractedSubsInput
    spe_ae?: SubPackageExtendedAuditEventCreateNestedOneWithoutAttractedSubReferalDetailsInput
    urt_ae?: UserRewardTriggeredAuditEventCreateNestedManyWithoutReferalDetailsInput
  }

  export type ReferalDetailsUncheckedCreateWithoutAttractedSubInput = {
    attractorUserId: string
    effectiveAttractorTier: number
    spe_ae?: SubPackageExtendedAuditEventUncheckedCreateNestedOneWithoutAttractedSubReferalDetailsInput
    urt_ae?: UserRewardTriggeredAuditEventUncheckedCreateNestedManyWithoutReferalDetailsInput
  }

  export type ReferalDetailsCreateOrConnectWithoutAttractedSubInput = {
    where: ReferalDetailsWhereUniqueInput
    create: XOR<ReferalDetailsCreateWithoutAttractedSubInput, ReferalDetailsUncheckedCreateWithoutAttractedSubInput>
  }

  export type PaymentCreateWithoutSubInput = {
    id?: string
    currency: $Enums.Currency
    amount: number
    date: Date | string
    createdAt: Date | string
    spe_ae?: SubPackageExtendedAuditEventCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutSubInput = {
    id?: string
    currency: $Enums.Currency
    amount: number
    date: Date | string
    createdAt: Date | string
    spe_ae?: SubPackageExtendedAuditEventUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutSubInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutSubInput, PaymentUncheckedCreateWithoutSubInput>
  }

  export type PaymentCreateManySubInputEnvelope = {
    data: PaymentCreateManySubInput | PaymentCreateManySubInput[]
    skipDuplicates?: boolean
  }

  export type SubPackageExtendedAuditEventCreateWithoutSubInput = {
    id?: string
    prevEndDate: Date | string
    newEndDate: Date | string
    reason: $Enums.PackageExtensionReason
    createdAt: Date | string
    attractedSubReferalDetails?: ReferalDetailsCreateNestedOneWithoutSpe_aeInput
    payment: PaymentCreateNestedOneWithoutSpe_aeInput
    urt_ae?: UserRewardTriggeredAuditEventCreateNestedOneWithoutSpe_aeInput
    createdBy: UserCreateNestedOneWithoutExtensionsSubmittedInput
  }

  export type SubPackageExtendedAuditEventUncheckedCreateWithoutSubInput = {
    id?: string
    prevEndDate: Date | string
    newEndDate: Date | string
    attractedSubExternalId?: string | null
    paymentId: string
    reason: $Enums.PackageExtensionReason
    createdAt: Date | string
    createdByUserId: string
    urt_ae?: UserRewardTriggeredAuditEventUncheckedCreateNestedOneWithoutSpe_aeInput
  }

  export type SubPackageExtendedAuditEventCreateOrConnectWithoutSubInput = {
    where: SubPackageExtendedAuditEventWhereUniqueInput
    create: XOR<SubPackageExtendedAuditEventCreateWithoutSubInput, SubPackageExtendedAuditEventUncheckedCreateWithoutSubInput>
  }

  export type SubPackageExtendedAuditEventCreateManySubInputEnvelope = {
    data: SubPackageExtendedAuditEventCreateManySubInput | SubPackageExtendedAuditEventCreateManySubInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCreatedSubsInput = {
    login: string
    pwd: string
    role: $Enums.Role
    totalPayableReward?: number
    customMonetaryRewardAmount?: number | null
    note?: string | null
    createdAt: Date | string
    sub?: SubCreateNestedOneWithoutUserInput
    attractedSubs?: ReferalDetailsCreateNestedManyWithoutAttractorInput
    ur_ae?: UserRepaymentAuditEventCreateNestedManyWithoutUserInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    extensionsSubmitted?: SubPackageExtendedAuditEventCreateNestedManyWithoutCreatedByInput
    repaymentsSubmitted?: UserRepaymentAuditEventCreateNestedManyWithoutCreatedByInput
    modificationsSubmitted?: EntityUpdatedAuditEventCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCreatedSubsInput = {
    login: string
    pwd: string
    role: $Enums.Role
    subExternalId?: string | null
    totalPayableReward?: number
    customMonetaryRewardAmount?: number | null
    note?: string | null
    createdAt: Date | string
    createdByUserId?: string | null
    attractedSubs?: ReferalDetailsUncheckedCreateNestedManyWithoutAttractorInput
    ur_ae?: UserRepaymentAuditEventUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    extensionsSubmitted?: SubPackageExtendedAuditEventUncheckedCreateNestedManyWithoutCreatedByInput
    repaymentsSubmitted?: UserRepaymentAuditEventUncheckedCreateNestedManyWithoutCreatedByInput
    modificationsSubmitted?: EntityUpdatedAuditEventUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCreatedSubsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedSubsInput, UserUncheckedCreateWithoutCreatedSubsInput>
  }

  export type UserUpsertWithoutSubInput = {
    update: XOR<UserUpdateWithoutSubInput, UserUncheckedUpdateWithoutSubInput>
    create: XOR<UserCreateWithoutSubInput, UserUncheckedCreateWithoutSubInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubInput, UserUncheckedUpdateWithoutSubInput>
  }

  export type UserUpdateWithoutSubInput = {
    login?: StringFieldUpdateOperationsInput | string
    pwd?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    totalPayableReward?: FloatFieldUpdateOperationsInput | number
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attractedSubs?: ReferalDetailsUpdateManyWithoutAttractorNestedInput
    ur_ae?: UserRepaymentAuditEventUpdateManyWithoutUserNestedInput
    createdSubs?: SubUpdateManyWithoutCreatedByNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    extensionsSubmitted?: SubPackageExtendedAuditEventUpdateManyWithoutCreatedByNestedInput
    repaymentsSubmitted?: UserRepaymentAuditEventUpdateManyWithoutCreatedByNestedInput
    modificationsSubmitted?: EntityUpdatedAuditEventUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSubInput = {
    login?: StringFieldUpdateOperationsInput | string
    pwd?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    totalPayableReward?: FloatFieldUpdateOperationsInput | number
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    attractedSubs?: ReferalDetailsUncheckedUpdateManyWithoutAttractorNestedInput
    ur_ae?: UserRepaymentAuditEventUncheckedUpdateManyWithoutUserNestedInput
    createdSubs?: SubUncheckedUpdateManyWithoutCreatedByNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    extensionsSubmitted?: SubPackageExtendedAuditEventUncheckedUpdateManyWithoutCreatedByNestedInput
    repaymentsSubmitted?: UserRepaymentAuditEventUncheckedUpdateManyWithoutCreatedByNestedInput
    modificationsSubmitted?: EntityUpdatedAuditEventUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type ReferalDetailsUpsertWithoutAttractedSubInput = {
    update: XOR<ReferalDetailsUpdateWithoutAttractedSubInput, ReferalDetailsUncheckedUpdateWithoutAttractedSubInput>
    create: XOR<ReferalDetailsCreateWithoutAttractedSubInput, ReferalDetailsUncheckedCreateWithoutAttractedSubInput>
    where?: ReferalDetailsWhereInput
  }

  export type ReferalDetailsUpdateToOneWithWhereWithoutAttractedSubInput = {
    where?: ReferalDetailsWhereInput
    data: XOR<ReferalDetailsUpdateWithoutAttractedSubInput, ReferalDetailsUncheckedUpdateWithoutAttractedSubInput>
  }

  export type ReferalDetailsUpdateWithoutAttractedSubInput = {
    effectiveAttractorTier?: IntFieldUpdateOperationsInput | number
    attractor?: UserUpdateOneRequiredWithoutAttractedSubsNestedInput
    spe_ae?: SubPackageExtendedAuditEventUpdateOneWithoutAttractedSubReferalDetailsNestedInput
    urt_ae?: UserRewardTriggeredAuditEventUpdateManyWithoutReferalDetailsNestedInput
  }

  export type ReferalDetailsUncheckedUpdateWithoutAttractedSubInput = {
    attractorUserId?: StringFieldUpdateOperationsInput | string
    effectiveAttractorTier?: IntFieldUpdateOperationsInput | number
    spe_ae?: SubPackageExtendedAuditEventUncheckedUpdateOneWithoutAttractedSubReferalDetailsNestedInput
    urt_ae?: UserRewardTriggeredAuditEventUncheckedUpdateManyWithoutReferalDetailsNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutSubInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutSubInput, PaymentUncheckedUpdateWithoutSubInput>
    create: XOR<PaymentCreateWithoutSubInput, PaymentUncheckedCreateWithoutSubInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutSubInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutSubInput, PaymentUncheckedUpdateWithoutSubInput>
  }

  export type PaymentUpdateManyWithWhereWithoutSubInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutSubInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    currency?: EnumCurrencyFilter<"Payment"> | $Enums.Currency
    amount?: FloatFilter<"Payment"> | number
    date?: DateTimeFilter<"Payment"> | Date | string
    subExternalId?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type SubPackageExtendedAuditEventUpsertWithWhereUniqueWithoutSubInput = {
    where: SubPackageExtendedAuditEventWhereUniqueInput
    update: XOR<SubPackageExtendedAuditEventUpdateWithoutSubInput, SubPackageExtendedAuditEventUncheckedUpdateWithoutSubInput>
    create: XOR<SubPackageExtendedAuditEventCreateWithoutSubInput, SubPackageExtendedAuditEventUncheckedCreateWithoutSubInput>
  }

  export type SubPackageExtendedAuditEventUpdateWithWhereUniqueWithoutSubInput = {
    where: SubPackageExtendedAuditEventWhereUniqueInput
    data: XOR<SubPackageExtendedAuditEventUpdateWithoutSubInput, SubPackageExtendedAuditEventUncheckedUpdateWithoutSubInput>
  }

  export type SubPackageExtendedAuditEventUpdateManyWithWhereWithoutSubInput = {
    where: SubPackageExtendedAuditEventScalarWhereInput
    data: XOR<SubPackageExtendedAuditEventUpdateManyMutationInput, SubPackageExtendedAuditEventUncheckedUpdateManyWithoutSubInput>
  }

  export type UserUpsertWithoutCreatedSubsInput = {
    update: XOR<UserUpdateWithoutCreatedSubsInput, UserUncheckedUpdateWithoutCreatedSubsInput>
    create: XOR<UserCreateWithoutCreatedSubsInput, UserUncheckedCreateWithoutCreatedSubsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedSubsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedSubsInput, UserUncheckedUpdateWithoutCreatedSubsInput>
  }

  export type UserUpdateWithoutCreatedSubsInput = {
    login?: StringFieldUpdateOperationsInput | string
    pwd?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    totalPayableReward?: FloatFieldUpdateOperationsInput | number
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sub?: SubUpdateOneWithoutUserNestedInput
    attractedSubs?: ReferalDetailsUpdateManyWithoutAttractorNestedInput
    ur_ae?: UserRepaymentAuditEventUpdateManyWithoutUserNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    extensionsSubmitted?: SubPackageExtendedAuditEventUpdateManyWithoutCreatedByNestedInput
    repaymentsSubmitted?: UserRepaymentAuditEventUpdateManyWithoutCreatedByNestedInput
    modificationsSubmitted?: EntityUpdatedAuditEventUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedSubsInput = {
    login?: StringFieldUpdateOperationsInput | string
    pwd?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subExternalId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPayableReward?: FloatFieldUpdateOperationsInput | number
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    attractedSubs?: ReferalDetailsUncheckedUpdateManyWithoutAttractorNestedInput
    ur_ae?: UserRepaymentAuditEventUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    extensionsSubmitted?: SubPackageExtendedAuditEventUncheckedUpdateManyWithoutCreatedByNestedInput
    repaymentsSubmitted?: UserRepaymentAuditEventUncheckedUpdateManyWithoutCreatedByNestedInput
    modificationsSubmitted?: EntityUpdatedAuditEventUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type SubCreateWithoutReferalDetailsInput = {
    externalId: string
    login?: string | null
    pwd?: string | null
    note?: string | null
    m3uPlaylist?: string | null
    epg?: string | null
    publicKey?: string | null
    media?: string | null
    pkgType?: $Enums.PackageType | null
    startDate: Date | string
    endDate: Date | string
    region?: $Enums.Region | null
    createdAt: Date | string
    user?: UserCreateNestedOneWithoutSubInput
    payments?: PaymentCreateNestedManyWithoutSubInput
    packageExtensions?: SubPackageExtendedAuditEventCreateNestedManyWithoutSubInput
    createdBy: UserCreateNestedOneWithoutCreatedSubsInput
  }

  export type SubUncheckedCreateWithoutReferalDetailsInput = {
    externalId: string
    login?: string | null
    pwd?: string | null
    note?: string | null
    m3uPlaylist?: string | null
    epg?: string | null
    publicKey?: string | null
    media?: string | null
    pkgType?: $Enums.PackageType | null
    startDate: Date | string
    endDate: Date | string
    region?: $Enums.Region | null
    createdAt: Date | string
    createdByUserId: string
    user?: UserUncheckedCreateNestedOneWithoutSubInput
    payments?: PaymentUncheckedCreateNestedManyWithoutSubInput
    packageExtensions?: SubPackageExtendedAuditEventUncheckedCreateNestedManyWithoutSubInput
  }

  export type SubCreateOrConnectWithoutReferalDetailsInput = {
    where: SubWhereUniqueInput
    create: XOR<SubCreateWithoutReferalDetailsInput, SubUncheckedCreateWithoutReferalDetailsInput>
  }

  export type UserCreateWithoutAttractedSubsInput = {
    login: string
    pwd: string
    role: $Enums.Role
    totalPayableReward?: number
    customMonetaryRewardAmount?: number | null
    note?: string | null
    createdAt: Date | string
    sub?: SubCreateNestedOneWithoutUserInput
    ur_ae?: UserRepaymentAuditEventCreateNestedManyWithoutUserInput
    createdSubs?: SubCreateNestedManyWithoutCreatedByInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    extensionsSubmitted?: SubPackageExtendedAuditEventCreateNestedManyWithoutCreatedByInput
    repaymentsSubmitted?: UserRepaymentAuditEventCreateNestedManyWithoutCreatedByInput
    modificationsSubmitted?: EntityUpdatedAuditEventCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutAttractedSubsInput = {
    login: string
    pwd: string
    role: $Enums.Role
    subExternalId?: string | null
    totalPayableReward?: number
    customMonetaryRewardAmount?: number | null
    note?: string | null
    createdAt: Date | string
    createdByUserId?: string | null
    ur_ae?: UserRepaymentAuditEventUncheckedCreateNestedManyWithoutUserInput
    createdSubs?: SubUncheckedCreateNestedManyWithoutCreatedByInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    extensionsSubmitted?: SubPackageExtendedAuditEventUncheckedCreateNestedManyWithoutCreatedByInput
    repaymentsSubmitted?: UserRepaymentAuditEventUncheckedCreateNestedManyWithoutCreatedByInput
    modificationsSubmitted?: EntityUpdatedAuditEventUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutAttractedSubsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAttractedSubsInput, UserUncheckedCreateWithoutAttractedSubsInput>
  }

  export type SubPackageExtendedAuditEventCreateWithoutAttractedSubReferalDetailsInput = {
    id?: string
    prevEndDate: Date | string
    newEndDate: Date | string
    reason: $Enums.PackageExtensionReason
    createdAt: Date | string
    payment: PaymentCreateNestedOneWithoutSpe_aeInput
    sub: SubCreateNestedOneWithoutPackageExtensionsInput
    urt_ae?: UserRewardTriggeredAuditEventCreateNestedOneWithoutSpe_aeInput
    createdBy: UserCreateNestedOneWithoutExtensionsSubmittedInput
  }

  export type SubPackageExtendedAuditEventUncheckedCreateWithoutAttractedSubReferalDetailsInput = {
    id?: string
    prevEndDate: Date | string
    newEndDate: Date | string
    paymentId: string
    subExternalId: string
    reason: $Enums.PackageExtensionReason
    createdAt: Date | string
    createdByUserId: string
    urt_ae?: UserRewardTriggeredAuditEventUncheckedCreateNestedOneWithoutSpe_aeInput
  }

  export type SubPackageExtendedAuditEventCreateOrConnectWithoutAttractedSubReferalDetailsInput = {
    where: SubPackageExtendedAuditEventWhereUniqueInput
    create: XOR<SubPackageExtendedAuditEventCreateWithoutAttractedSubReferalDetailsInput, SubPackageExtendedAuditEventUncheckedCreateWithoutAttractedSubReferalDetailsInput>
  }

  export type UserRewardTriggeredAuditEventCreateWithoutReferalDetailsInput = {
    id?: string
    customMonetaryRewardAmount?: number | null
    rewardType: $Enums.MonetaryRewardType
    rewardAmount: number
    prevTotalPayableReward: number
    newTotalPayableReward: number
    highestTierReached?: boolean
    createdAt: Date | string
    spe_ae?: SubPackageExtendedAuditEventCreateNestedOneWithoutUrt_aeInput
  }

  export type UserRewardTriggeredAuditEventUncheckedCreateWithoutReferalDetailsInput = {
    id?: string
    customMonetaryRewardAmount?: number | null
    rewardType: $Enums.MonetaryRewardType
    rewardAmount: number
    prevTotalPayableReward: number
    newTotalPayableReward: number
    highestTierReached?: boolean
    spe_ae_id?: string | null
    createdAt: Date | string
  }

  export type UserRewardTriggeredAuditEventCreateOrConnectWithoutReferalDetailsInput = {
    where: UserRewardTriggeredAuditEventWhereUniqueInput
    create: XOR<UserRewardTriggeredAuditEventCreateWithoutReferalDetailsInput, UserRewardTriggeredAuditEventUncheckedCreateWithoutReferalDetailsInput>
  }

  export type UserRewardTriggeredAuditEventCreateManyReferalDetailsInputEnvelope = {
    data: UserRewardTriggeredAuditEventCreateManyReferalDetailsInput | UserRewardTriggeredAuditEventCreateManyReferalDetailsInput[]
    skipDuplicates?: boolean
  }

  export type SubUpsertWithoutReferalDetailsInput = {
    update: XOR<SubUpdateWithoutReferalDetailsInput, SubUncheckedUpdateWithoutReferalDetailsInput>
    create: XOR<SubCreateWithoutReferalDetailsInput, SubUncheckedCreateWithoutReferalDetailsInput>
    where?: SubWhereInput
  }

  export type SubUpdateToOneWithWhereWithoutReferalDetailsInput = {
    where?: SubWhereInput
    data: XOR<SubUpdateWithoutReferalDetailsInput, SubUncheckedUpdateWithoutReferalDetailsInput>
  }

  export type SubUpdateWithoutReferalDetailsInput = {
    externalId?: StringFieldUpdateOperationsInput | string
    login?: NullableStringFieldUpdateOperationsInput | string | null
    pwd?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    m3uPlaylist?: NullableStringFieldUpdateOperationsInput | string | null
    epg?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    pkgType?: NullableEnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSubNestedInput
    payments?: PaymentUpdateManyWithoutSubNestedInput
    packageExtensions?: SubPackageExtendedAuditEventUpdateManyWithoutSubNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedSubsNestedInput
  }

  export type SubUncheckedUpdateWithoutReferalDetailsInput = {
    externalId?: StringFieldUpdateOperationsInput | string
    login?: NullableStringFieldUpdateOperationsInput | string | null
    pwd?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    m3uPlaylist?: NullableStringFieldUpdateOperationsInput | string | null
    epg?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    pkgType?: NullableEnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: StringFieldUpdateOperationsInput | string
    user?: UserUncheckedUpdateOneWithoutSubNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutSubNestedInput
    packageExtensions?: SubPackageExtendedAuditEventUncheckedUpdateManyWithoutSubNestedInput
  }

  export type UserUpsertWithoutAttractedSubsInput = {
    update: XOR<UserUpdateWithoutAttractedSubsInput, UserUncheckedUpdateWithoutAttractedSubsInput>
    create: XOR<UserCreateWithoutAttractedSubsInput, UserUncheckedCreateWithoutAttractedSubsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAttractedSubsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAttractedSubsInput, UserUncheckedUpdateWithoutAttractedSubsInput>
  }

  export type UserUpdateWithoutAttractedSubsInput = {
    login?: StringFieldUpdateOperationsInput | string
    pwd?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    totalPayableReward?: FloatFieldUpdateOperationsInput | number
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sub?: SubUpdateOneWithoutUserNestedInput
    ur_ae?: UserRepaymentAuditEventUpdateManyWithoutUserNestedInput
    createdSubs?: SubUpdateManyWithoutCreatedByNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    extensionsSubmitted?: SubPackageExtendedAuditEventUpdateManyWithoutCreatedByNestedInput
    repaymentsSubmitted?: UserRepaymentAuditEventUpdateManyWithoutCreatedByNestedInput
    modificationsSubmitted?: EntityUpdatedAuditEventUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAttractedSubsInput = {
    login?: StringFieldUpdateOperationsInput | string
    pwd?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subExternalId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPayableReward?: FloatFieldUpdateOperationsInput | number
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    ur_ae?: UserRepaymentAuditEventUncheckedUpdateManyWithoutUserNestedInput
    createdSubs?: SubUncheckedUpdateManyWithoutCreatedByNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    extensionsSubmitted?: SubPackageExtendedAuditEventUncheckedUpdateManyWithoutCreatedByNestedInput
    repaymentsSubmitted?: UserRepaymentAuditEventUncheckedUpdateManyWithoutCreatedByNestedInput
    modificationsSubmitted?: EntityUpdatedAuditEventUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type SubPackageExtendedAuditEventUpsertWithoutAttractedSubReferalDetailsInput = {
    update: XOR<SubPackageExtendedAuditEventUpdateWithoutAttractedSubReferalDetailsInput, SubPackageExtendedAuditEventUncheckedUpdateWithoutAttractedSubReferalDetailsInput>
    create: XOR<SubPackageExtendedAuditEventCreateWithoutAttractedSubReferalDetailsInput, SubPackageExtendedAuditEventUncheckedCreateWithoutAttractedSubReferalDetailsInput>
    where?: SubPackageExtendedAuditEventWhereInput
  }

  export type SubPackageExtendedAuditEventUpdateToOneWithWhereWithoutAttractedSubReferalDetailsInput = {
    where?: SubPackageExtendedAuditEventWhereInput
    data: XOR<SubPackageExtendedAuditEventUpdateWithoutAttractedSubReferalDetailsInput, SubPackageExtendedAuditEventUncheckedUpdateWithoutAttractedSubReferalDetailsInput>
  }

  export type SubPackageExtendedAuditEventUpdateWithoutAttractedSubReferalDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    prevEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: EnumPackageExtensionReasonFieldUpdateOperationsInput | $Enums.PackageExtensionReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUpdateOneRequiredWithoutSpe_aeNestedInput
    sub?: SubUpdateOneRequiredWithoutPackageExtensionsNestedInput
    urt_ae?: UserRewardTriggeredAuditEventUpdateOneWithoutSpe_aeNestedInput
    createdBy?: UserUpdateOneRequiredWithoutExtensionsSubmittedNestedInput
  }

  export type SubPackageExtendedAuditEventUncheckedUpdateWithoutAttractedSubReferalDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    prevEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentId?: StringFieldUpdateOperationsInput | string
    subExternalId?: StringFieldUpdateOperationsInput | string
    reason?: EnumPackageExtensionReasonFieldUpdateOperationsInput | $Enums.PackageExtensionReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: StringFieldUpdateOperationsInput | string
    urt_ae?: UserRewardTriggeredAuditEventUncheckedUpdateOneWithoutSpe_aeNestedInput
  }

  export type UserRewardTriggeredAuditEventUpsertWithWhereUniqueWithoutReferalDetailsInput = {
    where: UserRewardTriggeredAuditEventWhereUniqueInput
    update: XOR<UserRewardTriggeredAuditEventUpdateWithoutReferalDetailsInput, UserRewardTriggeredAuditEventUncheckedUpdateWithoutReferalDetailsInput>
    create: XOR<UserRewardTriggeredAuditEventCreateWithoutReferalDetailsInput, UserRewardTriggeredAuditEventUncheckedCreateWithoutReferalDetailsInput>
  }

  export type UserRewardTriggeredAuditEventUpdateWithWhereUniqueWithoutReferalDetailsInput = {
    where: UserRewardTriggeredAuditEventWhereUniqueInput
    data: XOR<UserRewardTriggeredAuditEventUpdateWithoutReferalDetailsInput, UserRewardTriggeredAuditEventUncheckedUpdateWithoutReferalDetailsInput>
  }

  export type UserRewardTriggeredAuditEventUpdateManyWithWhereWithoutReferalDetailsInput = {
    where: UserRewardTriggeredAuditEventScalarWhereInput
    data: XOR<UserRewardTriggeredAuditEventUpdateManyMutationInput, UserRewardTriggeredAuditEventUncheckedUpdateManyWithoutReferalDetailsInput>
  }

  export type UserRewardTriggeredAuditEventScalarWhereInput = {
    AND?: UserRewardTriggeredAuditEventScalarWhereInput | UserRewardTriggeredAuditEventScalarWhereInput[]
    OR?: UserRewardTriggeredAuditEventScalarWhereInput[]
    NOT?: UserRewardTriggeredAuditEventScalarWhereInput | UserRewardTriggeredAuditEventScalarWhereInput[]
    id?: StringFilter<"UserRewardTriggeredAuditEvent"> | string
    customMonetaryRewardAmount?: FloatNullableFilter<"UserRewardTriggeredAuditEvent"> | number | null
    rewardType?: EnumMonetaryRewardTypeFilter<"UserRewardTriggeredAuditEvent"> | $Enums.MonetaryRewardType
    rewardAmount?: FloatFilter<"UserRewardTriggeredAuditEvent"> | number
    prevTotalPayableReward?: FloatFilter<"UserRewardTriggeredAuditEvent"> | number
    newTotalPayableReward?: FloatFilter<"UserRewardTriggeredAuditEvent"> | number
    highestTierReached?: BoolFilter<"UserRewardTriggeredAuditEvent"> | boolean
    referalDetails_attractedSubExternalId?: StringFilter<"UserRewardTriggeredAuditEvent"> | string
    spe_ae_id?: StringNullableFilter<"UserRewardTriggeredAuditEvent"> | string | null
    createdAt?: DateTimeFilter<"UserRewardTriggeredAuditEvent"> | Date | string
  }

  export type SubCreateWithoutPaymentsInput = {
    externalId: string
    login?: string | null
    pwd?: string | null
    note?: string | null
    m3uPlaylist?: string | null
    epg?: string | null
    publicKey?: string | null
    media?: string | null
    pkgType?: $Enums.PackageType | null
    startDate: Date | string
    endDate: Date | string
    region?: $Enums.Region | null
    createdAt: Date | string
    user?: UserCreateNestedOneWithoutSubInput
    referalDetails?: ReferalDetailsCreateNestedOneWithoutAttractedSubInput
    packageExtensions?: SubPackageExtendedAuditEventCreateNestedManyWithoutSubInput
    createdBy: UserCreateNestedOneWithoutCreatedSubsInput
  }

  export type SubUncheckedCreateWithoutPaymentsInput = {
    externalId: string
    login?: string | null
    pwd?: string | null
    note?: string | null
    m3uPlaylist?: string | null
    epg?: string | null
    publicKey?: string | null
    media?: string | null
    pkgType?: $Enums.PackageType | null
    startDate: Date | string
    endDate: Date | string
    region?: $Enums.Region | null
    createdAt: Date | string
    createdByUserId: string
    user?: UserUncheckedCreateNestedOneWithoutSubInput
    referalDetails?: ReferalDetailsUncheckedCreateNestedOneWithoutAttractedSubInput
    packageExtensions?: SubPackageExtendedAuditEventUncheckedCreateNestedManyWithoutSubInput
  }

  export type SubCreateOrConnectWithoutPaymentsInput = {
    where: SubWhereUniqueInput
    create: XOR<SubCreateWithoutPaymentsInput, SubUncheckedCreateWithoutPaymentsInput>
  }

  export type SubPackageExtendedAuditEventCreateWithoutPaymentInput = {
    id?: string
    prevEndDate: Date | string
    newEndDate: Date | string
    reason: $Enums.PackageExtensionReason
    createdAt: Date | string
    attractedSubReferalDetails?: ReferalDetailsCreateNestedOneWithoutSpe_aeInput
    sub: SubCreateNestedOneWithoutPackageExtensionsInput
    urt_ae?: UserRewardTriggeredAuditEventCreateNestedOneWithoutSpe_aeInput
    createdBy: UserCreateNestedOneWithoutExtensionsSubmittedInput
  }

  export type SubPackageExtendedAuditEventUncheckedCreateWithoutPaymentInput = {
    id?: string
    prevEndDate: Date | string
    newEndDate: Date | string
    attractedSubExternalId?: string | null
    subExternalId: string
    reason: $Enums.PackageExtensionReason
    createdAt: Date | string
    createdByUserId: string
    urt_ae?: UserRewardTriggeredAuditEventUncheckedCreateNestedOneWithoutSpe_aeInput
  }

  export type SubPackageExtendedAuditEventCreateOrConnectWithoutPaymentInput = {
    where: SubPackageExtendedAuditEventWhereUniqueInput
    create: XOR<SubPackageExtendedAuditEventCreateWithoutPaymentInput, SubPackageExtendedAuditEventUncheckedCreateWithoutPaymentInput>
  }

  export type SubUpsertWithoutPaymentsInput = {
    update: XOR<SubUpdateWithoutPaymentsInput, SubUncheckedUpdateWithoutPaymentsInput>
    create: XOR<SubCreateWithoutPaymentsInput, SubUncheckedCreateWithoutPaymentsInput>
    where?: SubWhereInput
  }

  export type SubUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: SubWhereInput
    data: XOR<SubUpdateWithoutPaymentsInput, SubUncheckedUpdateWithoutPaymentsInput>
  }

  export type SubUpdateWithoutPaymentsInput = {
    externalId?: StringFieldUpdateOperationsInput | string
    login?: NullableStringFieldUpdateOperationsInput | string | null
    pwd?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    m3uPlaylist?: NullableStringFieldUpdateOperationsInput | string | null
    epg?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    pkgType?: NullableEnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSubNestedInput
    referalDetails?: ReferalDetailsUpdateOneWithoutAttractedSubNestedInput
    packageExtensions?: SubPackageExtendedAuditEventUpdateManyWithoutSubNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedSubsNestedInput
  }

  export type SubUncheckedUpdateWithoutPaymentsInput = {
    externalId?: StringFieldUpdateOperationsInput | string
    login?: NullableStringFieldUpdateOperationsInput | string | null
    pwd?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    m3uPlaylist?: NullableStringFieldUpdateOperationsInput | string | null
    epg?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    pkgType?: NullableEnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: StringFieldUpdateOperationsInput | string
    user?: UserUncheckedUpdateOneWithoutSubNestedInput
    referalDetails?: ReferalDetailsUncheckedUpdateOneWithoutAttractedSubNestedInput
    packageExtensions?: SubPackageExtendedAuditEventUncheckedUpdateManyWithoutSubNestedInput
  }

  export type SubPackageExtendedAuditEventUpsertWithoutPaymentInput = {
    update: XOR<SubPackageExtendedAuditEventUpdateWithoutPaymentInput, SubPackageExtendedAuditEventUncheckedUpdateWithoutPaymentInput>
    create: XOR<SubPackageExtendedAuditEventCreateWithoutPaymentInput, SubPackageExtendedAuditEventUncheckedCreateWithoutPaymentInput>
    where?: SubPackageExtendedAuditEventWhereInput
  }

  export type SubPackageExtendedAuditEventUpdateToOneWithWhereWithoutPaymentInput = {
    where?: SubPackageExtendedAuditEventWhereInput
    data: XOR<SubPackageExtendedAuditEventUpdateWithoutPaymentInput, SubPackageExtendedAuditEventUncheckedUpdateWithoutPaymentInput>
  }

  export type SubPackageExtendedAuditEventUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    prevEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: EnumPackageExtensionReasonFieldUpdateOperationsInput | $Enums.PackageExtensionReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attractedSubReferalDetails?: ReferalDetailsUpdateOneWithoutSpe_aeNestedInput
    sub?: SubUpdateOneRequiredWithoutPackageExtensionsNestedInput
    urt_ae?: UserRewardTriggeredAuditEventUpdateOneWithoutSpe_aeNestedInput
    createdBy?: UserUpdateOneRequiredWithoutExtensionsSubmittedNestedInput
  }

  export type SubPackageExtendedAuditEventUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    prevEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    attractedSubExternalId?: NullableStringFieldUpdateOperationsInput | string | null
    subExternalId?: StringFieldUpdateOperationsInput | string
    reason?: EnumPackageExtensionReasonFieldUpdateOperationsInput | $Enums.PackageExtensionReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: StringFieldUpdateOperationsInput | string
    urt_ae?: UserRewardTriggeredAuditEventUncheckedUpdateOneWithoutSpe_aeNestedInput
  }

  export type ReferalDetailsCreateWithoutSpe_aeInput = {
    effectiveAttractorTier: number
    attractedSub: SubCreateNestedOneWithoutReferalDetailsInput
    attractor: UserCreateNestedOneWithoutAttractedSubsInput
    urt_ae?: UserRewardTriggeredAuditEventCreateNestedManyWithoutReferalDetailsInput
  }

  export type ReferalDetailsUncheckedCreateWithoutSpe_aeInput = {
    attractedSubExternalId: string
    attractorUserId: string
    effectiveAttractorTier: number
    urt_ae?: UserRewardTriggeredAuditEventUncheckedCreateNestedManyWithoutReferalDetailsInput
  }

  export type ReferalDetailsCreateOrConnectWithoutSpe_aeInput = {
    where: ReferalDetailsWhereUniqueInput
    create: XOR<ReferalDetailsCreateWithoutSpe_aeInput, ReferalDetailsUncheckedCreateWithoutSpe_aeInput>
  }

  export type PaymentCreateWithoutSpe_aeInput = {
    id?: string
    currency: $Enums.Currency
    amount: number
    date: Date | string
    createdAt: Date | string
    sub: SubCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutSpe_aeInput = {
    id?: string
    currency: $Enums.Currency
    amount: number
    date: Date | string
    subExternalId: string
    createdAt: Date | string
  }

  export type PaymentCreateOrConnectWithoutSpe_aeInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutSpe_aeInput, PaymentUncheckedCreateWithoutSpe_aeInput>
  }

  export type SubCreateWithoutPackageExtensionsInput = {
    externalId: string
    login?: string | null
    pwd?: string | null
    note?: string | null
    m3uPlaylist?: string | null
    epg?: string | null
    publicKey?: string | null
    media?: string | null
    pkgType?: $Enums.PackageType | null
    startDate: Date | string
    endDate: Date | string
    region?: $Enums.Region | null
    createdAt: Date | string
    user?: UserCreateNestedOneWithoutSubInput
    referalDetails?: ReferalDetailsCreateNestedOneWithoutAttractedSubInput
    payments?: PaymentCreateNestedManyWithoutSubInput
    createdBy: UserCreateNestedOneWithoutCreatedSubsInput
  }

  export type SubUncheckedCreateWithoutPackageExtensionsInput = {
    externalId: string
    login?: string | null
    pwd?: string | null
    note?: string | null
    m3uPlaylist?: string | null
    epg?: string | null
    publicKey?: string | null
    media?: string | null
    pkgType?: $Enums.PackageType | null
    startDate: Date | string
    endDate: Date | string
    region?: $Enums.Region | null
    createdAt: Date | string
    createdByUserId: string
    user?: UserUncheckedCreateNestedOneWithoutSubInput
    referalDetails?: ReferalDetailsUncheckedCreateNestedOneWithoutAttractedSubInput
    payments?: PaymentUncheckedCreateNestedManyWithoutSubInput
  }

  export type SubCreateOrConnectWithoutPackageExtensionsInput = {
    where: SubWhereUniqueInput
    create: XOR<SubCreateWithoutPackageExtensionsInput, SubUncheckedCreateWithoutPackageExtensionsInput>
  }

  export type UserRewardTriggeredAuditEventCreateWithoutSpe_aeInput = {
    id?: string
    customMonetaryRewardAmount?: number | null
    rewardType: $Enums.MonetaryRewardType
    rewardAmount: number
    prevTotalPayableReward: number
    newTotalPayableReward: number
    highestTierReached?: boolean
    createdAt: Date | string
    referalDetails: ReferalDetailsCreateNestedOneWithoutUrt_aeInput
  }

  export type UserRewardTriggeredAuditEventUncheckedCreateWithoutSpe_aeInput = {
    id?: string
    customMonetaryRewardAmount?: number | null
    rewardType: $Enums.MonetaryRewardType
    rewardAmount: number
    prevTotalPayableReward: number
    newTotalPayableReward: number
    highestTierReached?: boolean
    referalDetails_attractedSubExternalId: string
    createdAt: Date | string
  }

  export type UserRewardTriggeredAuditEventCreateOrConnectWithoutSpe_aeInput = {
    where: UserRewardTriggeredAuditEventWhereUniqueInput
    create: XOR<UserRewardTriggeredAuditEventCreateWithoutSpe_aeInput, UserRewardTriggeredAuditEventUncheckedCreateWithoutSpe_aeInput>
  }

  export type UserCreateWithoutExtensionsSubmittedInput = {
    login: string
    pwd: string
    role: $Enums.Role
    totalPayableReward?: number
    customMonetaryRewardAmount?: number | null
    note?: string | null
    createdAt: Date | string
    sub?: SubCreateNestedOneWithoutUserInput
    attractedSubs?: ReferalDetailsCreateNestedManyWithoutAttractorInput
    ur_ae?: UserRepaymentAuditEventCreateNestedManyWithoutUserInput
    createdSubs?: SubCreateNestedManyWithoutCreatedByInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    repaymentsSubmitted?: UserRepaymentAuditEventCreateNestedManyWithoutCreatedByInput
    modificationsSubmitted?: EntityUpdatedAuditEventCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutExtensionsSubmittedInput = {
    login: string
    pwd: string
    role: $Enums.Role
    subExternalId?: string | null
    totalPayableReward?: number
    customMonetaryRewardAmount?: number | null
    note?: string | null
    createdAt: Date | string
    createdByUserId?: string | null
    attractedSubs?: ReferalDetailsUncheckedCreateNestedManyWithoutAttractorInput
    ur_ae?: UserRepaymentAuditEventUncheckedCreateNestedManyWithoutUserInput
    createdSubs?: SubUncheckedCreateNestedManyWithoutCreatedByInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    repaymentsSubmitted?: UserRepaymentAuditEventUncheckedCreateNestedManyWithoutCreatedByInput
    modificationsSubmitted?: EntityUpdatedAuditEventUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutExtensionsSubmittedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExtensionsSubmittedInput, UserUncheckedCreateWithoutExtensionsSubmittedInput>
  }

  export type ReferalDetailsUpsertWithoutSpe_aeInput = {
    update: XOR<ReferalDetailsUpdateWithoutSpe_aeInput, ReferalDetailsUncheckedUpdateWithoutSpe_aeInput>
    create: XOR<ReferalDetailsCreateWithoutSpe_aeInput, ReferalDetailsUncheckedCreateWithoutSpe_aeInput>
    where?: ReferalDetailsWhereInput
  }

  export type ReferalDetailsUpdateToOneWithWhereWithoutSpe_aeInput = {
    where?: ReferalDetailsWhereInput
    data: XOR<ReferalDetailsUpdateWithoutSpe_aeInput, ReferalDetailsUncheckedUpdateWithoutSpe_aeInput>
  }

  export type ReferalDetailsUpdateWithoutSpe_aeInput = {
    effectiveAttractorTier?: IntFieldUpdateOperationsInput | number
    attractedSub?: SubUpdateOneRequiredWithoutReferalDetailsNestedInput
    attractor?: UserUpdateOneRequiredWithoutAttractedSubsNestedInput
    urt_ae?: UserRewardTriggeredAuditEventUpdateManyWithoutReferalDetailsNestedInput
  }

  export type ReferalDetailsUncheckedUpdateWithoutSpe_aeInput = {
    attractedSubExternalId?: StringFieldUpdateOperationsInput | string
    attractorUserId?: StringFieldUpdateOperationsInput | string
    effectiveAttractorTier?: IntFieldUpdateOperationsInput | number
    urt_ae?: UserRewardTriggeredAuditEventUncheckedUpdateManyWithoutReferalDetailsNestedInput
  }

  export type PaymentUpsertWithoutSpe_aeInput = {
    update: XOR<PaymentUpdateWithoutSpe_aeInput, PaymentUncheckedUpdateWithoutSpe_aeInput>
    create: XOR<PaymentCreateWithoutSpe_aeInput, PaymentUncheckedCreateWithoutSpe_aeInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutSpe_aeInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutSpe_aeInput, PaymentUncheckedUpdateWithoutSpe_aeInput>
  }

  export type PaymentUpdateWithoutSpe_aeInput = {
    id?: StringFieldUpdateOperationsInput | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sub?: SubUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutSpe_aeInput = {
    id?: StringFieldUpdateOperationsInput | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    subExternalId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubUpsertWithoutPackageExtensionsInput = {
    update: XOR<SubUpdateWithoutPackageExtensionsInput, SubUncheckedUpdateWithoutPackageExtensionsInput>
    create: XOR<SubCreateWithoutPackageExtensionsInput, SubUncheckedCreateWithoutPackageExtensionsInput>
    where?: SubWhereInput
  }

  export type SubUpdateToOneWithWhereWithoutPackageExtensionsInput = {
    where?: SubWhereInput
    data: XOR<SubUpdateWithoutPackageExtensionsInput, SubUncheckedUpdateWithoutPackageExtensionsInput>
  }

  export type SubUpdateWithoutPackageExtensionsInput = {
    externalId?: StringFieldUpdateOperationsInput | string
    login?: NullableStringFieldUpdateOperationsInput | string | null
    pwd?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    m3uPlaylist?: NullableStringFieldUpdateOperationsInput | string | null
    epg?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    pkgType?: NullableEnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSubNestedInput
    referalDetails?: ReferalDetailsUpdateOneWithoutAttractedSubNestedInput
    payments?: PaymentUpdateManyWithoutSubNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedSubsNestedInput
  }

  export type SubUncheckedUpdateWithoutPackageExtensionsInput = {
    externalId?: StringFieldUpdateOperationsInput | string
    login?: NullableStringFieldUpdateOperationsInput | string | null
    pwd?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    m3uPlaylist?: NullableStringFieldUpdateOperationsInput | string | null
    epg?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    pkgType?: NullableEnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: StringFieldUpdateOperationsInput | string
    user?: UserUncheckedUpdateOneWithoutSubNestedInput
    referalDetails?: ReferalDetailsUncheckedUpdateOneWithoutAttractedSubNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutSubNestedInput
  }

  export type UserRewardTriggeredAuditEventUpsertWithoutSpe_aeInput = {
    update: XOR<UserRewardTriggeredAuditEventUpdateWithoutSpe_aeInput, UserRewardTriggeredAuditEventUncheckedUpdateWithoutSpe_aeInput>
    create: XOR<UserRewardTriggeredAuditEventCreateWithoutSpe_aeInput, UserRewardTriggeredAuditEventUncheckedCreateWithoutSpe_aeInput>
    where?: UserRewardTriggeredAuditEventWhereInput
  }

  export type UserRewardTriggeredAuditEventUpdateToOneWithWhereWithoutSpe_aeInput = {
    where?: UserRewardTriggeredAuditEventWhereInput
    data: XOR<UserRewardTriggeredAuditEventUpdateWithoutSpe_aeInput, UserRewardTriggeredAuditEventUncheckedUpdateWithoutSpe_aeInput>
  }

  export type UserRewardTriggeredAuditEventUpdateWithoutSpe_aeInput = {
    id?: StringFieldUpdateOperationsInput | string
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    rewardType?: EnumMonetaryRewardTypeFieldUpdateOperationsInput | $Enums.MonetaryRewardType
    rewardAmount?: FloatFieldUpdateOperationsInput | number
    prevTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    newTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    highestTierReached?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referalDetails?: ReferalDetailsUpdateOneRequiredWithoutUrt_aeNestedInput
  }

  export type UserRewardTriggeredAuditEventUncheckedUpdateWithoutSpe_aeInput = {
    id?: StringFieldUpdateOperationsInput | string
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    rewardType?: EnumMonetaryRewardTypeFieldUpdateOperationsInput | $Enums.MonetaryRewardType
    rewardAmount?: FloatFieldUpdateOperationsInput | number
    prevTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    newTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    highestTierReached?: BoolFieldUpdateOperationsInput | boolean
    referalDetails_attractedSubExternalId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutExtensionsSubmittedInput = {
    update: XOR<UserUpdateWithoutExtensionsSubmittedInput, UserUncheckedUpdateWithoutExtensionsSubmittedInput>
    create: XOR<UserCreateWithoutExtensionsSubmittedInput, UserUncheckedCreateWithoutExtensionsSubmittedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExtensionsSubmittedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExtensionsSubmittedInput, UserUncheckedUpdateWithoutExtensionsSubmittedInput>
  }

  export type UserUpdateWithoutExtensionsSubmittedInput = {
    login?: StringFieldUpdateOperationsInput | string
    pwd?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    totalPayableReward?: FloatFieldUpdateOperationsInput | number
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sub?: SubUpdateOneWithoutUserNestedInput
    attractedSubs?: ReferalDetailsUpdateManyWithoutAttractorNestedInput
    ur_ae?: UserRepaymentAuditEventUpdateManyWithoutUserNestedInput
    createdSubs?: SubUpdateManyWithoutCreatedByNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    repaymentsSubmitted?: UserRepaymentAuditEventUpdateManyWithoutCreatedByNestedInput
    modificationsSubmitted?: EntityUpdatedAuditEventUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutExtensionsSubmittedInput = {
    login?: StringFieldUpdateOperationsInput | string
    pwd?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subExternalId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPayableReward?: FloatFieldUpdateOperationsInput | number
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    attractedSubs?: ReferalDetailsUncheckedUpdateManyWithoutAttractorNestedInput
    ur_ae?: UserRepaymentAuditEventUncheckedUpdateManyWithoutUserNestedInput
    createdSubs?: SubUncheckedUpdateManyWithoutCreatedByNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    repaymentsSubmitted?: UserRepaymentAuditEventUncheckedUpdateManyWithoutCreatedByNestedInput
    modificationsSubmitted?: EntityUpdatedAuditEventUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type ReferalDetailsCreateWithoutUrt_aeInput = {
    effectiveAttractorTier: number
    attractedSub: SubCreateNestedOneWithoutReferalDetailsInput
    attractor: UserCreateNestedOneWithoutAttractedSubsInput
    spe_ae?: SubPackageExtendedAuditEventCreateNestedOneWithoutAttractedSubReferalDetailsInput
  }

  export type ReferalDetailsUncheckedCreateWithoutUrt_aeInput = {
    attractedSubExternalId: string
    attractorUserId: string
    effectiveAttractorTier: number
    spe_ae?: SubPackageExtendedAuditEventUncheckedCreateNestedOneWithoutAttractedSubReferalDetailsInput
  }

  export type ReferalDetailsCreateOrConnectWithoutUrt_aeInput = {
    where: ReferalDetailsWhereUniqueInput
    create: XOR<ReferalDetailsCreateWithoutUrt_aeInput, ReferalDetailsUncheckedCreateWithoutUrt_aeInput>
  }

  export type SubPackageExtendedAuditEventCreateWithoutUrt_aeInput = {
    id?: string
    prevEndDate: Date | string
    newEndDate: Date | string
    reason: $Enums.PackageExtensionReason
    createdAt: Date | string
    attractedSubReferalDetails?: ReferalDetailsCreateNestedOneWithoutSpe_aeInput
    payment: PaymentCreateNestedOneWithoutSpe_aeInput
    sub: SubCreateNestedOneWithoutPackageExtensionsInput
    createdBy: UserCreateNestedOneWithoutExtensionsSubmittedInput
  }

  export type SubPackageExtendedAuditEventUncheckedCreateWithoutUrt_aeInput = {
    id?: string
    prevEndDate: Date | string
    newEndDate: Date | string
    attractedSubExternalId?: string | null
    paymentId: string
    subExternalId: string
    reason: $Enums.PackageExtensionReason
    createdAt: Date | string
    createdByUserId: string
  }

  export type SubPackageExtendedAuditEventCreateOrConnectWithoutUrt_aeInput = {
    where: SubPackageExtendedAuditEventWhereUniqueInput
    create: XOR<SubPackageExtendedAuditEventCreateWithoutUrt_aeInput, SubPackageExtendedAuditEventUncheckedCreateWithoutUrt_aeInput>
  }

  export type ReferalDetailsUpsertWithoutUrt_aeInput = {
    update: XOR<ReferalDetailsUpdateWithoutUrt_aeInput, ReferalDetailsUncheckedUpdateWithoutUrt_aeInput>
    create: XOR<ReferalDetailsCreateWithoutUrt_aeInput, ReferalDetailsUncheckedCreateWithoutUrt_aeInput>
    where?: ReferalDetailsWhereInput
  }

  export type ReferalDetailsUpdateToOneWithWhereWithoutUrt_aeInput = {
    where?: ReferalDetailsWhereInput
    data: XOR<ReferalDetailsUpdateWithoutUrt_aeInput, ReferalDetailsUncheckedUpdateWithoutUrt_aeInput>
  }

  export type ReferalDetailsUpdateWithoutUrt_aeInput = {
    effectiveAttractorTier?: IntFieldUpdateOperationsInput | number
    attractedSub?: SubUpdateOneRequiredWithoutReferalDetailsNestedInput
    attractor?: UserUpdateOneRequiredWithoutAttractedSubsNestedInput
    spe_ae?: SubPackageExtendedAuditEventUpdateOneWithoutAttractedSubReferalDetailsNestedInput
  }

  export type ReferalDetailsUncheckedUpdateWithoutUrt_aeInput = {
    attractedSubExternalId?: StringFieldUpdateOperationsInput | string
    attractorUserId?: StringFieldUpdateOperationsInput | string
    effectiveAttractorTier?: IntFieldUpdateOperationsInput | number
    spe_ae?: SubPackageExtendedAuditEventUncheckedUpdateOneWithoutAttractedSubReferalDetailsNestedInput
  }

  export type SubPackageExtendedAuditEventUpsertWithoutUrt_aeInput = {
    update: XOR<SubPackageExtendedAuditEventUpdateWithoutUrt_aeInput, SubPackageExtendedAuditEventUncheckedUpdateWithoutUrt_aeInput>
    create: XOR<SubPackageExtendedAuditEventCreateWithoutUrt_aeInput, SubPackageExtendedAuditEventUncheckedCreateWithoutUrt_aeInput>
    where?: SubPackageExtendedAuditEventWhereInput
  }

  export type SubPackageExtendedAuditEventUpdateToOneWithWhereWithoutUrt_aeInput = {
    where?: SubPackageExtendedAuditEventWhereInput
    data: XOR<SubPackageExtendedAuditEventUpdateWithoutUrt_aeInput, SubPackageExtendedAuditEventUncheckedUpdateWithoutUrt_aeInput>
  }

  export type SubPackageExtendedAuditEventUpdateWithoutUrt_aeInput = {
    id?: StringFieldUpdateOperationsInput | string
    prevEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: EnumPackageExtensionReasonFieldUpdateOperationsInput | $Enums.PackageExtensionReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attractedSubReferalDetails?: ReferalDetailsUpdateOneWithoutSpe_aeNestedInput
    payment?: PaymentUpdateOneRequiredWithoutSpe_aeNestedInput
    sub?: SubUpdateOneRequiredWithoutPackageExtensionsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutExtensionsSubmittedNestedInput
  }

  export type SubPackageExtendedAuditEventUncheckedUpdateWithoutUrt_aeInput = {
    id?: StringFieldUpdateOperationsInput | string
    prevEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    attractedSubExternalId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: StringFieldUpdateOperationsInput | string
    subExternalId?: StringFieldUpdateOperationsInput | string
    reason?: EnumPackageExtensionReasonFieldUpdateOperationsInput | $Enums.PackageExtensionReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutUr_aeInput = {
    login: string
    pwd: string
    role: $Enums.Role
    totalPayableReward?: number
    customMonetaryRewardAmount?: number | null
    note?: string | null
    createdAt: Date | string
    sub?: SubCreateNestedOneWithoutUserInput
    attractedSubs?: ReferalDetailsCreateNestedManyWithoutAttractorInput
    createdSubs?: SubCreateNestedManyWithoutCreatedByInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    extensionsSubmitted?: SubPackageExtendedAuditEventCreateNestedManyWithoutCreatedByInput
    repaymentsSubmitted?: UserRepaymentAuditEventCreateNestedManyWithoutCreatedByInput
    modificationsSubmitted?: EntityUpdatedAuditEventCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutUr_aeInput = {
    login: string
    pwd: string
    role: $Enums.Role
    subExternalId?: string | null
    totalPayableReward?: number
    customMonetaryRewardAmount?: number | null
    note?: string | null
    createdAt: Date | string
    createdByUserId?: string | null
    attractedSubs?: ReferalDetailsUncheckedCreateNestedManyWithoutAttractorInput
    createdSubs?: SubUncheckedCreateNestedManyWithoutCreatedByInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    extensionsSubmitted?: SubPackageExtendedAuditEventUncheckedCreateNestedManyWithoutCreatedByInput
    repaymentsSubmitted?: UserRepaymentAuditEventUncheckedCreateNestedManyWithoutCreatedByInput
    modificationsSubmitted?: EntityUpdatedAuditEventUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutUr_aeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUr_aeInput, UserUncheckedCreateWithoutUr_aeInput>
  }

  export type UserCreateWithoutRepaymentsSubmittedInput = {
    login: string
    pwd: string
    role: $Enums.Role
    totalPayableReward?: number
    customMonetaryRewardAmount?: number | null
    note?: string | null
    createdAt: Date | string
    sub?: SubCreateNestedOneWithoutUserInput
    attractedSubs?: ReferalDetailsCreateNestedManyWithoutAttractorInput
    ur_ae?: UserRepaymentAuditEventCreateNestedManyWithoutUserInput
    createdSubs?: SubCreateNestedManyWithoutCreatedByInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    extensionsSubmitted?: SubPackageExtendedAuditEventCreateNestedManyWithoutCreatedByInput
    modificationsSubmitted?: EntityUpdatedAuditEventCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutRepaymentsSubmittedInput = {
    login: string
    pwd: string
    role: $Enums.Role
    subExternalId?: string | null
    totalPayableReward?: number
    customMonetaryRewardAmount?: number | null
    note?: string | null
    createdAt: Date | string
    createdByUserId?: string | null
    attractedSubs?: ReferalDetailsUncheckedCreateNestedManyWithoutAttractorInput
    ur_ae?: UserRepaymentAuditEventUncheckedCreateNestedManyWithoutUserInput
    createdSubs?: SubUncheckedCreateNestedManyWithoutCreatedByInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    extensionsSubmitted?: SubPackageExtendedAuditEventUncheckedCreateNestedManyWithoutCreatedByInput
    modificationsSubmitted?: EntityUpdatedAuditEventUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutRepaymentsSubmittedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRepaymentsSubmittedInput, UserUncheckedCreateWithoutRepaymentsSubmittedInput>
  }

  export type UserUpsertWithoutUr_aeInput = {
    update: XOR<UserUpdateWithoutUr_aeInput, UserUncheckedUpdateWithoutUr_aeInput>
    create: XOR<UserCreateWithoutUr_aeInput, UserUncheckedCreateWithoutUr_aeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUr_aeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUr_aeInput, UserUncheckedUpdateWithoutUr_aeInput>
  }

  export type UserUpdateWithoutUr_aeInput = {
    login?: StringFieldUpdateOperationsInput | string
    pwd?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    totalPayableReward?: FloatFieldUpdateOperationsInput | number
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sub?: SubUpdateOneWithoutUserNestedInput
    attractedSubs?: ReferalDetailsUpdateManyWithoutAttractorNestedInput
    createdSubs?: SubUpdateManyWithoutCreatedByNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    extensionsSubmitted?: SubPackageExtendedAuditEventUpdateManyWithoutCreatedByNestedInput
    repaymentsSubmitted?: UserRepaymentAuditEventUpdateManyWithoutCreatedByNestedInput
    modificationsSubmitted?: EntityUpdatedAuditEventUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutUr_aeInput = {
    login?: StringFieldUpdateOperationsInput | string
    pwd?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subExternalId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPayableReward?: FloatFieldUpdateOperationsInput | number
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    attractedSubs?: ReferalDetailsUncheckedUpdateManyWithoutAttractorNestedInput
    createdSubs?: SubUncheckedUpdateManyWithoutCreatedByNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    extensionsSubmitted?: SubPackageExtendedAuditEventUncheckedUpdateManyWithoutCreatedByNestedInput
    repaymentsSubmitted?: UserRepaymentAuditEventUncheckedUpdateManyWithoutCreatedByNestedInput
    modificationsSubmitted?: EntityUpdatedAuditEventUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUpsertWithoutRepaymentsSubmittedInput = {
    update: XOR<UserUpdateWithoutRepaymentsSubmittedInput, UserUncheckedUpdateWithoutRepaymentsSubmittedInput>
    create: XOR<UserCreateWithoutRepaymentsSubmittedInput, UserUncheckedCreateWithoutRepaymentsSubmittedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRepaymentsSubmittedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRepaymentsSubmittedInput, UserUncheckedUpdateWithoutRepaymentsSubmittedInput>
  }

  export type UserUpdateWithoutRepaymentsSubmittedInput = {
    login?: StringFieldUpdateOperationsInput | string
    pwd?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    totalPayableReward?: FloatFieldUpdateOperationsInput | number
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sub?: SubUpdateOneWithoutUserNestedInput
    attractedSubs?: ReferalDetailsUpdateManyWithoutAttractorNestedInput
    ur_ae?: UserRepaymentAuditEventUpdateManyWithoutUserNestedInput
    createdSubs?: SubUpdateManyWithoutCreatedByNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    extensionsSubmitted?: SubPackageExtendedAuditEventUpdateManyWithoutCreatedByNestedInput
    modificationsSubmitted?: EntityUpdatedAuditEventUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutRepaymentsSubmittedInput = {
    login?: StringFieldUpdateOperationsInput | string
    pwd?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subExternalId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPayableReward?: FloatFieldUpdateOperationsInput | number
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    attractedSubs?: ReferalDetailsUncheckedUpdateManyWithoutAttractorNestedInput
    ur_ae?: UserRepaymentAuditEventUncheckedUpdateManyWithoutUserNestedInput
    createdSubs?: SubUncheckedUpdateManyWithoutCreatedByNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    extensionsSubmitted?: SubPackageExtendedAuditEventUncheckedUpdateManyWithoutCreatedByNestedInput
    modificationsSubmitted?: EntityUpdatedAuditEventUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutModificationsSubmittedInput = {
    login: string
    pwd: string
    role: $Enums.Role
    totalPayableReward?: number
    customMonetaryRewardAmount?: number | null
    note?: string | null
    createdAt: Date | string
    sub?: SubCreateNestedOneWithoutUserInput
    attractedSubs?: ReferalDetailsCreateNestedManyWithoutAttractorInput
    ur_ae?: UserRepaymentAuditEventCreateNestedManyWithoutUserInput
    createdSubs?: SubCreateNestedManyWithoutCreatedByInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    extensionsSubmitted?: SubPackageExtendedAuditEventCreateNestedManyWithoutCreatedByInput
    repaymentsSubmitted?: UserRepaymentAuditEventCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutModificationsSubmittedInput = {
    login: string
    pwd: string
    role: $Enums.Role
    subExternalId?: string | null
    totalPayableReward?: number
    customMonetaryRewardAmount?: number | null
    note?: string | null
    createdAt: Date | string
    createdByUserId?: string | null
    attractedSubs?: ReferalDetailsUncheckedCreateNestedManyWithoutAttractorInput
    ur_ae?: UserRepaymentAuditEventUncheckedCreateNestedManyWithoutUserInput
    createdSubs?: SubUncheckedCreateNestedManyWithoutCreatedByInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    extensionsSubmitted?: SubPackageExtendedAuditEventUncheckedCreateNestedManyWithoutCreatedByInput
    repaymentsSubmitted?: UserRepaymentAuditEventUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutModificationsSubmittedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModificationsSubmittedInput, UserUncheckedCreateWithoutModificationsSubmittedInput>
  }

  export type UserUpsertWithoutModificationsSubmittedInput = {
    update: XOR<UserUpdateWithoutModificationsSubmittedInput, UserUncheckedUpdateWithoutModificationsSubmittedInput>
    create: XOR<UserCreateWithoutModificationsSubmittedInput, UserUncheckedCreateWithoutModificationsSubmittedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutModificationsSubmittedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutModificationsSubmittedInput, UserUncheckedUpdateWithoutModificationsSubmittedInput>
  }

  export type UserUpdateWithoutModificationsSubmittedInput = {
    login?: StringFieldUpdateOperationsInput | string
    pwd?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    totalPayableReward?: FloatFieldUpdateOperationsInput | number
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sub?: SubUpdateOneWithoutUserNestedInput
    attractedSubs?: ReferalDetailsUpdateManyWithoutAttractorNestedInput
    ur_ae?: UserRepaymentAuditEventUpdateManyWithoutUserNestedInput
    createdSubs?: SubUpdateManyWithoutCreatedByNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    extensionsSubmitted?: SubPackageExtendedAuditEventUpdateManyWithoutCreatedByNestedInput
    repaymentsSubmitted?: UserRepaymentAuditEventUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutModificationsSubmittedInput = {
    login?: StringFieldUpdateOperationsInput | string
    pwd?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subExternalId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPayableReward?: FloatFieldUpdateOperationsInput | number
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    attractedSubs?: ReferalDetailsUncheckedUpdateManyWithoutAttractorNestedInput
    ur_ae?: UserRepaymentAuditEventUncheckedUpdateManyWithoutUserNestedInput
    createdSubs?: SubUncheckedUpdateManyWithoutCreatedByNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    extensionsSubmitted?: SubPackageExtendedAuditEventUncheckedUpdateManyWithoutCreatedByNestedInput
    repaymentsSubmitted?: UserRepaymentAuditEventUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type ReferalDetailsCreateManyAttractorInput = {
    attractedSubExternalId: string
    effectiveAttractorTier: number
  }

  export type UserRepaymentAuditEventCreateManyUserInput = {
    id?: string
    repaymentAmount: number
    prevTotalPayableReward: number
    newTotalPayableReward: number
    createdAt: Date | string
    createdByUserId: string
  }

  export type SubCreateManyCreatedByInput = {
    externalId: string
    login?: string | null
    pwd?: string | null
    note?: string | null
    m3uPlaylist?: string | null
    epg?: string | null
    publicKey?: string | null
    media?: string | null
    pkgType?: $Enums.PackageType | null
    startDate: Date | string
    endDate: Date | string
    region?: $Enums.Region | null
    createdAt: Date | string
  }

  export type UserCreateManyCreatedByInput = {
    login: string
    pwd: string
    role: $Enums.Role
    subExternalId?: string | null
    totalPayableReward?: number
    customMonetaryRewardAmount?: number | null
    note?: string | null
    createdAt: Date | string
  }

  export type SubPackageExtendedAuditEventCreateManyCreatedByInput = {
    id?: string
    prevEndDate: Date | string
    newEndDate: Date | string
    attractedSubExternalId?: string | null
    paymentId: string
    subExternalId: string
    reason: $Enums.PackageExtensionReason
    createdAt: Date | string
  }

  export type UserRepaymentAuditEventCreateManyCreatedByInput = {
    id?: string
    userId: string
    repaymentAmount: number
    prevTotalPayableReward: number
    newTotalPayableReward: number
    createdAt: Date | string
  }

  export type EntityUpdatedAuditEventCreateManyCreatedByInput = {
    id?: string
    entityType: $Enums.EntityTypes
    entityId: string
    reason?: string | null
    diff: string
    createdAt: Date | string
  }

  export type ReferalDetailsUpdateWithoutAttractorInput = {
    effectiveAttractorTier?: IntFieldUpdateOperationsInput | number
    attractedSub?: SubUpdateOneRequiredWithoutReferalDetailsNestedInput
    spe_ae?: SubPackageExtendedAuditEventUpdateOneWithoutAttractedSubReferalDetailsNestedInput
    urt_ae?: UserRewardTriggeredAuditEventUpdateManyWithoutReferalDetailsNestedInput
  }

  export type ReferalDetailsUncheckedUpdateWithoutAttractorInput = {
    attractedSubExternalId?: StringFieldUpdateOperationsInput | string
    effectiveAttractorTier?: IntFieldUpdateOperationsInput | number
    spe_ae?: SubPackageExtendedAuditEventUncheckedUpdateOneWithoutAttractedSubReferalDetailsNestedInput
    urt_ae?: UserRewardTriggeredAuditEventUncheckedUpdateManyWithoutReferalDetailsNestedInput
  }

  export type ReferalDetailsUncheckedUpdateManyWithoutAttractorInput = {
    attractedSubExternalId?: StringFieldUpdateOperationsInput | string
    effectiveAttractorTier?: IntFieldUpdateOperationsInput | number
  }

  export type UserRepaymentAuditEventUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    repaymentAmount?: FloatFieldUpdateOperationsInput | number
    prevTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    newTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutRepaymentsSubmittedNestedInput
  }

  export type UserRepaymentAuditEventUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    repaymentAmount?: FloatFieldUpdateOperationsInput | number
    prevTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    newTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRepaymentAuditEventUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    repaymentAmount?: FloatFieldUpdateOperationsInput | number
    prevTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    newTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: StringFieldUpdateOperationsInput | string
  }

  export type SubUpdateWithoutCreatedByInput = {
    externalId?: StringFieldUpdateOperationsInput | string
    login?: NullableStringFieldUpdateOperationsInput | string | null
    pwd?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    m3uPlaylist?: NullableStringFieldUpdateOperationsInput | string | null
    epg?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    pkgType?: NullableEnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSubNestedInput
    referalDetails?: ReferalDetailsUpdateOneWithoutAttractedSubNestedInput
    payments?: PaymentUpdateManyWithoutSubNestedInput
    packageExtensions?: SubPackageExtendedAuditEventUpdateManyWithoutSubNestedInput
  }

  export type SubUncheckedUpdateWithoutCreatedByInput = {
    externalId?: StringFieldUpdateOperationsInput | string
    login?: NullableStringFieldUpdateOperationsInput | string | null
    pwd?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    m3uPlaylist?: NullableStringFieldUpdateOperationsInput | string | null
    epg?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    pkgType?: NullableEnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutSubNestedInput
    referalDetails?: ReferalDetailsUncheckedUpdateOneWithoutAttractedSubNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutSubNestedInput
    packageExtensions?: SubPackageExtendedAuditEventUncheckedUpdateManyWithoutSubNestedInput
  }

  export type SubUncheckedUpdateManyWithoutCreatedByInput = {
    externalId?: StringFieldUpdateOperationsInput | string
    login?: NullableStringFieldUpdateOperationsInput | string | null
    pwd?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    m3uPlaylist?: NullableStringFieldUpdateOperationsInput | string | null
    epg?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    pkgType?: NullableEnumPackageTypeFieldUpdateOperationsInput | $Enums.PackageType | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutCreatedByInput = {
    login?: StringFieldUpdateOperationsInput | string
    pwd?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    totalPayableReward?: FloatFieldUpdateOperationsInput | number
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sub?: SubUpdateOneWithoutUserNestedInput
    attractedSubs?: ReferalDetailsUpdateManyWithoutAttractorNestedInput
    ur_ae?: UserRepaymentAuditEventUpdateManyWithoutUserNestedInput
    createdSubs?: SubUpdateManyWithoutCreatedByNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    extensionsSubmitted?: SubPackageExtendedAuditEventUpdateManyWithoutCreatedByNestedInput
    repaymentsSubmitted?: UserRepaymentAuditEventUpdateManyWithoutCreatedByNestedInput
    modificationsSubmitted?: EntityUpdatedAuditEventUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedByInput = {
    login?: StringFieldUpdateOperationsInput | string
    pwd?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subExternalId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPayableReward?: FloatFieldUpdateOperationsInput | number
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attractedSubs?: ReferalDetailsUncheckedUpdateManyWithoutAttractorNestedInput
    ur_ae?: UserRepaymentAuditEventUncheckedUpdateManyWithoutUserNestedInput
    createdSubs?: SubUncheckedUpdateManyWithoutCreatedByNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    extensionsSubmitted?: SubPackageExtendedAuditEventUncheckedUpdateManyWithoutCreatedByNestedInput
    repaymentsSubmitted?: UserRepaymentAuditEventUncheckedUpdateManyWithoutCreatedByNestedInput
    modificationsSubmitted?: EntityUpdatedAuditEventUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCreatedByInput = {
    login?: StringFieldUpdateOperationsInput | string
    pwd?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    subExternalId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPayableReward?: FloatFieldUpdateOperationsInput | number
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubPackageExtendedAuditEventUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    prevEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: EnumPackageExtensionReasonFieldUpdateOperationsInput | $Enums.PackageExtensionReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attractedSubReferalDetails?: ReferalDetailsUpdateOneWithoutSpe_aeNestedInput
    payment?: PaymentUpdateOneRequiredWithoutSpe_aeNestedInput
    sub?: SubUpdateOneRequiredWithoutPackageExtensionsNestedInput
    urt_ae?: UserRewardTriggeredAuditEventUpdateOneWithoutSpe_aeNestedInput
  }

  export type SubPackageExtendedAuditEventUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    prevEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    attractedSubExternalId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: StringFieldUpdateOperationsInput | string
    subExternalId?: StringFieldUpdateOperationsInput | string
    reason?: EnumPackageExtensionReasonFieldUpdateOperationsInput | $Enums.PackageExtensionReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    urt_ae?: UserRewardTriggeredAuditEventUncheckedUpdateOneWithoutSpe_aeNestedInput
  }

  export type SubPackageExtendedAuditEventUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    prevEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    attractedSubExternalId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: StringFieldUpdateOperationsInput | string
    subExternalId?: StringFieldUpdateOperationsInput | string
    reason?: EnumPackageExtensionReasonFieldUpdateOperationsInput | $Enums.PackageExtensionReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRepaymentAuditEventUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    repaymentAmount?: FloatFieldUpdateOperationsInput | number
    prevTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    newTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUr_aeNestedInput
  }

  export type UserRepaymentAuditEventUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    repaymentAmount?: FloatFieldUpdateOperationsInput | number
    prevTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    newTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRepaymentAuditEventUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    repaymentAmount?: FloatFieldUpdateOperationsInput | number
    prevTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    newTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityUpdatedAuditEventUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypesFieldUpdateOperationsInput | $Enums.EntityTypes
    entityId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    diff?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityUpdatedAuditEventUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypesFieldUpdateOperationsInput | $Enums.EntityTypes
    entityId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    diff?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityUpdatedAuditEventUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypesFieldUpdateOperationsInput | $Enums.EntityTypes
    entityId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    diff?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManySubInput = {
    id?: string
    currency: $Enums.Currency
    amount: number
    date: Date | string
    createdAt: Date | string
  }

  export type SubPackageExtendedAuditEventCreateManySubInput = {
    id?: string
    prevEndDate: Date | string
    newEndDate: Date | string
    attractedSubExternalId?: string | null
    paymentId: string
    reason: $Enums.PackageExtensionReason
    createdAt: Date | string
    createdByUserId: string
  }

  export type PaymentUpdateWithoutSubInput = {
    id?: StringFieldUpdateOperationsInput | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spe_ae?: SubPackageExtendedAuditEventUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutSubInput = {
    id?: StringFieldUpdateOperationsInput | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spe_ae?: SubPackageExtendedAuditEventUncheckedUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateManyWithoutSubInput = {
    id?: StringFieldUpdateOperationsInput | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubPackageExtendedAuditEventUpdateWithoutSubInput = {
    id?: StringFieldUpdateOperationsInput | string
    prevEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: EnumPackageExtensionReasonFieldUpdateOperationsInput | $Enums.PackageExtensionReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attractedSubReferalDetails?: ReferalDetailsUpdateOneWithoutSpe_aeNestedInput
    payment?: PaymentUpdateOneRequiredWithoutSpe_aeNestedInput
    urt_ae?: UserRewardTriggeredAuditEventUpdateOneWithoutSpe_aeNestedInput
    createdBy?: UserUpdateOneRequiredWithoutExtensionsSubmittedNestedInput
  }

  export type SubPackageExtendedAuditEventUncheckedUpdateWithoutSubInput = {
    id?: StringFieldUpdateOperationsInput | string
    prevEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    attractedSubExternalId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: StringFieldUpdateOperationsInput | string
    reason?: EnumPackageExtensionReasonFieldUpdateOperationsInput | $Enums.PackageExtensionReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: StringFieldUpdateOperationsInput | string
    urt_ae?: UserRewardTriggeredAuditEventUncheckedUpdateOneWithoutSpe_aeNestedInput
  }

  export type SubPackageExtendedAuditEventUncheckedUpdateManyWithoutSubInput = {
    id?: StringFieldUpdateOperationsInput | string
    prevEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    attractedSubExternalId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: StringFieldUpdateOperationsInput | string
    reason?: EnumPackageExtensionReasonFieldUpdateOperationsInput | $Enums.PackageExtensionReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRewardTriggeredAuditEventCreateManyReferalDetailsInput = {
    id?: string
    customMonetaryRewardAmount?: number | null
    rewardType: $Enums.MonetaryRewardType
    rewardAmount: number
    prevTotalPayableReward: number
    newTotalPayableReward: number
    highestTierReached?: boolean
    spe_ae_id?: string | null
    createdAt: Date | string
  }

  export type UserRewardTriggeredAuditEventUpdateWithoutReferalDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    rewardType?: EnumMonetaryRewardTypeFieldUpdateOperationsInput | $Enums.MonetaryRewardType
    rewardAmount?: FloatFieldUpdateOperationsInput | number
    prevTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    newTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    highestTierReached?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spe_ae?: SubPackageExtendedAuditEventUpdateOneWithoutUrt_aeNestedInput
  }

  export type UserRewardTriggeredAuditEventUncheckedUpdateWithoutReferalDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    rewardType?: EnumMonetaryRewardTypeFieldUpdateOperationsInput | $Enums.MonetaryRewardType
    rewardAmount?: FloatFieldUpdateOperationsInput | number
    prevTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    newTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    highestTierReached?: BoolFieldUpdateOperationsInput | boolean
    spe_ae_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRewardTriggeredAuditEventUncheckedUpdateManyWithoutReferalDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customMonetaryRewardAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    rewardType?: EnumMonetaryRewardTypeFieldUpdateOperationsInput | $Enums.MonetaryRewardType
    rewardAmount?: FloatFieldUpdateOperationsInput | number
    prevTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    newTotalPayableReward?: FloatFieldUpdateOperationsInput | number
    highestTierReached?: BoolFieldUpdateOperationsInput | boolean
    spe_ae_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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