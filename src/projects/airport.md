---
eleventyNavigation:
  key: Airport Pick-Up Assistant
  parent: Projects
tags: project
title: Airport Pick-Up Assistant Concept
date: 2020-01-31
date_string: January 2020
role: Personal project
skills:
    - UX/UI Design
    - Mobile
    - Brand Identity
description: I streamlined the process of picking up friends and family at the airport, creating a design in Figma that adds features to the Southwest Airlines mobile website and integrates with Southwest's existing brand.
resume_description:
    - Streamlined process of picking up friends and family at the airport with added features to the Southwest Airlines mobile website, integrating with existing brand
    - Created sketches, then mockups and an interactive prototype using Figma
thumbnail: projects/airport/thumbnail.png
thumbnail_alt: Screenshot of Airport Pick-Up Assistant
---
{% section %}
## Purpose

**Many people are overwhelmed and stressed when they are picking up friends and family at an airport.** Existing travel apps cater to the traveler—not for people who would pick them up. A significant portion of the stress of a trip to the airport is the result of unfamiliarity and uncertainty. Is the flight delayed? When should I get to the airport? Where should I go once I get there?
{% endsection %}

{% section %}
## Deliverables

**My project provides the driver with helpful information** that reduces the unknowns of a trip to the airport, making the pick-up experience less stressful. I created a design using Figma that adds features to the existing Southwest Airlines website. The driver can receive flight status and time-to-leave notifications, get directions on how to get to the airport, and find the best place to meet the traveler.
{% endsection %}

{% section %}
## Process
**My process included a user flow, sketches, and a prototype.** From the project concept, I began by creating a user flow. I then sketched ideas for what the features in the user flow would look like and created a simple design system. With components from the design system, I created an interactive prototype in Figma.
{% endsection %}

{% section %}
## My Role
**I completed the entirety of this project myself.**
{% endsection %}


{% ImageThumbs {
    imagesSrc: ["projects/airport/showcase_1.png","projects/airport/showcase_2.png"],
    imagesAltText: ["Pick-Up Assistant: driver view","Pick-Up Assistant: traveler view"],
    imagesWidth: [750, 750],
    id: "lightbox_showcase",
    caption: true
} %}

{% section classStr="text-center" %}
{% Button {
    text: "Skip to Mockup",
    icon: "feather:arrow-down",
    href: "#mockup",
    large: true
}%}
{% endsection %}

{% section tall=true %}
***
{% endsection %}

{% section tall=true %}
# Process

<div class="timeline-row">
    <div class="timeline-col">
        <a href="#research">
            {% Image src="projects/airport/research.svg", alt="" %}
            <p>Research</p>
        </a>
    </div>
    <div class="timeline-col">
        <a href="#sketches">
            {% Image src="projects/airport/sketches.svg", alt="" %}
            <p>Sketches and Wireframes</p>
        </a>
    </div>
    <div class="timeline-col">
        <a href="#design">
            {% Image src="projects/airport/design.svg", alt="" %}
            <p>Design</p>
        </a>
    </div>
    <div class="timeline-col">
        <a href="#prototype">
            {% Image src="projects/airport/prototype.svg", alt="" %}
            <p>Prototype</p>
        </a>
    </div>
</div>

{% section id="research" %}
## Research

{% section classStr="image-margins-x text-center" %}
{% Image src="projects/airport/research.svg", alt="Illustration of woman laying down, using laptop", classStr="illustration" %}
{% endsection %}

I got the idea for this project when I was picking a friend up from the airport. I realized that, even as an air travel aficionado, I could not think of a single app designed to streamline the pick-up experience for a driver. I enjoy a trip to the airport—seeing a variety of planes from faraway places—but the average person does not.

{% lead %}
For many people, a trip to the airport is an unfamiliar, complicated experience. A solution to manage the seeming chaos would be quite valuable to the infrequent airport visitor.
{% endlead %}

I initially planned on designing a separate app for drivers to receive flight updates and information. As I thought through the target user, who does not go to the airport often, and why they might download such an app, however, I realized that this solution would not be practical. Requiring an app download for onboarding would likely deter a significant portion of potential users.

A set of features like this would likely be most successful as part of an existing airline's website because the friction in the onboarding process could be reduced significantly. I chose Southwest Airlines because their target customer is budget-conscious—the kind of traveler who might get a ride to and from the airport from friends or family instead of paying for an Uber.
{% endsection %}

{% section id="sketches" %}
## Sketches and Wireframes

{% section classStr="image-margins-x text-center" %}
{% Image src="projects/airport/sketches.svg", alt="Illustration of a woman sketching user interface elements", classStr="illustration" %}
{% endsection %}

{% lead %}
To begin solving the problem of a stressful airport experience, I created a simple user flow for an Airport Pick-Up Assistant feature.
{% endlead %}

The user flow follows them from the beginning of the interaction with the website to pick-up. This gave me an idea of what screens would need to be created as part of this feature. I sketched a potential design for a home screen for a standalone app before pivoting towards designing a solution within an airline website. I then sketched a design for each of the components that would make up the final design.

{% ImageThumbs {
    imagesSrc: ["projects/airport/flow.jpg","projects/airport/sketches_1.jpg","projects/airport/sketches_2.jpg"],
    imagesAltText: ["User flow for Airport Pick-Up Assistant","Sketches of a potential home screen","Sketches of user interface components"],
    imagesWidth: [1470,1425,1441],
    id: "lightbox_sketches",
    no2x: true,
    caption: true
} %}
{% endsection %}

{% section id="design" %}
## Design

{% section classStr="image-margins-x text-center" %}
{% Image src="projects/airport/design.svg", alt="Illustration of a man next to mobile app designs", classStr="illustration" %}
{% endsection %}

A number of the UI elements in the Pick-Up Assistant—especially in the flow to select the correct flights—exist already in the Southwest website. I didn't want to reinvent the wheel. Southwest has a great brand already.

{% lead %}
I used relevant elements from Southwest's website to maintain consistency with their existing design language.
{% endlead %}

I ran into a problem with these elements, however: the Southwest mobile website's design itself is not very consistent. Font colors and sizes, element padding, corner radius, and alignment are not the same from one page to another. I addressed these issues in my new design.

{% lead %}
To introduce vertical rhythm into my design, I adjusted all element and font sizing and padding to follow an 8-point grid.
{% endlead %}

I also made UI elements much more consistent. In my design, whenever there's a departure and arrival listed, the text for departure is aligned to the left and the text for arrival is to the right. There is always an icon representing the appropriate vehicle in between the departure and arrival times (except for when the times are intentionally de-emphasized, such as the scheduled times for a flight that has been delayed). This applies to flights as well as other transportation, like the car ride to the airport.

Even with my changes to existing UI elements, they still retain most of the original design and stay true to Southwest's identity.

{% ImageThumbs {
    imagesSrc: ["projects/airport/flyer_info_before.png","projects/airport/flyer_info_after.png"],
    imagesAltText: ["Before: flight information screen while boarding","After: flight information screen while boarding"],
    imagesWidth: [750,750],
    id: "lightbox_design",
    caption: true
} %}

{% ImageThumbs {
    imagesSrc: ["projects/airport/status_before.png","projects/airport/status_after.png"],
    imagesAltText: ["User flow for Airport Pick-Up Assistant","Sketches of a potential home screen","Sketches of user interface components"],
    imagesWidth: [750,750],
    id: "lightbox_design",
    caption: true
} %}
{% endsection %}

{% section id="prototype" %}
## Prototype

{% section classStr="image-margins-x text-center" %}
{% Image src="projects/airport/prototype.svg", alt="Illustration of a man standing next to a mobile phone", classStr="illustration" %}
{% endsection %}

{% lead %}
With the user flow, I created mockups of each of this feature's screens, making them interactive using Figma.
{% endlead %}

The driver view begins on the search screen, where the user finds and selects the correct flight. Once they have the flight selected, they can tap on its card at the top to view more details. They can see the status of the flight, and the time they need to leave in order to arrive at a good time. The time to leave is estimated based on the time the flight's estimated arrival time, time to deplane and walk to the exit, and time to collect checked bags, if any. 

The traveler view allows the user to see estimated times for baggage arrival and information on where to meet the person picking them up.

The suggested Where to Meet location is determined based on an airport map and the arrival gate. The user can change the location if desired and the other party will be notified of the change.

<div id="mockup" class="section section-wide row justify-content-around text-center">
    <div class="col-10 col-md-6 col-lg-5">
        <h3>Driver View</h3>
        <div class="embed-responsive embed-responsive-9by16 image-margins-b">
            <iframe class="embed-responsive-item" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FDdkecWFExTBbTQexpf3Eqz%2FPick-Up-Assistant%3F%26scaling%3Dcontain" loading="lazy" allowfullscreen></iframe>
        </div>
    </div>
    <div class="col-10 col-md-6 col-lg-5">
        <h3>Traveler View</h3>
        <div class="embed-responsive embed-responsive-9by16 image-margins-b">
            <iframe class="embed-responsive-item" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FDdkecWFExTBbTQexpf3Eqz%2FPick-Up-Assistant%3Fnode-id%3D167%253A64%26scaling%3Dcontain" loading="lazy" allowfullscreen></iframe>
        </div>
    </div>
</div>
{% endsection %}

{% endsection %}

{% section tall=true %}
# Conclusion

{% lead %}
My final design provides useful flight updates and information for drivers picking up friends and family at the airport.
{% endlead %}

I added flight status updates for drivers, notifications when it's time to leave, easily discoverable directions on how to get to the airport, and suggestions on the best place to meet the traveler.

If I were to do this project again, I would spend more time researching potential users. Without extensive research, there may be additional use cases and issues I've neglected to address in my solution. In its absence, my own interest in the aviation industry provided background knowledge that proved quite helpful.
{% endsection %}