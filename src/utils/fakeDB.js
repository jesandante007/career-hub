import { toast } from "react-hot-toast";

const addToDB = (job) => {
  let cart = [];
  const storedCard = getAppliedJob();

  if (storedCard.length > 0) {
    const exist = storedCard.find((jb) => jb.id == job.id);
    if (!exist) {
      cart = [...storedCard, job]
      localStorage.setItem("applied-job", JSON.stringify(cart));
    }else {
      toast.error('Already Applied')
    }
  }else {
    cart.push(job)
    localStorage.setItem("applied-job", JSON.stringify(cart));
  }
};

const getAppliedJob = () => {
  const storedCard = localStorage.getItem("applied-job");
  if (storedCard) {
    const cart = JSON.parse(storedCard);
    return cart;
  }else {
    return [];
  }
};

export { addToDB, getAppliedJob };
