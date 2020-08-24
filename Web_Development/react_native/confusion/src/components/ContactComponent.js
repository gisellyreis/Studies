import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {
    render() {
        return(
           <View>
                <Card
                    featuredTitle="Contact Information"
                >
                    <Text style={{ marginBottom: 24, display: "flex", alignSelf: "center", justifyContent: "center", fontWeight: "bold", fontSize: 20}}>
                        Contact Information
                    </Text>
                    <Text>
                    121, Clear Water Bay Road {'\n\n'}
                    Clear Water Bay, Kowloon {'\n\n'}
                    HONG KONG {'\n\n'}
                    Tel: +852 1234 5678 {'\n\n'}
                    Fax: +852 8765 4321 {'\n\n'}
                    Email:confusion@food.net {'\n\n'}
                    </Text>
                </Card>
           </View>
        );
    }
}

export default Contact;