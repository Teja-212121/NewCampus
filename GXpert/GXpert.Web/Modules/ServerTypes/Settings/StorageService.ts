﻿import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from "@serenity-is/corelib";
import { StorageRow } from "./StorageRow";

export namespace StorageService {
    export const baseUrl = 'Settings/Storage';

    export declare function Create(request: SaveRequest<StorageRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<StorageRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<StorageRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<StorageRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<StorageRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<StorageRow>>;

    export const Methods = {
        Create: "Settings/Storage/Create",
        Update: "Settings/Storage/Update",
        Delete: "Settings/Storage/Delete",
        Retrieve: "Settings/Storage/Retrieve",
        List: "Settings/Storage/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>StorageService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}