
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
 * Model CmsPage
 * 
 */
export type CmsPage = $Result.DefaultSelection<Prisma.$CmsPagePayload>
/**
 * Model CmsSection
 * 
 */
export type CmsSection = $Result.DefaultSelection<Prisma.$CmsSectionPayload>
/**
 * Model CmsBanner
 * 
 */
export type CmsBanner = $Result.DefaultSelection<Prisma.$CmsBannerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CMSSectionType: {
  HERO: 'HERO',
  TEXT: 'TEXT',
  CTA: 'CTA',
  FAQ: 'FAQ',
  TESTIMONIALS: 'TESTIMONIALS',
  STATS: 'STATS'
};

export type CMSSectionType = (typeof CMSSectionType)[keyof typeof CMSSectionType]

}

export type CMSSectionType = $Enums.CMSSectionType

export const CMSSectionType: typeof $Enums.CMSSectionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more CmsPages
 * const cmsPages = await prisma.cmsPage.findMany()
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more CmsPages
   * const cmsPages = await prisma.cmsPage.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cmsPage`: Exposes CRUD operations for the **CmsPage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsPages
    * const cmsPages = await prisma.cmsPage.findMany()
    * ```
    */
  get cmsPage(): Prisma.CmsPageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cmsSection`: Exposes CRUD operations for the **CmsSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsSections
    * const cmsSections = await prisma.cmsSection.findMany()
    * ```
    */
  get cmsSection(): Prisma.CmsSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cmsBanner`: Exposes CRUD operations for the **CmsBanner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsBanners
    * const cmsBanners = await prisma.cmsBanner.findMany()
    * ```
    */
  get cmsBanner(): Prisma.CmsBannerDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
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
    CmsPage: 'CmsPage',
    CmsSection: 'CmsSection',
    CmsBanner: 'CmsBanner'
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
      modelProps: "cmsPage" | "cmsSection" | "cmsBanner"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CmsPage: {
        payload: Prisma.$CmsPagePayload<ExtArgs>
        fields: Prisma.CmsPageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsPageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsPageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload>
          }
          findFirst: {
            args: Prisma.CmsPageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsPageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload>
          }
          findMany: {
            args: Prisma.CmsPageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload>[]
          }
          create: {
            args: Prisma.CmsPageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload>
          }
          createMany: {
            args: Prisma.CmsPageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsPageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload>[]
          }
          delete: {
            args: Prisma.CmsPageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload>
          }
          update: {
            args: Prisma.CmsPageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload>
          }
          deleteMany: {
            args: Prisma.CmsPageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsPageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsPageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload>[]
          }
          upsert: {
            args: Prisma.CmsPageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload>
          }
          aggregate: {
            args: Prisma.CmsPageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsPage>
          }
          groupBy: {
            args: Prisma.CmsPageGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsPageGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsPageCountArgs<ExtArgs>
            result: $Utils.Optional<CmsPageCountAggregateOutputType> | number
          }
        }
      }
      CmsSection: {
        payload: Prisma.$CmsSectionPayload<ExtArgs>
        fields: Prisma.CmsSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSectionPayload>
          }
          findFirst: {
            args: Prisma.CmsSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSectionPayload>
          }
          findMany: {
            args: Prisma.CmsSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSectionPayload>[]
          }
          create: {
            args: Prisma.CmsSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSectionPayload>
          }
          createMany: {
            args: Prisma.CmsSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSectionPayload>[]
          }
          delete: {
            args: Prisma.CmsSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSectionPayload>
          }
          update: {
            args: Prisma.CmsSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSectionPayload>
          }
          deleteMany: {
            args: Prisma.CmsSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSectionPayload>[]
          }
          upsert: {
            args: Prisma.CmsSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSectionPayload>
          }
          aggregate: {
            args: Prisma.CmsSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsSection>
          }
          groupBy: {
            args: Prisma.CmsSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsSectionCountArgs<ExtArgs>
            result: $Utils.Optional<CmsSectionCountAggregateOutputType> | number
          }
        }
      }
      CmsBanner: {
        payload: Prisma.$CmsBannerPayload<ExtArgs>
        fields: Prisma.CmsBannerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsBannerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBannerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsBannerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBannerPayload>
          }
          findFirst: {
            args: Prisma.CmsBannerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBannerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsBannerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBannerPayload>
          }
          findMany: {
            args: Prisma.CmsBannerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBannerPayload>[]
          }
          create: {
            args: Prisma.CmsBannerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBannerPayload>
          }
          createMany: {
            args: Prisma.CmsBannerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsBannerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBannerPayload>[]
          }
          delete: {
            args: Prisma.CmsBannerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBannerPayload>
          }
          update: {
            args: Prisma.CmsBannerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBannerPayload>
          }
          deleteMany: {
            args: Prisma.CmsBannerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsBannerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsBannerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBannerPayload>[]
          }
          upsert: {
            args: Prisma.CmsBannerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBannerPayload>
          }
          aggregate: {
            args: Prisma.CmsBannerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsBanner>
          }
          groupBy: {
            args: Prisma.CmsBannerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsBannerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsBannerCountArgs<ExtArgs>
            result: $Utils.Optional<CmsBannerCountAggregateOutputType> | number
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
    cmsPage?: CmsPageOmit
    cmsSection?: CmsSectionOmit
    cmsBanner?: CmsBannerOmit
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
   * Count Type CmsPageCountOutputType
   */

  export type CmsPageCountOutputType = {
    sections: number
  }

  export type CmsPageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | CmsPageCountOutputTypeCountSectionsArgs
  }

  // Custom InputTypes
  /**
   * CmsPageCountOutputType without action
   */
  export type CmsPageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPageCountOutputType
     */
    select?: CmsPageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CmsPageCountOutputType without action
   */
  export type CmsPageCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsSectionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CmsPage
   */

  export type AggregateCmsPage = {
    _count: CmsPageCountAggregateOutputType | null
    _min: CmsPageMinAggregateOutputType | null
    _max: CmsPageMaxAggregateOutputType | null
  }

  export type CmsPageMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    metaTitle: string | null
    metaDescription: string | null
    isPublished: boolean | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsPageMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    metaTitle: string | null
    metaDescription: string | null
    isPublished: boolean | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsPageCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    metaTitle: number
    metaDescription: number
    isPublished: number
    createdBy: number
    updatedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CmsPageMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    metaTitle?: true
    metaDescription?: true
    isPublished?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsPageMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    metaTitle?: true
    metaDescription?: true
    isPublished?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsPageCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    metaTitle?: true
    metaDescription?: true
    isPublished?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CmsPageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsPage to aggregate.
     */
    where?: CmsPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsPages to fetch.
     */
    orderBy?: CmsPageOrderByWithRelationInput | CmsPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsPages
    **/
    _count?: true | CmsPageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsPageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsPageMaxAggregateInputType
  }

  export type GetCmsPageAggregateType<T extends CmsPageAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsPage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsPage[P]>
      : GetScalarType<T[P], AggregateCmsPage[P]>
  }




  export type CmsPageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsPageWhereInput
    orderBy?: CmsPageOrderByWithAggregationInput | CmsPageOrderByWithAggregationInput[]
    by: CmsPageScalarFieldEnum[] | CmsPageScalarFieldEnum
    having?: CmsPageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsPageCountAggregateInputType | true
    _min?: CmsPageMinAggregateInputType
    _max?: CmsPageMaxAggregateInputType
  }

  export type CmsPageGroupByOutputType = {
    id: string
    slug: string
    title: string
    metaTitle: string | null
    metaDescription: string | null
    isPublished: boolean
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: CmsPageCountAggregateOutputType | null
    _min: CmsPageMinAggregateOutputType | null
    _max: CmsPageMaxAggregateOutputType | null
  }

  type GetCmsPageGroupByPayload<T extends CmsPageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsPageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsPageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsPageGroupByOutputType[P]>
            : GetScalarType<T[P], CmsPageGroupByOutputType[P]>
        }
      >
    >


  export type CmsPageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    isPublished?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sections?: boolean | CmsPage$sectionsArgs<ExtArgs>
    _count?: boolean | CmsPageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsPage"]>

  export type CmsPageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    isPublished?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsPage"]>

  export type CmsPageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    isPublished?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsPage"]>

  export type CmsPageSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    isPublished?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CmsPageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "metaTitle" | "metaDescription" | "isPublished" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["cmsPage"]>
  export type CmsPageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | CmsPage$sectionsArgs<ExtArgs>
    _count?: boolean | CmsPageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CmsPageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CmsPageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CmsPagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsPage"
    objects: {
      sections: Prisma.$CmsSectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      metaTitle: string | null
      metaDescription: string | null
      isPublished: boolean
      createdBy: string | null
      updatedBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cmsPage"]>
    composites: {}
  }

  type CmsPageGetPayload<S extends boolean | null | undefined | CmsPageDefaultArgs> = $Result.GetResult<Prisma.$CmsPagePayload, S>

  type CmsPageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsPageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsPageCountAggregateInputType | true
    }

  export interface CmsPageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsPage'], meta: { name: 'CmsPage' } }
    /**
     * Find zero or one CmsPage that matches the filter.
     * @param {CmsPageFindUniqueArgs} args - Arguments to find a CmsPage
     * @example
     * // Get one CmsPage
     * const cmsPage = await prisma.cmsPage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsPageFindUniqueArgs>(args: SelectSubset<T, CmsPageFindUniqueArgs<ExtArgs>>): Prisma__CmsPageClient<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsPage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsPageFindUniqueOrThrowArgs} args - Arguments to find a CmsPage
     * @example
     * // Get one CmsPage
     * const cmsPage = await prisma.cmsPage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsPageFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsPageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsPageClient<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsPage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPageFindFirstArgs} args - Arguments to find a CmsPage
     * @example
     * // Get one CmsPage
     * const cmsPage = await prisma.cmsPage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsPageFindFirstArgs>(args?: SelectSubset<T, CmsPageFindFirstArgs<ExtArgs>>): Prisma__CmsPageClient<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsPage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPageFindFirstOrThrowArgs} args - Arguments to find a CmsPage
     * @example
     * // Get one CmsPage
     * const cmsPage = await prisma.cmsPage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsPageFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsPageFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsPageClient<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsPages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsPages
     * const cmsPages = await prisma.cmsPage.findMany()
     * 
     * // Get first 10 CmsPages
     * const cmsPages = await prisma.cmsPage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsPageWithIdOnly = await prisma.cmsPage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsPageFindManyArgs>(args?: SelectSubset<T, CmsPageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsPage.
     * @param {CmsPageCreateArgs} args - Arguments to create a CmsPage.
     * @example
     * // Create one CmsPage
     * const CmsPage = await prisma.cmsPage.create({
     *   data: {
     *     // ... data to create a CmsPage
     *   }
     * })
     * 
     */
    create<T extends CmsPageCreateArgs>(args: SelectSubset<T, CmsPageCreateArgs<ExtArgs>>): Prisma__CmsPageClient<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsPages.
     * @param {CmsPageCreateManyArgs} args - Arguments to create many CmsPages.
     * @example
     * // Create many CmsPages
     * const cmsPage = await prisma.cmsPage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsPageCreateManyArgs>(args?: SelectSubset<T, CmsPageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsPages and returns the data saved in the database.
     * @param {CmsPageCreateManyAndReturnArgs} args - Arguments to create many CmsPages.
     * @example
     * // Create many CmsPages
     * const cmsPage = await prisma.cmsPage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsPages and only return the `id`
     * const cmsPageWithIdOnly = await prisma.cmsPage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsPageCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsPageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsPage.
     * @param {CmsPageDeleteArgs} args - Arguments to delete one CmsPage.
     * @example
     * // Delete one CmsPage
     * const CmsPage = await prisma.cmsPage.delete({
     *   where: {
     *     // ... filter to delete one CmsPage
     *   }
     * })
     * 
     */
    delete<T extends CmsPageDeleteArgs>(args: SelectSubset<T, CmsPageDeleteArgs<ExtArgs>>): Prisma__CmsPageClient<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsPage.
     * @param {CmsPageUpdateArgs} args - Arguments to update one CmsPage.
     * @example
     * // Update one CmsPage
     * const cmsPage = await prisma.cmsPage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsPageUpdateArgs>(args: SelectSubset<T, CmsPageUpdateArgs<ExtArgs>>): Prisma__CmsPageClient<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsPages.
     * @param {CmsPageDeleteManyArgs} args - Arguments to filter CmsPages to delete.
     * @example
     * // Delete a few CmsPages
     * const { count } = await prisma.cmsPage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsPageDeleteManyArgs>(args?: SelectSubset<T, CmsPageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsPages
     * const cmsPage = await prisma.cmsPage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsPageUpdateManyArgs>(args: SelectSubset<T, CmsPageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsPages and returns the data updated in the database.
     * @param {CmsPageUpdateManyAndReturnArgs} args - Arguments to update many CmsPages.
     * @example
     * // Update many CmsPages
     * const cmsPage = await prisma.cmsPage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsPages and only return the `id`
     * const cmsPageWithIdOnly = await prisma.cmsPage.updateManyAndReturn({
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
    updateManyAndReturn<T extends CmsPageUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsPageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsPage.
     * @param {CmsPageUpsertArgs} args - Arguments to update or create a CmsPage.
     * @example
     * // Update or create a CmsPage
     * const cmsPage = await prisma.cmsPage.upsert({
     *   create: {
     *     // ... data to create a CmsPage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsPage we want to update
     *   }
     * })
     */
    upsert<T extends CmsPageUpsertArgs>(args: SelectSubset<T, CmsPageUpsertArgs<ExtArgs>>): Prisma__CmsPageClient<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPageCountArgs} args - Arguments to filter CmsPages to count.
     * @example
     * // Count the number of CmsPages
     * const count = await prisma.cmsPage.count({
     *   where: {
     *     // ... the filter for the CmsPages we want to count
     *   }
     * })
    **/
    count<T extends CmsPageCountArgs>(
      args?: Subset<T, CmsPageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsPageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CmsPageAggregateArgs>(args: Subset<T, CmsPageAggregateArgs>): Prisma.PrismaPromise<GetCmsPageAggregateType<T>>

    /**
     * Group by CmsPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPageGroupByArgs} args - Group by arguments.
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
      T extends CmsPageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsPageGroupByArgs['orderBy'] }
        : { orderBy?: CmsPageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CmsPageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsPage model
   */
  readonly fields: CmsPageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsPage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsPageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sections<T extends CmsPage$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, CmsPage$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CmsPage model
   */
  interface CmsPageFieldRefs {
    readonly id: FieldRef<"CmsPage", 'String'>
    readonly slug: FieldRef<"CmsPage", 'String'>
    readonly title: FieldRef<"CmsPage", 'String'>
    readonly metaTitle: FieldRef<"CmsPage", 'String'>
    readonly metaDescription: FieldRef<"CmsPage", 'String'>
    readonly isPublished: FieldRef<"CmsPage", 'Boolean'>
    readonly createdBy: FieldRef<"CmsPage", 'String'>
    readonly updatedBy: FieldRef<"CmsPage", 'String'>
    readonly createdAt: FieldRef<"CmsPage", 'DateTime'>
    readonly updatedAt: FieldRef<"CmsPage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CmsPage findUnique
   */
  export type CmsPageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageInclude<ExtArgs> | null
    /**
     * Filter, which CmsPage to fetch.
     */
    where: CmsPageWhereUniqueInput
  }

  /**
   * CmsPage findUniqueOrThrow
   */
  export type CmsPageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageInclude<ExtArgs> | null
    /**
     * Filter, which CmsPage to fetch.
     */
    where: CmsPageWhereUniqueInput
  }

  /**
   * CmsPage findFirst
   */
  export type CmsPageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageInclude<ExtArgs> | null
    /**
     * Filter, which CmsPage to fetch.
     */
    where?: CmsPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsPages to fetch.
     */
    orderBy?: CmsPageOrderByWithRelationInput | CmsPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsPages.
     */
    cursor?: CmsPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsPages.
     */
    distinct?: CmsPageScalarFieldEnum | CmsPageScalarFieldEnum[]
  }

  /**
   * CmsPage findFirstOrThrow
   */
  export type CmsPageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageInclude<ExtArgs> | null
    /**
     * Filter, which CmsPage to fetch.
     */
    where?: CmsPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsPages to fetch.
     */
    orderBy?: CmsPageOrderByWithRelationInput | CmsPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsPages.
     */
    cursor?: CmsPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsPages.
     */
    distinct?: CmsPageScalarFieldEnum | CmsPageScalarFieldEnum[]
  }

  /**
   * CmsPage findMany
   */
  export type CmsPageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageInclude<ExtArgs> | null
    /**
     * Filter, which CmsPages to fetch.
     */
    where?: CmsPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsPages to fetch.
     */
    orderBy?: CmsPageOrderByWithRelationInput | CmsPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsPages.
     */
    cursor?: CmsPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsPages.
     */
    distinct?: CmsPageScalarFieldEnum | CmsPageScalarFieldEnum[]
  }

  /**
   * CmsPage create
   */
  export type CmsPageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageInclude<ExtArgs> | null
    /**
     * The data needed to create a CmsPage.
     */
    data: XOR<CmsPageCreateInput, CmsPageUncheckedCreateInput>
  }

  /**
   * CmsPage createMany
   */
  export type CmsPageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsPages.
     */
    data: CmsPageCreateManyInput | CmsPageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsPage createManyAndReturn
   */
  export type CmsPageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * The data used to create many CmsPages.
     */
    data: CmsPageCreateManyInput | CmsPageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsPage update
   */
  export type CmsPageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageInclude<ExtArgs> | null
    /**
     * The data needed to update a CmsPage.
     */
    data: XOR<CmsPageUpdateInput, CmsPageUncheckedUpdateInput>
    /**
     * Choose, which CmsPage to update.
     */
    where: CmsPageWhereUniqueInput
  }

  /**
   * CmsPage updateMany
   */
  export type CmsPageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsPages.
     */
    data: XOR<CmsPageUpdateManyMutationInput, CmsPageUncheckedUpdateManyInput>
    /**
     * Filter which CmsPages to update
     */
    where?: CmsPageWhereInput
    /**
     * Limit how many CmsPages to update.
     */
    limit?: number
  }

  /**
   * CmsPage updateManyAndReturn
   */
  export type CmsPageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * The data used to update CmsPages.
     */
    data: XOR<CmsPageUpdateManyMutationInput, CmsPageUncheckedUpdateManyInput>
    /**
     * Filter which CmsPages to update
     */
    where?: CmsPageWhereInput
    /**
     * Limit how many CmsPages to update.
     */
    limit?: number
  }

  /**
   * CmsPage upsert
   */
  export type CmsPageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageInclude<ExtArgs> | null
    /**
     * The filter to search for the CmsPage to update in case it exists.
     */
    where: CmsPageWhereUniqueInput
    /**
     * In case the CmsPage found by the `where` argument doesn't exist, create a new CmsPage with this data.
     */
    create: XOR<CmsPageCreateInput, CmsPageUncheckedCreateInput>
    /**
     * In case the CmsPage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsPageUpdateInput, CmsPageUncheckedUpdateInput>
  }

  /**
   * CmsPage delete
   */
  export type CmsPageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageInclude<ExtArgs> | null
    /**
     * Filter which CmsPage to delete.
     */
    where: CmsPageWhereUniqueInput
  }

  /**
   * CmsPage deleteMany
   */
  export type CmsPageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsPages to delete
     */
    where?: CmsPageWhereInput
    /**
     * Limit how many CmsPages to delete.
     */
    limit?: number
  }

  /**
   * CmsPage.sections
   */
  export type CmsPage$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSection
     */
    select?: CmsSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSection
     */
    omit?: CmsSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSectionInclude<ExtArgs> | null
    where?: CmsSectionWhereInput
    orderBy?: CmsSectionOrderByWithRelationInput | CmsSectionOrderByWithRelationInput[]
    cursor?: CmsSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CmsSectionScalarFieldEnum | CmsSectionScalarFieldEnum[]
  }

  /**
   * CmsPage without action
   */
  export type CmsPageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPageInclude<ExtArgs> | null
  }


  /**
   * Model CmsSection
   */

  export type AggregateCmsSection = {
    _count: CmsSectionCountAggregateOutputType | null
    _avg: CmsSectionAvgAggregateOutputType | null
    _sum: CmsSectionSumAggregateOutputType | null
    _min: CmsSectionMinAggregateOutputType | null
    _max: CmsSectionMaxAggregateOutputType | null
  }

  export type CmsSectionAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type CmsSectionSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type CmsSectionMinAggregateOutputType = {
    id: string | null
    pageId: string | null
    type: $Enums.CMSSectionType | null
    title: string | null
    subtitle: string | null
    body: string | null
    imageUrl: string | null
    sortOrder: number | null
    isVisible: boolean | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsSectionMaxAggregateOutputType = {
    id: string | null
    pageId: string | null
    type: $Enums.CMSSectionType | null
    title: string | null
    subtitle: string | null
    body: string | null
    imageUrl: string | null
    sortOrder: number | null
    isVisible: boolean | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsSectionCountAggregateOutputType = {
    id: number
    pageId: number
    type: number
    title: number
    subtitle: number
    body: number
    imageUrl: number
    content: number
    sortOrder: number
    isVisible: number
    createdBy: number
    updatedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CmsSectionAvgAggregateInputType = {
    sortOrder?: true
  }

  export type CmsSectionSumAggregateInputType = {
    sortOrder?: true
  }

  export type CmsSectionMinAggregateInputType = {
    id?: true
    pageId?: true
    type?: true
    title?: true
    subtitle?: true
    body?: true
    imageUrl?: true
    sortOrder?: true
    isVisible?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsSectionMaxAggregateInputType = {
    id?: true
    pageId?: true
    type?: true
    title?: true
    subtitle?: true
    body?: true
    imageUrl?: true
    sortOrder?: true
    isVisible?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsSectionCountAggregateInputType = {
    id?: true
    pageId?: true
    type?: true
    title?: true
    subtitle?: true
    body?: true
    imageUrl?: true
    content?: true
    sortOrder?: true
    isVisible?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CmsSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsSection to aggregate.
     */
    where?: CmsSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsSections to fetch.
     */
    orderBy?: CmsSectionOrderByWithRelationInput | CmsSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsSections
    **/
    _count?: true | CmsSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CmsSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CmsSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsSectionMaxAggregateInputType
  }

  export type GetCmsSectionAggregateType<T extends CmsSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsSection[P]>
      : GetScalarType<T[P], AggregateCmsSection[P]>
  }




  export type CmsSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsSectionWhereInput
    orderBy?: CmsSectionOrderByWithAggregationInput | CmsSectionOrderByWithAggregationInput[]
    by: CmsSectionScalarFieldEnum[] | CmsSectionScalarFieldEnum
    having?: CmsSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsSectionCountAggregateInputType | true
    _avg?: CmsSectionAvgAggregateInputType
    _sum?: CmsSectionSumAggregateInputType
    _min?: CmsSectionMinAggregateInputType
    _max?: CmsSectionMaxAggregateInputType
  }

  export type CmsSectionGroupByOutputType = {
    id: string
    pageId: string
    type: $Enums.CMSSectionType
    title: string | null
    subtitle: string | null
    body: string | null
    imageUrl: string | null
    content: JsonValue | null
    sortOrder: number
    isVisible: boolean
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: CmsSectionCountAggregateOutputType | null
    _avg: CmsSectionAvgAggregateOutputType | null
    _sum: CmsSectionSumAggregateOutputType | null
    _min: CmsSectionMinAggregateOutputType | null
    _max: CmsSectionMaxAggregateOutputType | null
  }

  type GetCmsSectionGroupByPayload<T extends CmsSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsSectionGroupByOutputType[P]>
            : GetScalarType<T[P], CmsSectionGroupByOutputType[P]>
        }
      >
    >


  export type CmsSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pageId?: boolean
    type?: boolean
    title?: boolean
    subtitle?: boolean
    body?: boolean
    imageUrl?: boolean
    content?: boolean
    sortOrder?: boolean
    isVisible?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    page?: boolean | CmsPageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsSection"]>

  export type CmsSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pageId?: boolean
    type?: boolean
    title?: boolean
    subtitle?: boolean
    body?: boolean
    imageUrl?: boolean
    content?: boolean
    sortOrder?: boolean
    isVisible?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    page?: boolean | CmsPageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsSection"]>

  export type CmsSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pageId?: boolean
    type?: boolean
    title?: boolean
    subtitle?: boolean
    body?: boolean
    imageUrl?: boolean
    content?: boolean
    sortOrder?: boolean
    isVisible?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    page?: boolean | CmsPageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsSection"]>

  export type CmsSectionSelectScalar = {
    id?: boolean
    pageId?: boolean
    type?: boolean
    title?: boolean
    subtitle?: boolean
    body?: boolean
    imageUrl?: boolean
    content?: boolean
    sortOrder?: boolean
    isVisible?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CmsSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pageId" | "type" | "title" | "subtitle" | "body" | "imageUrl" | "content" | "sortOrder" | "isVisible" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["cmsSection"]>
  export type CmsSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | CmsPageDefaultArgs<ExtArgs>
  }
  export type CmsSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | CmsPageDefaultArgs<ExtArgs>
  }
  export type CmsSectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | CmsPageDefaultArgs<ExtArgs>
  }

  export type $CmsSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsSection"
    objects: {
      page: Prisma.$CmsPagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pageId: string
      type: $Enums.CMSSectionType
      title: string | null
      subtitle: string | null
      body: string | null
      imageUrl: string | null
      content: Prisma.JsonValue | null
      sortOrder: number
      isVisible: boolean
      createdBy: string | null
      updatedBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cmsSection"]>
    composites: {}
  }

  type CmsSectionGetPayload<S extends boolean | null | undefined | CmsSectionDefaultArgs> = $Result.GetResult<Prisma.$CmsSectionPayload, S>

  type CmsSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsSectionCountAggregateInputType | true
    }

  export interface CmsSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsSection'], meta: { name: 'CmsSection' } }
    /**
     * Find zero or one CmsSection that matches the filter.
     * @param {CmsSectionFindUniqueArgs} args - Arguments to find a CmsSection
     * @example
     * // Get one CmsSection
     * const cmsSection = await prisma.cmsSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsSectionFindUniqueArgs>(args: SelectSubset<T, CmsSectionFindUniqueArgs<ExtArgs>>): Prisma__CmsSectionClient<$Result.GetResult<Prisma.$CmsSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsSectionFindUniqueOrThrowArgs} args - Arguments to find a CmsSection
     * @example
     * // Get one CmsSection
     * const cmsSection = await prisma.cmsSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsSectionClient<$Result.GetResult<Prisma.$CmsSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSectionFindFirstArgs} args - Arguments to find a CmsSection
     * @example
     * // Get one CmsSection
     * const cmsSection = await prisma.cmsSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsSectionFindFirstArgs>(args?: SelectSubset<T, CmsSectionFindFirstArgs<ExtArgs>>): Prisma__CmsSectionClient<$Result.GetResult<Prisma.$CmsSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSectionFindFirstOrThrowArgs} args - Arguments to find a CmsSection
     * @example
     * // Get one CmsSection
     * const cmsSection = await prisma.cmsSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsSectionClient<$Result.GetResult<Prisma.$CmsSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsSections
     * const cmsSections = await prisma.cmsSection.findMany()
     * 
     * // Get first 10 CmsSections
     * const cmsSections = await prisma.cmsSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsSectionWithIdOnly = await prisma.cmsSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsSectionFindManyArgs>(args?: SelectSubset<T, CmsSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsSection.
     * @param {CmsSectionCreateArgs} args - Arguments to create a CmsSection.
     * @example
     * // Create one CmsSection
     * const CmsSection = await prisma.cmsSection.create({
     *   data: {
     *     // ... data to create a CmsSection
     *   }
     * })
     * 
     */
    create<T extends CmsSectionCreateArgs>(args: SelectSubset<T, CmsSectionCreateArgs<ExtArgs>>): Prisma__CmsSectionClient<$Result.GetResult<Prisma.$CmsSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsSections.
     * @param {CmsSectionCreateManyArgs} args - Arguments to create many CmsSections.
     * @example
     * // Create many CmsSections
     * const cmsSection = await prisma.cmsSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsSectionCreateManyArgs>(args?: SelectSubset<T, CmsSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsSections and returns the data saved in the database.
     * @param {CmsSectionCreateManyAndReturnArgs} args - Arguments to create many CmsSections.
     * @example
     * // Create many CmsSections
     * const cmsSection = await prisma.cmsSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsSections and only return the `id`
     * const cmsSectionWithIdOnly = await prisma.cmsSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsSection.
     * @param {CmsSectionDeleteArgs} args - Arguments to delete one CmsSection.
     * @example
     * // Delete one CmsSection
     * const CmsSection = await prisma.cmsSection.delete({
     *   where: {
     *     // ... filter to delete one CmsSection
     *   }
     * })
     * 
     */
    delete<T extends CmsSectionDeleteArgs>(args: SelectSubset<T, CmsSectionDeleteArgs<ExtArgs>>): Prisma__CmsSectionClient<$Result.GetResult<Prisma.$CmsSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsSection.
     * @param {CmsSectionUpdateArgs} args - Arguments to update one CmsSection.
     * @example
     * // Update one CmsSection
     * const cmsSection = await prisma.cmsSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsSectionUpdateArgs>(args: SelectSubset<T, CmsSectionUpdateArgs<ExtArgs>>): Prisma__CmsSectionClient<$Result.GetResult<Prisma.$CmsSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsSections.
     * @param {CmsSectionDeleteManyArgs} args - Arguments to filter CmsSections to delete.
     * @example
     * // Delete a few CmsSections
     * const { count } = await prisma.cmsSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsSectionDeleteManyArgs>(args?: SelectSubset<T, CmsSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsSections
     * const cmsSection = await prisma.cmsSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsSectionUpdateManyArgs>(args: SelectSubset<T, CmsSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsSections and returns the data updated in the database.
     * @param {CmsSectionUpdateManyAndReturnArgs} args - Arguments to update many CmsSections.
     * @example
     * // Update many CmsSections
     * const cmsSection = await prisma.cmsSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsSections and only return the `id`
     * const cmsSectionWithIdOnly = await prisma.cmsSection.updateManyAndReturn({
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
    updateManyAndReturn<T extends CmsSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsSection.
     * @param {CmsSectionUpsertArgs} args - Arguments to update or create a CmsSection.
     * @example
     * // Update or create a CmsSection
     * const cmsSection = await prisma.cmsSection.upsert({
     *   create: {
     *     // ... data to create a CmsSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsSection we want to update
     *   }
     * })
     */
    upsert<T extends CmsSectionUpsertArgs>(args: SelectSubset<T, CmsSectionUpsertArgs<ExtArgs>>): Prisma__CmsSectionClient<$Result.GetResult<Prisma.$CmsSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSectionCountArgs} args - Arguments to filter CmsSections to count.
     * @example
     * // Count the number of CmsSections
     * const count = await prisma.cmsSection.count({
     *   where: {
     *     // ... the filter for the CmsSections we want to count
     *   }
     * })
    **/
    count<T extends CmsSectionCountArgs>(
      args?: Subset<T, CmsSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CmsSectionAggregateArgs>(args: Subset<T, CmsSectionAggregateArgs>): Prisma.PrismaPromise<GetCmsSectionAggregateType<T>>

    /**
     * Group by CmsSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSectionGroupByArgs} args - Group by arguments.
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
      T extends CmsSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsSectionGroupByArgs['orderBy'] }
        : { orderBy?: CmsSectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CmsSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsSection model
   */
  readonly fields: CmsSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    page<T extends CmsPageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CmsPageDefaultArgs<ExtArgs>>): Prisma__CmsPageClient<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CmsSection model
   */
  interface CmsSectionFieldRefs {
    readonly id: FieldRef<"CmsSection", 'String'>
    readonly pageId: FieldRef<"CmsSection", 'String'>
    readonly type: FieldRef<"CmsSection", 'CMSSectionType'>
    readonly title: FieldRef<"CmsSection", 'String'>
    readonly subtitle: FieldRef<"CmsSection", 'String'>
    readonly body: FieldRef<"CmsSection", 'String'>
    readonly imageUrl: FieldRef<"CmsSection", 'String'>
    readonly content: FieldRef<"CmsSection", 'Json'>
    readonly sortOrder: FieldRef<"CmsSection", 'Int'>
    readonly isVisible: FieldRef<"CmsSection", 'Boolean'>
    readonly createdBy: FieldRef<"CmsSection", 'String'>
    readonly updatedBy: FieldRef<"CmsSection", 'String'>
    readonly createdAt: FieldRef<"CmsSection", 'DateTime'>
    readonly updatedAt: FieldRef<"CmsSection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CmsSection findUnique
   */
  export type CmsSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSection
     */
    select?: CmsSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSection
     */
    omit?: CmsSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSectionInclude<ExtArgs> | null
    /**
     * Filter, which CmsSection to fetch.
     */
    where: CmsSectionWhereUniqueInput
  }

  /**
   * CmsSection findUniqueOrThrow
   */
  export type CmsSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSection
     */
    select?: CmsSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSection
     */
    omit?: CmsSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSectionInclude<ExtArgs> | null
    /**
     * Filter, which CmsSection to fetch.
     */
    where: CmsSectionWhereUniqueInput
  }

  /**
   * CmsSection findFirst
   */
  export type CmsSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSection
     */
    select?: CmsSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSection
     */
    omit?: CmsSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSectionInclude<ExtArgs> | null
    /**
     * Filter, which CmsSection to fetch.
     */
    where?: CmsSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsSections to fetch.
     */
    orderBy?: CmsSectionOrderByWithRelationInput | CmsSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsSections.
     */
    cursor?: CmsSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsSections.
     */
    distinct?: CmsSectionScalarFieldEnum | CmsSectionScalarFieldEnum[]
  }

  /**
   * CmsSection findFirstOrThrow
   */
  export type CmsSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSection
     */
    select?: CmsSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSection
     */
    omit?: CmsSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSectionInclude<ExtArgs> | null
    /**
     * Filter, which CmsSection to fetch.
     */
    where?: CmsSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsSections to fetch.
     */
    orderBy?: CmsSectionOrderByWithRelationInput | CmsSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsSections.
     */
    cursor?: CmsSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsSections.
     */
    distinct?: CmsSectionScalarFieldEnum | CmsSectionScalarFieldEnum[]
  }

  /**
   * CmsSection findMany
   */
  export type CmsSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSection
     */
    select?: CmsSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSection
     */
    omit?: CmsSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSectionInclude<ExtArgs> | null
    /**
     * Filter, which CmsSections to fetch.
     */
    where?: CmsSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsSections to fetch.
     */
    orderBy?: CmsSectionOrderByWithRelationInput | CmsSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsSections.
     */
    cursor?: CmsSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsSections.
     */
    distinct?: CmsSectionScalarFieldEnum | CmsSectionScalarFieldEnum[]
  }

  /**
   * CmsSection create
   */
  export type CmsSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSection
     */
    select?: CmsSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSection
     */
    omit?: CmsSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a CmsSection.
     */
    data: XOR<CmsSectionCreateInput, CmsSectionUncheckedCreateInput>
  }

  /**
   * CmsSection createMany
   */
  export type CmsSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsSections.
     */
    data: CmsSectionCreateManyInput | CmsSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsSection createManyAndReturn
   */
  export type CmsSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSection
     */
    select?: CmsSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSection
     */
    omit?: CmsSectionOmit<ExtArgs> | null
    /**
     * The data used to create many CmsSections.
     */
    data: CmsSectionCreateManyInput | CmsSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsSection update
   */
  export type CmsSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSection
     */
    select?: CmsSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSection
     */
    omit?: CmsSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a CmsSection.
     */
    data: XOR<CmsSectionUpdateInput, CmsSectionUncheckedUpdateInput>
    /**
     * Choose, which CmsSection to update.
     */
    where: CmsSectionWhereUniqueInput
  }

  /**
   * CmsSection updateMany
   */
  export type CmsSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsSections.
     */
    data: XOR<CmsSectionUpdateManyMutationInput, CmsSectionUncheckedUpdateManyInput>
    /**
     * Filter which CmsSections to update
     */
    where?: CmsSectionWhereInput
    /**
     * Limit how many CmsSections to update.
     */
    limit?: number
  }

  /**
   * CmsSection updateManyAndReturn
   */
  export type CmsSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSection
     */
    select?: CmsSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSection
     */
    omit?: CmsSectionOmit<ExtArgs> | null
    /**
     * The data used to update CmsSections.
     */
    data: XOR<CmsSectionUpdateManyMutationInput, CmsSectionUncheckedUpdateManyInput>
    /**
     * Filter which CmsSections to update
     */
    where?: CmsSectionWhereInput
    /**
     * Limit how many CmsSections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsSection upsert
   */
  export type CmsSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSection
     */
    select?: CmsSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSection
     */
    omit?: CmsSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the CmsSection to update in case it exists.
     */
    where: CmsSectionWhereUniqueInput
    /**
     * In case the CmsSection found by the `where` argument doesn't exist, create a new CmsSection with this data.
     */
    create: XOR<CmsSectionCreateInput, CmsSectionUncheckedCreateInput>
    /**
     * In case the CmsSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsSectionUpdateInput, CmsSectionUncheckedUpdateInput>
  }

  /**
   * CmsSection delete
   */
  export type CmsSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSection
     */
    select?: CmsSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSection
     */
    omit?: CmsSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSectionInclude<ExtArgs> | null
    /**
     * Filter which CmsSection to delete.
     */
    where: CmsSectionWhereUniqueInput
  }

  /**
   * CmsSection deleteMany
   */
  export type CmsSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsSections to delete
     */
    where?: CmsSectionWhereInput
    /**
     * Limit how many CmsSections to delete.
     */
    limit?: number
  }

  /**
   * CmsSection without action
   */
  export type CmsSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSection
     */
    select?: CmsSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSection
     */
    omit?: CmsSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSectionInclude<ExtArgs> | null
  }


  /**
   * Model CmsBanner
   */

  export type AggregateCmsBanner = {
    _count: CmsBannerCountAggregateOutputType | null
    _avg: CmsBannerAvgAggregateOutputType | null
    _sum: CmsBannerSumAggregateOutputType | null
    _min: CmsBannerMinAggregateOutputType | null
    _max: CmsBannerMaxAggregateOutputType | null
  }

  export type CmsBannerAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type CmsBannerSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type CmsBannerMinAggregateOutputType = {
    id: string | null
    title: string | null
    message: string | null
    imageUrl: string | null
    linkUrl: string | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    sortOrder: number | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsBannerMaxAggregateOutputType = {
    id: string | null
    title: string | null
    message: string | null
    imageUrl: string | null
    linkUrl: string | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    sortOrder: number | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsBannerCountAggregateOutputType = {
    id: number
    title: number
    message: number
    imageUrl: number
    linkUrl: number
    startDate: number
    endDate: number
    isActive: number
    sortOrder: number
    createdBy: number
    updatedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CmsBannerAvgAggregateInputType = {
    sortOrder?: true
  }

  export type CmsBannerSumAggregateInputType = {
    sortOrder?: true
  }

  export type CmsBannerMinAggregateInputType = {
    id?: true
    title?: true
    message?: true
    imageUrl?: true
    linkUrl?: true
    startDate?: true
    endDate?: true
    isActive?: true
    sortOrder?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsBannerMaxAggregateInputType = {
    id?: true
    title?: true
    message?: true
    imageUrl?: true
    linkUrl?: true
    startDate?: true
    endDate?: true
    isActive?: true
    sortOrder?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsBannerCountAggregateInputType = {
    id?: true
    title?: true
    message?: true
    imageUrl?: true
    linkUrl?: true
    startDate?: true
    endDate?: true
    isActive?: true
    sortOrder?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CmsBannerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsBanner to aggregate.
     */
    where?: CmsBannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsBanners to fetch.
     */
    orderBy?: CmsBannerOrderByWithRelationInput | CmsBannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsBannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsBanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsBanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsBanners
    **/
    _count?: true | CmsBannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CmsBannerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CmsBannerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsBannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsBannerMaxAggregateInputType
  }

  export type GetCmsBannerAggregateType<T extends CmsBannerAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsBanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsBanner[P]>
      : GetScalarType<T[P], AggregateCmsBanner[P]>
  }




  export type CmsBannerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsBannerWhereInput
    orderBy?: CmsBannerOrderByWithAggregationInput | CmsBannerOrderByWithAggregationInput[]
    by: CmsBannerScalarFieldEnum[] | CmsBannerScalarFieldEnum
    having?: CmsBannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsBannerCountAggregateInputType | true
    _avg?: CmsBannerAvgAggregateInputType
    _sum?: CmsBannerSumAggregateInputType
    _min?: CmsBannerMinAggregateInputType
    _max?: CmsBannerMaxAggregateInputType
  }

  export type CmsBannerGroupByOutputType = {
    id: string
    title: string
    message: string
    imageUrl: string | null
    linkUrl: string | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean
    sortOrder: number
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: CmsBannerCountAggregateOutputType | null
    _avg: CmsBannerAvgAggregateOutputType | null
    _sum: CmsBannerSumAggregateOutputType | null
    _min: CmsBannerMinAggregateOutputType | null
    _max: CmsBannerMaxAggregateOutputType | null
  }

  type GetCmsBannerGroupByPayload<T extends CmsBannerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsBannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsBannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsBannerGroupByOutputType[P]>
            : GetScalarType<T[P], CmsBannerGroupByOutputType[P]>
        }
      >
    >


  export type CmsBannerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    imageUrl?: boolean
    linkUrl?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    sortOrder?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsBanner"]>

  export type CmsBannerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    imageUrl?: boolean
    linkUrl?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    sortOrder?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsBanner"]>

  export type CmsBannerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    imageUrl?: boolean
    linkUrl?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    sortOrder?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsBanner"]>

  export type CmsBannerSelectScalar = {
    id?: boolean
    title?: boolean
    message?: boolean
    imageUrl?: boolean
    linkUrl?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    sortOrder?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CmsBannerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "message" | "imageUrl" | "linkUrl" | "startDate" | "endDate" | "isActive" | "sortOrder" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["cmsBanner"]>

  export type $CmsBannerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsBanner"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      message: string
      imageUrl: string | null
      linkUrl: string | null
      startDate: Date | null
      endDate: Date | null
      isActive: boolean
      sortOrder: number
      createdBy: string | null
      updatedBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cmsBanner"]>
    composites: {}
  }

  type CmsBannerGetPayload<S extends boolean | null | undefined | CmsBannerDefaultArgs> = $Result.GetResult<Prisma.$CmsBannerPayload, S>

  type CmsBannerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsBannerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsBannerCountAggregateInputType | true
    }

  export interface CmsBannerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsBanner'], meta: { name: 'CmsBanner' } }
    /**
     * Find zero or one CmsBanner that matches the filter.
     * @param {CmsBannerFindUniqueArgs} args - Arguments to find a CmsBanner
     * @example
     * // Get one CmsBanner
     * const cmsBanner = await prisma.cmsBanner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsBannerFindUniqueArgs>(args: SelectSubset<T, CmsBannerFindUniqueArgs<ExtArgs>>): Prisma__CmsBannerClient<$Result.GetResult<Prisma.$CmsBannerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsBanner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsBannerFindUniqueOrThrowArgs} args - Arguments to find a CmsBanner
     * @example
     * // Get one CmsBanner
     * const cmsBanner = await prisma.cmsBanner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsBannerFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsBannerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsBannerClient<$Result.GetResult<Prisma.$CmsBannerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsBanner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsBannerFindFirstArgs} args - Arguments to find a CmsBanner
     * @example
     * // Get one CmsBanner
     * const cmsBanner = await prisma.cmsBanner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsBannerFindFirstArgs>(args?: SelectSubset<T, CmsBannerFindFirstArgs<ExtArgs>>): Prisma__CmsBannerClient<$Result.GetResult<Prisma.$CmsBannerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsBanner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsBannerFindFirstOrThrowArgs} args - Arguments to find a CmsBanner
     * @example
     * // Get one CmsBanner
     * const cmsBanner = await prisma.cmsBanner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsBannerFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsBannerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsBannerClient<$Result.GetResult<Prisma.$CmsBannerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsBanners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsBannerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsBanners
     * const cmsBanners = await prisma.cmsBanner.findMany()
     * 
     * // Get first 10 CmsBanners
     * const cmsBanners = await prisma.cmsBanner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsBannerWithIdOnly = await prisma.cmsBanner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsBannerFindManyArgs>(args?: SelectSubset<T, CmsBannerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsBannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsBanner.
     * @param {CmsBannerCreateArgs} args - Arguments to create a CmsBanner.
     * @example
     * // Create one CmsBanner
     * const CmsBanner = await prisma.cmsBanner.create({
     *   data: {
     *     // ... data to create a CmsBanner
     *   }
     * })
     * 
     */
    create<T extends CmsBannerCreateArgs>(args: SelectSubset<T, CmsBannerCreateArgs<ExtArgs>>): Prisma__CmsBannerClient<$Result.GetResult<Prisma.$CmsBannerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsBanners.
     * @param {CmsBannerCreateManyArgs} args - Arguments to create many CmsBanners.
     * @example
     * // Create many CmsBanners
     * const cmsBanner = await prisma.cmsBanner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsBannerCreateManyArgs>(args?: SelectSubset<T, CmsBannerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsBanners and returns the data saved in the database.
     * @param {CmsBannerCreateManyAndReturnArgs} args - Arguments to create many CmsBanners.
     * @example
     * // Create many CmsBanners
     * const cmsBanner = await prisma.cmsBanner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsBanners and only return the `id`
     * const cmsBannerWithIdOnly = await prisma.cmsBanner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsBannerCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsBannerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsBannerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsBanner.
     * @param {CmsBannerDeleteArgs} args - Arguments to delete one CmsBanner.
     * @example
     * // Delete one CmsBanner
     * const CmsBanner = await prisma.cmsBanner.delete({
     *   where: {
     *     // ... filter to delete one CmsBanner
     *   }
     * })
     * 
     */
    delete<T extends CmsBannerDeleteArgs>(args: SelectSubset<T, CmsBannerDeleteArgs<ExtArgs>>): Prisma__CmsBannerClient<$Result.GetResult<Prisma.$CmsBannerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsBanner.
     * @param {CmsBannerUpdateArgs} args - Arguments to update one CmsBanner.
     * @example
     * // Update one CmsBanner
     * const cmsBanner = await prisma.cmsBanner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsBannerUpdateArgs>(args: SelectSubset<T, CmsBannerUpdateArgs<ExtArgs>>): Prisma__CmsBannerClient<$Result.GetResult<Prisma.$CmsBannerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsBanners.
     * @param {CmsBannerDeleteManyArgs} args - Arguments to filter CmsBanners to delete.
     * @example
     * // Delete a few CmsBanners
     * const { count } = await prisma.cmsBanner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsBannerDeleteManyArgs>(args?: SelectSubset<T, CmsBannerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsBanners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsBannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsBanners
     * const cmsBanner = await prisma.cmsBanner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsBannerUpdateManyArgs>(args: SelectSubset<T, CmsBannerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsBanners and returns the data updated in the database.
     * @param {CmsBannerUpdateManyAndReturnArgs} args - Arguments to update many CmsBanners.
     * @example
     * // Update many CmsBanners
     * const cmsBanner = await prisma.cmsBanner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsBanners and only return the `id`
     * const cmsBannerWithIdOnly = await prisma.cmsBanner.updateManyAndReturn({
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
    updateManyAndReturn<T extends CmsBannerUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsBannerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsBannerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsBanner.
     * @param {CmsBannerUpsertArgs} args - Arguments to update or create a CmsBanner.
     * @example
     * // Update or create a CmsBanner
     * const cmsBanner = await prisma.cmsBanner.upsert({
     *   create: {
     *     // ... data to create a CmsBanner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsBanner we want to update
     *   }
     * })
     */
    upsert<T extends CmsBannerUpsertArgs>(args: SelectSubset<T, CmsBannerUpsertArgs<ExtArgs>>): Prisma__CmsBannerClient<$Result.GetResult<Prisma.$CmsBannerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsBanners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsBannerCountArgs} args - Arguments to filter CmsBanners to count.
     * @example
     * // Count the number of CmsBanners
     * const count = await prisma.cmsBanner.count({
     *   where: {
     *     // ... the filter for the CmsBanners we want to count
     *   }
     * })
    **/
    count<T extends CmsBannerCountArgs>(
      args?: Subset<T, CmsBannerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsBannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsBanner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsBannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CmsBannerAggregateArgs>(args: Subset<T, CmsBannerAggregateArgs>): Prisma.PrismaPromise<GetCmsBannerAggregateType<T>>

    /**
     * Group by CmsBanner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsBannerGroupByArgs} args - Group by arguments.
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
      T extends CmsBannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsBannerGroupByArgs['orderBy'] }
        : { orderBy?: CmsBannerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CmsBannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsBannerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsBanner model
   */
  readonly fields: CmsBannerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsBanner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsBannerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CmsBanner model
   */
  interface CmsBannerFieldRefs {
    readonly id: FieldRef<"CmsBanner", 'String'>
    readonly title: FieldRef<"CmsBanner", 'String'>
    readonly message: FieldRef<"CmsBanner", 'String'>
    readonly imageUrl: FieldRef<"CmsBanner", 'String'>
    readonly linkUrl: FieldRef<"CmsBanner", 'String'>
    readonly startDate: FieldRef<"CmsBanner", 'DateTime'>
    readonly endDate: FieldRef<"CmsBanner", 'DateTime'>
    readonly isActive: FieldRef<"CmsBanner", 'Boolean'>
    readonly sortOrder: FieldRef<"CmsBanner", 'Int'>
    readonly createdBy: FieldRef<"CmsBanner", 'String'>
    readonly updatedBy: FieldRef<"CmsBanner", 'String'>
    readonly createdAt: FieldRef<"CmsBanner", 'DateTime'>
    readonly updatedAt: FieldRef<"CmsBanner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CmsBanner findUnique
   */
  export type CmsBannerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBanner
     */
    select?: CmsBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBanner
     */
    omit?: CmsBannerOmit<ExtArgs> | null
    /**
     * Filter, which CmsBanner to fetch.
     */
    where: CmsBannerWhereUniqueInput
  }

  /**
   * CmsBanner findUniqueOrThrow
   */
  export type CmsBannerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBanner
     */
    select?: CmsBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBanner
     */
    omit?: CmsBannerOmit<ExtArgs> | null
    /**
     * Filter, which CmsBanner to fetch.
     */
    where: CmsBannerWhereUniqueInput
  }

  /**
   * CmsBanner findFirst
   */
  export type CmsBannerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBanner
     */
    select?: CmsBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBanner
     */
    omit?: CmsBannerOmit<ExtArgs> | null
    /**
     * Filter, which CmsBanner to fetch.
     */
    where?: CmsBannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsBanners to fetch.
     */
    orderBy?: CmsBannerOrderByWithRelationInput | CmsBannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsBanners.
     */
    cursor?: CmsBannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsBanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsBanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsBanners.
     */
    distinct?: CmsBannerScalarFieldEnum | CmsBannerScalarFieldEnum[]
  }

  /**
   * CmsBanner findFirstOrThrow
   */
  export type CmsBannerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBanner
     */
    select?: CmsBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBanner
     */
    omit?: CmsBannerOmit<ExtArgs> | null
    /**
     * Filter, which CmsBanner to fetch.
     */
    where?: CmsBannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsBanners to fetch.
     */
    orderBy?: CmsBannerOrderByWithRelationInput | CmsBannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsBanners.
     */
    cursor?: CmsBannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsBanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsBanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsBanners.
     */
    distinct?: CmsBannerScalarFieldEnum | CmsBannerScalarFieldEnum[]
  }

  /**
   * CmsBanner findMany
   */
  export type CmsBannerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBanner
     */
    select?: CmsBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBanner
     */
    omit?: CmsBannerOmit<ExtArgs> | null
    /**
     * Filter, which CmsBanners to fetch.
     */
    where?: CmsBannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsBanners to fetch.
     */
    orderBy?: CmsBannerOrderByWithRelationInput | CmsBannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsBanners.
     */
    cursor?: CmsBannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsBanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsBanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsBanners.
     */
    distinct?: CmsBannerScalarFieldEnum | CmsBannerScalarFieldEnum[]
  }

  /**
   * CmsBanner create
   */
  export type CmsBannerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBanner
     */
    select?: CmsBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBanner
     */
    omit?: CmsBannerOmit<ExtArgs> | null
    /**
     * The data needed to create a CmsBanner.
     */
    data: XOR<CmsBannerCreateInput, CmsBannerUncheckedCreateInput>
  }

  /**
   * CmsBanner createMany
   */
  export type CmsBannerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsBanners.
     */
    data: CmsBannerCreateManyInput | CmsBannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsBanner createManyAndReturn
   */
  export type CmsBannerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBanner
     */
    select?: CmsBannerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBanner
     */
    omit?: CmsBannerOmit<ExtArgs> | null
    /**
     * The data used to create many CmsBanners.
     */
    data: CmsBannerCreateManyInput | CmsBannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsBanner update
   */
  export type CmsBannerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBanner
     */
    select?: CmsBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBanner
     */
    omit?: CmsBannerOmit<ExtArgs> | null
    /**
     * The data needed to update a CmsBanner.
     */
    data: XOR<CmsBannerUpdateInput, CmsBannerUncheckedUpdateInput>
    /**
     * Choose, which CmsBanner to update.
     */
    where: CmsBannerWhereUniqueInput
  }

  /**
   * CmsBanner updateMany
   */
  export type CmsBannerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsBanners.
     */
    data: XOR<CmsBannerUpdateManyMutationInput, CmsBannerUncheckedUpdateManyInput>
    /**
     * Filter which CmsBanners to update
     */
    where?: CmsBannerWhereInput
    /**
     * Limit how many CmsBanners to update.
     */
    limit?: number
  }

  /**
   * CmsBanner updateManyAndReturn
   */
  export type CmsBannerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBanner
     */
    select?: CmsBannerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBanner
     */
    omit?: CmsBannerOmit<ExtArgs> | null
    /**
     * The data used to update CmsBanners.
     */
    data: XOR<CmsBannerUpdateManyMutationInput, CmsBannerUncheckedUpdateManyInput>
    /**
     * Filter which CmsBanners to update
     */
    where?: CmsBannerWhereInput
    /**
     * Limit how many CmsBanners to update.
     */
    limit?: number
  }

  /**
   * CmsBanner upsert
   */
  export type CmsBannerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBanner
     */
    select?: CmsBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBanner
     */
    omit?: CmsBannerOmit<ExtArgs> | null
    /**
     * The filter to search for the CmsBanner to update in case it exists.
     */
    where: CmsBannerWhereUniqueInput
    /**
     * In case the CmsBanner found by the `where` argument doesn't exist, create a new CmsBanner with this data.
     */
    create: XOR<CmsBannerCreateInput, CmsBannerUncheckedCreateInput>
    /**
     * In case the CmsBanner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsBannerUpdateInput, CmsBannerUncheckedUpdateInput>
  }

  /**
   * CmsBanner delete
   */
  export type CmsBannerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBanner
     */
    select?: CmsBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBanner
     */
    omit?: CmsBannerOmit<ExtArgs> | null
    /**
     * Filter which CmsBanner to delete.
     */
    where: CmsBannerWhereUniqueInput
  }

  /**
   * CmsBanner deleteMany
   */
  export type CmsBannerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsBanners to delete
     */
    where?: CmsBannerWhereInput
    /**
     * Limit how many CmsBanners to delete.
     */
    limit?: number
  }

  /**
   * CmsBanner without action
   */
  export type CmsBannerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBanner
     */
    select?: CmsBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBanner
     */
    omit?: CmsBannerOmit<ExtArgs> | null
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


  export const CmsPageScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    metaTitle: 'metaTitle',
    metaDescription: 'metaDescription',
    isPublished: 'isPublished',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CmsPageScalarFieldEnum = (typeof CmsPageScalarFieldEnum)[keyof typeof CmsPageScalarFieldEnum]


  export const CmsSectionScalarFieldEnum: {
    id: 'id',
    pageId: 'pageId',
    type: 'type',
    title: 'title',
    subtitle: 'subtitle',
    body: 'body',
    imageUrl: 'imageUrl',
    content: 'content',
    sortOrder: 'sortOrder',
    isVisible: 'isVisible',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CmsSectionScalarFieldEnum = (typeof CmsSectionScalarFieldEnum)[keyof typeof CmsSectionScalarFieldEnum]


  export const CmsBannerScalarFieldEnum: {
    id: 'id',
    title: 'title',
    message: 'message',
    imageUrl: 'imageUrl',
    linkUrl: 'linkUrl',
    startDate: 'startDate',
    endDate: 'endDate',
    isActive: 'isActive',
    sortOrder: 'sortOrder',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CmsBannerScalarFieldEnum = (typeof CmsBannerScalarFieldEnum)[keyof typeof CmsBannerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CMSSectionType'
   */
  export type EnumCMSSectionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CMSSectionType'>
    


  /**
   * Reference to a field of type 'CMSSectionType[]'
   */
  export type ListEnumCMSSectionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CMSSectionType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CmsPageWhereInput = {
    AND?: CmsPageWhereInput | CmsPageWhereInput[]
    OR?: CmsPageWhereInput[]
    NOT?: CmsPageWhereInput | CmsPageWhereInput[]
    id?: UuidFilter<"CmsPage"> | string
    slug?: StringFilter<"CmsPage"> | string
    title?: StringFilter<"CmsPage"> | string
    metaTitle?: StringNullableFilter<"CmsPage"> | string | null
    metaDescription?: StringNullableFilter<"CmsPage"> | string | null
    isPublished?: BoolFilter<"CmsPage"> | boolean
    createdBy?: UuidNullableFilter<"CmsPage"> | string | null
    updatedBy?: UuidNullableFilter<"CmsPage"> | string | null
    createdAt?: DateTimeFilter<"CmsPage"> | Date | string
    updatedAt?: DateTimeFilter<"CmsPage"> | Date | string
    sections?: CmsSectionListRelationFilter
  }

  export type CmsPageOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sections?: CmsSectionOrderByRelationAggregateInput
  }

  export type CmsPageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CmsPageWhereInput | CmsPageWhereInput[]
    OR?: CmsPageWhereInput[]
    NOT?: CmsPageWhereInput | CmsPageWhereInput[]
    title?: StringFilter<"CmsPage"> | string
    metaTitle?: StringNullableFilter<"CmsPage"> | string | null
    metaDescription?: StringNullableFilter<"CmsPage"> | string | null
    isPublished?: BoolFilter<"CmsPage"> | boolean
    createdBy?: UuidNullableFilter<"CmsPage"> | string | null
    updatedBy?: UuidNullableFilter<"CmsPage"> | string | null
    createdAt?: DateTimeFilter<"CmsPage"> | Date | string
    updatedAt?: DateTimeFilter<"CmsPage"> | Date | string
    sections?: CmsSectionListRelationFilter
  }, "id" | "slug">

  export type CmsPageOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CmsPageCountOrderByAggregateInput
    _max?: CmsPageMaxOrderByAggregateInput
    _min?: CmsPageMinOrderByAggregateInput
  }

  export type CmsPageScalarWhereWithAggregatesInput = {
    AND?: CmsPageScalarWhereWithAggregatesInput | CmsPageScalarWhereWithAggregatesInput[]
    OR?: CmsPageScalarWhereWithAggregatesInput[]
    NOT?: CmsPageScalarWhereWithAggregatesInput | CmsPageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"CmsPage"> | string
    slug?: StringWithAggregatesFilter<"CmsPage"> | string
    title?: StringWithAggregatesFilter<"CmsPage"> | string
    metaTitle?: StringNullableWithAggregatesFilter<"CmsPage"> | string | null
    metaDescription?: StringNullableWithAggregatesFilter<"CmsPage"> | string | null
    isPublished?: BoolWithAggregatesFilter<"CmsPage"> | boolean
    createdBy?: UuidNullableWithAggregatesFilter<"CmsPage"> | string | null
    updatedBy?: UuidNullableWithAggregatesFilter<"CmsPage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CmsPage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CmsPage"> | Date | string
  }

  export type CmsSectionWhereInput = {
    AND?: CmsSectionWhereInput | CmsSectionWhereInput[]
    OR?: CmsSectionWhereInput[]
    NOT?: CmsSectionWhereInput | CmsSectionWhereInput[]
    id?: UuidFilter<"CmsSection"> | string
    pageId?: UuidFilter<"CmsSection"> | string
    type?: EnumCMSSectionTypeFilter<"CmsSection"> | $Enums.CMSSectionType
    title?: StringNullableFilter<"CmsSection"> | string | null
    subtitle?: StringNullableFilter<"CmsSection"> | string | null
    body?: StringNullableFilter<"CmsSection"> | string | null
    imageUrl?: StringNullableFilter<"CmsSection"> | string | null
    content?: JsonNullableFilter<"CmsSection">
    sortOrder?: IntFilter<"CmsSection"> | number
    isVisible?: BoolFilter<"CmsSection"> | boolean
    createdBy?: UuidNullableFilter<"CmsSection"> | string | null
    updatedBy?: UuidNullableFilter<"CmsSection"> | string | null
    createdAt?: DateTimeFilter<"CmsSection"> | Date | string
    updatedAt?: DateTimeFilter<"CmsSection"> | Date | string
    page?: XOR<CmsPageScalarRelationFilter, CmsPageWhereInput>
  }

  export type CmsSectionOrderByWithRelationInput = {
    id?: SortOrder
    pageId?: SortOrder
    type?: SortOrder
    title?: SortOrderInput | SortOrder
    subtitle?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    isVisible?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    page?: CmsPageOrderByWithRelationInput
  }

  export type CmsSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CmsSectionWhereInput | CmsSectionWhereInput[]
    OR?: CmsSectionWhereInput[]
    NOT?: CmsSectionWhereInput | CmsSectionWhereInput[]
    pageId?: UuidFilter<"CmsSection"> | string
    type?: EnumCMSSectionTypeFilter<"CmsSection"> | $Enums.CMSSectionType
    title?: StringNullableFilter<"CmsSection"> | string | null
    subtitle?: StringNullableFilter<"CmsSection"> | string | null
    body?: StringNullableFilter<"CmsSection"> | string | null
    imageUrl?: StringNullableFilter<"CmsSection"> | string | null
    content?: JsonNullableFilter<"CmsSection">
    sortOrder?: IntFilter<"CmsSection"> | number
    isVisible?: BoolFilter<"CmsSection"> | boolean
    createdBy?: UuidNullableFilter<"CmsSection"> | string | null
    updatedBy?: UuidNullableFilter<"CmsSection"> | string | null
    createdAt?: DateTimeFilter<"CmsSection"> | Date | string
    updatedAt?: DateTimeFilter<"CmsSection"> | Date | string
    page?: XOR<CmsPageScalarRelationFilter, CmsPageWhereInput>
  }, "id">

  export type CmsSectionOrderByWithAggregationInput = {
    id?: SortOrder
    pageId?: SortOrder
    type?: SortOrder
    title?: SortOrderInput | SortOrder
    subtitle?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    isVisible?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CmsSectionCountOrderByAggregateInput
    _avg?: CmsSectionAvgOrderByAggregateInput
    _max?: CmsSectionMaxOrderByAggregateInput
    _min?: CmsSectionMinOrderByAggregateInput
    _sum?: CmsSectionSumOrderByAggregateInput
  }

  export type CmsSectionScalarWhereWithAggregatesInput = {
    AND?: CmsSectionScalarWhereWithAggregatesInput | CmsSectionScalarWhereWithAggregatesInput[]
    OR?: CmsSectionScalarWhereWithAggregatesInput[]
    NOT?: CmsSectionScalarWhereWithAggregatesInput | CmsSectionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"CmsSection"> | string
    pageId?: UuidWithAggregatesFilter<"CmsSection"> | string
    type?: EnumCMSSectionTypeWithAggregatesFilter<"CmsSection"> | $Enums.CMSSectionType
    title?: StringNullableWithAggregatesFilter<"CmsSection"> | string | null
    subtitle?: StringNullableWithAggregatesFilter<"CmsSection"> | string | null
    body?: StringNullableWithAggregatesFilter<"CmsSection"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"CmsSection"> | string | null
    content?: JsonNullableWithAggregatesFilter<"CmsSection">
    sortOrder?: IntWithAggregatesFilter<"CmsSection"> | number
    isVisible?: BoolWithAggregatesFilter<"CmsSection"> | boolean
    createdBy?: UuidNullableWithAggregatesFilter<"CmsSection"> | string | null
    updatedBy?: UuidNullableWithAggregatesFilter<"CmsSection"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CmsSection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CmsSection"> | Date | string
  }

  export type CmsBannerWhereInput = {
    AND?: CmsBannerWhereInput | CmsBannerWhereInput[]
    OR?: CmsBannerWhereInput[]
    NOT?: CmsBannerWhereInput | CmsBannerWhereInput[]
    id?: UuidFilter<"CmsBanner"> | string
    title?: StringFilter<"CmsBanner"> | string
    message?: StringFilter<"CmsBanner"> | string
    imageUrl?: StringNullableFilter<"CmsBanner"> | string | null
    linkUrl?: StringNullableFilter<"CmsBanner"> | string | null
    startDate?: DateTimeNullableFilter<"CmsBanner"> | Date | string | null
    endDate?: DateTimeNullableFilter<"CmsBanner"> | Date | string | null
    isActive?: BoolFilter<"CmsBanner"> | boolean
    sortOrder?: IntFilter<"CmsBanner"> | number
    createdBy?: UuidNullableFilter<"CmsBanner"> | string | null
    updatedBy?: UuidNullableFilter<"CmsBanner"> | string | null
    createdAt?: DateTimeFilter<"CmsBanner"> | Date | string
    updatedAt?: DateTimeFilter<"CmsBanner"> | Date | string
  }

  export type CmsBannerOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    linkUrl?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsBannerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CmsBannerWhereInput | CmsBannerWhereInput[]
    OR?: CmsBannerWhereInput[]
    NOT?: CmsBannerWhereInput | CmsBannerWhereInput[]
    title?: StringFilter<"CmsBanner"> | string
    message?: StringFilter<"CmsBanner"> | string
    imageUrl?: StringNullableFilter<"CmsBanner"> | string | null
    linkUrl?: StringNullableFilter<"CmsBanner"> | string | null
    startDate?: DateTimeNullableFilter<"CmsBanner"> | Date | string | null
    endDate?: DateTimeNullableFilter<"CmsBanner"> | Date | string | null
    isActive?: BoolFilter<"CmsBanner"> | boolean
    sortOrder?: IntFilter<"CmsBanner"> | number
    createdBy?: UuidNullableFilter<"CmsBanner"> | string | null
    updatedBy?: UuidNullableFilter<"CmsBanner"> | string | null
    createdAt?: DateTimeFilter<"CmsBanner"> | Date | string
    updatedAt?: DateTimeFilter<"CmsBanner"> | Date | string
  }, "id">

  export type CmsBannerOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    linkUrl?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CmsBannerCountOrderByAggregateInput
    _avg?: CmsBannerAvgOrderByAggregateInput
    _max?: CmsBannerMaxOrderByAggregateInput
    _min?: CmsBannerMinOrderByAggregateInput
    _sum?: CmsBannerSumOrderByAggregateInput
  }

  export type CmsBannerScalarWhereWithAggregatesInput = {
    AND?: CmsBannerScalarWhereWithAggregatesInput | CmsBannerScalarWhereWithAggregatesInput[]
    OR?: CmsBannerScalarWhereWithAggregatesInput[]
    NOT?: CmsBannerScalarWhereWithAggregatesInput | CmsBannerScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"CmsBanner"> | string
    title?: StringWithAggregatesFilter<"CmsBanner"> | string
    message?: StringWithAggregatesFilter<"CmsBanner"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"CmsBanner"> | string | null
    linkUrl?: StringNullableWithAggregatesFilter<"CmsBanner"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"CmsBanner"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"CmsBanner"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"CmsBanner"> | boolean
    sortOrder?: IntWithAggregatesFilter<"CmsBanner"> | number
    createdBy?: UuidNullableWithAggregatesFilter<"CmsBanner"> | string | null
    updatedBy?: UuidNullableWithAggregatesFilter<"CmsBanner"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CmsBanner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CmsBanner"> | Date | string
  }

  export type CmsPageCreateInput = {
    id?: string
    slug: string
    title: string
    metaTitle?: string | null
    metaDescription?: string | null
    isPublished?: boolean
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: CmsSectionCreateNestedManyWithoutPageInput
  }

  export type CmsPageUncheckedCreateInput = {
    id?: string
    slug: string
    title: string
    metaTitle?: string | null
    metaDescription?: string | null
    isPublished?: boolean
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: CmsSectionUncheckedCreateNestedManyWithoutPageInput
  }

  export type CmsPageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: CmsSectionUpdateManyWithoutPageNestedInput
  }

  export type CmsPageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: CmsSectionUncheckedUpdateManyWithoutPageNestedInput
  }

  export type CmsPageCreateManyInput = {
    id?: string
    slug: string
    title: string
    metaTitle?: string | null
    metaDescription?: string | null
    isPublished?: boolean
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsPageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsPageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsSectionCreateInput = {
    id?: string
    type: $Enums.CMSSectionType
    title?: string | null
    subtitle?: string | null
    body?: string | null
    imageUrl?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    sortOrder?: number
    isVisible?: boolean
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    page: CmsPageCreateNestedOneWithoutSectionsInput
  }

  export type CmsSectionUncheckedCreateInput = {
    id?: string
    pageId: string
    type: $Enums.CMSSectionType
    title?: string | null
    subtitle?: string | null
    body?: string | null
    imageUrl?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    sortOrder?: number
    isVisible?: boolean
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsSectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCMSSectionTypeFieldUpdateOperationsInput | $Enums.CMSSectionType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    page?: CmsPageUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type CmsSectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    type?: EnumCMSSectionTypeFieldUpdateOperationsInput | $Enums.CMSSectionType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsSectionCreateManyInput = {
    id?: string
    pageId: string
    type: $Enums.CMSSectionType
    title?: string | null
    subtitle?: string | null
    body?: string | null
    imageUrl?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    sortOrder?: number
    isVisible?: boolean
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsSectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCMSSectionTypeFieldUpdateOperationsInput | $Enums.CMSSectionType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsSectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    type?: EnumCMSSectionTypeFieldUpdateOperationsInput | $Enums.CMSSectionType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsBannerCreateInput = {
    id?: string
    title: string
    message: string
    imageUrl?: string | null
    linkUrl?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isActive?: boolean
    sortOrder?: number
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsBannerUncheckedCreateInput = {
    id?: string
    title: string
    message: string
    imageUrl?: string | null
    linkUrl?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isActive?: boolean
    sortOrder?: number
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsBannerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsBannerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsBannerCreateManyInput = {
    id?: string
    title: string
    message: string
    imageUrl?: string | null
    linkUrl?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isActive?: boolean
    sortOrder?: number
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsBannerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsBannerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CmsSectionListRelationFilter = {
    every?: CmsSectionWhereInput
    some?: CmsSectionWhereInput
    none?: CmsSectionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CmsSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CmsPageCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    isPublished?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsPageMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    isPublished?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsPageMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    isPublished?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
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

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumCMSSectionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CMSSectionType | EnumCMSSectionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CMSSectionType[] | ListEnumCMSSectionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CMSSectionType[] | ListEnumCMSSectionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCMSSectionTypeFilter<$PrismaModel> | $Enums.CMSSectionType
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CmsPageScalarRelationFilter = {
    is?: CmsPageWhereInput
    isNot?: CmsPageWhereInput
  }

  export type CmsSectionCountOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    body?: SortOrder
    imageUrl?: SortOrder
    content?: SortOrder
    sortOrder?: SortOrder
    isVisible?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsSectionAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type CmsSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    body?: SortOrder
    imageUrl?: SortOrder
    sortOrder?: SortOrder
    isVisible?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsSectionMinOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    body?: SortOrder
    imageUrl?: SortOrder
    sortOrder?: SortOrder
    isVisible?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsSectionSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type EnumCMSSectionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CMSSectionType | EnumCMSSectionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CMSSectionType[] | ListEnumCMSSectionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CMSSectionType[] | ListEnumCMSSectionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCMSSectionTypeWithAggregatesFilter<$PrismaModel> | $Enums.CMSSectionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCMSSectionTypeFilter<$PrismaModel>
    _max?: NestedEnumCMSSectionTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CmsBannerCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    imageUrl?: SortOrder
    linkUrl?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsBannerAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type CmsBannerMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    imageUrl?: SortOrder
    linkUrl?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsBannerMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    imageUrl?: SortOrder
    linkUrl?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsBannerSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CmsSectionCreateNestedManyWithoutPageInput = {
    create?: XOR<CmsSectionCreateWithoutPageInput, CmsSectionUncheckedCreateWithoutPageInput> | CmsSectionCreateWithoutPageInput[] | CmsSectionUncheckedCreateWithoutPageInput[]
    connectOrCreate?: CmsSectionCreateOrConnectWithoutPageInput | CmsSectionCreateOrConnectWithoutPageInput[]
    createMany?: CmsSectionCreateManyPageInputEnvelope
    connect?: CmsSectionWhereUniqueInput | CmsSectionWhereUniqueInput[]
  }

  export type CmsSectionUncheckedCreateNestedManyWithoutPageInput = {
    create?: XOR<CmsSectionCreateWithoutPageInput, CmsSectionUncheckedCreateWithoutPageInput> | CmsSectionCreateWithoutPageInput[] | CmsSectionUncheckedCreateWithoutPageInput[]
    connectOrCreate?: CmsSectionCreateOrConnectWithoutPageInput | CmsSectionCreateOrConnectWithoutPageInput[]
    createMany?: CmsSectionCreateManyPageInputEnvelope
    connect?: CmsSectionWhereUniqueInput | CmsSectionWhereUniqueInput[]
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

  export type CmsSectionUpdateManyWithoutPageNestedInput = {
    create?: XOR<CmsSectionCreateWithoutPageInput, CmsSectionUncheckedCreateWithoutPageInput> | CmsSectionCreateWithoutPageInput[] | CmsSectionUncheckedCreateWithoutPageInput[]
    connectOrCreate?: CmsSectionCreateOrConnectWithoutPageInput | CmsSectionCreateOrConnectWithoutPageInput[]
    upsert?: CmsSectionUpsertWithWhereUniqueWithoutPageInput | CmsSectionUpsertWithWhereUniqueWithoutPageInput[]
    createMany?: CmsSectionCreateManyPageInputEnvelope
    set?: CmsSectionWhereUniqueInput | CmsSectionWhereUniqueInput[]
    disconnect?: CmsSectionWhereUniqueInput | CmsSectionWhereUniqueInput[]
    delete?: CmsSectionWhereUniqueInput | CmsSectionWhereUniqueInput[]
    connect?: CmsSectionWhereUniqueInput | CmsSectionWhereUniqueInput[]
    update?: CmsSectionUpdateWithWhereUniqueWithoutPageInput | CmsSectionUpdateWithWhereUniqueWithoutPageInput[]
    updateMany?: CmsSectionUpdateManyWithWhereWithoutPageInput | CmsSectionUpdateManyWithWhereWithoutPageInput[]
    deleteMany?: CmsSectionScalarWhereInput | CmsSectionScalarWhereInput[]
  }

  export type CmsSectionUncheckedUpdateManyWithoutPageNestedInput = {
    create?: XOR<CmsSectionCreateWithoutPageInput, CmsSectionUncheckedCreateWithoutPageInput> | CmsSectionCreateWithoutPageInput[] | CmsSectionUncheckedCreateWithoutPageInput[]
    connectOrCreate?: CmsSectionCreateOrConnectWithoutPageInput | CmsSectionCreateOrConnectWithoutPageInput[]
    upsert?: CmsSectionUpsertWithWhereUniqueWithoutPageInput | CmsSectionUpsertWithWhereUniqueWithoutPageInput[]
    createMany?: CmsSectionCreateManyPageInputEnvelope
    set?: CmsSectionWhereUniqueInput | CmsSectionWhereUniqueInput[]
    disconnect?: CmsSectionWhereUniqueInput | CmsSectionWhereUniqueInput[]
    delete?: CmsSectionWhereUniqueInput | CmsSectionWhereUniqueInput[]
    connect?: CmsSectionWhereUniqueInput | CmsSectionWhereUniqueInput[]
    update?: CmsSectionUpdateWithWhereUniqueWithoutPageInput | CmsSectionUpdateWithWhereUniqueWithoutPageInput[]
    updateMany?: CmsSectionUpdateManyWithWhereWithoutPageInput | CmsSectionUpdateManyWithWhereWithoutPageInput[]
    deleteMany?: CmsSectionScalarWhereInput | CmsSectionScalarWhereInput[]
  }

  export type CmsPageCreateNestedOneWithoutSectionsInput = {
    create?: XOR<CmsPageCreateWithoutSectionsInput, CmsPageUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: CmsPageCreateOrConnectWithoutSectionsInput
    connect?: CmsPageWhereUniqueInput
  }

  export type EnumCMSSectionTypeFieldUpdateOperationsInput = {
    set?: $Enums.CMSSectionType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CmsPageUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<CmsPageCreateWithoutSectionsInput, CmsPageUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: CmsPageCreateOrConnectWithoutSectionsInput
    upsert?: CmsPageUpsertWithoutSectionsInput
    connect?: CmsPageWhereUniqueInput
    update?: XOR<XOR<CmsPageUpdateToOneWithWhereWithoutSectionsInput, CmsPageUpdateWithoutSectionsInput>, CmsPageUncheckedUpdateWithoutSectionsInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCMSSectionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CMSSectionType | EnumCMSSectionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CMSSectionType[] | ListEnumCMSSectionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CMSSectionType[] | ListEnumCMSSectionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCMSSectionTypeFilter<$PrismaModel> | $Enums.CMSSectionType
  }

  export type NestedEnumCMSSectionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CMSSectionType | EnumCMSSectionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CMSSectionType[] | ListEnumCMSSectionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CMSSectionType[] | ListEnumCMSSectionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCMSSectionTypeWithAggregatesFilter<$PrismaModel> | $Enums.CMSSectionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCMSSectionTypeFilter<$PrismaModel>
    _max?: NestedEnumCMSSectionTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CmsSectionCreateWithoutPageInput = {
    id?: string
    type: $Enums.CMSSectionType
    title?: string | null
    subtitle?: string | null
    body?: string | null
    imageUrl?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    sortOrder?: number
    isVisible?: boolean
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsSectionUncheckedCreateWithoutPageInput = {
    id?: string
    type: $Enums.CMSSectionType
    title?: string | null
    subtitle?: string | null
    body?: string | null
    imageUrl?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    sortOrder?: number
    isVisible?: boolean
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsSectionCreateOrConnectWithoutPageInput = {
    where: CmsSectionWhereUniqueInput
    create: XOR<CmsSectionCreateWithoutPageInput, CmsSectionUncheckedCreateWithoutPageInput>
  }

  export type CmsSectionCreateManyPageInputEnvelope = {
    data: CmsSectionCreateManyPageInput | CmsSectionCreateManyPageInput[]
    skipDuplicates?: boolean
  }

  export type CmsSectionUpsertWithWhereUniqueWithoutPageInput = {
    where: CmsSectionWhereUniqueInput
    update: XOR<CmsSectionUpdateWithoutPageInput, CmsSectionUncheckedUpdateWithoutPageInput>
    create: XOR<CmsSectionCreateWithoutPageInput, CmsSectionUncheckedCreateWithoutPageInput>
  }

  export type CmsSectionUpdateWithWhereUniqueWithoutPageInput = {
    where: CmsSectionWhereUniqueInput
    data: XOR<CmsSectionUpdateWithoutPageInput, CmsSectionUncheckedUpdateWithoutPageInput>
  }

  export type CmsSectionUpdateManyWithWhereWithoutPageInput = {
    where: CmsSectionScalarWhereInput
    data: XOR<CmsSectionUpdateManyMutationInput, CmsSectionUncheckedUpdateManyWithoutPageInput>
  }

  export type CmsSectionScalarWhereInput = {
    AND?: CmsSectionScalarWhereInput | CmsSectionScalarWhereInput[]
    OR?: CmsSectionScalarWhereInput[]
    NOT?: CmsSectionScalarWhereInput | CmsSectionScalarWhereInput[]
    id?: UuidFilter<"CmsSection"> | string
    pageId?: UuidFilter<"CmsSection"> | string
    type?: EnumCMSSectionTypeFilter<"CmsSection"> | $Enums.CMSSectionType
    title?: StringNullableFilter<"CmsSection"> | string | null
    subtitle?: StringNullableFilter<"CmsSection"> | string | null
    body?: StringNullableFilter<"CmsSection"> | string | null
    imageUrl?: StringNullableFilter<"CmsSection"> | string | null
    content?: JsonNullableFilter<"CmsSection">
    sortOrder?: IntFilter<"CmsSection"> | number
    isVisible?: BoolFilter<"CmsSection"> | boolean
    createdBy?: UuidNullableFilter<"CmsSection"> | string | null
    updatedBy?: UuidNullableFilter<"CmsSection"> | string | null
    createdAt?: DateTimeFilter<"CmsSection"> | Date | string
    updatedAt?: DateTimeFilter<"CmsSection"> | Date | string
  }

  export type CmsPageCreateWithoutSectionsInput = {
    id?: string
    slug: string
    title: string
    metaTitle?: string | null
    metaDescription?: string | null
    isPublished?: boolean
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsPageUncheckedCreateWithoutSectionsInput = {
    id?: string
    slug: string
    title: string
    metaTitle?: string | null
    metaDescription?: string | null
    isPublished?: boolean
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsPageCreateOrConnectWithoutSectionsInput = {
    where: CmsPageWhereUniqueInput
    create: XOR<CmsPageCreateWithoutSectionsInput, CmsPageUncheckedCreateWithoutSectionsInput>
  }

  export type CmsPageUpsertWithoutSectionsInput = {
    update: XOR<CmsPageUpdateWithoutSectionsInput, CmsPageUncheckedUpdateWithoutSectionsInput>
    create: XOR<CmsPageCreateWithoutSectionsInput, CmsPageUncheckedCreateWithoutSectionsInput>
    where?: CmsPageWhereInput
  }

  export type CmsPageUpdateToOneWithWhereWithoutSectionsInput = {
    where?: CmsPageWhereInput
    data: XOR<CmsPageUpdateWithoutSectionsInput, CmsPageUncheckedUpdateWithoutSectionsInput>
  }

  export type CmsPageUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsPageUncheckedUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsSectionCreateManyPageInput = {
    id?: string
    type: $Enums.CMSSectionType
    title?: string | null
    subtitle?: string | null
    body?: string | null
    imageUrl?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    sortOrder?: number
    isVisible?: boolean
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsSectionUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCMSSectionTypeFieldUpdateOperationsInput | $Enums.CMSSectionType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsSectionUncheckedUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCMSSectionTypeFieldUpdateOperationsInput | $Enums.CMSSectionType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsSectionUncheckedUpdateManyWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCMSSectionTypeFieldUpdateOperationsInput | $Enums.CMSSectionType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
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