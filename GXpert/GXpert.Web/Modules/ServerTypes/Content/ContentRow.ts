﻿import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib";
import { EContentType } from "../Web/Enums.EContentType";
import { EDifficultyLevel } from "../Web/Enums.EDifficultyLevel";

export interface ContentRow {
    Id?: number;
    Title?: string;
    Description?: string;
    EContentType?: EContentType;
    FileKeyUrl?: string;
    Iv?: string;
    FilePath?: string;
    FilePathFallBack1?: string;
    FilePathFallBack2?: string;
    MediaInfo?: string;
    ThumbNail?: string;
    Poster?: string;
    Length?: number;
    Size?: number;
    NumberOfPages?: number;
    LikesCount?: number;
    DisLikesCount?: number;
    HandRaiseCount?: number;
    SearchTags?: string;
    EDifficultyLevel?: EDifficultyLevel;
    IsActive?: boolean;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class ContentRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'Title';
    static readonly localTextPrefix = 'Content.Content';
    static readonly lookupKey = 'Content.Content';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<ContentRow>('Content.Content') }
    static async getLookupAsync() { return getLookupAsync<ContentRow>('Content.Content') }

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<ContentRow>();
}