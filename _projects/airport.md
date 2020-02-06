---
image_modal: true
order: 2
title: Concept for Airport Pick-Up Assistant
date: 2020-01-31
date_string: January 2020
role: Personal project
description: Many people are overwhelmed and stressed when they are picking up friends and family at an airport. Existing travel apps cater to the traveler—not for people who would pick them up. I added features to the existing Southwest Airlines website to make the pick-up experience less stressful. The user can receive flight status notifications, directions on how to get to the airport, and see the best place to meet the traveler.
resume_description: Streamlined process of picking up friends and family at the airport with added features to the Southwest Airlines website
thumbnail: /assets/projects/airport/thumbnail.png
thumbnail_alt: Screenshot of Airport Pick-Up Assistant
---
# Understanding the Audience

This project started when I was picking a friend up from the airport and I realized that, even as an air travel aficionado, I could not think of a single app designed to streamline the pick-up experience. I enjoy a trip to the airport—seeing a variety of planes from faraway places—but the average person does not.

For most people, a trip to the airport is an unfamiliar, complicated experience. An app that manages the seeming chaos would be quite valuable to the infrequent airport visitor.
{: .lead}

Designing for this audience comes with a unique challenge: requiring an app download for onboarding would likely deter a significant portion of potential users. A feature like this would likely be most successful as part of an existing airline's website, so I created the design as an addition to Southwest Airlines' website.

# Planning the App
To begin solving the problem of a stressful airport experience, I created a simple user flow for the Airport Pick-Up Assistant feature, following the user from the beginning of the interaction with the website to confirmation of a pick-up location. This gave me an idea of what screens would need to be created as part of this feature. I then sketched a design for each of the components that would make up the final design.

{% assign images="/assets/projects/airport/flow.jpg,/assets/projects/airport/sketches.jpg" | split: ',' %}
{% assign images_alt="User flow for Airport Pick-Up Assistant,Sketches for components of the user interface" | split: ',' %}
{% assign images_width="1470,1470" | split: ',' %}
{% include img_thumbs.html images=images images_alt=images_alt images_width=images_width modal=true caption=true %}    

A number of the UI elements in the Pick-Up Assistant—especially in the flow for finding the correct itinerary—already exist in the Southwest website. I wanted my design solution to be consistent with the existing Southwest brand, so I recreated these elements in Figma.

Since this is a personal project, I don't have all the design resources and brand guidelines that would be available to a designer at Southwest. I used as many elements as I possible from Southwest's website to ensure consistency with their existing design language.

# Vertical Rhythm with an 8-Point Grid
At this point I ran into a problem: the Southwest mobile website's design itself is not very consistent.
{: .lead}

Font colors and sizes, element padding, and alignment do not match from one page to another. One page uses 11 point font and the next uses 12 point with all caps for the same type of element. One element uses 13 pixel padding and the next uses 5. Some elements have no rounded corners, while others have a 2 or 4 pixel radius.

To introduce vertical rhythm into my design, I adjusted all element and font sizing and padding to follow an 8-point grid.
{: .lead}

I also made the UI elements much more consistent. One example of this is that whenever there's a departure and arrival, the text for the departure is aligned to the left and the text for arrival is to the right. This includes not only flights, but the car ride to the airport as well. There is always an icon of the appropriate vehicle in between the departure and arrival times (except for when the times are intentionally de-emphasized, such as the scheduled times for a flight that has been delayed).

I didn't want to reinvent the wheel—Southwest has a great brand already. Even with my changes to existing UI elements, they still retain most of the original design and stay true to Southwest's identity.

{% assign images="/assets/projects/airport/flyer_info_before.png,/assets/projects/airport/flyer_info_after.png,/assets/projects/airport/details_before.png,/assets/projects/airport/details_after.png" | split: ',' %}
{% assign images_alt="Before: flight information screen while boarding,After: flight information screen while boarding,Before: flight status,After: flight status" | split: ',' %}
{% assign images_width="375,375,375,375" | split: ',' %}
{% include img_thumbs.html images=images images_alt=images_alt images_width=images_width modal=true caption=true %} 

# Mockup
Using my user flow, I created mockups of all the necessary screens and made them interactive using Figma.
{: .lead}

The flow begins on the search screen, where the user finds and selects the correct flight. Once they have the flight selected, they can tap on its card at the top to view more details. They can see the status of the flight, and the time they need to leave in order to arrive at a good time. This arrival time is estimated based on the time the flight's estimated arrival time, time to deplane and walk to the exit, and time to collect checked bags, if any. The suggested Where to Meet location is determined based on an airport map and the arrival gate. The user can change the location if desired and the traveler will be notified of the change.

<div class="row justify-content-center">
    <div class="col-10 col-md-7">
        <div class="embed-responsive embed-responsive-9by16">
            <iframe class="embed-responsive-item" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FDdkecWFExTBbTQexpf3Eqz%2FPick-Up-Assistant%3F%26scaling%3Dcontain" allowfullscreen></iframe>
        </div>
    </div>
</div>