//
//  SystemInfo.m
//  DietDoctor
//
//  Created by Kassem Itani on 10/26/20.
//
#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

// The class that contain your methods
@interface RCT_EXTERN_MODULE(SystemInfo, NSObject)

// The methods you are exposing to Javascript
RCT_EXTERN_METHOD(getLanguage: (RCTResponseSenderBlock)callback);
RCT_EXTERN_METHOD(getBundleIdentifier: (RCTResponseSenderBlock)callback);

@end

