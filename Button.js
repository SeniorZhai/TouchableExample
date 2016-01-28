/**
 * Created by zhai on 16/1/27.
 */
import React,{
    View,
    StyleSheet,
    TouchableHighlight,
    Text,
} from 'react-native';

export default class Button extends React.Component {
    static propTypes = {
        onPress: React.PropTypes.func,
        text: React.PropTypes.string,
    };

    render() {
        console.log(this.props.text)
        return (
            <TouchableHighlight
                style={styles.button}
                onPress={this.props.onPress}
                underlayColor="aaaaaa">
                <Text>{this.props.text}</Text>
            </TouchableHighlight>);
    }
}

const styles = StyleSheet.create({
    button: {
        borderColor: '#696969',
        borderRadius: 8,
        borderWidth: 1,
        padding: 10,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d3d3d3',
    }
});