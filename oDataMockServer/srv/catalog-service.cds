using my from '../db/schema';

@path: '/odata'
service UxCustomerService {
  entity UX_Customer as projection on my.Customers;
  entity UX_Booking  as projection on my.Bookings;
}
