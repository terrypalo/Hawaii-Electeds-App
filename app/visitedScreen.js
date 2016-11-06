/*
 * JS for visitedScreen generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return '13554f0c-4a4c-443d-9eb8-8a11b25342da';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "startScreen",
    "location": "startScreen.html"
}, {
    "name": "profileScreen",
    "location": "profileScreen.html"
}, {
    "name": "visitedScreen",
    "location": "visitedScreen.html"
}];

function visitedScreen_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'lblHDTitle': 'visitedScreen_lblHDTitle',
        'gridHD': 'visitedScreen_gridHD',
        'mobilegridcell_4': 'visitedScreen_mobilegridcell_4',
        'mobilelabel_13': 'visitedScreen_mobilelabel_13',
        'mobilegridcell_5': 'visitedScreen_mobilegridcell_5',
        'lblHDDistrict': 'visitedScreen_lblHDDistrict',
        'mobilegridcell_6': 'visitedScreen_mobilegridcell_6',
        'mobilelabel_14': 'visitedScreen_mobilelabel_14',
        'mobilegridcell_7': 'visitedScreen_mobilegridcell_7',
        'lblHDNumVisits': 'visitedScreen_lblHDNumVisits',
        'mobilegridcell_15': 'visitedScreen_mobilegridcell_15',
        'mobilelabel_17': 'visitedScreen_mobilelabel_17',
        'mobilegridcell_16': 'visitedScreen_mobilegridcell_16',
        'lblHDFirst': 'visitedScreen_lblHDFirst',
        'mobilegridcell_19': 'visitedScreen_mobilegridcell_19',
        'nvm': 'visitedScreen_nvm',
        'mobilegridcell_20': 'visitedScreen_mobilegridcell_20',
        'lblHDLast': 'visitedScreen_lblHDLast',
        'mobilegridcell_23': 'visitedScreen_mobilegridcell_23',
        'spacer_25': 'visitedScreen_spacer_25',
        'mobilegridcell_24': 'visitedScreen_mobilegridcell_24',
        'spacer_26': 'visitedScreen_spacer_26',
        'mobilelabel_27': 'visitedScreen_mobilelabel_27',
        'gridSD': 'visitedScreen_gridSD',
        'mobilegridcell_29': 'visitedScreen_mobilegridcell_29',
        'mobilelabel_39': 'visitedScreen_mobilelabel_39',
        'mobilegridcell_30': 'visitedScreen_mobilegridcell_30',
        'lblSDDistrict': 'visitedScreen_lblSDDistrict',
        'mobilegridcell_31': 'visitedScreen_mobilegridcell_31',
        'mobilelabel_40': 'visitedScreen_mobilelabel_40',
        'mobilegridcell_32': 'visitedScreen_mobilegridcell_32',
        'lblSDNumVisits': 'visitedScreen_lblSDNumVisits',
        'mobilegridcell_33': 'visitedScreen_mobilegridcell_33',
        'mobilelabel_41': 'visitedScreen_mobilelabel_41',
        'mobilegridcell_34': 'visitedScreen_mobilegridcell_34',
        'lblSDFirstVisit': 'visitedScreen_lblSDFirstVisit',
        'mobilegridcell_35': 'visitedScreen_mobilegridcell_35',
        'mobilelabel_42': 'visitedScreen_mobilelabel_42',
        'mobilegridcell_36': 'visitedScreen_mobilegridcell_36',
        'lblSDLastVisit': 'visitedScreen_lblSDLastVisit',
        'mobilegridcell_37': 'visitedScreen_mobilegridcell_37',
        'spacer_48': 'visitedScreen_spacer_48',
        'mobilegridcell_38': 'visitedScreen_mobilegridcell_38',
        'spacer_49': 'visitedScreen_spacer_49',
        'mobilelabel_50': 'visitedScreen_mobilelabel_50',
        'gridCC': 'visitedScreen_gridCC',
        'mobilegridcell_52': 'visitedScreen_mobilegridcell_52',
        'mobilelabel_62': 'visitedScreen_mobilelabel_62',
        'mobilegridcell_53': 'visitedScreen_mobilegridcell_53',
        'lblCCDistrict': 'visitedScreen_lblCCDistrict',
        'mobilegridcell_54': 'visitedScreen_mobilegridcell_54',
        'mobilelabel_63': 'visitedScreen_mobilelabel_63',
        'mobilegridcell_55': 'visitedScreen_mobilegridcell_55',
        'lblCCNumVisits': 'visitedScreen_lblCCNumVisits',
        'mobilegridcell_56': 'visitedScreen_mobilegridcell_56',
        'mobilelabel_64': 'visitedScreen_mobilelabel_64',
        'mobilegridcell_57': 'visitedScreen_mobilegridcell_57',
        'lblCCfirstVisit': 'visitedScreen_lblCCfirstVisit',
        'mobilegridcell_58': 'visitedScreen_mobilegridcell_58',
        'mobilelabel_65': 'visitedScreen_mobilelabel_65',
        'mobilegridcell_59': 'visitedScreen_mobilegridcell_59',
        'lblCCLastVist': 'visitedScreen_lblCCLastVist',
        'mobilegridcell_60': 'visitedScreen_mobilegridcell_60',
        'spacer_70': 'visitedScreen_spacer_70',
        'mobilegridcell_61': 'visitedScreen_mobilegridcell_61',
        'spacer_71': 'visitedScreen_spacer_71',
        'mobilelabel_72': 'visitedScreen_mobilelabel_72',
        'gridCD': 'visitedScreen_gridCD',
        'mobilegridcell_74': 'visitedScreen_mobilegridcell_74',
        'mobilelabel_84': 'visitedScreen_mobilelabel_84',
        'mobilegridcell_75': 'visitedScreen_mobilegridcell_75',
        'lblCDDistrict': 'visitedScreen_lblCDDistrict',
        'mobilegridcell_76': 'visitedScreen_mobilegridcell_76',
        'mobilelabel_85': 'visitedScreen_mobilelabel_85',
        'mobilegridcell_77': 'visitedScreen_mobilegridcell_77',
        'lblCDNumVisits': 'visitedScreen_lblCDNumVisits',
        'mobilegridcell_78': 'visitedScreen_mobilegridcell_78',
        'mobilelabel_86': 'visitedScreen_mobilelabel_86',
        'mobilegridcell_79': 'visitedScreen_mobilegridcell_79',
        'lblCDFirstVisit': 'visitedScreen_lblCDFirstVisit',
        'mobilegridcell_80': 'visitedScreen_mobilegridcell_80',
        'mobilelabel_87': 'visitedScreen_mobilelabel_87',
        'mobilegridcell_81': 'visitedScreen_mobilegridcell_81',
        'lblCDLastVisit': 'visitedScreen_lblCDLastVisit',
        'mobilegridcell_82': 'visitedScreen_mobilegridcell_82',
        'spacer_88': 'visitedScreen_spacer_88',
        'mobilegridcell_83': 'visitedScreen_mobilegridcell_83'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.mappings["visitedScreen_get_visits_onsuccess_mapping_0"] = {
        "homeScreen": "visitedScreen",
        "directions": [

        {
            "from_name": "get_visits",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "visitedScreen",
            "to_type": "UI",

            "mappings": [

            {

                "source": "$['body']['house'][i]",
                "target": "$['gridHD']"

            },

            {

                "source": "$['body']['house'][i]['HD']",
                "target": "$['gridHD']['lblHDDistrict:text']"

            },

            {

                "source": "$['body']['house'][i]['numVisits']",
                "target": "$['gridHD']['lblHDNumVisits:text']"

            },

            {

                "source": "$['body']['house'][i]['firstVisited']",
                "target": "$['gridHD']['lblHDFirst:text']"

            },

            {

                "source": "$['body']['house'][i]['lastVisit']",
                "target": "$['gridHD']['lblHDLast:text']"

            },

            {

                "source": "$['body']['senate'][i]",
                "target": "$['gridSD']"

            },

            {

                "source": "$['body']['senate'][i]['SD']",
                "target": "$['gridSD']['lblSDDistrict:text']"

            },

            {

                "source": "$['body']['senate'][i]['firstVisited']",
                "target": "$['gridSD']['lblSDFirstVisit:text']"

            },

            {

                "source": "$['body']['senate'][i]['lastVisit']",
                "target": "$['gridSD']['lblSDLastVisit:text']"

            },

            {

                "source": "$['body']['senate'][i]['numVisits']",
                "target": "$['gridSD']['lblSDNumVisits:text']"

            },

            {

                "source": "$['body']['council'][i]",
                "target": "$['gridCC']"

            },

            {

                "source": "$['body']['council'][i]['CC']",
                "target": "$['gridCC']['lblCCDistrict:text']"

            },

            {

                "source": "$['body']['council'][i]['firstVisited']",
                "target": "$['gridCC']['lblCCfirstVisit:text']"

            },

            {

                "source": "$['body']['council'][i]['numVisits']",
                "target": "$['gridCC']['lblCCNumVisits:text']"

            },

            {

                "source": "$['body']['council'][i]['lastVisit']",
                "target": "$['gridCC']['lblCCLastVist:text']"

            },

            {

                "source": "$['body']['congress'][i]",
                "target": "$['gridCD']"

            },

            {

                "source": "$['body']['congress'][i]['CD']",
                "target": "$['gridCD']['lblCDDistrict:text']"

            },

            {

                "source": "$['body']['congress'][i]['firstVisited']",
                "target": "$['gridCD']['lblCDFirstVisit:text']"

            },

            {

                "source": "$['body']['congress'][i]['lastVisit']",
                "target": "$['gridCD']['lblCDLastVisit:text']"

            },

            {

                "source": "$['body']['congress'][i]['numVisits']",
                "target": "$['gridCD']['lblCDNumVisits:text']"

            }

            ]
        }

        ]
    };

    Apperyio.datasources = Apperyio.datasources || {};

    window.get_visits = Apperyio.datasources.get_visits = new Apperyio.DataSource(ReturnVisits, {
        "onBeforeSend": function(jqXHR) {},
        "onComplete": function(jqXHR, textStatus) {

        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["visitedScreen_get_visits_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    Apperyio.CurrentScreen = 'visitedScreen';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var visitedScreen_onLoad = function() {
            visitedScreen_elementsExtraJS();

            try {
                get_visits.execute({});
            } catch (e) {
                console.error(e);
                hideSpinner();
            };

            visitedScreen_deviceEvents();
            visitedScreen_windowEvents();
            visitedScreen_elementsEvents();
        };

    // screen window events


    function visitedScreen_windowEvents() {

        $('#visitedScreen').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function visitedScreen_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function visitedScreen_elementsExtraJS() {
        // screen (visitedScreen) extra code

    };

    // screen elements handler


    function visitedScreen_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

    };

    $(document).off("pagebeforeshow", "#visitedScreen").on("pagebeforeshow", "#visitedScreen", function(event, ui) {
        Apperyio.CurrentScreen = "visitedScreen";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    visitedScreen_onLoad();
};

$(document).off("pagecreate", "#visitedScreen").on("pagecreate", "#visitedScreen", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    visitedScreen_js();
});