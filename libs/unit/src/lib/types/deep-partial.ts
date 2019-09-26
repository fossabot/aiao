export declare type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer UE>
    ? ReadonlyArray<DeepPartial<UE>>
    : DeepPartial<T[P]>;
};
