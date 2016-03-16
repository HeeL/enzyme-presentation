import React from "react";

import {
    Appear,
    CodePane,
    Deck,
    Heading,
    Image,
    ListItem,
    List,
    Slide,
    Spectacle,
    Text
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";

require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
    runningTests: require("../assets/running_tests.gif"),
    reRenderDiff: require("../assets/re_render_diff.png"),
    provideContext: require("../assets/provide_context.png"),
    debug: require("../assets/debug.png"),
    sign: require("../assets/sign.jpg"),
    dragon: require("../assets/dragon.jpg"),
    end: require("../assets/end.jpg")
};

preloader(images);

const theme = createTheme({
    primary: "#5a5255",
    blue: "#1b85b8",
    gray: "#999"
});

const imageSrc = (name) => images[name].replace("/", "");

export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck transition={["zoom", "slide"]} transitionDuration={500}>

                    <Slide transition={["slide"]} bgColor="primary" notes="Some notes for the slide">
                        <Heading size={3} caps textColor="white">Enzyme</Heading>
                        <Image src={imageSrc("runningTests")} margin="0px auto 40px" width="850px" height="537px"/>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary" textColor="white">
                        <Heading size={3} caps textColor="white">Why?</Heading>
                        <List>
                            <Appear><ListItem textSize="60px">Make tests more readable</ListItem></Appear>
                            <Appear><ListItem textSize="60px">Less boilerplate</ListItem></Appear>
                            <Appear><ListItem textSize="60px">Simplify common use cases</ListItem></Appear>
                        </List>
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="primary" textColor="white">
                        <CodePane
                          source={require("raw!../assets/code_snippets/import_enzyme.js.example")}
                          lang="jsx"
                          textSize="20px"
                        />
                        <List>
                            <Appear>
                                <ListItem textSize="40px">
                                    Shallow rendering is the preferable and the fastest way of rendering
                                </ListItem>
                            </Appear>
                            <Appear>
                                <ListItem textSize="38px" margin="40px 0">
                                    mount() does a full rendering, alternative to our renderIntoDocument
                                </ListItem>
                            </Appear>
                            <Appear>
                                <ListItem textSize="40px">
                                    render() performs rendering of react components to static HTML
                                </ListItem>
                            </Appear>
                        </List>
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="primary" textColor="white">
                        <Text textAlign="left" textColor="white" margin="20px 10px">Different interfaces for rendering with TestUtils and ShallowTestUtils.
                        Method names for finders are not consistent and sometimes cryptical:</Text>
                        <CodePane lang="js" textSize="20px">TestUtils.scryRenderedComponentsWithType()</CodePane>
                        <CodePane lang="js" textSize="20px">ShallowTestUtils.findAllWithClass()</CodePane>
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="primary" textColor="white">
                        <Text textColor="white" fit margin="20px 10px">In Enzyme its all covered with method find:</Text>
                        <CodePane lang="js" textSize="20px">searchForm.find('PackageSearch'); // find by type name</CodePane>
                        <CodePane lang="js" textSize="20px">searchForm.find(PackageSearch); // find by type</CodePane>
                        <CodePane lang="js" textSize="20px">searchForm.find('li > a.foo'); // find using selector</CodePane>
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="primary" textColor="white">
                        <Text textColor="white" fit margin="20px 10px">All return values are wrappers:</Text>
                        <CodePane lang="js" textSize="20px">find(filter(map()))</CodePane>
                        ||<br />
                        V
                        <CodePane lang="js" textSize="20px">map().filter().find()</CodePane>
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="primary" textColor="white">
                        <Text textColor="white" fit margin="20px 10px">Chain finders and combine with other methods:</Text>
                        <CodePane lang="js" textSize="20px">listComponent.find('.item span').find('a').children().first();</CodePane>
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="primary" textColor="white">
                        <Text textColor="white" fit margin="20px 10px">Make sure that element is on the page:</Text>
                        <CodePane lang="js" textSize="17px" source={require("raw!../assets/code_snippets/expect_not_throw.js.example")} />
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="primary" textColor="white">
                        <Text textColor="white" fit margin="20px 10px">Another way of doing this:</Text>
                        <CodePane lang="js" textSize="17px" source={require("raw!../assets/code_snippets/find_all.js.example")} />
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="primary" textColor="white">
                        <Text textColor="white" fit margin="20px 10px">Chain won't throw and always return a wrapper:</Text>
                        <CodePane lang="js" textSize="20px">listComponent.find('.item span').find('a').children().first();</CodePane>
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="primary" textColor="white" notes="Refactoring with Enzyme is always about deleting code">
                        <Text textColor="white" fit margin="20px 10px">test/unit/shallowRender.js:</Text>
                        <CodePane lang="js" textSize="17px" source={require("raw!../assets/code_snippets/shallow_render.js.example")} />
                        =
                        <Appear>
                            <CodePane lang="js" textSize="20px">shallow(component, context)</CodePane>
                        </Appear>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="gray">
                        <Heading size={2} textColor="white">Re-rendering</Heading>
                        <CodePane lang="js" margin="25px 0" textSize="17px" source={require("raw!../assets/code_snippets/re_render.js.example")} />
                    </Slide>

                    <Slide transition={["slide"]} bgColor="gray">
                        <Heading size={2} textColor="white" margin="0 0 80px 0">Re-render component with Enzyme</Heading>
                        <CodePane lang="js" textSize="20px" margin="50px auto">searchForm.update();</CodePane>
                    </Slide>

                    <Slide>
                        <Heading size={2} textColor="white" margin="20px 0">Refactoring</Heading>
                        <Image src={imageSrc("reRenderDiff")} width="1025px" height="426px"/>
                    </Slide>

                    <Slide>
                        <Image src={imageSrc("provideContext")} width="1040px" height="390px"/>
                    </Slide>

                    <Slide>
                        <Heading size={2} textColor="white" margin="20px 0">More Complex Finders</Heading>
                        <CodePane lang="js" textSize="20px" margin="50px auto">
                            wrapper.findWhere(n => typeof n.type() !== 'string');
                        </CodePane>
                    </Slide>

                    <Slide>
                        <Heading size={2} textColor="white" margin="20px 0">Debugging</Heading>
                        <CodePane lang="js" textSize="20px">
                            clampingTextComponent.debug();
                        </CodePane>
                        <Image src={imageSrc("debug")} width="736px" height="317px"/>
                    </Slide>

                    <Slide>
                        <CodePane lang="js" textSize="20px" source={require("raw!../assets/code_snippets/expect_equal.js.example")} />
                            <Text textColor="white" margin="40px auto">OR</Text>
                        <CodePane lang="js" textSize="19px" source={require("raw!../assets/code_snippets/expect_have_property.js.example")} />
                    </Slide>

                    <Slide>
                        <Heading size={4} textColor="white" margin="20px 0">Why not both?</Heading>
                        <CodePane lang="js" textSize="20px" source={require("raw!../assets/code_snippets/expect_chai_enzyme.js.example")} />
                    </Slide>

                    <Slide>
                        <Heading size={4} textColor="white">Readable assertions</Heading>
                        <CodePane lang="js" textSize="20px" margin="100px 0 0 0" source={require("raw!../assets/code_snippets/chai_enzyme.js.example")} />
                    </Slide>

                    <Slide>
                        <Heading size={4} textColor="white" margin="20px 0">chai-enzyme assertions:</Heading>
                        <CodePane lang="js" margin="20px 0" textSize="20px" source={require("raw!../assets/code_snippets/chai_enzyme_assertions.js.example")} />
                    </Slide>

                    <Slide transition={["slide"]} bgColor="gray" notes="Its all in master - use it">
                        <Image src={imageSrc("sign")} margin="auto" width="800px" height="450px"/>
                    </Slide>

                    <Slide bgColor="black">
                        <Image src={imageSrc("dragon")} width="1024px" height="768px"/>
                    </Slide>

                    <Slide transition={["zoom"]} bgImage={imageSrc("end")} />

                </Deck>
            </Spectacle>
        );
    }
}
