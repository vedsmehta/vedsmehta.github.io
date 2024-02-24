---
name: FBLA Chapter Management
tools: [JavaScript, React, Firebase]
image: https://i.imgur.com/6ml4RqC.png
description: I built a website using ReactJS for our local FBLA chapter for managing competitive event signups, members, and events.
---

# FBLA Chapter Management Platform

This project was a massive undertaking and a great lesson in time management. Because FBLA has fixed signup dates, I had a tight deadline to meet and a large codebase to develop and maintain.

Here is a sample snippet of the logic used when a user submits their first even signup:
```javascript
    const submitEvent1 = async () => {
        if (signups.firstEvent) {
            const docID = signups.firstEvent + "?" + RandomCodeGenerator(6);

            if (addEditEvent1 === "Add") {
                var inHouseRequired = false;
                var additionalSignups = [];
                var completeAction = true;
                var reason = "";

                const event = await master_events.find(event => event.Name === signups.firstEvent);
                const event_signups = await master_signups.filter(signup => signup.eventName === event.Name);
                const signup_num = event_signups.length;

                if (signup_num >= parseInt(event.CompetitorLimit) && event.SignupBasis === "tryout") {
                    inHouseRequired = true;
                    additionalSignups = event_signups;
                } else if (signup_num === parseInt(event.CompetitorLimit)) {
                    completeAction = false;
                    reason = "This event has reached the maximum number of competitors. Please sign up for another event."
                }

                var signupsMembers = [signups.firstMember2, signups.firstMember3, signups.firstMember4, signups.firstMember5];
                signupsMembers.sort((a, b) => a ? b ? a.localeCompare(b) : -1 : 1);
                var idx = 0;
                for (const memberEmail of signupsMembers) {
                    if (memberEmail) {
                        idx = memberEmail !== '' ? idx + 1 : idx;
                        console.log(events)
                        console.log(idx, event.TeamMemberLimit)
                        if (signupConf && signupConf === "RLC") {
                            var users_signups = master_signups.filter(signup => {
                                return ((signup.member1 === memberEmail || signup.member2 === memberEmail || signup.member3 === memberEmail || signup.member4 === memberEmail || signup.member5 === memberEmail) && (signup.conf === "RLC" || signup.conf === "FLC"));
                            });
                        } else {
                            var users_signups = master_signups.filter(signup => {
                                return ((signup.member1 === memberEmail || signup.member2 === memberEmail || signup.member3 === memberEmail || signup.member4 === memberEmail || signup.member5 === memberEmail) && signup.conf === signupConf);
                            });
                        }

                        var memberEvents = users_signups.map(a => a.eventName);
                        if (users_signups.length > 1 || memberEvents.indexOf(signups.firstEvent) > -1) {
                            completeAction = false;
                            reason = "Could not sign up for this";
                        }
                    }
                }
                console.log(idx === 0 && event.TeamMemberLimit.toLowerCase() !== 'no team' && inHouseRequired)
                if ((signupsMembers[0] === "") && event.TeamMemberLimit.toLowerCase() !== 'no team' /*&& inHouseRequired*/) {
                    completeAction = false;
                    reason = "Could not sign up for event."
                }
                if (completeAction) {
                    const signupDoc = {
                        docID,
                        eventName: signups.firstEvent,
                        member1: signups.firstMember1,
                        member2: signupsMembers[0],
                        member3: signupsMembers[1],
                        member4: signupsMembers[2],
                        member5: signupsMembers[3],
                        conf: signupConf,
                        id: docID,
                        inHouseRequired
                    };

                    await createNewSignupDoc(signupDoc, additionalSignups).then(async () => {
                        await handleSubmitEmailSend(signupDoc);

                        await setAddEditEvent1("Edit");
                        await setEvent2Toggle(true);
                        toast.success(reason, TOAST_PROPS);
                        //window.location.reload(false)
                    });
                } else {
                    toast.error(reason, TOAST_PROPS);

                    var clearedSignups = {
                        ...signups,
                        firstEvent: "",
                        firstMember1: email,
                        firstMember2: "",
                        firstMember2: "",
                        firstMember3: "",
                        firstMember4: "",
                        firstMember5: "",
                        secondMember1: email,
                    };

                    setSignups(clearedSignups);
                }


            } else if (addEditEvent1 === "Edit") {
                var completeAction = true;

                var signupsMembers = [signups.firstMember2, signups.firstMember3, signups.firstMember4, signups.firstMember5];
                signupsMembers.sort((a, b) => a ? b ? a.localeCompare(b) : -1 : 1);

                const signupDoc = {
                    id: signups.firstEventID,
                    eventName: signups.firstEvent,
                    member1: signups.firstMember1,
                    member2: signupsMembers[0],
                    member3: signupsMembers[1],
                    member4: signupsMembers[2],
                    member5: signupsMembers[3],
                    inHouseRequired
                };

                const selected_event = await master_events.find(event => event.Name === signupDoc.eventName);
                var idx = 0;
                for (const memberEmail of signupsMembers) {
                    if (memberEmail) {
                        idx = memberEmail !== '' ? idx + 1 : idx;
                        console.log(idx)
                        if (signupConf && signupConf === "RLC") {
                            var users_signups = master_signups.filter(signup => {
                                return ((signup.member1 === memberEmail || signup.member2 === memberEmail || signup.member3 === memberEmail || signup.member4 === memberEmail || signup.member5 === memberEmail) && (signup.conf === "RLC" || signup.conf === "FLC"));
                            });
                        } else {
                            var users_signups = master_signups.filter(signup => {
                                return ((signup.member1 === memberEmail || signup.member2 === memberEmail || signup.member3 === memberEmail || signup.member4 === memberEmail || signup.member5 === memberEmail) && signup.conf === signupConf);
                            });
                        }

                        var memberEvents = users_signups.map(a => a.eventName);

                        if (users_signups.length > 2 || (idx < 1 && selected_event.TeamMemberLimit.toLowerCase() !== 'no team')) {
                            completeAction = false;
                        }
                    }
                }
                if ((signupsMembers[0] === "") && event.TeamMemberLimit.toLowerCase() !== 'no team' /*&& inHouseRequired*/) {
                    completeAction = false;
                    reason = "Could not sign up for event."
                }
                if (completeAction) {
                    if (selected_event.TeamMemberLimit !== 'No Team') {
                        await updateSignupDoc(signupDoc).then(async () => {
                            await handleEditEmailSend(signupDoc);
                            toast.success("Edited signup", TOAST_PROPS);

                            //window.location.reload(false)
                        }); // TODO NOTIFICATION
                    } else {
                        toast.error('Cannot edit an individual event.', TOAST_PROPS);
                    }
                } else {
                    toast.error("Could not save.", TOAST_PROPS);

                    // var clearedSignups = {
                    //     ...signups,
                    //     firstEvent: "",
                    //     firstMember1: email,
                    //     firstMember2: "",
                    //     firstMember3: "",
                    //     firstMember4: "",
                    //     firstMember5: "",
                    //     firstEventID: "",
                    //     secondMember1: email,
                    // };

                    // setSignups(clearedSignups);
                }

            }
        } else {
            toast.error('Select an event', TOAST_PROPS);
        }
    };
```

<p class="text-center">
{% include elements/button.html link="lambertfbla-833cd.web.app" text="See the website!" %}
</p>
