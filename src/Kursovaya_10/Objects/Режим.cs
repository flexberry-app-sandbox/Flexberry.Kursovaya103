﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kursovaya_10
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Режим.
    /// </summary>
    // *** Start programmer edit section *** (Режим CustomAttributes)

    // *** End programmer edit section *** (Режим CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("РежимE", new string[] {
            "Название as \'Название\'",
            "МоющееСред as \'Моющее сред\'",
            "МоющееСред.Моющее as \'Моющее\'",
            "температуры as \'Температуры\'",
            "температуры.Температура as \'Температура\'",
            "Кондер as \'Кондер\'",
            "Кондер.Кондицион as \'Кондицион\'",
            "Вода as \'Вода\'",
            "Вода.Вода as \'Вода\'",
            "Время as \'Время\'",
            "Время.Время as \'Время\'"}, Hidden=new string[] {
            "МоющееСред.Моющее",
            "температуры.Температура",
            "Кондер.Кондицион",
            "Вода.Вода",
            "Время.Время"})]
    [MasterViewDefineAttribute("РежимE", "МоющееСред", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Моющее")]
    [MasterViewDefineAttribute("РежимE", "температуры", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Температура")]
    [MasterViewDefineAttribute("РежимE", "Кондер", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Кондицион")]
    [MasterViewDefineAttribute("РежимE", "Вода", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Вода")]
    [MasterViewDefineAttribute("РежимE", "Время", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Время")]
    [View("РежимL", new string[] {
            "Название as \'Название\'",
            "МоющееСред.Моющее as \'Моющее\'",
            "температуры.Температура as \'Температура\'",
            "Кондер.Кондицион as \'Кондицион\'",
            "Вода.Вода as \'Вода\'",
            "Время.Время as \'Время\'"})]
    public class Режим : ICSSoft.STORMNET.DataObject
    {
        
        private string fНазвание;
        
        private IIS.Kursovaya_10.МоющееСред fМоющееСред;
        
        private IIS.Kursovaya_10.температуры fтемпературы;
        
        private IIS.Kursovaya_10.Кондер fКондер;
        
        private IIS.Kursovaya_10.Вода fВода;
        
        private IIS.Kursovaya_10.Время fВремя;
        
        // *** Start programmer edit section *** (Режим CustomMembers)

        // *** End programmer edit section *** (Режим CustomMembers)

        
        /// <summary>
        /// Название.
        /// </summary>
        // *** Start programmer edit section *** (Режим.Название CustomAttributes)

        // *** End programmer edit section *** (Режим.Название CustomAttributes)
        [StrLen(255)]
        public virtual string Название
        {
            get
            {
                // *** Start programmer edit section *** (Режим.Название Get start)

                // *** End programmer edit section *** (Режим.Название Get start)
                string result = this.fНазвание;
                // *** Start programmer edit section *** (Режим.Название Get end)

                // *** End programmer edit section *** (Режим.Название Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Режим.Название Set start)

                // *** End programmer edit section *** (Режим.Название Set start)
                this.fНазвание = value;
                // *** Start programmer edit section *** (Режим.Название Set end)

                // *** End programmer edit section *** (Режим.Название Set end)
            }
        }
        
        /// <summary>
        /// Режим.
        /// </summary>
        // *** Start programmer edit section *** (Режим.Вода CustomAttributes)

        // *** End programmer edit section *** (Режим.Вода CustomAttributes)
        [PropertyStorage(new string[] {
                "Вода"})]
        [NotNull()]
        public virtual IIS.Kursovaya_10.Вода Вода
        {
            get
            {
                // *** Start programmer edit section *** (Режим.Вода Get start)

                // *** End programmer edit section *** (Режим.Вода Get start)
                IIS.Kursovaya_10.Вода result = this.fВода;
                // *** Start programmer edit section *** (Режим.Вода Get end)

                // *** End programmer edit section *** (Режим.Вода Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Режим.Вода Set start)

                // *** End programmer edit section *** (Режим.Вода Set start)
                this.fВода = value;
                // *** Start programmer edit section *** (Режим.Вода Set end)

                // *** End programmer edit section *** (Режим.Вода Set end)
            }
        }
        
        /// <summary>
        /// Режим.
        /// </summary>
        // *** Start programmer edit section *** (Режим.Время CustomAttributes)

        // *** End programmer edit section *** (Режим.Время CustomAttributes)
        [PropertyStorage(new string[] {
                "Время"})]
        [NotNull()]
        public virtual IIS.Kursovaya_10.Время Время
        {
            get
            {
                // *** Start programmer edit section *** (Режим.Время Get start)

                // *** End programmer edit section *** (Режим.Время Get start)
                IIS.Kursovaya_10.Время result = this.fВремя;
                // *** Start programmer edit section *** (Режим.Время Get end)

                // *** End programmer edit section *** (Режим.Время Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Режим.Время Set start)

                // *** End programmer edit section *** (Режим.Время Set start)
                this.fВремя = value;
                // *** Start programmer edit section *** (Режим.Время Set end)

                // *** End programmer edit section *** (Режим.Время Set end)
            }
        }
        
        /// <summary>
        /// Режим.
        /// </summary>
        // *** Start programmer edit section *** (Режим.Кондер CustomAttributes)

        // *** End programmer edit section *** (Режим.Кондер CustomAttributes)
        [PropertyStorage(new string[] {
                "Кондер"})]
        [NotNull()]
        public virtual IIS.Kursovaya_10.Кондер Кондер
        {
            get
            {
                // *** Start programmer edit section *** (Режим.Кондер Get start)

                // *** End programmer edit section *** (Режим.Кондер Get start)
                IIS.Kursovaya_10.Кондер result = this.fКондер;
                // *** Start programmer edit section *** (Режим.Кондер Get end)

                // *** End programmer edit section *** (Режим.Кондер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Режим.Кондер Set start)

                // *** End programmer edit section *** (Режим.Кондер Set start)
                this.fКондер = value;
                // *** Start programmer edit section *** (Режим.Кондер Set end)

                // *** End programmer edit section *** (Режим.Кондер Set end)
            }
        }
        
        /// <summary>
        /// Режим.
        /// </summary>
        // *** Start programmer edit section *** (Режим.МоющееСред CustomAttributes)

        // *** End programmer edit section *** (Режим.МоющееСред CustomAttributes)
        [PropertyStorage(new string[] {
                "МоющееСред"})]
        [NotNull()]
        public virtual IIS.Kursovaya_10.МоющееСред МоющееСред
        {
            get
            {
                // *** Start programmer edit section *** (Режим.МоющееСред Get start)

                // *** End programmer edit section *** (Режим.МоющееСред Get start)
                IIS.Kursovaya_10.МоющееСред result = this.fМоющееСред;
                // *** Start programmer edit section *** (Режим.МоющееСред Get end)

                // *** End programmer edit section *** (Режим.МоющееСред Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Режим.МоющееСред Set start)

                // *** End programmer edit section *** (Режим.МоющееСред Set start)
                this.fМоющееСред = value;
                // *** Start programmer edit section *** (Режим.МоющееСред Set end)

                // *** End programmer edit section *** (Режим.МоющееСред Set end)
            }
        }
        
        /// <summary>
        /// Режим.
        /// </summary>
        // *** Start programmer edit section *** (Режим.температуры CustomAttributes)

        // *** End programmer edit section *** (Режим.температуры CustomAttributes)
        [PropertyStorage(new string[] {
                "температуры"})]
        [NotNull()]
        public virtual IIS.Kursovaya_10.температуры температуры
        {
            get
            {
                // *** Start programmer edit section *** (Режим.температуры Get start)

                // *** End programmer edit section *** (Режим.температуры Get start)
                IIS.Kursovaya_10.температуры result = this.fтемпературы;
                // *** Start programmer edit section *** (Режим.температуры Get end)

                // *** End programmer edit section *** (Режим.температуры Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Режим.температуры Set start)

                // *** End programmer edit section *** (Режим.температуры Set start)
                this.fтемпературы = value;
                // *** Start programmer edit section *** (Режим.температуры Set end)

                // *** End programmer edit section *** (Режим.температуры Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "РежимE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РежимE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РежимE", typeof(IIS.Kursovaya_10.Режим));
                }
            }
            
            /// <summary>
            /// "РежимL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РежимL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РежимL", typeof(IIS.Kursovaya_10.Режим));
                }
            }
        }
    }
}
