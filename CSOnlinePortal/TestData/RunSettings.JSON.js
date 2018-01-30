'use strict';
module.exports = {
    "data": {
        "Global": {
            "ENVIRONMENT": { value: "CS-RQA1" },
            "RESULTS_DIRECTORY": { value: "TEST" },
            "URL_CSPORTAL": { value: "http://iisprillcdqa01.prefirstcdn.com/Profile/Login.aspx" },
            "RQA1": {
                "URL_CSPORTAL": { value: "http://iisprillcdqa01.prefirstcdn.com/Profile/Login.aspx" },
                "URL_CUC": { value: "http://iispricucqa01.prefirstcdn.com/CUCapp/Login.aspx" }
            },
            "RQA2": {
                "URL_CSPORTAL": { value: "https://iisprillcdqa01.prefirstcdn.com/Profile/Login.aspx" },
            },
            "Preprod": {
                "URL_CSPORTAL": { value: "https://iisprillcdqa01.prefirstcdn.com/Profile/Login.aspx" },
            },
            "Users_CUC": {
                "RQA1_USER": {
                    "USER_ID": { value: "s-ypadma" }, //Done
                    "PASSWORD": { value: "Password10" }
                },
            },
            "Users": {
                "CSOnlyActiveLawyer": {
                    "USER_ID": { value: "AutoCSLawyer" }, //Done
                    "PASSWORD": { value: "Password1" }
                },
                "CSOnlyActiveNotary": {
                    "USER_ID": { value: "AutoCSNotary" }, //Done
                    "PASSWORD": { value: "Password1" }
                },
                "CSOnlyActiveLawclerk": {
                    "USER_ID": { value: "AutoCSLawclerk" }, //Done
                    "PASSWORD": { value: "Password1" }
                },
                "RSOnlyActiveLawclerk": {
                    "USER_ID": { value: "AutoRSLawclerk" }, //Done
                    "PASSWORD": { value: "Password1" }
                },
                "CSRSActiveLawclerk": {
                    "USER_ID": { value: "AutoCSRSLawclerk" }, //Done
                    "PASSWORD": { value: "Password1" }
                },
                "CSRSActiveLegalAssistant": {
                    "USER_ID": { value: "AutoCSRSLegAssist" }, //Done
                    "PASSWORD": { value: "Password1" }
                },
                "CSRSActiveConveyancer": {
                    "USER_ID": { value: "AutoCSRSConv" }, //Done
                    "PASSWORD": { value: "Password1" }
                },
                "CSLawyerInactive": {
                    "USER_ID": { value: "AutoCSLawyerInacti" }, //Done
                    "PASSWORD": { value: "Password1" }
                },
                "CSOnlyDeclined": {
                    "USER_ID": { value: "AutoCSDeclined" }, //Done
                    "PASSWORD": { value: "Password1" }
                },
                "CSRSActiveBoth": {
                    "USER_ID": { value: "AutoCSRSLawyer" }, //Done
                    "PASSWORD": { value: "Password1" }
                },
                "CSRSInactiveBoth": {
                    "USER_ID": { value: "AutoCSRSInactive" }, //Done   
                    "PASSWORD": { value: "Password1" }
                },
                "CSActiveRSInactive": {
                    "USER_ID": { value: "AutoCSActRSInact" }, //Done
                    "PASSWORD": { value: "Password1" }
                },
                "CSInactiveRSActive": {
                    "USER_ID": { value: "AutoCSInactRSAct" }, //Done
                    "PASSWORD": { value: "Password1" }
                },
                "LLCCSLawyer": {
                    "USER_ID": { value: "AutoLLCCSLawyer" }, //Done
                    "PASSWORD": { value: "Password1" }
                },
                "CSSSLawyer": {
                    "USER_ID": { value: "AutoCSSSLawyer" }, //Done
                    "PASSWORD": { value: "Password1" }
                },
                "CSRSSSLawyer": {
                    "USER_ID": { value: "AutoCSRSSSLawyer" }, //Done
                    "PASSWORD": { value: "Password1" }
                },
                "CSRSSSLawclerk": {
                    "USER_ID": { value: "AutoCSRSSSLawclerk" }, //Done
                    "PASSWORD": { value: "Password1" }
                },
                /*
                "CSOnlyNew": {
                    "USER_ID": {value:"AutoCSLawyerNew"}, 
                    "PASSWORD": {value:"Password1"}
                },
                */
            }

        }
    }
}