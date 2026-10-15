namespace my;

entity Customers {
  key CustomerGuid : UUID;
  CustomerNumber   : String(8);
  Form             : String(15);
  CustomerName     : String(25);
  Street           : String(30);
  PostCode         : String(10);
  City             : String(25);
  Country          : String(3);
  Email            : String(40);
  Telephone        : String(30);
  Discount         : String(3);
  changed_at       : Timestamp;
  _Bookings        : Association to many Bookings on _Bookings.CustomerGuid = CustomerGuid;
}

entity Bookings {
  key BookingGuid        : UUID;
  AirlineID              : String(3);
  ConnectionNumber       : String(4);
  FlightDate             : Date;
  BookingNumber          : String(8);
  BookingDate            : Date;
  Class                  : String(1);
  ForeignCurrencyPayment : Decimal(15,2);
  ForeignCurrency        : String(5);
  AgencyNumber           : String(8);
  CustomerGuid           : UUID;
  IsCancelled            : String(1);
  _Customer              : Association to Customers on _Customer.CustomerGuid = CustomerGuid;
}
