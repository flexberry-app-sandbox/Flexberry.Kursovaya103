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
    /// Моющее сред.
    /// </summary>
    // *** Start programmer edit section *** (МоющееСред CustomAttributes)

    // *** End programmer edit section *** (МоющееСред CustomAttributes)
    [AutoAltered()]
    [Caption("Моющее средство")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("МоющееСредE", new string[] {
            "Моющее as \'Моющее\'"})]
    [View("МоющееСредL", new string[] {
            "Моющее as \'Моющее\'"})]
    public class МоющееСред : ICSSoft.STORMNET.DataObject
    {
        
        private int fМоющее;
        
        // *** Start programmer edit section *** (МоющееСред CustomMembers)

        // *** End programmer edit section *** (МоющееСред CustomMembers)

        
        /// <summary>
        /// Моющее.
        /// </summary>
        // *** Start programmer edit section *** (МоющееСред.Моющее CustomAttributes)

        // *** End programmer edit section *** (МоющееСред.Моющее CustomAttributes)
        public virtual int Моющее
        {
            get
            {
                // *** Start programmer edit section *** (МоющееСред.Моющее Get start)

                // *** End programmer edit section *** (МоющееСред.Моющее Get start)
                int result = this.fМоющее;
                // *** Start programmer edit section *** (МоющееСред.Моющее Get end)

                // *** End programmer edit section *** (МоющееСред.Моющее Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (МоющееСред.Моющее Set start)

                // *** End programmer edit section *** (МоющееСред.Моющее Set start)
                this.fМоющее = value;
                // *** Start programmer edit section *** (МоющееСред.Моющее Set end)

                // *** End programmer edit section *** (МоющееСред.Моющее Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "МоющееСредE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View МоющееСредE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("МоющееСредE", typeof(IIS.Kursovaya_10.МоющееСред));
                }
            }
            
            /// <summary>
            /// "МоющееСредL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View МоющееСредL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("МоющееСредL", typeof(IIS.Kursovaya_10.МоющееСред));
                }
            }
        }
    }
}
