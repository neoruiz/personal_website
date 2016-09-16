angular.module('neoruiz',[])
.directive( 'bindPortfolioModal', function() {
    return function( scope, element, atts ){
         $(element).find('.my-modal').animatedModal({
            modalTarget: 'portfolio-modal',
            animatedIn: 'lightSpeedIn',
            animatedOut: 'bounceOutDown',
            color: '#fff'

        });
    };
})
.controller( 'websiteBody', function( $scope ) {
    var projects = [
        {
            Name : 'Advertiser 3D',
            Category : 'Web App',
            FilterCategory : 'webapp',
            Client : 'adMarketplace',
            URL : 'admarketplace.com',
            Date : '2016',
            PreviewImg : 'portfolio-advertiser-3d.jpg',
            Description : 'Advertiser facing UI tool used for campaign management and reporting.'
        },
        {
            Name : 'Publisher 3D',
            Category : 'Web App',
            FilterCategory : 'webapp',
            Client : 'adMarketplace',
            URL : 'admarketplace.com',
            Date : '2016',
            PreviewImg : 'portfolio-amp-publisher-3d.jpg',
            Description : 'Publisher facing UI tool used for reporting.'
        },
        {
            Name : 'AMP Manager',
            Category : 'Web App',
            FilterCategory : 'webapp',
            Client : 'adMarketplace',
            URL : 'admarketplace.com',
            Date : '2016',
            PreviewImg : 'portfolio-amp-cockpit.jpg',
            Description : 'adMarketplace internal UI tool.'
        },
        {
            Name : 'AMP Mobile App',
            Category : 'Mobile App',
            FilterCategory : 'mobileapp',
            Client : 'adMarketplace',
            URL : 'admarketplace.com',
            Date : '2016',
            PreviewImg : 'portfolio-amp-mobile-app.jpg',
            Description : 'Internal Mobile Application used for tracking nearly realtime performance'
        },
        {
            Name : 'PT Job Alert',
            Category : 'Desktop App',
            FilterCategory : 'mobileapp',
            Client : "St. Mark's World",
            URL : 'http://axpoas.com/',
            Date : '2016',
            PreviewImg : 'portfolio-stmarks-app.jpg',
            Description : ''
        },
        {
            Name : 'Contact Acquisition App',
            Category : 'Mobile App',
            FilterCategory : 'mobileapp',
            Client : "Hudson Rehab Spa",
            URL : 'http://hudsonrehabspa.com/',
            Date : '2016',
            PreviewImg : 'architech-hrb-contact-aquisition.jpg'
        },
        {
            Name : 'Impresto - Advertiser Performance Prediction',
            Category : 'Web App',
            FilterCategory : 'webapp',
            Client : 'App Nexus',
            PreviewImg : 'portfolio-appnexus-performance-forecast.jpg',
            URL : 'http://appnexus.com/',
            Date : '2016',
            Description : ''
        },
        {
            Name : 'RKPMS - Property Management',
            Category : 'Web App',
            FilterCategory : 'webapp',
            Client : 'RibKov Associates',
            PreviewImg : 'portfolio-rkpms-property-management.jpg',
            URL : '#',
            Date : '2016',
            Description : ''
        },
        {
            Name : 'Network Based Testmanship',
            Category : 'Desktop App',
            FilterCategory : 'others',
            Client : 'AHRC',
            URL : 'http://amerihealthreview.com/',
            PreviewImg : 'portfolio-testmanship.jpg',
            Date : '2016',
            Description : ''
        },
        {
            Name : 'Speaking - Listening - Reading - Writing Test Taking',
            Category : 'Desktop App',
            FilterCategory : 'others',
            Client : 'Adriland Institute',
            URL : 'http://amerihealthreview.com/',
            Date : '2016',
            PreviewImg : 'portfolio-adriland-toefl-test.jpg',
            Description : ''
        },
        {
            Name : 'Patient Checkin',
            Category : 'Mobile App',
            FilterCategory : 'mobileapp',
            Client : 'Bodyworks Rehab',
            URL : 'http://bodyworksrehab.com/',
            PreviewImg : 'portfolio-patient-checkin.jpg',
            Date : '2016',
            Description : ''
        },
        {
            Name : 'Newsletter Signup',
            Category : 'Mobile App',
            FilterCategory : 'mobileapp',
            Client : 'Bodyworks Rehab',
            URL : 'http://amerihealthreview.com/',
            PreviewImg : 'portfolio-newsletter-signup.jpg',
            Date : '2016',
            Description : ''
        },
        {
            Name : 'Staffing Registry',
            Category : 'Desktop App',
            FilterCategory : 'others',
            Client : 'Axis Point Alternative Solutions',
            URL : 'http://axpoas.com/',
            Date : '2016',
            PreviewImg : 'portfolio-axpoas-staffing-registry.jpg',
            Description : ''
        }
    ];

    function getProjects( idx ){

        if ( typeof idx === 'number' ){
            return projects[ idx ];
        } else {
            return projects;
        }
        
    };

    $scope.changeCurrentProject = function( index ){
        $scope.currentProject = getProjects( index );
    };
    
    $scope.projectList = getProjects();
    $scope.currentProject = getProjects(0);
});