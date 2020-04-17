import axios from "axios";

const URL_API = "https://kuclap-api.herokuapp.com";
const api = axios.create({
  baseURL: URL_API,
});

const apis = {
  // GET tail reviews when user load page.
  getLastReviews: async (offset, next) => {
    try {
      const res = await api.get(`/reviews/last?offset=${offset}`);
      next(res);
    } catch (err) {
      console.log(err);
    }
  },
  // GET data classes when componentwillmount (on hook).
  getAllClasses: async (next) => {
    try {
      const res = await api.get(`/classes`);
      next(res);
    } catch (err) {
      console.log(err);
    }
  },
  // GET stats when class selected.
  getClassDetailByClassId: async (classid, next) => {
    try {
      const res = await api.get(`/classes/${classid}`);
      next(res);
    } catch (err) {
      console.log(err);
    }
  },
  // POST & PUT create review then update stats class
  createReview: async (payloadReview, payloadVote) => {
    try {
      const resR = await api.post(`/review`, payloadReview);
      const resV = await api.put(`/class/${payloadReview}/stats`, payloadVote);
      console.log(resR, resV);
    } catch (err) {
      console.log(err);
    }
  },
  // GET reviews by classid when class selected
  getReviewsByClassId: async (classid, next) => {
    try {
      const res = await api.get(`/reviews/${classid}`);
      next(res);
    } catch (err) {
      console.log(err);
    }
  },
  // PUT report review by reviewid
  putReportReviewByReviewId: async (reviewid) => {
    try {
      const res = await api.put(`/review/report/${reviewid}`);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  },
  // PUT clap review by reviewid
  putClapReviewByReviewId: async (reviewid, clap) => {
    try {
      const res = await api.put(`/review/clap/${reviewid}/${clap}`);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  },
  // PUT boo review by reviewid
  putBooReviewByReviewId: async (reviewid, boo) => {
    try {
      const res = await api.put(`/review/boo/${reviewid}/${boo}`);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  },
};
export default apis;
