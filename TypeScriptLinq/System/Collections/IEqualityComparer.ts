module System {
    export module Collections {
        export interface IEqualityComparer<T>
        {
            Equals: (x: T, y: T) => boolean;
            GetHashCode: (obj: T) => number;
        }
    }
}

import IEqualityComparer = System.Collections.IEqualityComparer;
