﻿import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib";

export interface TeacherRow {
    Id?: number;
    Prn?: string;
    Name?: string;
    Email?: string;
    Mobile?: string;
    UserId?: number;
    Description?: string;
    StateId?: number;
    DistrictId?: number;
    TalukaId?: number;
    Dob?: string;
    SchoolId?: number;
    IsActive?: boolean;
    Username?: string;
    StateTitle?: string;
    DistrictTitle?: string;
    TalukaTitle?: string;
    SchoolName?: string;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class TeacherRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'Prn';
    static readonly localTextPrefix = 'Users.Teacher';
    static readonly lookupKey = 'Users.Teacher';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<TeacherRow>('Users.Teacher') }
    static async getLookupAsync() { return getLookupAsync<TeacherRow>('Users.Teacher') }

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<TeacherRow>();
}