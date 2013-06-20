/**
 * Created with JetBrains WebStorm.
 * User: sujay
 * Date: 6/17/13
 * Time: 10:12 PM
 * To change this template use File | Settings | File Templates.
 */

'use strict';

describe('phone detail e2e Test', function() {
    beforeEach(function(){
        browser().navigateTo('/');
        sleep(1);
    });
    it('should be able to retrieve phone with id', function(){
        input('query').enter('Dell Streak');
        sleep(2);
        element('.phones li a').click();
        sleep(1);
        expect(element('h1').html()).toContain('Dell Streak');

    });
});