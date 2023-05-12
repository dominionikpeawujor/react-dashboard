import "./featuredInfo.css";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$56,633</span>
                <span className="featuredMoneyRate"> -60% <ArrowDownward classname="featuredIcon negative" /> </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$16,633</span>
                <span className="featuredMoneyRate"> -40% <ArrowDownward classname="featuredIcon negative" /> </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$56,633</span>
                <span className="featuredMoneyRate"> +10% <ArrowUpward classname="featuredIcon" /> </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>

    </div>
  )
}
