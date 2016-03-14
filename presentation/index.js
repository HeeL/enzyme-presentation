import React from "react";

import {
    Appear,
    BlockQuote,
    Cite,
    CodePane,
    Deck,
    Fill,
    Heading,
    Image,
    Layout,
    ListItem,
    List,
    Quote,
    Slide,
    Spectacle,
    Text
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";

require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
    runningTests: require("../assets/running_tests.gif")
};

preloader(images);

const theme = createTheme({
    primary: "#5a5255",
    blue: "#1b85b8"
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
                            textSize="20px" />
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

                    <Slide transition={["slide"]}>
                        <Appear fid="1">
                            <Heading size={1} caps fit textColor="primary">
                                Full Width
                            </Heading>
                        </Appear>
                        <Appear fid="2">
                            <Heading size={1} caps fit textColor="tertiary">
                                Adjustable Darkness
                            </Heading>
                        </Appear>
                        <Appear fid="3">
                            <Heading size={1} caps fit textColor="primary">
                                Background Imagery
                            </Heading>
                        </Appear>
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="primary">
                        <Heading caps fit>Flexible Layouts</Heading>
                        <Layout>
                        <Fill>
                        <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                        Left
                        </Heading>
                        </Fill>
                        <Fill>
                        <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                        Right
                        </Heading>
                        </Fill>
                        </Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="black">
                        <BlockQuote>
                        <Quote>Wonderfully formatted quotes</Quote>
                        <Cite>Ken Wheeler</Cite>
                        </BlockQuote>
                    </Slide>

                    <Slide transition={["slide", "spin"]} bgColor="primary">
                        <Heading caps fit size={1} textColor="tertiary">
                            Smooth
                        </Heading>
                        <Heading caps fit size={1} textColor="secondary">
                            Combinable Transitions
                        </Heading>
                    </Slide>

                    <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                        <List>
                            <Appear><ListItem>Inline style based theme system</ListItem></Appear>
                            <Appear><ListItem>Autofit text</ListItem></Appear>
                            <Appear><ListItem>Flexbox layout system</ListItem></Appear>
                            <Appear><ListItem>React-Router navigation</ListItem></Appear>
                            <Appear><ListItem>PDF export</ListItem></Appear>
                            <Appear><ListItem>And...</ListItem></Appear>
                        </List>
                    </Slide>

                </Deck>
            </Spectacle>
        );
    }
}
