// const surveyJson = {
//         "title": "AI Safety Cape Town Role Application Form",
//         "description": "Thank you for your interest in working with AI Safety Cape Town! Please complete this application to help us understand your background, interests, and how you'd like to contribute to AI safety work in South Africa. This form should take approximately 15-20 minutes to complete.",
//         "logoPosition": "right",
//         "pages": [
//           {
//             "name": "basic_info",
//             "title": "Basic Information",
//             "elements": [
//               {
//                 "type": "text",
//                 "name": "email",
//                 "title": "Email",
//                 "isRequired": true,
//                 "inputType": "email",
//                 "placeholder": "Your email"
//               },
//               {
//                 "type": "text",
//                 "name": "full_name",
//                 "title": "Full Name",
//                 "isRequired": true,
//                 "placeholder": "Your answer"
//               },
//               {
//                 "type": "text",
//                 "name": "phone",
//                 "title": "Phone Number",
//                 "description": "Include country code, e.g +27",
//                 "placeholder": "Your answer"
//               },
//               {
//                 "type": "text",
//                 "name": "location",
//                 "title": "Location (City/Country)",
//                 "description": "Where are you primarily based at the moment?",
//                 "isRequired": true,
//                 "placeholder": "Your answer"
//               },
//               {
//                 "type": "text",
//                 "name": "linkedin_cv",
//                 "title": "LinkedIn/CV URL",
//                 "isRequired": true,
//                 "inputType": "url",
//                 "placeholder": "Your answer"
//               },
//               {
//                 "type": "text",
//                 "name": "portfolio",
//                 "title": "Portfolio/personal website URL",
//                 "inputType": "url",
//                 "placeholder": "Your answer"
//               },
//               {
//                 "type": "checkbox",
//                 "name": "how_heard",
//                 "title": "How did you hear about this opportunity?",
//                 "isRequired": true,
//                 "choices": [
//                   "LinkedIn",
//                   "Newsletter",
//                   "Word of mouth",
//                   "University/Academic network",
//                   "AI Safety community",
//                   "Conference/Event"
//                 ],
//                 "showOtherItem": true,
//                 "otherText": "Other:"
//               },
//               {
//                 "type": "text",
//                 "name": "start_date",
//                 "title": "Earliest start date",
//                 "isRequired": true,
//                 "inputType": "date"
//               },
//               {
//                 "type": "radiogroup",
//                 "name": "consent",
//                 "title": "I consent to AI Safety Cape Town sharing my profile information with trusted partner organizations when relevant opportunities arise. You can opt out anytime.",
//                 "isRequired": true,
//                 "choices": [
//                   "Yes",
//                   "No"
//                 ]
//               }
//             ]
//           },
//           {
//             "name": "mission_and_roles",
//             "title": "Mission & Role Interest",
//             "elements": [
//               {
//                 "type": "comment",
//                 "name": "mission_attraction",
//                 "title": "Mission",
//                 "description": "What attracts you to AI Safety Cape Town's mission of building capacity in South Africa to respond to AI risk?",
//                 "placeholder": "Your answer"
//               },
//               {
//                 "type": "checkbox",
//                 "name": "roles_interested",
//                 "title": "Which roles are you interested in applying for?",
//                 "description": "Note that one person can have many roles. You can see a description of available roles on this document.",
//                 "isRequired": true,
//                 "choices": [
//                   "Director",
//                   "Operator",
//                   "Graphic Designer",
//                   "Infrastructure Developer",
//                   "Partnerships Manager",
//                   "Event Curator",
//                   "Talent Developer",
//                   "Content Lead",
//                   "Advisor"
//                 ]
//               }
//             ]
//           },
//           {
//             "name": "director_details",
//             "title": "Director Role Details",
//             "visibleIf": "{roles_interested} contains 'Director'",
//             "elements": [
//               {
//                 "type": "comment",
//                 "name": "director_motivation",
//                 "title": "Role motivation - Director",
//                 "description": "Why are you interested in the Director role?",
//                 "isRequired": true,
//                 "placeholder": "Your answer"
//               },
//               {
//                 "type": "comment",
//                 "name": "director_experience",
//                 "title": "Experience & skills - Director",
//                 "description": "What relevant experiences and skills do you have for the Director role? We're keen to hear about professional, personal or academic examples of you contributing to relevant past projects.",
//                 "isRequired": true,
//                 "placeholder": "Your answer"
//               }
//             ]
//           },
//           {
//             "name": "operator_details",
//             "title": "Operator Role Details",
//             "visibleIf": "{roles_interested} contains 'Operator'",
//             "elements": [
//               {
//                 "type": "comment",
//                 "name": "operator_motivation",
//                 "title": "Role motivation - Operator",
//                 "description": "Why are you interested in the Operator role?",
//                 "isRequired": true,
//                 "placeholder": "Your answer"
//               },
//               {
//                 "type": "comment",
//                 "name": "operator_experience",
//                 "title": "Experience & skills - Operator",
//                 "description": "What relevant experiences and skills do you have for the Operator role? We're keen to hear about professional, personal or academic examples of you contributing to relevant past projects.",
//                 "isRequired": true,
//                 "placeholder": "Your answer"
//               }
//             ]
//           },
//           {
//             "name": "designer_details",
//             "title": "Graphic Designer Role Details",
//             "visibleIf": "{roles_interested} contains 'Graphic Designer'",
//             "elements": [
//               {
//                 "type": "comment",
//                 "name": "designer_motivation",
//                 "title": "Role motivation - Graphic Designer",
//                 "description": "Why are you interested in the Graphic Designer role?",
//                 "isRequired": true,
//                 "placeholder": "Your answer"
//               },
//               {
//                 "type": "comment",
//                 "name": "designer_experience",
//                 "title": "Experience & skills - Graphic Designer",
//                 "description": "What relevant experiences and skills do you have for the Graphic Designer role? We're keen to hear about professional, personal or academic examples of you contributing to relevant past projects.",
//                 "isRequired": true,
//                 "placeholder": "Your answer"
//               }
//             ]
//           },
//           {
//             "name": "infrastructure_details",
//             "title": "Infrastructure Developer Role Details",
//             "visibleIf": "{roles_interested} contains 'Infrastructure Developer'",
//             "elements": [
//               {
//                 "type": "comment",
//                 "name": "infrastructure_motivation",
//                 "title": "Role motivation - Infrastructure Developer",
//                 "description": "Why are you interested in the Infrastructure Developer role?",
//                 "isRequired": true,
//                 "placeholder": "Your answer"
//               },
//               {
//                 "type": "comment",
//                 "name": "infrastructure_experience",
//                 "title": "Experience & skills - Infrastructure Developer",
//                 "description": "What relevant experiences and skills do you have for the Infrastructure Developer role? We're keen to hear about professional, personal or academic examples of you contributing to relevant past projects.",
//                 "isRequired": true,
//                 "placeholder": "Your answer"
//               }
//             ]
//           },
//           {
//             "name": "partnerships_details",
//             "title": "Partnerships Manager Role Details",
//             "visibleIf": "{roles_interested} contains 'Partnerships Manager'",
//             "elements": [
//               {
//                 "type": "comment",
//                 "name": "partnerships_motivation",
//                 "title": "Role motivation - Partnerships Manager",
//                 "description": "Why are you interested in the Partnerships Manager role?",
//                 "isRequired": true,
//                 "placeholder": "Your answer"
//               },
//               {
//                 "type": "comment",
//                 "name": "partnerships_experience",
//                 "title": "Experience & skills - Partnerships Manager",
//                 "description": "What relevant experiences and skills do you have for the Partnerships Manager role? We're keen to hear about professional, personal or academic examples of you contributing to relevant past projects.",
//                 "isRequired": true,
//                 "placeholder": "Your answer"
//               }
//             ]
//           },
//           {
//             "name": "curator_details",
//             "title": "Event Curator Role Details",
//             "visibleIf": "{roles_interested} contains 'Event Curator'",
//             "elements": [
//               {
//                 "type": "comment",
//                 "name": "curator_motivation",
//                 "title": "Role motivation - Event Curator",
//                 "description": "Why are you interested in the Event Curator role?",
//                 "isRequired": true,
//                 "placeholder": "Your answer"
//               },
//               {
//                 "type": "comment",
//                 "name": "curator_experience",
//                 "title": "Experience & skills - Event Curator",
//                 "description": "What relevant experiences and skills do you have for the Event Curator role? We're keen to hear about professional, personal or academic examples of you contributing to relevant past projects.",
//                 "isRequired": true,
//                 "placeholder": "Your answer"
//               }
//             ]
//           },
//           {
//             "name": "talent_details",
//             "title": "Talent Developer Role Details",
//             "visibleIf": "{roles_interested} contains 'Talent Developer'",
//             "elements": [
//               {
//                 "type": "comment",
//                 "name": "talent_motivation",
//                 "title": "Role motivation - Talent Developer",
//                 "description": "Why are you interested in the Talent Developer role?",
//                 "isRequired": true,
//                 "placeholder": "Your answer"
//               },
//               {
//                 "type": "comment",
//                 "name": "talent_experience",
//                 "title": "Experience & skills - Talent Developer",
//                 "description": "What relevant experiences and skills do you have for the Talent Developer role? We're keen to hear about professional, personal or academic examples of you contributing to relevant past projects.",
//                 "isRequired": true,
//                 "placeholder": "Your answer"
//               }
//             ]
//           },
//           {
//             "name": "content_details",
//             "title": "Content Lead Role Details",
//             "visibleIf": "{roles_interested} contains 'Content Lead'",
//             "elements": [
//               {
//                 "type": "comment",
//                 "name": "content_motivation",
//                 "title": "Role motivation - Content Lead",
//                 "description": "Why are you interested in the Content Lead role?",
//                 "isRequired": true,
//                 "placeholder": "Your answer"
//               },
//               {
//                 "type": "comment",
//                 "name": "content_experience",
//                 "title": "Experience & skills - Content Lead",
//                 "description": "What relevant experiences and skills do you have for the Content Lead role? We're keen to hear about professional, personal or academic examples of you contributing to relevant past projects.",
//                 "isRequired": true,
//                 "placeholder": "Your answer"
//               }
//             ]
//           },
//           {
//             "name": "advisor_details",
//             "title": "Advisor Role Details",
//             "visibleIf": "{roles_interested} contains 'Advisor'",
//             "elements": [
//               {
//                 "type": "comment",
//                 "name": "advisor_motivation",
//                 "title": "Role motivation - Advisor",
//                 "description": "Why are you interested in the Advisor role?",
//                 "isRequired": true,
//                 "placeholder": "Your answer"
//               },
//               {
//                 "type": "comment",
//                 "name": "advisor_experience",
//                 "title": "Experience & skills - Advisor",
//                 "description": "What relevant experiences and skills do you have for the Advisor role? We're keen to hear about professional, personal or academic examples of you contributing to relevant past projects.",
//                 "isRequired": true,
//                 "placeholder": "Your answer"
//               }
//             ]
//           },
//           {
//             "name": "additional_info",
//             "title": "Additional Information",
//             "elements": [
//               {
//                 "type": "comment",
//                 "name": "other_contributions",
//                 "title": "Outside of the roles that you've applied for, are there any other ways that you'd like to contribute?",
//                 "description": "These can include responsibilities from other roles on this document, new responsibilities, or any other kind of contribution that you may want to make.",
//                 "isRequired": true,
//                 "placeholder": "Your answer"
//               },
//               {
//                 "type": "comment",
//                 "name": "anything_else",
//                 "title": "Anything else you'd like to add?",
//                 "placeholder": "Your answer"
//               },
//               {
//                 "type": "comment",
//                 "name": "feedback",
//                 "title": "Do you have any feedback for this application process?",
//                 "description": "This will not be used to evaluate your application, but it is always appreciated!",
//                 "placeholder": "Your answer"
//               }
//             ]
//           }
//         ],
//         "showQuestionNumbers": "off",
//         "questionTitleLocation": "top",
//         "showProgressBar": "top",
//         "progressBarType": "questions",
//         "completeText": "Submit Application",
//         "completedHtml": "<h3>Thank you for your application!</h3><p>A copy of your responses will be emailed to the address you provided.</p>"
//       };

const surveyJson = {
  "title": "Test Survey",
  "pages": [
    {
      "elements": [
        {
          "type": "text",
          "name": "email",
          "title": "What is your email?",
          "isRequired": true,
          "validators": [
            {
              "type": "email",
            }
          ]
        }
      ]
    }
  ],
  "showQuestionNumbers": "off",
  "questionTitleLocation": "top",
  "showProgressBar": "top",
  "progressBarType": "questions",
  "completeText": "Submit",
  "completedHtml": "<h3>Thank you for your feedback!</h3>"
};
const survey = new Survey.Model(surveyJson);

survey.onComplete.add(function (sender) {
  const surveyData = sender.data;
  const url = "https://script.google.com/macros/s/AKfycby9SmfGOSPWwstaTxcpb81wria_f7OVA838g6GCSTQROYa1Q_gh2KUGgoTV9IsH3K4F/exec"; // Paste your copied Web App URL here

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: Object.keys(surveyData).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(surveyData[key])).join('&')
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // You can add a "Thank You" message or redirect the user here.
  })
  .catch(error => console.error('Error:', error));
});

document.addEventListener("DOMContentLoaded", function() {
    survey.render(document.getElementById("surveyContainer"));
});