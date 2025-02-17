﻿import { fieldsProxy } from "@serenity-is/corelib";
import { EAttemptStatus } from "../Web/Enums.EAttemptStatus";

export interface ExamAttemptQuestionRow {
    Id?: number;
    ExamAttemptId?: number;
    ExamQuestionId?: number;
    OptionSelected?: string;
    MarksObtained?: number;
    Attemptstatus?: EAttemptStatus;
    OutOfmarks?: number;
    Result?: string;
    IsActive?: boolean;
    ExamAttemptStudentAnswerSheetUpload?: string;
    ExamQuestionRightAnswer?: string;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class ExamAttemptQuestionRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'OptionSelected';
    static readonly localTextPrefix = 'Analytics.ExamAttemptQuestion';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<ExamAttemptQuestionRow>();
}