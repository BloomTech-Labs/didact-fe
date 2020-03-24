import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#EEEEEE"
  },
  searchDivResults: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eeeeee",
    width: "345px",
    borderRadius: "7px",
    border: "1px solid black",
    padding: "0 6px",
    paddingLeft: "0%",
    height: "57px",
    boxShadow: "1px 1px 1px 1px rgba(0,0,0,.5)"
  },

  searchDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eeeeee",
    width: "345px",
    borderRadius: "7px",
    border: "1px solid black",
    padding: "0 6px",
    paddingLeft: "0%",
    height: "37px",
    boxShadow: "1px 1px 1px 1px rgba(0,0,0,.5)"
  },

  formPart: {
    display: "flex",
    flexDirection: "row",
    height: "57px",
    width: "370px"
  },

  searchInputResults: {
    backgroundColor: "inherit",
    width: "340px",
    outline: "none",
    height: "57px",
    border: "none",
    fontFamily: "Open-Sans",
    fontWeight: "bold",
    fontSize: "1.6rem",
    marginLeft: "-5%"
  },

  searchInput: {
    backgroundColor: "inherit",
    width: "340px",
    outline: "none",
    height: "57px",
    border: "none",
    fontFamily: "open-sans",
    fontWeight: "bold",
    fontSize: "1.6rem",
    marginLeft: "5%"
  },

  filterDiv: {
    backgroundColor: "#eeeeee",
    marginRight: "8%",
    marginTop: "3%",
    borderRadius: "7px 0 0 7px",
    height: "35px",
    // width: "107px",
    outline: "none",
    border: "none",
    display: "flex",
    justifyContent: "center",
    borderColor: "green",
    outline: "none !important"
  },

  dropFilter: {
    marginTop: "8%",
    border: "none",
    outline: "none",
    borderRight: "1px solid black",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    fontFamily: "open-sans",
    fontWeight: "bold",
    fontSize: "1.5rem",
    textAlign: "center",
    backgroundColor: "#eeeeee"
  },

  searchButtonResults: {
    display: "flex",
    alignItems: "center",
    border: "none",
    outline: "none",
    height: "30px",
    marginTop: "3.4%",
    marginLeft: "-49%",
    borderRadius: "7px",
    background: "transparent",
    fontFamily: "open-sans",

    "&:hover": {
      background: "#ffffff"
      // border: "1px solid black"
    },
    "&:active": {
      boxShadow: "0 5px #666",
      transform: "translateY(4px)"
    },
    iconImageProfile: {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      // marginTop: '20px',
      objectFit: "cover"
    }
  },

  searchButton: {
    display: "flex",
    alignItems: "center",
    border: "none",
    outline: "none",
    height: "30px",
    marginTop: "3.4%",
    marginLeft: "-25%",
    borderRadius: "7px",
    background: "transparent",
    fontFamily: "open-sans",

    "&:hover": {
      background: "#ffffff"
      // border: "1px solid black"
    },
    "&:active": {
      boxShadow: "0 5px #666",
      transform: "translateY(4px)"
    },
    iconImageProfile: {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      // marginTop: '20px',
      objectFit: "cover"
    }
  },

  searchIcon: {
    marginTop: "-1%"
  },

  searcher: {
    marginTop: "13%",
    marginLeft: "-4%",
    fontFamily: "open-sans"
  },

  logoutClass: {
    border: "1px solid"
  }
}));

const SearchBar = ({ props, handleSubmit, handleChange, values }) => {
  const classes = useStyles();

  return (
    <div>
      {props.location.pathname === "/results" ? (
        <div className={classes.searchDivResults}>
          <form className={classes.formPart} onSubmit={handleSubmit}>
            <div className={classes.filterDiv}>
              <select
                style={
                  "&.select & select"
                    ? { backgroundColor: "white" }
                    : { backgroundColor: "#eeeeee" }
                }
                className={classes.dropFilter}
                value={values.filter}
                onChange={handleChange("filter")}
              >
                <option value="title">Title</option>
                <option value="topic">Topic</option>
                <option value="creator">Creator</option>
                <option value="description">Description</option>
                <option value="tag">Tag</option>
              </select>
            </div>
            <input
              className={classes.searchInputResults}
              type="text"
              value={values.search}
              onChange={handleChange("search")}
            />
            <button
              className={classes.searchButtonResults}
              type="submit"
              onSubmit={handleSubmit}
            >
              <SearchIcon
                className={classes.searchIcon}
                style={{
                  fontSize: "1.8rem",
                  marginRight: "5px",
                  color: "black"
                }}
              />
              <p className={classes.searcher}>Search</p>
            </button>
          </form>
        </div>
      ) : (
        <div className={classes.searchDiv}>
          <form className={classes.formPart} onSubmit={handleSubmit}>
            <input
              className={classes.searchInput}
              type="text"
              value={values.search}
              onChange={handleChange("search")}
            />
            <button
              className={classes.searchButton}
              type="submit"
              onSubmit={handleSubmit}
            >
              <SearchIcon
                className={classes.searchIcon}
                style={{
                  fontSize: "1.8rem",
                  marginRight: "5px",
                  color: "black"
                }}
              />
              <p className={classes.searcher}>Search</p>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
