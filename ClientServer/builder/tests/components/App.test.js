import TestRenderer from "react-test-renderer";
import App from "../../src/components/App.js";

const testForId = (id) => (testInstance) => {
    if (testInstance.props.id == id) return true;
    return false;
}


test('menu navigation', () => {
    const testRenderer = TestRenderer.create(<App />);

    //render main menu
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();


    //goto username menu
    TestRenderer.act(() => {
        //if this fails, be sure that the ui function is at 0 index of the onclick array
        testRenderer.root.find(testForId("play-now-btn")).props.onClick[0]();
    })
    tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    //back to main
    TestRenderer.act(() => {
        testRenderer.root.find(testForId("username-alert-back-btn")).props.onClick();
    })
    tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
    
    //goto private game menu
    TestRenderer.act(() => {
        testRenderer.root.find(testForId("private-game-btn")).props.onClick[0]();
    })
    tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    //back to main
    TestRenderer.act(() => {
        testRenderer.root.find(testForId("private-game-menu-back-btn")).props.onClick();
    })
    tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    
})