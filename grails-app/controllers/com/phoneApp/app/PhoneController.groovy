package com.phoneApp.app

import grails.converters.*

class PhoneController {

    def list() {
        log.info('calling list()')
        def phones = Phone.findAll()
        render phones as JSON
    }

    def show(){
        log.info params.id
        def phone = Phone.get(params.id)
        def details =  phone.phoneDetails.details
        render details as JSON
    }
}
