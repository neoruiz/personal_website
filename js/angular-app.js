angular.module('neoruiz',[])
.service('portfolioService',function(){
    var projects = [
        {
            Name : 'Advertiser 3D',
            Category : 'Web App',
            Client : 'adMarketplace',
            URL : 'admarketplace.com',
            Date : '2016',
            PreviewImg : 'portfolio-advertiser-3d.jpg'
        },
        {
            Name : 'Publisher 3D',
            Category : 'Web App',
            Client : 'adMarketplace',
            URL : 'admarketplace.com',
            Date : '2016',
            PreviewImg : 'portfolio-amp-publisher-3d.jpg',
            Description : ''
        },
        {
            Name : 'AMP Manager',
            Category : 'Web App',
            Client : 'adMarketplace',
            URL : 'admarketplace.com',
            Date : '2016',
            PreviewImg : 'portfolio-amp-cockpit.jpg',
            Description : ''
        },
        {
            Name : 'AMP Mobile App',
            Category : 'Mobile App',
            Client : 'adMarketplace',
            URL : 'admarketplace.com',
            Date : '2016',
            Description : ''
        },
        {
            Name : 'Network Based Testmanship',
            Category : 'Desktop App',
            Client : 'AHRC',
            URL : 'http://amerihealthreview.com/',
            Date : '2016',
            Description : ''
        },
        {
            Name : 'Newsletter Subscription',
            Category : 'Mobile App',
            Client : 'Bodyworks Rehab',
            URL : 'http://amerihealthreview.com/',
            Date : '2016',
            Description : ''
        },
        {
            Name : 'Newsletter Signup',
            Category : 'Mobile App',
            Client : 'Bodyworks Rehab',
            URL : 'http://amerihealthreview.com/',
            Date : '2016',
            Description : ''
        }
    ];

    var getProjects = function( idx ){

        if ( typeof idx === 'number' ){
            return projects[ idx ];
        } else {
            return projects;
        }
        
    };

    return {
        getProjects : getProjects
    };
})
.controller('porfolioList', function($scope, portfolioService) {
    $scope.projectList = portfolioService.getProjects();
})
.controller('porfolioDetails', function($scope, portfolioService) {
    $scope.currentProject = portfolioService.getProjects(0);
});