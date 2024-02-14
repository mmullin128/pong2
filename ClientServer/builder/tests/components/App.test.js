import TestRenderer from "react-test-renderer";
import App from "../../src/components/App.js";
import globals from "../../src/components/globals.js";

const testForId = (id) => (testInstance) => {
    if (testInstance.props.id == id) return true;
    return false;
}

const testRenderer = TestRenderer.create(<App />);


describe("menu navigation", () => {
    beforeAll(() => {
    })
    test("matches snapshot", () => {
        //render main menu
        let tree = testRenderer.toJSON();
        expect(tree).toMatchSnapshot();
    });
    test("play-now-btn to username-alert", () => {
        //goto username alert
        TestRenderer.act(() => {
            //if this fails, be sure that the ui function is at 0 index of the onclick array
            testRenderer.root.find(testForId("play-now-btn")).props.onClick[0]();
        })
        expect(testRenderer.root.find(testForId(globals.ALERTS.USERNAME_ALERT)).props.isRendered).toBe(true);

        //back to main
        TestRenderer.act(() => {
            testRenderer.root.find(testForId("username-alert-back-btn")).props.onClick();
        })
        expect(testRenderer.root.find(testForId(globals.ALERTS.USERNAME_ALERT)).props.isRendered).toBe(false);
        expect(testRenderer.root.find(testForId(globals.MENUS.MAIN)).props.isRendered).toBe(true);
    });
    test("private-game-btn to private-game-menu", () => {
        //goto username alert
        TestRenderer.act(() => {
            //if this fails, be sure that the ui function is at 0 index of the onclick array
            testRenderer.root.find(testForId("private-game-btn")).props.onClick[0]();
        })
        expect(testRenderer.root.find(testForId(globals.MENUS.PRIVATE_GAME)).props.isRendered).toBe(true);

        //back to main
    TestRenderer.act(() => {
        testRenderer.root.find(testForId("private-game-menu-back-btn")).props.onClick();
    })
        expect(testRenderer.root.find(testForId(globals.MENUS.MAIN)).props.isRendered).toBe(true);
        expect(testRenderer.root.find(testForId(globals.MENUS.PRIVATE_GAME)).props.isRendered).toBe(false);
    });
})