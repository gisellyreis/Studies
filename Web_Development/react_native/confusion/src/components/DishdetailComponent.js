import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  ScrollView,
  Modal,
  StyleSheet,
} from "react-native";
import { Card, Rating, Input, Button } from "react-native-elements";
import { Icon } from "react-native-elements";

import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import { postFavorite, postComment } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    favorites: state.favorites,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postFavorite: (dishId) => dispatch(postFavorite(dishId)),
  postComment: (dishId, rating, author, comment) =>
    dispatch(postComment(dishId, rating, author, comment)),
});

function RenderDish(props) {
  const dish = props.dish;

  if (dish != null) {
    return (
      <Card featuredTitle={dish.name} image={{ uri: baseUrl + dish.image }}>
        <Text style={{ margin: 10 }}>{dish.description}</Text>
        <View style={styles.icons}>
          <Icon
            raised
            reverse
            name={props.favorite ? "heart" : "heart-o"}
            type="font-awesome"
            color="#f50"
            onPress={() =>
              props.favorite ? console.log("Already favorite") : props.onPress()
            }
          />
          <Icon
            raised
            reverse
            name={"pencil"}
            type="font-awesome"
            color="#120a8f"
            onPress={() => props.toggleModal()}
          />
        </View>
      </Card>
    );
  } else {
    return <View></View>;
  }
}

function RenderComments(props) {
  const comments = props.comments;

  const renderCommentItem = ({ item, index }) => {
    return (
      <View key={index} style={{ margin: 10 }}>
        <Text style={{ fontSize: 14 }}>{item.comment}</Text>
        <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
        <Text style={{ fontSize: 12 }}>
          {`-- ${(item.author, item.date)}`} Stars
        </Text>
      </View>
    );
  };

  return (
    <Card title="Comments">
      <FlatList
        data={comments}
        renderItem={renderCommentItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </Card>
  );
}

class DishDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      author: "",
      comment: "",
      showModal: false,
    };
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  handleComment(dishId, rating, author, comment) {
    this.props.postComment(dishId, rating, author, comment);
  }

  resetForm() {
    this.setState({
      rating: 0,
      author: "",
      comment: "",
      showModal: false,
    });
  }

  handleSubmit(dishId) {
      console.log(this.state);
    this.handleComment(dishId, this.state.rating, this.state.author, this.state.comment );
    this.toggleModal();
    this.resetForm();
  }

  markFavorite(dishId) {
    this.props.postFavorite(dishId);
  }

  render() {
    const dishId = this.props.route.params.dishId;
    return (
      <>
        <ScrollView>
          <RenderDish
            dish={this.props.dishes.dishes[+dishId]}
            favorite={this.props.favorites.some((el) => el === dishId)}
            onPress={() => this.markFavorite(dishId)}
            toggleModal={() => this.toggleModal()}
          />
          <RenderComments
            comments={this.props.comments.comments.filter(
              (comment) => comment.dishId === dishId
            )}
          />
        </ScrollView>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.showModal}
          onDismiss={() => this.toggleModal()}
          onRequestClose={() => this.toggleModal()}
        >
          <View style={styles.modal}>
            <Rating
              showRating
              fractions={1}
              startingValue={this.state.rating}
              onFinishRating={(value) => this.setState({ rating: value })}
            />
            <Input
              placeholder="Author"
              leftIcon={{ type: "font-awesome", name: "user-o" }}
              onChangeText={(value) => this.setState({ author: value })}
            />
            <Input
              placeholder="Comment"
              leftIcon={{ type: "font-awesome", name: "comment-o" }}
              onChangeText={(value) => this.setState({ comment: value })}
            />

            <Button
              onPress={() => {
                console.log(this.state);
                this.handleSubmit(dishId);
              }}
              buttonStyle={{ marginBottom: 20, backgroundColor: "#512DA8" }}
              title="SUBMIT"
            />
            <Button
              onPress={() => {
                this.toggleModal();
                this.resetForm();
              }}
              buttonStyle={{ backgroundColor: "#999" }}
              title="CANCEL"
            />
          </View>
        </Modal>
      </>
    );
  }
}

const styles = StyleSheet.create({
  icons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    justifyContent: "center",
    margin: 20,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DishDetail);
