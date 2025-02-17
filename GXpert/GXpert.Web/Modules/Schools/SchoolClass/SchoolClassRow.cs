using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Extensions.Entities;
using System;
using System.ComponentModel;

namespace GXpert.Schools;

[ConnectionKey("Default"), Module("Schools"), TableName("SchoolClasses")]
[DisplayName("School Class"), InstanceName("School Class")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class SchoolClassRow : LoggingRow<SchoolClassRow.RowFields>, IIdRow, INameRow
{
    const string jClass = nameof(jClass);
    const string jMedium = nameof(jMedium);
    const string jClassTeacher = nameof(jClassTeacher);
    const string jAcademicYear = nameof(jAcademicYear);

    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Class"), NotNull, ForeignKey("Classes", "Id"), LeftJoin(jClass), TextualField(nameof(ClassTitle))]
    [LookupEditor("Syllabus.Class")]
    public int? ClassId { get => fields.ClassId[this]; set => fields.ClassId[this] = value; }

    [DisplayName("Division"), Size(255), QuickSearch, NameProperty]
    public string Division { get => fields.Division[this]; set => fields.Division[this] = value; }

    [DisplayName("Medium"), ForeignKey("Mediums", "Id"), LeftJoin(jMedium), TextualField(nameof(MediumTitle))]
    [LookupEditor("Syllabus.Medium")]
    public int? MediumId { get => fields.MediumId[this]; set => fields.MediumId[this] = value; }

    [DisplayName("Class Teacher"), ForeignKey("Teachers", "Id"), LeftJoin(jClassTeacher), TextualField(nameof(ClassTeacherPrn))]
    [LookupEditor("Users.Teacher")]
    public int? ClassTeacherId { get => fields.ClassTeacherId[this]; set => fields.ClassTeacherId[this] = value; }

    [DisplayName("Title"), Size(255)]
    public string Title { get => fields.Title[this]; set => fields.Title[this] = value; }

    [DisplayName("Academic Year"), NotNull, ForeignKey("AcademicYears", "Id"), LeftJoin(jAcademicYear)]
    [TextualField(nameof(AcademicYearName))]
    [LookupEditor("Masters.AcademicYear")]
    public int? AcademicYearId { get => fields.AcademicYearId[this]; set => fields.AcademicYearId[this] = value; }

    [DisplayName("Is Active"), DefaultValue(1)]
    public bool? IsActive { get => fields.IsActive[this]; set => fields.IsActive[this] = value; }

    [DisplayName("Class Title"), Expression($"{jClass}.[Title]")]
    public string ClassTitle { get => fields.ClassTitle[this]; set => fields.ClassTitle[this] = value; }

    [DisplayName("Medium Title"), Expression($"{jMedium}.[Title]")]
    public string MediumTitle { get => fields.MediumTitle[this]; set => fields.MediumTitle[this] = value; }

    [DisplayName("Class Teacher Prn"), Expression($"{jClassTeacher}.[PRN]")]
    public string ClassTeacherPrn { get => fields.ClassTeacherPrn[this]; set => fields.ClassTeacherPrn[this] = value; }

    [DisplayName("Academic Year Name"), Expression($"{jAcademicYear}.[Name]")]
    public string AcademicYearName { get => fields.AcademicYearName[this]; set => fields.AcademicYearName[this] = value; }

    public class RowFields : LoggingRowFields
    {
        public Int32Field Id;
        public Int32Field ClassId;
        public StringField Division;
        public Int32Field MediumId;
        public Int32Field ClassTeacherId;
        public StringField Title;
        public Int32Field AcademicYearId;
        public BooleanField IsActive;

        public StringField ClassTitle;
        public StringField MediumTitle;
        public StringField ClassTeacherPrn;
        public StringField AcademicYearName;
    }
}