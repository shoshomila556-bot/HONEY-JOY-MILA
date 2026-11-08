## My system: <system name from PROJECT.md>

**Developer:** <HoneyJoyMila> (<BSIT-3E>)

### The problem in my own words
2 to 4 sentences: who has the problem, what goes wrong today, and what your system will fix.
--> "Organizers, of the donation drive struggle to keep accurate records of incoming donations and donor information. They often lose tracks of what items or funds have been received and how they are distributed. This sytem helps them log in every donation properly. It also lets them view records easily to avoid missing or duplicated entries."<--

### Roles
| Role | What they can do |
| --- | --- |
| Organizer | Add, edit, view donations records and generate simple reports|
| Donor | View their own donations history and submitted details|

### Resources (my database tables)
| Resource | Fields |
| --- | --- |
| Donors| id, Full_name, contact_info, address|
| Donations | id, donor_id, donation_type, amount_or_items, date_received, status|
| <resource 3> | id, ... |

### Key feature
1 to 2 sentences: what the system computes or blocks, and why it has to be checked in PHP, not only in React.
--> The system computes the real time domation progress againts each drives target goal. This calculation and data validation must run in PHP because React fontend checks can be bypassed by users.

### Rules (who can do what)
- <rule 1> Organizers can add donation records, update status, and view progress reports.
- <rule 2> Donors can view their own submission and the public drive progress.
- <rule 3> No one can delete past records without an organizers admin approval.
```
