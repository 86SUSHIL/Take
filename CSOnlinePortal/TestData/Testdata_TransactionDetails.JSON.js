'use strict';
module.exports = {
    "data": {
        "TRANSACTION_DETAILS": {
            "YOURFIRM_INFO": {
                "YOUR_FILE_NO": { value: "File12345" },
                "ACTING_FOR": { value: "Lender" },
                "LAWYER_NOTARY": { value: "A utoCSRSLawyer" },
                "CONTACT": { value: "A utoCSRSLawyer" },                                             
            },
            "ADDITIONAL_FIRM_INFO": {
                "FIRM1": {
                    "ACTING_FOR": { value: "Purchaser" },
                    "LAWYER_NOTARY": { value: "Additional Firm Lawyer" },
                    "CONTACT": { value: "Additional Firm Contact" },  
                    "LAW_FIRM": { value: "Additional Law Firm" },                        
                    "ADDRESS": { value: "Additional Firm Address" },     
                    "TELEPHONE_NO": { value: "1234567890" },                                          
                },
                "FIRM2": {
                    "ACTING_FOR": { value: "Purchaser" },
                    "LAWYER_NOTARY": { value: "Additional Firm Lawyer" },
                    "CONTACT": { value: "Additional Firm Contact" },  
                    "LAW_FIRM": { value: "Additional Law Firm" },                        
                    "ADDRESS": { value: "Additional Firm Address" },     
                    "TELEPHONE_NO": { value: "1234567890" },                                          
                },
                "FIRM3": {
                    "ACTING_FOR": { value: "Purchaser" },
                    "LAWYER_NOTARY": { value: "Additional Firm Lawyer" },
                    "CONTACT": { value: "Additional Firm Contact" },  
                    "LAW_FIRM": { value: "Additional Law Firm" },                        
                    "ADDRESS": { value: "Additional Firm Address" },     
                    "TELEPHONE_NO": { value: "1234567890" },                                          
                },
                "FIRM4": {
                    "ACTING_FOR": { value: "Purchaser" },
                    "LAWYER_NOTARY": { value: "Additional Firm Lawyer" },
                    "CONTACT": { value: "Additional Firm Contact" },  
                    "LAW_FIRM": { value: "Additional Law Firm" },                        
                    "ADDRESS": { value: "Additional Firm Address" },     
                    "TELEPHONE_NO": { value: "1234567890" },                                          
                },
                "FIRM5": {
                    "ACTING_FOR": { value: "Purchaser" },
                    "LAWYER_NOTARY": { value: "Additional Firm Lawyer" },
                    "CONTACT": { value: "Additional Firm Contact" },  
                    "LAW_FIRM": { value: "Additional Law Firm" },                        
                    "ADDRESS": { value: "Additional Firm Address" },     
                    "TELEPHONE_NO": { value: "1234567890" },                                          
                },
            },                                                                                              
            "TRANSACTION_INFO": {
                "CLOSING_DATE": { value: "2019-09-09" },
                "TRANSACTION_TYPE": { value: "Existing Owner" },
                "SHARED_PURCHASE": { value: "A" },
                "ENERGY_DEAL": { value: "Yes" },           
                "POLICY_TYPE": { value: "" },                                                 
            },
            "DDActingforValidation":          {
                "DDActingfor": ['--Select One--', 'Lender', 'Mortgagor', 'Mortgagor and Lender', 'Purchaser', 'Purchaser / Mortgagor', 'Purchaser and Lender', 'Vendor'],
                "DDActingforDefault": { value: "--Select One--" },
                "ErrorValidation": ["Validation Errors Sorry, we need some more information !Please complete all required fields to submit your order request Transaction Details: filenoText, Error: File number is required.Transaction Details: actingForOption, Error: Acting for is required.Transaction Details: LawyerNotaryOption, Error: Lawyer name/notary is required.Transaction Details: closingDateText, Error: Closing date is required.Transaction Details: additionalactingForOption, Error: Additional acting for is required.Transaction Details: additionalLawyerNotaryText, Error: Additional lawyer name/notary is required.Transaction Details: additionalLawyerFirmText, Error: Additional lawfirm is required."],
            }, 
              
        },
    }
}

