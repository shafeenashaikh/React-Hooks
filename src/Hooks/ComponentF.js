import React from "react";
import {UserContext, ChannelContext} from '../App'

function ComponentF(){
    return(
        <div>
            <UserContext.Consumer>
                {
                    user => {
                    return (
                                
                    <ChannelContext.consumer>
                        {
                            Channel => {
                                    return <div>User context value {user}, Channel Context value {Channel}</div>
                            }
                        }
                    </ChannelContext.consumer>
                        )
                        
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}
export default ComponentF;
