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
    /// Температуры.
    /// </summary>
    // *** Start programmer edit section *** (температуры CustomAttributes)

    // *** End programmer edit section *** (температуры CustomAttributes)
    [AutoAltered()]
    [Caption("Температуры")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("температурыE", new string[] {
            "Температура as \'Температура\'"})]
    [View("температурыL", new string[] {
            "Температура as \'Температура\'"})]
    public class температуры : ICSSoft.STORMNET.DataObject
    {
        
        private int fТемпература;
        
        // *** Start programmer edit section *** (температуры CustomMembers)

        // *** End programmer edit section *** (температуры CustomMembers)

        
        /// <summary>
        /// Температура.
        /// </summary>
        // *** Start programmer edit section *** (температуры.Температура CustomAttributes)

        // *** End programmer edit section *** (температуры.Температура CustomAttributes)
        public virtual int Температура
        {
            get
            {
                // *** Start programmer edit section *** (температуры.Температура Get start)

                // *** End programmer edit section *** (температуры.Температура Get start)
                int result = this.fТемпература;
                // *** Start programmer edit section *** (температуры.Температура Get end)

                // *** End programmer edit section *** (температуры.Температура Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (температуры.Температура Set start)

                // *** End programmer edit section *** (температуры.Температура Set start)
                this.fТемпература = value;
                // *** Start programmer edit section *** (температуры.Температура Set end)

                // *** End programmer edit section *** (температуры.Температура Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "температурыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View температурыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("температурыE", typeof(IIS.Kursovaya_10.температуры));
                }
            }
            
            /// <summary>
            /// "температурыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View температурыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("температурыL", typeof(IIS.Kursovaya_10.температуры));
                }
            }
        }
    }
}
