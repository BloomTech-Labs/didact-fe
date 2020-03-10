import React from "react";

import Dashboard from "../dashboard/Dashboard";
import AddCourse from "../courses/AddCourse";
import YourDetailedCourse from "../courses/yourDetailedCourse/YourDetailedCourse";
import DetailedCourse from "../courses/DetailedCourse";
import EditCourse from "../courses/EditCourse";
import EditAllCourse from "../courses/EditAllCourse";
import AllCourses from "../courses/AllCourses.jsx";
import AddLearningPaths from "../learningPaths/AddLearningPaths";
import EditLearningPaths from "../learningPaths/EditLearningPaths";
import LearningPath from "../learningPaths/LearningPath";
import YourLearningPaths from "../learningPaths/YourLearningPaths";
import AllLearningPaths from "../learningPaths/AllLearningPaths";
import AddPathItems from "../learningPaths/pathItems/AddPathItems";
import EditPathItems from "../learningPaths/pathItems/EditPathItems";
import Tools from "../resources/Tools";
import Sources from "../resources/Sources";
import Articles from "../resources/Articles";
import ArticleFull from "../resources/ArticleFull";
import SearchResults from "../searchResults/SearchResults";
import About from "../about/About";
import AllYourCourses from "../courses/AllYourCourses";
import Contact from "../contact/Contact";
import ResourceGeneral from "../resources/ResourceGeneral";
import AddResource from "../administration/AddResource";
import PromoteUser from "../administration/PromoteUser";
import EditSource from "../administration/EditSource";
import EditTool from "../administration/EditTool";
import EditArticle from "../administration/EditArticle";
import EditExternalArticle from "../administration/EditExternalArticle";
import UsersProfiles from "../profile/UsersProfiles";

const Content = props => {
  return (
    <div>
      {(() => {
        switch (props.page) {
          case "dashboard":
            return <Dashboard props={props} />;
          case "resource-form":
            return <AddResource props={props} />;
          case "promote-user":
            return <PromoteUser props={props} />;
          case "addcourse":
            return <AddCourse props={props} />;
          case "courses":
            return <AllCourses props={props} />;
          case "yourcourses":
            return <AllYourCourses props={props} />;
          case "detailedcourse":
            return (
              <DetailedCourse
                id={props.match.params.id}
                props={props}
                location={props.location}
              />
            );
          case "yourdetailedcourse":
            return (
              <YourDetailedCourse id={props.match.params.id} props={props} />
            );
          case "editcourse":
            return <EditCourse id={props.match.params.id} props={props} />;
          case "editallcourse":
            return <EditAllCourse id={props.match.params.id} props={props} />;
          case "addlearningpath":
            return <AddLearningPaths props={props} />;
          case "editlearningpath":
            return (
              <EditLearningPaths id={props.match.params.id} props={props} />
            );
          case "learningpath":
            return <LearningPath props={props} id={props.match.params.id} />;
          case "addpathitem":
            return <AddPathItems props={props} />;
          case "editpathitem":
            return <EditPathItems props={props} />;
          case "learningpaths":
            return <AllLearningPaths props={props} />;
          case "yourlearningpaths":
            return <YourLearningPaths props={props} />;
          case "resources":
            return <ResourceGeneral props={props} />;
          case "tools":
            return <Tools props={props} />;
          case "edit-tool":
            return <EditTool props={props} id={props.match.params.id} />;
          case "sources":
            return <Sources props={props} />;
          case "edit-source":
            return <EditSource props={props} id={props.match.params.id} />;
          case "articles":
            return <Articles props={props} />;
          case "article":
            return <ArticleFull props={props} id={props.match.params.id} />;

          case "edit-article":
            return <EditArticle props={props} id={props.match.params.id} />;
          case "edit-external-article":
            return (
              <EditExternalArticle props={props} id={props.match.params.id} />
            );

          case "searchresults":
            return (
              <SearchResults
                props={props}
                setValues={props.setValues}
                results={props.results}
              />
            );
          case "about":
            return <About props={props} />;
          case "contact":
            return <Contact props={props} />;
          case "edit-external-article":
            return <UsersProfiles props={props} id={props.match.params.id} />;
          default:
            break;
        }
      })()}
    </div>
  );
};

export default Content;
