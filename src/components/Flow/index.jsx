import { useState, useCallback } from "react"

import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  ConnectionLineType,
  MarkerType
} from "reactflow"
import CustomNode from "./CustomNode"
import styles from "./Flow.module.css"
const initialNodes = [
  {
    id: "10",

    sourcePosition: "right",
    targetPosition: "left",
    data: {
      label: "Fundamentals of Finance",
      content:
          "Understanding the fundamentals of finance is crucial for managing personal finances effectively. This subject covers basic financial concepts such as budgeting, investing, managing debt, understanding credit, and planning for the future. Learning about these principles can give you the confidence and knowledge to make informed decisions about your financial situation, help you plan your financial future and increase your financial literacy."
    },
    position: { x: -200, y: 25 },

    style: { fontSize: "7px", padding: "5px" }
  },

  {
    id: "20",

    sourcePosition: "right",
    targetPosition: "left",
    data: {
      label: "Understanding Savings and Checking Accounts",
      content:
          "Understanding Savings and Checking Accounts is crucial for managing personal finances. Savings accounts are used to accumulate funds over time, often featuring an interest on deposits. Conversely, checking account is designed for regular transactions, including deposits, withdrawals, and check writing. Different banks offer different types of these accounts with various features, interest rates, and fees. People need to understand how these accounts work, how to manage them effectively and how they can impact overall wealth or financial goals."
    },
    position: { x: -200, y: 50 },

    style: { fontSize: "7px", padding: "5px" }
  },
  {
    id: "30",

    sourcePosition: "right",
    targetPosition: "left",
    data: {
      label: "Basics of Loans and Debts",
      content:
          "In Personal Finances and Budgeting, understanding the basics of loans and debts is crucial. The topic encompasses the principles of borrowing money, types of loans, interest rates, and repayment plans, along with understanding debt management. Additionally, the process of acquiring a loan, the implications of debt, and strategies to repay debts are also covered. This base knowledge contributes significantly to efficient financial management."
    },

    position: { x: -200, y: 85 },
    style: { fontSize: "7px", padding: "5px" }
  },
  {
    id: "40",

    sourcePosition: "right",
    targetPosition: "left",
    data: {
      label: "Understanding Investments",
      content:
          "Understanding Investments is a crucial part of personal finances and budgeting. It involves deciding how much to invest, in what assets (like stocks, bonds, real estate), risk tolerance, and calculating returns. Knowing about investment helps individuals build wealth, secure future, and beat inflation. It's also imperative in retirement planning."
    },

    position: { x: -200, y: 110 },
    style: { fontSize: "7px", padding: "5px" }
  },
  {
    id: "1",
    sourcePosition: "right",
    targetPosition: "left",
    data: {
      label: "Understanding Personal Finances",
      content:
          "Personal finance involves understanding and managing your income, expenses, debts, and savings to achieve your financial goals. It encompasses budgeting, investing, tax planning, and preparing for retirement or unexpected events."
    },
    position: { x: 0, y: 60 },

    style: { fontSize: "7px", padding: "5px" }
  },
  {
    id: "2",
    sourcePosition: "right",
    targetPosition: "left",

    data: {
      label: "Overview of Taxation",
      content:
          "Taxation is a mandatory financial charge or levy imposed by a government on individuals or organizations to fund public expenditures. Understanding taxes, their types, and how they work is crucial in personal finance and budgeting as it informs decisions on income, savings, investments, and expenditures.\n" +
          "\n" +
          "Please note: For a more extensive understanding, it is recommended to look up resources on income tax, sales tax, property tax, tax planning, tax deductions and loopholes, and international taxation."
    },
    position: { x: 200, y: 25 },

    style: { fontSize: "7px", padding: "5px" }
  },
  {
    id: "3",
    sourcePosition: "right",
    targetPosition: "left",
    data: {
      label: "Fundamentals of Retirement Savings Plans",
      content:
          "Retirement savings plans are financial strategies designed to help individuals save and grow their wealth for their golden years. Broadly, these entail a variety of investment options such as 401(k), Individual Retirement Accounts (IRAs), Roth IRAs, and pensions. The choice of the plan is often based on the person's financial goals, tax situation, and risk tolerance."
    },
    position: { x: 200, y: 50 },

    style: { fontSize: "7px", padding: "5px" }
  },
  {
    id: "4",
    sourcePosition: "right",
    targetPosition: "left",
    data: {
      label: "Basics of Estate Planning",
      content:
          "Estate planning is the process of arranging for the distribution of an individual's assets upon their death. It also includes taking measures to reduce uncertainties and optimize the value of the estate by leveraging various financial tools and tax codes. Fundamentally, it serves to ensure financial security for one's loved ones and to achieve personal and family goals after death."
    },
    position: { x: 200, y: 75 },
    style: { fontSize: "7px", padding: "5px" }
  },

  {
    id: "11",

    sourcePosition: "right",
    targetPosition: "left",
    data: {
      label: "Understanding the Purpose of Budgeting",
      content:
          "Budgeting is a crucial aspect of personal finances. It helps you plan your finances, track your spending, and save for future expenses. Understanding the purpose of budgeting can help in managing your income in a way that matches your spending and saving goals. It is important to budget to avoid debts, save for emergencies and plan for future like retirement or children's education."
    },
    position: { x: -200, y: 150 },

    style: { fontSize: "7px", padding: "5px" }
  },

  {
    id: "12",

    sourcePosition: "right",
    targetPosition: "left",
    data: {
      label: "Different Types of Budgeting",
      content:
          "Different types of budgeting methods are available to help individuals organize their expenses and finances. Some common types include zero-based budgeting, envelope budgeting, and 50/30/20 budgeting. The choice of budgeting type depends upon personal financial goals and spending habits."
    },
    position: { x: -200, y: 175 },

    style: { fontSize: "7px", padding: "5px" }
  },
  {
    id: "13",

    sourcePosition: "right",
    targetPosition: "left",
    data: {
      label: "Setting Up a Basic Budget",
      content:
          "Setting up a basic budget is a fundamental aspect of personal finance. This process involves identifying your income, detailing your expenses, and planning for savings or debt reduction. The ideal budget should accurately reflect your financial reality and help you meet your monetary goals."
    },

    position: { x: -200, y: 200 },
    style: { fontSize: "7px", padding: "5px" }
  },
  {
    id: "15",
    sourcePosition: "right",
    targetPosition: "left",
    data: {
      label: "Basics of Budgeting",
      content:
          "Budgeting is the process of creating a plan to spend your money. This spending plan is called a budget. It is a detailed plan that shows an expected inflow and outflow of cash or resources during a particular period of time. Learning to budget is critical to managing personal finances and preventing debt."
    },
    position: { x: 0, y: 190 },

    style: { fontSize: "7px", padding: "5px" }
  },
  {
    id: "17",
    sourcePosition: "right",
    targetPosition: "left",

    data: {
      label: "Using Tools and Apps for Budgeting",
      content:
          "In the modern world of finance, tools and apps designed specifically for budgeting have become invaluable. They offer features like tracking your spending, planning for future expenses, and also setting and achieving financial goals. These budgeting tools and apps can simplify your financial management and help keep your personal finances on track. Using them effectively requires understanding their features and how they can be applied to your personal financial situation."
    },
    position: { x: 200, y: 150 },

    style: { fontSize: "7px", padding: "5px" }
  },
  {
    id: "18",
    sourcePosition: "right",
    targetPosition: "left",
    data: {
      label: "Strategies to Stick to Your Budget",
      content:
          "Expenses are the costs you incur for goods and services, including housing, transportation, food, utilities, insurance, and other living expenses."
    },
    position: { x: 200, y: 175 },

    style: { fontSize: "7px", padding: "5px" }
  },
  {
    id: "19",
    sourcePosition: "right",
    targetPosition: "left",
    data: {
      label: "Reviewing and Adjusting Your Budget",
      content:
          "Debts refer to the money you owe to lenders, such as credit card balances, student loans, mortgages, or other types of loans."
    },
    position: { x: 200, y: 200 },
    style: { fontSize: "7px", padding: "5px" }
  },

  {
    id: "21",

    sourcePosition: "right",
    targetPosition: "left",
    data: {
      label: "Long-term Financial Goal Setting",
      content:
          "In the modern world of finance, tools and apps designed specifically for budgeting have become invaluable. They offer features like tracking your spending, planning for future expenses, and also setting and achieving financial goals. These budgeting tools and apps can simplify your financial management and help keep your personal finances on track. Using them effectively requires understanding their features and how they can be applied to your personal financial situation."
    },
    position: { x: -200, y: 250 },

    style: { fontSize: "7px", padding: "5px" }
  },

  {
    id: "22",

    sourcePosition: "right",
    targetPosition: "left",
    data: {
      label: "Short-term Financial Goal Setting",
      content:
          "Personal finance involves understanding and managing your income, expenses, debts, and savings to achieve your financial goals. It encompasses budgeting, investing, tax planning, and preparing for retirement or unexpected events."
    },
    position: { x: -200, y: 275 },

    style: { fontSize: "7px", padding: "5px" }
  },
  {
    id: "23",

    sourcePosition: "right",
    targetPosition: "left",
    data: {
      label: "Retirement Planning",
      content:
          "Personal finance involves understanding and managing your income, expenses, debts, and savings to achieve your financial goals. It encompasses budgeting, investing, tax planning, and preparing for retirement or unexpected events."
    },

    position: { x: -200, y: 300 },
    style: { fontSize: "7px", padding: "5px" }
  },

  {
    id: "25",
    sourcePosition: "right",
    targetPosition: "left",
    data: {
      label: "Setting Financial Goals",
      content:
          "Personal finance involves understanding and managing your income, expenses, debts, and savings to achieve your financial goals. It encompasses budgeting, investing, tax planning, and preparing for retirement or unexpected events."
    },
    position: { x: 0, y: 275 },

    style: { fontSize: "7px", padding: "5px" }
  },
  {
    id: "27",
    sourcePosition: "right",
    targetPosition: "left",

    data: {
      label: "Saving for Education or Home Purchase",
      content:
          "Income sources refer to the various ways you earn money, such as employment, self-employment, investments, rental properties, or other sources of revenue."
    },
    position: { x: 200, y: 250 },

    style: { fontSize: "7px", padding: "5px" }
  },
  {
    id: "28",
    sourcePosition: "right",

    targetPosition: "left",
    data: {
      label: "Debt Repayment Goals",
      content:
          "Expenses are the costs you incur for goods and services, including housing, transportation, food, utilities, insurance, and other living expenses."
    },
    position: { x: 200, y: 275 },

    style: { fontSize: "7px", padding: "5px" }
  },
  {
    id: "29",
    sourcePosition: "right",
    targetPosition: "left",
    data: {
      label: "Planning for Emergencies",
      content:
          "Expenses are the costs you incur for goods and services, including housing, transportation, food, utilities, insurance, and other living expenses."
    },
    position: { x: 200, y: 300 },
    style: { fontSize: "7px", padding: "5px" }
  }
]

const initialEdges = [
  {
    id: "e10-1",
    source: "10",
    target: "1",
    type: "bezier",
    data: {
      label: "Analyze and manage",
      content:
          "Understand your income sources, track them, and explore ways to increase or diversify your income."
    },
    markerStart: {
      type: MarkerType.ArrowClosed
    }
  },
  {
    id: "e10-40",
    source: "40",
    target: "1",
    type: "bezier",
    data: {
      label: "Analyze and manage",
      content:
          "Understand your income sources, track them, and explore ways to increase or diversify your income."
    },
    markerStart: {
      type: MarkerType.ArrowClosed
    }
  },
  {
    id: "e20-1",
    source: "20",
    target: "1",
    type: "bezier",
    data: {
      label: "Analyze and manage",
      content:
          "Understand your income sources, track them, and explore ways to increase or diversify your income."
    },
    markerStart: {
      type: MarkerType.ArrowClosed
    }
  },
  {
    id: "e30-1",
    source: "30",
    target: "1",
    type: "bezier",
    data: {
      label: "Analyze and manage",
      content:
          "Understand your income sources, track them, and explore ways to increase or diversify your income."
    },
    markerStart: {
      type: MarkerType.ArrowClosed
    }
  },
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "bezier",
    data: {
      label: "Analyze and manage",
      content:
          "Understand your income sources, track them, and explore ways to increase or diversify your income."
    },
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
    type: "bezier",
    data: {
      label: "Track and control",
      content:
          "Identify and track your expenses, create a budget, and find ways to reduce unnecessary spending."
    },
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
  },
  {
    id: "e1-4",
    source: "1",
    target: "4",
    type: "bezier",
    data: {
      label: "Manage and pay off",
      content:
          "Understand your debts, prioritize repayment, and develop a plan to reduce or eliminate debt over time."
    },
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
  },

  {
    id: "e11-1",
    source: "11",
    target: "15",
    type: "bezier",
    data: {
      label: "Analyze and manage",
      content:
          "Understand your income sources, track them, and explore ways to increase or diversify your income."
    },
    markerStart: {
      type: MarkerType.ArrowClosed
    }
  },
  {
    id: "e12-1",
    source: "12",
    target: "15",
    type: "bezier",
    data: {
      label: "Analyze and manage",
      content:
          "Understand your income sources, track them, and explore ways to increase or diversify your income."
    },
    markerStart: {
      type: MarkerType.ArrowClosed
    }
  },
  {
    id: "e13-1",
    source: "13",
    target: "15",
    type: "bezier",
    data: {
      label: "Analyze and manage",
      content:
          "Understand your income sources, track them, and explore ways to increase or diversify your income."
    },
    markerStart: {
      type: MarkerType.ArrowClosed
    }
  },
  {
    id: "e14-1",
    source: "14",
    target: "15",
    type: "bezier",
    data: {
      label: "Analyze and manage",
      content:
          "Understand your income sources, track them, and explore ways to increase or diversify your income."
    },
    markerStart: {
      type: MarkerType.ArrowClosed
    }
  },
  {
    id: "e15-1",
    source: "15",
    target: "15",
    type: "bezier",
    data: {
      label: "Analyze and manage",
      content:
          "Understand your income sources, track them, and explore ways to increase or diversify your income."
    }
  },
  {
    id: "e17-1",
    source: "15",
    target: "17",
    type: "bezier",
    data: {
      label: "Analyze and manage",
      content:
          "Understand your income sources, track them, and explore ways to increase or diversify your income."
    },
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
  },
  {
    id: "e18-1",
    source: "15",
    target: "18",
    type: "bezier",
    data: {
      label: "Analyze and manage",
      content:
          "Understand your income sources, track them, and explore ways to increase or diversify your income."
    },
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
  },
  {
    id: "e19-1",
    source: "15",
    target: "19",
    type: "bezier",
    data: {
      label: "Analyze and manage",
      content:
          "Understand your income sources, track them, and explore ways to increase or diversify your income."
    },
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
  },

  {
    id: "e13-1",
    source: "25",
    target: "29",
    type: "bezier",
    data: {
      label: "Analyze and manage",
      content:
          "Understand your income sources, track them, and explore ways to increase or diversify your income."
    },
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
  },
  {
    id: "e14-1",
    source: "25",
    target: "28",
    type: "bezier",
    data: {
      label: "Analyze and manage",
      content:
          "Understand your income sources, track them, and explore ways to increase or diversify your income."
    },
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
  },
  {
    id: "e15-1",
    source: "25",
    target: "27",
    type: "bezier",
    data: {
      label: "Analyze and manage",
      content:
          "Understand your income sources, track them, and explore ways to increase or diversify your income."
    },
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
  },
  {
    id: "e17-1",
    source: "23",
    target: "25",
    type: "bezier",
    data: {
      label: "Analyze and manage",
      content:
          "Understand your income sources, track them, and explore ways to increase or diversify your income."
    }
  },
  {
    id: "e18-1",
    source: "22",
    target: "25",
    type: "bezier",
    data: {
      label: "Analyze and manage",
      content:
          "Understand your income sources, track them, and explore ways to increase or diversify your income."
    },
    markerStart: {
      type: MarkerType.ArrowClosed
    }
  },
  {
    id: "e21-1",
    source: "21",
    target: "25",
    type: "bezier",
    data: {
      label: "Analyze and manage",
      content:
          "Understand your income sources, track them, and explore ways to increase or diversify your income."
    },
    markerStart: {
      type: MarkerType.ArrowClosed
    }
  }
]

const nodeTypes = {
  custom: CustomNode
}

const defaultEdgeOptions = {
  animated: true,
  type: "bezier"
}

const RightModal = ({ isOpen, onClose, nodeData, edgeData }) => {
  if (!isOpen) return null

  return (
      <>
        <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "400px",
              backgroundColor: "white",
              padding: "20px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              zIndex: 1000
            }}
        >
          <div>
            <img
                src="/close.svg"
                onClick={onClose}
                style={{
                  marginLeft: "auto",
                  top: 0,
                  right: 0,
                  padding: "10px",
                  backgroundColor: "transparent",
                  border: "none",
                  color: "white"
                }}
            ></img>
          </div>
          {nodeData && (
              <h2 className="font-bold text-xl"> {nodeData.data.label}</h2>
          )}
          {nodeData && <p>{nodeData.data.content}</p>}
        </div>
      </>
  )
}

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const onConnect = useCallback(
      params => setEdges(eds => addEdge(params, eds)),
      [setEdges]
  )

  const [showRightModal, setShowRightModal] = useState(false)
  const [clickedNode, setClickedNode] = useState(null)
  const [clickedEdge, setClickedEdge] = useState(null)

  const onNodeClick = (event, node) => {
    setShowRightModal(true)
    setClickedNode(node)
    setClickedEdge(null)
  }

  const onEdgeClick = (event, edge) => {
    setShowRightModal(true)
    setClickedNode(null)
    setClickedEdge(edge)
  }

  const closeModal = () => {
    setShowRightModal(false)
    setClickedNode(null)
    setClickedEdge(null)
  }

  return (
      <div className={styles.node}>
        <ReactFlow
            nodes={nodes}
            onNodesChange={onNodesChange}
            edges={edges}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            defaultEdgeOptions={defaultEdgeOptions}
            connectionLineType={ConnectionLineType.Bezier}
            fitView
            panOnDrag={false}
            nodesDraggable={false}
            connectionLineStyle={{ stroke: "#ddd", strokeWidth: 2 }}
            panOnScroll={true}
            onNodeClick={onNodeClick}
            onEdgeClick={onEdgeClick}
        />

        <RightModal
            isOpen={showRightModal}
            onClose={closeModal}
            nodeData={clickedNode}
            edgeData={clickedEdge}
        />
      </div>
  )
}

export default Flow
