import React from "react";
import ScrollArea from "react-scrollbar";
import "./Category.css";
import { FetchCatogoriesAction } from "../../Actions/AdminActions";
import { connect } from "react-redux";

class Category extends React.Component {
  state = {
    SelectedCategories: [],
    // Category: [
    //   {
    //     Categories: "Web Development",
    //     CategoriesImage: "http://lorempixel.com/100/100",
    //   },

    //   {
    //     Categories: "Machine Learning",
    //     CategoriesImage: "http://lorempixel.com/101/101",
    //   },
    //   {
    //     Categories: "Machine Learning one",
    //     CategoriesImage: "http://lorempixel.com/101/101",
    //   },

    //   {
    //     Categories: "Machine Learning two",
    //     CategoriesImage: "http://lorempixel.com/101/101",
    //   },
    //   {
    //     Categories: "Machine Learning three",
    //     CategoriesImage: "http://lorempixel.com/101/101",
    //   },

    //   {
    //     Categories: "Machine Learning four",
    //     CategoriesImage: "http://lorempixel.com/101/101",
    //   },
    //   {
    //     Categories: "Machine Learning four",
    //     CategoriesImage: "http://lorempixel.com/101/101",
    //   },
    //   {
    //     Categories: "Machine Learning four",
    //     CategoriesImage: "http://lorempixel.com/101/101",
    //   },
    //   {
    //     Categories: "Machine Learning four",
    //     CategoriesImage: "http://lorempixel.com/101/101",
    //   },
    //   {
    //     Categories: "Machine Learning four",
    //     CategoriesImage: "http://lorempixel.com/101/101",
    //   },
    // ],
    one: 0,
  };
  componentDidMount() {
    this.props.FetchCatogoriesAction();
  }
  renderFOI() {
    if (this.props.Categories) {
      console.log(this.props.Categories);
      return this.props.Categories.map((cat, id) => {
        console.log(cat);
        return (
          <div>
            {/* <ScrollArea
            speed={0.8}
            className="area"
            contentClassName="content"
            horizontal={false}
          > */}
            <div
              className="column"
              style={{
                float: "left",
              }}
            >
              <input
                type="checkbox"
                onChange={async (e) => {
                  await this.setState({
                    SelectedCategories: [
                      ...this.state.SelectedCategories,
                      cat.categorieName,
                    ],
                  });
                  this.props.onDone(this.state.SelectedCategories);
                }}
                id={`cb1${id}`}
              />
              <label className="labelone" for={`cb1${id}`}>
                <img
                  src={cat.categorieImage}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50px",
                    boxShadow: "3px 3px 3px",
                  }}
                />
                <figcaption> {cat.categorieName} </figcaption>
              </label>
            </div>
            {/* </ScrollArea> */}
          </div>
        );
      });
    } else {
      return <div></div>;
    }
  }
  render() {
    console.log(this.state.SelectedCategories);
    console.log(this.props.Categories);

    return (
      <div style={{ height: "300px", width: "450px", overflow: "scroll" }}>
        <label className="form-label">Select Field of Interest</label>
        {this.renderFOI()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { Categories: state.categories.settings };
};
export default connect(mapStateToProps, { FetchCatogoriesAction })(Category);
