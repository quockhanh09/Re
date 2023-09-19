<template>
  <div class="main-job">
    <section class="searcher">
      <div class="container">
        <div class="row">
          <div class="input-group col-12 searcher-input">
            <input
              type="text"
              class="form-control"
              name="search"
              id="txtSearch"
              placeholder="Search job opportunities across Asia..."
              value=""
            />

            <div class="input-group-append searcher-input-btn">
              <a class="btn searcher-input-btn-lookup" href="" id="btnSearch">
                <span href="" class="searcher-input-btn-lookup__txt">
                  <i class="fa-solid fa-magnifying-glass"></i> Search</span
                >
              </a>
            </div>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 searcher-suggest">
            <span>Suggest:</span>&nbsp;&nbsp;
            <a
              href="javascript:void(0)"
              onclick="selectKeyword('Reactjs')"
              class="searcher-suggest-item"
              >Reactjs</a
            >
            <a
              href="javascript:void(0)"
              onclick="selectKeyword('Design')"
              class="searcher-suggest-item"
              >Design</a
            >
            <a
              href="javascript:void(0)"
              onclick="selectKeyword('.NET')"
              class="searcher-suggest-item"
              >.NET</a
            >
            <a href="javascript:void(0)" onclick="selectKeyword('PHP')" class="searcher-suggest-item">PHP</a>
            <a href="javascript:void(0)" onclick="selectKeyword('Marketing')" class="searcher-suggest-item" >Marketing</a>
            <a href="javascript:void(0)" onclick="selectKeyword('Sale')" class="searcher-suggest-item" >Sale</a>

            <a href="javascript:void(0)" onclick="selectKeyword('Mobile')" class="searcher-suggest-item">Mobile</a>
          </div>
        </div>

        <div class="row searcher-filter">
          <!-- Select City -->
          <div class="col-lg-3 col-md-3 col-sm-6 col-6 searcher-filter-item searcher-filter-select-multi">
            <select
              class="select2 searcher-filter-select select2-hidden-accessible "
              name="city"
              id="lbLocation"
              tabindex="-1"
              aria-hidden="true"
              v-model="selectedCity"
            >
              <option value="0" class=" select-filter1">All Location</option>
              <option
                v-for="location in locations"
                :key="location.value"
                :value="location.value"
                class=" select-filter1"
              >
                {{ location.label }}
              </option>
            </select>
          </div>

          <!-- Select Job Type -->
          <div class="searcher-filter-item">
            <select
              id="lbJobType"
              class="select2 searcher-filter-select"
              name="role"
              tabindex="-1"
              aria-hidden="true"
              v-model="selectedJobType"
            >
              <option value="0">All Jobs</option>
              <option
                v-for="jobType in jobTypes"
                :key="jobType.value"
                :value="jobType.value"
              >
                {{ jobType.label }}
              </option>
            </select>
          </div>

          <!-- Select Salary Range -->
          <div class="searcher-filter-item">
            <select
              id="lbSalaryRange"
              class="select2 searcher-filter-select select2-hidden-accessible"
              name="SalaryRange"
              tabindex="-1"
              aria-hidden="true"
              v-model="selectedSalaryRange"
            >
              <option value="">Salary</option>
              <option
                v-for="salaryRange in salaryRanges"
                :key="salaryRange.value"
                :value="salaryRange.value"
              >
                {{ salaryRange.label }}
              </option>
            </select>
          </div>

          <!-- Select Sort By -->
          <div class="searcher-filter-item">
            <select
              id="sortBy"
              class="select2 searcher-filter-select select2-hidden-accessible"
              name="sortBy"
              tabindex="-1"
              aria-hidden="true"
              v-model="selectedSortBy"
            >
              <option value="" disabled>Sorted by:</option>
              <option
                v-for="sortByOption in sortByOptions"
                :key="sortByOption.value"
                :value="sortByOption.value"
              >
                {{ sortByOption.label }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </section>
    <!--  -->

    <div class="container2">
    <div class="ss-header">
      <h1 class="ss-title">Referral chances</h1>
    </div>

    <!-- Danh sách công việc -->
    <div class="job-list-wrapper">
      <div class="row">
        <div class="job-list-item col-md-6" v-for="job in jobsOnCurrentPage" :key="job.id">
       
          <div :class="['job-list-item-card', {'job-list-item-card--premium': job.isPremium}]">
         
            <div class="job-list-item-locker">
              <span>This is a Premium Job that is only visible to ones that reach 15 referrals per month</span>
            </div>
            <img :src="job.logo" class="job-list-item-logo" :alt="job.title" width="64" loading="lazy" />
            <div class="job-list-item-detail">
              <h2 class="job-list-item-detail-title">
                <a :href="job.link">{{ job.title }}</a>
              </h2>
              <div class="job-list-item-detail-tags">
                <span class="tag" v-for="tag in job.tags" :key="tag">{{ tag }}</span>
              </div>
              <p class="job-list-item-detail-salary">
                <span>{{ job.salary }}</span>
              </p>
              <h3 class="job-list-item-detail-reward">
                Reward {{ job.reward }}/Candidate
              </h3>
            </div>
            <span class="tag-urgent">Urgent</span>
            <div class="job-list-item-action">
              <a class="job-list-item-viewmore" :href="job.link" rel="nofollow" target="_blank">Refer now</a>
            </div>
          </div>
        </div>
      </div>

    <nav class="w-full text-center">
      <ul class="pagination job-list-pagination">
        <li v-if="currentPage !== 1" :class="{ 'page-item': true, 'active': currentPage === 1 }">
           <a class="page-link" @click="changePage(1)" href="#">1</a>
        </li>

        <li v-for="pageNumber in totalPages" :key="pageNumber" :class="{ 'page-item': true, 'active': currentPage === pageNumber }">
          <a class="page-link" @click="changePage(pageNumber)" href="#">{{ pageNumber }}</a>
        </li>
     </ul>
</nav>

  </div>
</div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      selectedCity: 0,
      selectedJobType: 0,
      selectedSalaryRange: "",
      selectedSortBy: "",
      locations: [
        { value: 1, label: "Ho Chi Minh" },
        { value: 2, label: "Hanoi" },
        
      ],
      jobTypes: [
        { value: 1, label: "IT/Technology" },
        { value: 2, label: "Non-IT" },
       
      ],
      salaryRanges: [
        { value: "&salaryfrom=0&salaryto=500", label: "≤ $500" },
        { value: "&salaryfrom=500&salaryto=1000", label: "$500 - $1000" },
        
      ],
      sortByOptions: [
        { value: "&sort=index&order=desc", label: "Default" },
        {
          value: "&sort=bonusAmount&order=desc",
          label: "Reward from high to low",
        },
      
      ],

      jobs: [
        {
          title: "Outsystem Mobile",
          tags: ["OutSystems", "React Native", "Flutter", "Software Development"],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true, 
        },
        {
        
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false, 
        },
        {
       
          title: "Outsystem Mobile",
          tags: ["OutSystems", "React Native", "Flutter", "Software Development"],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true, 
        },
        {
        
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false, 
        },
        {
        
          title: "Outsystem Mobile",
          tags: ["OutSystems", "React Native", "Flutter", "Software Development"],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true, 
        },
        {
        
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false, 
        },
        {
        
          title: "Outsystem Mobile",
          tags: ["OutSystems", "React Native", "Flutter", "Software Development"],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true, 
        },
        {
          
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false, 
        },
        {
        
          title: "Outsystem Mobile",
          tags: ["OutSystems", "React Native", "Flutter", "Software Development"],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true, 
        },
        {
          
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false, 
        },
        {
          
          title: "Outsystem Mobile",
          tags: ["OutSystems", "React Native", "Flutter", "Software Development"],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true, 
        },
        {
         
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false, 
        },
        {
          
          title: "Outsystem Mobile",
          tags: ["OutSystems", "React Native", "Flutter", "Software Development"],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true, 
        },
        {
          
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false, 
        },
        {
          
          title: "Outsystem Mobile",
          tags: ["OutSystems", "React Native", "Flutter", "Software Development"],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true, 
        },
        {
         
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false, 
        },
        {
          
          title: "Outsystem Mobile",
          tags: ["OutSystems", "React Native", "Flutter", "Software Development"],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true, 
        },
        {
         
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false, 
        },
        {
         
          title: "Outsystem Mobile",
          tags: ["OutSystems", "React Native", "Flutter", "Software Development"],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true, 
        },
        {
         
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false, 
        },
        {
         
          title: "Outsystem Mobile",
          tags: ["OutSystems", "React Native", "Flutter", "Software Development"],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true, 
        },
        {
          
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false, 
        },
        {
         
          title: "Outsystem Mobile",
          tags: ["OutSystems", "React Native", "Flutter", "Software Development"],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true, 
        },
        {
        
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false, 
        },
        {
       
          title: "Outsystem Mobile",
          tags: ["OutSystems", "React Native", "Flutter", "Software Development"],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true, 
        },
        {
         
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false, 
        },
        {
    
          title: "Outsystem Mobile",
          tags: ["OutSystems", "React Native", "Flutter", "Software Development"],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true, 
        },
        {
      
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false, 
        },
        {
        
          title: "Outsystem Mobile",
          tags: ["OutSystems", "React Native", "Flutter", "Software Development"],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true, 
        },
        {
         
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false, 
        },

        {
          
          title: "Outsystem Mobile",
          tags: ["OutSystems", "React Native", "Flutter", "Software Development"],
          salary: "Negotiable",
          reward: "$1,304",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9446",
          isPremium: true, 
        },
        {
        
          title: "Head of Finance",
          tags: ["SLAs", "SAP", "Coaching", "Management", "Administration"],
          salary: "2,000 - $4,000",
          reward: "$2,261",
          logo: "https://recruitery.co/assets/img/enterprise.jpg",
          link: "https://app.recruitery.co/en/jobs/9500",
          isPremium: false, 
        },

      ],
      currentPage: 1, 
      jobsPerPage: 10, 
    };
  },

  computed: {
    totalPages() {
      return Math.ceil(this.jobs.length / this.jobsPerPage);
    },
    jobsOnCurrentPage() {
      const startIndex = (this.currentPage - 1) * this.jobsPerPage;
      const endIndex = startIndex + this.jobsPerPage;
      return this.jobs.slice(startIndex, endIndex);
    },
  },
  methods: {
    changePage(pageNumber) {
      this.currentPage = pageNumber;
    },
  },
};
</script>

<style scoped>
.main-job {
  width: 100%;
  height: 1500px;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 200px;
  margin-right: auto;
  margin-left: auto;
}

a {
    text-decoration: none;  
}
.searcher {
  background: #e7eeef;
  width: 100%;
  height: 300px;
  padding: 50px 0px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}

.searcher-input {
  height: 65px;
}

.searcher-input .form-control {
  border: none;
  height: 100%;
  font-weight: 300;
}

.form-control {
  width: 75%;
  height: 60px;
  display: block;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.searcher-input:click {
  border-color: rgb(34, 230, 0);
}
/*  */

.searcher-input-btn {
  margin-left: 1px;
  height: 100%;
}

.input-group-append {
  display: flex;
}
.input-group-append .btn {
  position: relative;
  z-index: 2;
}
.searcher-input-btn-lookup {
  color: #fff;
  background-color: #1aa94c;
  border-radius: 4px;
  display: inline-block;
  font-weight: 700;
  border-radius: 0 4px 4px 0;
  padding-right: 1.4em;
  padding-left: 1.4em;
  height: 100%;
}
.fa-solid {
  padding: 5px;
}
.btn {
  width: 150px;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  padding: 20px 20px;
  font-size: 1rem;
  line-height: 1.5;
  text-decoration: none;
}

/*  */
.searcher-suggest {
  margin-top: 7px;
  max-height: 22px;
  font-weight: 500;
  font-size: 0.85em;
  color: gray;
}

.searcher-suggest-item {
  text-decoration: underline;
  color: #1aa94c;
  margin-right: 10px;
  line-height: 1.8em;
}
/*  seach-option  */

.select2 {
  display: inline-block;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: white;
  margin-bottom: 10px;
 
}

.select2 option {
  text-align: center;

}
.searcher-filter-select{
  display: block;
  transition: all .15s ease-in-out;
padding: 8px 10px;
    
}
.select2-hidden-accessible select{
  margin-left: 20px;
}

/*  */

.container2 {
    width: 100%;
   
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.job-list-wrapper{
  width:82% ;
  
  padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.ss-header {
    color: #525050;
    margin-bottom: 30px;
    font-size: 10px;   
}

.ss-title{
 margin-top: 30px;
 margin-left: 160px;
}

.job-list-item {
    margin-bottom: 20px;
}

.col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
}

.job-list-item-card--premium {
    background: linear-gradient(135deg,#faebad,#b9a15d);
}

.job-list-item-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    border-radius: 4px;
    padding: 20px 16px;
    position: relative;
    border: 1px solid #e3e3e3;
}

.job-list-item-locker{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    background-color: rgba(34,34,34,.6);
    z-index: 100;
    display: none;
    justify-content: center;
    align-items: center;
    padding: 0 25px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    font-weight: 700;;
    transition: all .3s;
}

.job-list-item-locker{
  text-align: center;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
}

.job-list-item-logo {
    width: 64px;
    position: absolute;
}

.job-list-item-detail {
    padding-left: 76px;
    margin-bottom: auto;
}
.job-list-item-detail-title {
   
    font-size: 1.125em;
    line-height: 1.43;
  }

.job-list-item-detail-title a {
    color: #333;
}

.job-list-item-detail-tags .tag {
    display: inline-block;
    margin-bottom:3px;
   
}

.tag {
    background: #f5f6f7;
    border: 1px solid #e3e3e3;
    font-size: 11px;
    font-weight: 500;
    border-radius: 0.9em;
    padding: 2px 12px;    
    margin: 2px;
    
}

.job-list-item-detail-salary {
    font-size:12px;
    color: #333;
    margin-bottom: 12px;
}

.job-list-item-detail-reward {
    font-size: 1.25em;
    color: #333;
    font-weight: 600;    
    margin-bottom: 0;
    
}
.small{
  font-weight: 400;
}

.job-list-item .tag-urgent {
    position: absolute;
    right: 16px;
    top: 20px;
}

.tag-urgent {
    text-transform: uppercase;
    color: #f5f2f2;
    font-size: 9px;
    padding: 4px 14.4px;
    background: #ff5a5f;
    text-shadow: 1px 1px #f30007;
    border-radius: 14px;
}

.job-list-item-action {  
   display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 76px;
    margin-top: 18px;
}

.tag-premium {
    text-transform: uppercase;
    color: #f5f2f2;
    white-space: nowrap;
    font-size: 10px;
    padding: 5px 14.4px;
    color: #998a50;
    background: #f6ffed;
    border-color: #998a50;
    border-radius: 14px;
}

.job-list-item-card--premium .job-list-item-viewmore {
    color: #282828;
}

.job-list-item-card--premium .job-list-item-viewmore {
    color: #282828;
}
.job-list-item-viewmore {
    display: inline-block;
    width: 100%;
    text-align: right;
    color: #1aa94c;
    white-space: nowrap;
    font-size: 14px;
    font-weight: 700;
    text-decoration: underline;
}
/*  */

.text-center {
    text-align: center;
}

.job-list-pagination {
    margin: 0 auto;
    width: fit-content;
    margin-top: 15px;
}

.pagination {
  
    display: flex;
    padding-left: 0;
    list-style: none;
    border-radius: 0.25rem;
    
}

.pagination.job-list-pagination li.page-item {
  flex: 1; 
  text-align: center; 
}


.pagination.job-list-pagination li.page-item a.page-link {
  text-decoration: none; 
  color: #333; 
  background-color: #fff; 
  border: 1px solid #ccc; 
  display: block; 
  padding: 9px 14px; 
}

.pagination.job-list-pagination li.page-item a.page-link:hover {
  background-color: #f0f0f0;
  color: #1aa94c;
  
}


.pagination.job-list-pagination li.page-item.active a.page-link {
  color: #fff; 
  background-color: #1aa94c; 
}

</style>
