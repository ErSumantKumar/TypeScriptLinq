module System {
    export module Collections
    {
        export interface IGrouping<TKey, T>
        {
            Key: TKey;
            Elements: T[];
        }
    }
} 

import IGrouping = System.Collections.IGrouping;