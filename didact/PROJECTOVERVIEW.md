## PROJECT OVERVIEW

## **App Flow**

    Users can create learning paths and courses. Learning paths are like a playlist of learning resources.
    Can range from youtube video, to article, and can also house courses. The main content of the app is
    rendered inside of Content.jsx. It is a child of MainPage.jsx, and uses a switch-case to determine what
    component to render. Most if not all data in the app is pulled from the respective reducer in the Redux
    store using useSelector hooks, and we use the useDispatch hook to send out nearly all of our network requests.

## User Roles

    There exist 4 users on the site. Owner, admin, moderator, and then a regular user. Resources on the site
    can only be modified by owners and admins, such as tools, articles, and sources. All super roles (owner/admin/mod)
    can perform CRUD operations on all user-created content without restrictions. Owners/admins can also assign new user roles.

## Tasks To Prioritize As New Team

- User flow and app navigation is confusing. Needs UX and front end collab to help.
- Increase clarity / UI around accessing your own created or cultivated content (your own library, collections, etc)
- More robust profile pages
- Passport.js google/facebook login is not working properly on redirect
- Gearing the app towards being more community/network oriented (visible profiles, path/course creators visible on path/course card)
- Gamifying the app through badges/medals, achievements
- Quality assurance through ranking system
- Activity feed to increase social aspect
- Ability to make content public/private
- Udemy API and/or CSV imports for uploading a lot of starter data to site
