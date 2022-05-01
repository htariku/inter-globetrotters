import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux'


// function Quiz () {
//   return


function Quiz() {
  const dispatch = useDispatch();

  const questionList = useSelector((state) => state.questionList);
  const { loading, error, questions } = questionList;
  return (
    <MainScreen title={`Have a browse ${userInfo && userInfo.name}..`}>
      <Link to="/createquestion">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create new question
        </Button>
      </Link>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {/* {errorDelete && (
        <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
      )} */}
      {loading && <Loading />}
      {/* {loadingDelete && <Loading />} */}
      {questions &&
        questions.reverse().map((question) => (
          <Accordion>
            <Card style={{ margin: 10 }} key={question._id}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  // onClick={() => ModelShow(question)}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                    {question.content}
                  </Accordion.Toggle>
                </span>

                <div>
                  <Button href={`/question/${question._id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    // onClick={() => deleteHandler(question._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <h4>
                      Category - {question.category}
                  </h4>

                  <blockquote className="blockquote mb-0">
                    {/* Hard coding displays the answer options... */}
                    {/* {question.answerOptions[0].optionText}
                    {question.answerOptions[1].optionText}
                    {question.answerOptions[2].optionText} */}

                    <footer className="blockquote-footer">
                      Created on{" "}
                      <cite title="Source Title">
                        {question.createdAt.substring(0, 10)}
                      </cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ))}
    </MainScreen>
  );
  export default Quiz;