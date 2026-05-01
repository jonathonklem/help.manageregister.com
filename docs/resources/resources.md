---
sidebar_position: 1
---

# Resources

Resources created on [ManageMemberships.com](https://managememberships.com) can be booked through the calendar interface inside the POS system. Each resource (such as private lessons, facility rentals, or classes) has a unique `resource_id` that is required for proper pricing and booking logic. Because of this, **resources cannot be added manually to the cart without going through the booking flow.**

## How to Book a Resource

1. **Open the Calendar View**  
   Navigate to the Calendar tab from the POS or scheduling interface. You'll see available time slots for each resource.

2. **Select a Time Range**  
   Click and drag to choose a start and end time for the booking. Some resources may have fixed durations or constraints.

3. **Search for a Member**  
   Use the member search to assign the booking to an existing member. This will ensure the correct pricing tier is applied automatically.

4. **Proceed to Cart**  
   Once a time range and member are selected, click **"Proceed to Cart."** This will add the item to the cart with all the necessary metadata, including `resource_id`, `booking_start`, and `booking_end`.

## Marking Resources Unavailable

You can now **mark resources as unavailable directly from the calendar**.  
- Select a time slot for a resource, then choose **"Mark Unavailable"** and provide a reason.  
- These unavailability blocks will appear as colored blocks on the calendar, preventing bookings during that time.

## Removing Unavailability

To remove an unavailability block:
- Click on the unavailability block in the calendar.  
- You'll be prompted to confirm its removal, and once confirmed, the resource becomes available again for booking.

## Why This Matters

If a resource is missing its ID or booking timestamps, it won't be eligible for proper pricing or final checkout. The system uses these values to:

- Fetch the member-specific price from ManageMemberships
- Prevent scheduling conflicts
- Ensure revenue tracking is accurate

## Notes

- You **cannot** add a resource manually from the cart view.
- To edit or remove a resource, go back to the calendar and modify the time selection before proceeding again.
- If a resource does not appear in the calendar, make sure it is marked as active and bookable on ManageMemberships.
- Use the **Mark Unavailable** feature to block off times for maintenance, private events, or other non-bookable periods.
