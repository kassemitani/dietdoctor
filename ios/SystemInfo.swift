//
//  SystemInfo.swift
//  DietDoctor
//
//  Created by Kassem Itani on 10/26/20.
//

import Foundation
import React

// add @obj modifier here
@objc(SystemInfo)
class SystemInfo: NSObject {
  
  @objc func getLanguage( _ callback: @escaping RCTResponseSenderBlock){
    let langStr = Locale.current.languageCode
    callback([langStr ?? ""])
  }
  
  @objc func getBundleIdentifier( _ callback: @escaping RCTResponseSenderBlock) {
    let bundleID = Bundle.main.bundleIdentifier
    callback([bundleID ?? ""])
  }
}
