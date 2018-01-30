

select * from tbCustomer where DealID = (
select DealID from tbDeal where URN = '17111051202')

select * from tbPortalAdditionalLawyerInfo where DealID = (
select DealID from tbDeal where URN = '17111051202')

tbPortalTransaction

select * from tbCode