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
            Description : 'Internal Mobile Application used for tracking nearly realtime performance'
        },
        {
            Name : 'Network Based Testmanship',
            Category : 'Desktop App',
            FilterCategory : 'others',
            Client : 'AHRC',
            URL : 'http://amerihealthreview.com/',
            Date : '2016',
            Description : ''
        },
        {
            Name : 'Newsletter Subscription',
            Category : 'Mobile App',
            FilterCategory : 'mobileapp',
            Client : 'Bodyworks Rehab',
            URL : 'http://amerihealthreview.com/',
            Date : '2016',
            Description : ''
        },
        {
            Name : 'Newsletter Signup',
            Category : 'Mobile App',
            FilterCategory : 'mobileapp',
            Client : 'Bodyworks Rehab',
            URL : 'http://amerihealthreview.com/',
            Date : '2016',
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